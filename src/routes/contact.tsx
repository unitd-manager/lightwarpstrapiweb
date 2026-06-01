import { PageShell } from "../components/page-shell";
import { ContactPanelHero } from "./contact/panel-1-hero";
import { ContactPanelForm } from "./contact/panel-2-form";

export default function Contact() {
  return (
    <PageShell>
      <ContactPanelHero />
      <ContactPanelForm />
    </PageShell>
  );
}
