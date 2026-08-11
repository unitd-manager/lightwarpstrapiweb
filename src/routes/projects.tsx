// src/pages/projects/Projects.tsx
import { useEffect, useState } from "react";
import { PageShell } from "../components/page-shell";
import { PanelHeroes } from "./projects/panel-hero";
import { ProjectsPanelHero } from "./projects/panel-1-hero";
import { ProjectsPanelExtraVideos } from "./projects/panel-7-extra-videos";
import { usePageTitle } from "@/hooks/usePageTitle";

async function fetchProjectsPage() {
  const res = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/pages/by-slug/projects?populate=seo`);
  if (!res.ok) throw new Error("Failed to fetch projects page");
  const json = await res.json();

  const seo = json.data?.seo ?? null;

  const useCaseBlock = json.data.pageBuilder.find(
    (block: any) => block.__component === "acf-sections.use-case-single"
  );

  if (useCaseBlock && useCaseBlock.publish === false) return { block: null, seo };

  return { block: useCaseBlock, seo };
}

export default function Projects() {
  const [block, setBlock] = useState<any>(null);
  const [seo, setSeo] = useState<{ metaTitle?: string } | null>(null);

  usePageTitle(seo?.metaTitle);

  useEffect(() => {
    fetchProjectsPage()
      .then(({ block, seo }) => {
        setBlock(block);
        setSeo(seo);
      })
      .catch((err) => {
        console.error("Projects page fetch failed:", err);
        setBlock(null);
        setSeo(null);
      });
  }, []);

  const allItems = block?.use_case_items ?? [];
  const [featuredRaw, ...restRaw] = allItems;

  const featured = featuredRaw && featuredRaw.publish !== false ? featuredRaw : undefined;
  const rest = restRaw.filter((item: any) => item.publish !== false);

  return (
    <PageShell>
      <PanelHeroes data={block} />
      <ProjectsPanelHero data={featured} />
      <ProjectsPanelExtraVideos data={rest.length ? rest : undefined} />
    </PageShell>
  );
}