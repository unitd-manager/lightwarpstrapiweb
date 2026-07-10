// src/pages/contact/Contact.tsx
import { useEffect, useState } from "react";
import { PageShell } from "../components/page-shell";
import { ContactPanelHero } from "./contact/panel-1-hero";
import { ContactPanelForm } from "./contact/panel-2-form";

async function fetchContactPage() {
  const res = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/pages/by-slug/contact`);
  if (!res.ok) throw new Error(`Failed to fetch contact page: ${res.status}`);

  const json = await res.json();
  console.log("Full JSON:", json); // 👈 log the parsed JSON, not the raw response

  const found = json.data?.pageBuilder?.find(
    (block: any) => block.__component === "acf-sections.contact-location-section"
  );
  console.log("Matched block:", found); // 👈 log the actual block you're returning

  return found;
}

export default function Contact() {
  const [block, setBlock] = useState<any>(null);

  useEffect(() => {
    fetchContactPage()
      .then(setBlock)
      .catch((err) => {
        console.error("Contact page fetch failed:", err);
        setBlock(null);
      });
  }, []);
  
   return (
      <PageShell>
        <div className="w-full overflow-x-auto md:overflow-visible">
          <div className="flex min-w-[520px] md:min-w-0 overflow-visible">
            <div className="flex-1 min-w-[390px] overflow-visible">
              <ContactPanelHero data={block} />
              <ContactPanelForm data={block} />
            </div>
          </div>
        </div>
      </PageShell>
    );
}