import { PageShell } from "../components/page-shell";
import { ServicesPanelHero } from "./services/panel-1-hero";
import { ServicesPanelServices } from "./services/panel-2-services";
import { ServicesPanelProcess } from "./services/panel-3-process";
import { ServicesPanelCta } from "./services/panel-4-cta";

export default function Services() {
  return (
    <PageShell>
      <ServicesPanelHero />
      <ServicesPanelServices />
      <ServicesPanelProcess />
      <ServicesPanelCta />
    </PageShell>
  );
}
