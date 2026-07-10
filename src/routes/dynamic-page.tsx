import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageShell } from "../components/page-shell";
import { PageBuilderRenderer } from "../components/blocks/page-builder-renderer";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;

export default function DynamicPage() {
  const { slug } = useParams();
  const [blocks, setBlocks] = useState<any[] | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    async function fetchPage() {
      try {
        // ✅ Use standard Strapi v5 filter query — /api/pages/by-slug/ does NOT exist
        const query =
          `filters[slug][$eq]=${encodeURIComponent(slug!)}` +
          `&populate[pageBuilder][populate]=*`;

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
