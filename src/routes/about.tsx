import { PageShell } from "../components/page-shell";
import { AboutPanelHero } from "./about/panel-1-hero";
import { AboutPanelTeam } from "./about/panel-4-team";
import { AboutPanelCta } from "./about/panel-5-cta";

export default function About() {
  return (
    <PageShell>
      <AboutPanelHero />
      <AboutPanelTeam />
      <AboutPanelCta />
    </PageShell>
  );
}
