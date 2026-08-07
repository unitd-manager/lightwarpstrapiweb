import { useEffect, useState } from "react";
import { PageShell } from "../components/page-shell";
import { AboutPanelStory } from "./about/panel-3-story";
import { AboutPanelTeam } from "./about/panel-4-team";
import { AboutPanelCta } from "./about/panel-5-cta";
import keepInTouch2 from "../assets/images/cms/KeepInTouch2.svg";
import { usePageTitle } from "@/hooks/usePageTitle";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

async function getAboutPage() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/pages/by-slug/about?populate=seo`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
    });

    if (!res.ok) {
      console.warn("Strapi returned", res.status, await res.text());
      return null;
    }
    const json = await res.json();
    const entry = json?.data;
    if (!entry) return null;
    return entry.attributes ?? entry;
  } catch (err) {
    console.warn("Strapi fetch failed, using static About content:", err);
    return null;
  }
}

const registry: Record<string, React.FC<{ data?: any }>> = {
  "acf-sections.banner-layout": AboutPanelStory,
  "acf-sections.about-team-section": AboutPanelTeam,
  "acf-sections.footer-common-cta": AboutPanelCta,
};

// A block is hidden ONLY when publish is explicitly false.
function isPublished(block: any) {
  return block?.publish !== false;
}

export default function About() {
  const [blocks, setBlocks] = useState<any[] | null>(null);
  const [seo, setSeo] = useState<{ metaTitle?: string } | null>(null);

  usePageTitle(seo?.metaTitle);

  useEffect(() => {
    let cancelled = false;
    getAboutPage().then((page) => {
      if (cancelled) return;
      setBlocks(page?.pageBuilder ?? []);
      setSeo(page?.seo ?? null);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const bannerData = blocks?.find((b) => b.__component === "acf-sections.banner-layout");
  const teamData = blocks?.find((b) => b.__component === "acf-sections.about-team-section");
  const ctaData = blocks?.find((b) => b.__component === "acf-sections.footer-common-cta");

  return (
    <PageShell>
      <div className="w-full overflow-x-auto md:overflow-visible">
        <div className="flex min-w-[520px] md:min-w-0 overflow-visible">
          <div className="flex-1 min-w-[390px] overflow-visible">
            {isPublished(bannerData) && <AboutPanelStory data={bannerData} />}
            {isPublished(teamData) && <AboutPanelTeam data={teamData} />}
            {isPublished(ctaData) && <AboutPanelCta data={ctaData} />}
          </div>
        </div>
      </div>
    </PageShell>
  );
}