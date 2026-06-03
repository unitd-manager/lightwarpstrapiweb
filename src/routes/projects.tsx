import { PageShell } from "../components/page-shell";
import { ProjectsPanelHero } from "./projects/panel-1-hero";
import { PanelHeroes } from "./projects/panel-hero";
import { ProjectsPanelCapabilities } from "./projects/panel-3-capabilities";
import { ProjectsPanelExtraVideos } from "./projects/panel-7-extra-videos";

export default function Projects() {
  return (
    <PageShell>
      <PanelHeroes />
      <ProjectsPanelHero />
      <ProjectsPanelCapabilities />
      <ProjectsPanelExtraVideos />
    </PageShell>
  );
}
