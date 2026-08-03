// src/pages/projects/Projects.tsx
import { useEffect, useState } from "react";
import { PageShell } from "../components/page-shell";
import { PanelHeroes } from "./projects/panel-hero";
import { ProjectsPanelHero } from "./projects/panel-1-hero";
import { ProjectsPanelExtraVideos } from "./projects/panel-7-extra-videos";

async function fetchProjectsPage() {
  const res = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/pages/by-slug/projects`);
  if (!res.ok) throw new Error("Failed to fetch projects page");
  const json = await res.json();

  const useCaseBlock = json.data.pageBuilder.find(
    (block: any) => block.__component === "acf-sections.use-case-single"
  );

  // Whole "Use Case Single" section is hidden if its own publish is false
  if (useCaseBlock && useCaseBlock.publish === false) return null;

  return useCaseBlock;
}

export default function Projects() {
  const [block, setBlock] = useState<any>(null);

  useEffect(() => {
    fetchProjectsPage()
      .then(setBlock)
      .catch(() => setBlock(null));
  }, []);

  // Split by ORIGINAL position first, then check publish per-slot.
  // This keeps "featured" always mapped to use_case_items[0], and prevents
  // an unpublished item from shifting the rest of the array out of order.
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