// src/pages/projects/Projects.tsx
import { useEffect, useState } from "react";
import { PanelHeroes } from "./projects/panel-hero";
import { ProjectsPanelHero } from "./projects/panel-1-hero";
import { ProjectsPanelExtraVideos } from "./projects/panel-7-extra-videos";

async function fetchProjectsPage() {
  const res = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/pages/by-slug/project`);
  if (!res.ok) throw new Error("Failed to fetch projects page");
  const json = await res.json();

  const useCaseBlock = json.data.pageBuilder.find(
    (block: any) => block.__component === "acf-sections.use-case-single"
  );

  return useCaseBlock; // return the whole block now, not just use_case_items
}

export default function Projects() {
  const [block, setBlock] = useState<any>(null);

  useEffect(() => {
    fetchProjectsPage()
      .then(setBlock)
      .catch(() => setBlock(null));
  }, []);

  const items = block?.use_case_items ?? [];
  const [featured, ...rest] = items.length ? items : [undefined, undefined, undefined];

  return (
    <div>
      <PanelHeroes data={block} />
      <ProjectsPanelHero data={featured} />
      <ProjectsPanelExtraVideos data={items.length ? rest : undefined} />
    </div>
  );
}