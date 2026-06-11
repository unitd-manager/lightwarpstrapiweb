import { PageShell } from "../components/page-shell";
import { ProjectsPanelHero } from "./projects/panel-1-hero";
import { PanelHeroes } from "./projects/panel-hero";
import { ProjectsPanelExtraVideos } from "./projects/panel-7-extra-videos";

export default function Projects() {
  return (
    <PageShell copyrightText="© 2025 Lightwarp LLC. All rights reserved.">
      <PanelHeroes />
      <ProjectsPanelHero />
      <ProjectsPanelExtraVideos />
    </PageShell>
  );
}
