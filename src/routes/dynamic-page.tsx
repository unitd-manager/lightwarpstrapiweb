import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import qs from "qs";
import { PageShell } from "../components/page-shell";
import { PageBuilderRenderer } from "../components/blocks/page-builder-renderer";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;

// Deep-populate map for every pageBuilder component this renderer knows about.
// A flat `populate[pageBuilder][populate]=*` only goes ONE level deep in
// Strapi v5, so nested repeaters (e.g. grid_items -> icon_and_text_boxes ->
// list) come back empty. This mirrors the explicit "on"-based populate that
// the hardcoded Home route (routes/index.tsx) already uses, so any page
// created dynamically in Strapi resolves the same nested data.
const PAGE_BUILDER_POPULATE = {
  on: {
    "acf-sections.banner-layout": {
      populate: { image: true, background_image: true, banner_image: true, button: true, secondary_button: true },
    },
    "acf-sections.about-team-section": { populate: "*" },
    "acf-sections.footer-common-cta": {
      populate: { image: true, image1: true, cta_button: true },
    },
    "acf-sections.use-case-single": {
      populate: { use_case_items: { populate: "*" } },
    },
    "acf-sections.contact-location-section": { populate: "*" },
    "acf-sections.home-partner": { populate: "*" },
    "acf-sections.grid-layout": {
      populate: {
        cta_button: true,
        image: true,
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
  },
  "acf-sections.common-heading-section": { populate: "*" },
    "acf-sections.content-highlight-block": {
      populate: { logos: { populate: "*" } },
    },
    "acf-sections.general-cta-section": {
      populate: { cta_button: true, secondary_cta_button: true },
    },
};

export default function DynamicPage() {
  const { slug } = useParams();
  const [blocks, setBlocks] = useState<any[] | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

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
        if (!res.ok) {
          setNotFound(true);
          return;
        }
        const json = await res.json();

        // Strapi v5: data is an array, grab first match
        const page = json.data?.[0];
        if (!page) {
          setNotFound(true);
          return;
        }

        setBlocks(page.pageBuilder ?? []);
      } catch {
        setNotFound(true);
      }
    }

    fetchPage();
  }, [slug]);

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