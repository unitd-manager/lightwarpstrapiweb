import { useEffect, useState } from "react";
import qs from "qs";
import { PageShell } from "../components/page-shell";
import { ServicesPanelHero } from "./services/panel-1-hero";
import { ServicesPanelServices } from "./services/panel-2-services";
import { ServicesPanelProcess } from "./services/panel-3-process";
import { ServicesPanelCta } from "./services/panel-4-cta";
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

const PAGE_BUILDER_POPULATE = {
  on: {
    "acf-sections.common-heading-section": { populate: "*" },
    "acf-sections.grid-layout": {
      populate: {
        grid_items: {
          populate: {
            icon_and_text_boxes: { populate: { list: { populate: "*" } } },
          },
        },
      },
    },
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

export default function Services() {
  const [blocks, setBlocks] = useState<any[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchServicePage() {
      try {
        const query = qs.stringify(
          {
            filters: { slug: { $eq: "services" } },
            populate: { pageBuilder: PAGE_BUILDER_POPULATE },
          },
          { encodeValuesOnly: true }
        );

        const res = await fetch(`${STRAPI_URL}/api/pages?${query}`);
        if (!res.ok) return;
        const json = await res.json();
        const page = json.data?.[0];
        if (!cancelled) {
          setBlocks(page?.pageBuilder ?? null);
        }
      } catch (err) {
        console.warn("Failed to load Service page from Strapi:", err);
      }
    }

    fetchServicePage();
    return () => {
      cancelled = true;
    };
  }, []);

  // Returns the block only if it exists AND is not explicitly unpublished.
  const getBlock = (componentName: string) => {
    const found = blocks?.find((b) => b.__component === componentName);
    if (found && found.publish === false) return undefined;
    return found;
  };

  const bannerData = getBlock("acf-sections.common-heading-section");
  const gridData = getBlock("acf-sections.grid-layout");
  const highlightData = getBlock("acf-sections.content-highlight-block");
  const ctaData = getBlock("acf-sections.general-cta-section");

  return (
    <PageShell>
      <ServicesPanelHero data={bannerData} />
      <ServicesPanelServices data={gridData} />
      <ServicesPanelProcess data={highlightData} />
      <ServicesPanelCta data={ctaData} />
    </PageShell>
  );
}