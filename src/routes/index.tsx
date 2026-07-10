import { HomePanelHero } from "./home/panel-1-hero";
import { ServicesPanels } from "../components/services-panel";
import { HomePanelPartners } from "./home/panel-5-partners";
import PromoBar from "../components/promo-bar";
import { HomePanelAwards } from "./home/panel-6-awards";
import { HomePanelCta } from "./home/panel-9-cta";
import { PageShell } from "../components/page-shell";

export default function Home() {
  return (
    <PageShell>
      <HomePanelHero />
      <ServicesPanels />
      <PromoBar />
      <HomePanelPartners />
      <HomePanelAwards />
      <HomePanelCta />
    </PageShell>
  );
}