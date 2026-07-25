import { useEffect, useState } from "react";
import qs from "qs";
import { HomePanelHero } from "./home/panel-1-hero";
import { ServicesPanels } from "../components/services-panel";
import PromoBar from "../components/promo-bar";
import { HomePanelPartners } from "./home/panel-5-partners";
import { HomePanelAwards } from "./home/panel-6-awards";
import { HomePanelCta } from "./home/panel-9-cta";
import { PageShell } from "../components/page-shell";

const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

type PageBuilderBlock = { __component: string; [key: string]: any };

export default function Home() {
  const [blocks, setBlocks] = useState<PageBuilderBlock[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const query = qs.stringify(
          {
            filters: { slug: { $eq: "home" } },
            populate: {
              pageBuilder: {
                on: {
                  "acf-sections.home-partner": {
                    populate: {
                      image: true,
                      workflow_list: { populate: "*" },
                      button: true,
                    },
                  },
                  "acf-sections.home-key-highlights": {
                    populate: { highlights_list: { populate: "*" } },
                  },
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
              },
            },
          },
          { encodeValuesOnly: true }
        );

        const res = await fetch(`${STRAPI_BASE_URL}/api/pages?${query}`, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Failed to load home page");
        const json = await res.json();
        const page = json?.data?.[0];
        setBlocks(page?.pageBuilder ?? []);
      } catch {
        setBlocks([]);
      }
    })();
    return () => controller.abort();
  }, []);

  // Returns the block only if it exists AND is not explicitly unpublished.
  const getBlock = (componentName: string) => {
    const found = blocks.find((b) => b.__component === componentName);
    if (found && found.publish === false) return undefined;
    return found;
  };

  const heroBlock = getBlock("acf-sections.home-partner");
  const gridLayoutBlock = getBlock("acf-sections.grid-layout");

  return (
    <PageShell>
      <HomePanelHero data={heroBlock} />
      <ServicesPanels data={gridLayoutBlock} />
      <PromoBar data={gridLayoutBlock} />
      <HomePanelPartners data={getBlock("acf-sections.home-client-logo")} />
      <HomePanelAwards
        awardsData={getBlock("acf-sections.home-awards-and-certificates")}
        artistsData={getBlock("acf-sections.home-award-winner")}
      />
      <HomePanelCta data={getBlock("acf-sections.content-image-split-block")} />
    </PageShell>
  );
}