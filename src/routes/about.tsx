import { useEffect, useState } from "react";
import { PageShell } from "../components/page-shell";
import { AboutPanelStory } from "./about/panel-3-story";
import { AboutPanelTeam } from "./about/panel-4-team";
import { AboutPanelCta } from "./about/panel-5-cta";
import keepInTouch2 from "../assets/images/cms/KeepInTouch2.svg";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

async function getAboutPage() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/pages/by-slug/about`, {
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

export default function About() {
  const [blocks, setBlocks] = useState<any[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    getAboutPage().then((page) => {
      if (cancelled) return;
      console.log("STRAPI PAGE RESPONSE:", page);
      console.log("PAGE BUILDER BLOCKS:", page?.pageBuilder);
      setBlocks(page?.pageBuilder ?? []);
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
            <AboutPanelStory data={bannerData} />
            <AboutPanelTeam data={teamData} />
            <AboutPanelCta data={ctaData} />
          </div>

          <div className="static w-80 sm:w-40 md:w-0 flex-shrink-0 overflow-visible">
            <img
              src={keepInTouch2}
              alt=""
              className="static h-[710px] w-auto -ml-5 scale-[1] mt-[1875px] pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}