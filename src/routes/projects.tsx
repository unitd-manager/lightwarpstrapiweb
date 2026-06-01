import { PageShell } from "../components/page-shell";
import { ProjectsPanelHero } from "./projects/panel-1-hero";
import { PanelHeroes } from "./projects/panel-hero";
import { ProjectsPanelCapabilities } from "./projects/panel-3-capabilities";

export default function Projects() {
  return (
    <PageShell>
      <PanelHeroes />
      <ProjectsPanelHero />
      <ProjectsPanelCapabilities />
    </PageShell>
  );
}
