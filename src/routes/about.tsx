import { PageShell } from "../components/page-shell";
import { AboutPanelStory } from "./about/panel-3-story";
import { AboutPanelTeam } from "./about/panel-4-team";
import { AboutPanelCta } from "./about/panel-5-cta";

export default function About() {
  return (
    <PageShell>
      <AboutPanelStory />
      <AboutPanelTeam />
      <AboutPanelCta />
    </PageShell>
  );
}
