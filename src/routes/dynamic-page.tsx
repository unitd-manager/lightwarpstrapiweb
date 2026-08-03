import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import qs from "qs";
import { PageShell } from "../components/page-shell";
import { PageBuilderRenderer } from "../components/blocks/page-builder-renderer";
import { logNotFound } from "../lib/logNotFound";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;

// Deep-populate map for every pageBuilder component this renderer knows about.
// A flat `populate[pageBuilder][populate]=*` only goes ONE level deep in
// Strapi v5, so nested repeaters (e.g. grid_items -> icon_and_text_boxes ->
// list) come back empty. This mirrors the explicit "on"-based populate that
// the hardcoded Home route (routes/index.tsx) already uses, so any page
// created dynamically in Strapi resolves the same nested data.
const PAGE_BUILDER_POPULATE = {
  on: {
    "acf-sections.banner-layout": { populate: "*" },
   "acf-sections.about-team-section": {
  populate: {
    TeamMembers: {
      populate: {
        Member: { populate: "*" },
      },
    },
  },
},
    "acf-sections.footer-common-cta": {
      populate: { Image: true, Image1: true, CTAButton: true },
    },
    "acf-sections.use-case-single": {
      populate: { use_case_items: { populate: "*" } },
    },
    "acf-sections.contact-location-section": { populate: "*" },
    "acf-sections.home-partner": { populate: "*" },
    "acf-sections.grid-layout": {
      populate: {
        cta_button: true,
        grid_items: {
          populate: {
            icon_and_text_boxes: { populate: { list: { populate: "*" } } },
          },
        },
      },
    },
    "acf-sections.home-client-logo": {
      populate: { logo_list: { populate: "*" } },
    },
    "acf-sections.home-awards-and-certificates": {
      populate: { award_and_certificate_list: { populate: "*" } },
    },
    "acf-sections.home-award-winner": {
      populate: { award_winner_list: { populate: "*" } },
    },
    "acf-sections.content-image-split-block": { populate: "*" },
    "acf-sections.common-heading-section": { populate: "*" },
    "acf-sections.content-highlight-block": {
      populate: { logos: { populate: "*" } },
    },
   "acf-sections.general-cta-section": {
  populate: {
    cta_button: true,
    decorative_image_left: true,
    decorative_image_right: true,
  },
},
  },
};

// Pulls just the path out of a value that may be a full URL
// (https://example.com/about1) or already a relative path (/about1),
// then strips any trailing slash so comparisons are consistent.
function toPath(value: string): string {
  let path: string;
  try {
    // Works for both absolute URLs (base is ignored) and relative paths
    // (resolved against the dummy base to recover just the pathname).
    path = new URL(value, "http://placeholder.local").pathname;
  } catch {
    path = value;
  }
  if (!path.startsWith("/")) path = "/" + path;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path.toLowerCase();
}

// Checks Strapi's redirect list for a match on the current path. Only reached
// when a page lookup 404s, so this stays off the hot path for normal pages.
async function findRedirect(pathname: string): Promise<{ destination: string; statusCode: number } | null> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/redirects/active`);
    if (!res.ok) return null;
    const json = await res.json();
    const rows: any[] = Array.isArray(json?.data) ? json.data : [];

    const normalized = toPath(pathname);
    const match = rows.find((r) => r?.source && toPath(r.source) === normalized);
    if (!match?.destination) return null;

    return {
      destination: match.destination,
      statusCode: match.statusCode === "302" ? 302 : 301,
    };
  } catch {
    return null;
  }
}

export default function DynamicPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blocks, setBlocks] = useState<any[] | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    async function fetchPage() {
      try {
        // ✅ Use standard Strapi v5 filter query — /api/pages/by-slug/ does NOT exist
        const query = qs.stringify(
          {
            filters: { slug: { $eq: slug } },
            populate: { pageBuilder: PAGE_BUILDER_POPULATE },
          },
          { encodeValuesOnly: true }
        );

        const res = await fetch(`${STRAPI_URL}/api/pages?${query}`);
        const page = res.ok ? (await res.json()).data?.[0] : null;

        if (cancelled) return;

        if (page) {
          setBlocks(page.pageBuilder ?? []);
          return;
        }

        // No page at this slug — check whether it's a known redirect
        // (e.g. an old bookmarked/internal link) before showing 404.
        const redirect = await findRedirect(`/${slug}`);
        if (cancelled) return;

        if (redirect) {
          setRedirecting(true);
          if (/^https?:\/\//i.test(redirect.destination)) {
            window.location.href = redirect.destination;
          } else {
            navigate(redirect.destination, { replace: true });
          }
          return;
        }

        setNotFound(true);
        logNotFound(`/${slug}`);
      } catch {
        if (!cancelled) setNotFound(true);
      }
    }

    fetchPage();
    return () => {
      cancelled = true;
    };
  }, [slug, navigate]);

  if (redirecting) {
    return null;
  }

  if (notFound) {
    return (
      <PageShell>
        <p className="text-white text-center py-20">Page not found.</p>
      </PageShell>
    );
  }

  return (
    <PageShell>
      {blocks && <PageBuilderRenderer blocks={blocks} />}
    </PageShell>
  );
}