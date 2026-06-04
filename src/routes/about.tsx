import { PageShell } from "../components/page-shell";
import { AboutPanelStory } from "./about/panel-3-story";
import { AboutPanelTeam } from "./about/panel-4-team";
import { AboutPanelCta } from "./about/panel-5-cta";

const keepInTouch2 =
  "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepInTouch2.svg";

export default function About() {
  return (
    <PageShell>
      {/* Mobile Horizontal Scroll */}
      <div className="w-full overflow-x-auto md:overflow-visible">
        <div className="flex min-w-[520px] md:min-w-0">
          {/* Main Content */}
          <div className="flex-1 min-w-[390px]">
            <AboutPanelStory />
            <AboutPanelTeam />
            <AboutPanelCta />
          </div>

          {/* Blank Space + Character */}
          <div className="relative w-80 sm:w-40 md:w-0 flex-shrink-0">
            <img
              src={keepInTouch2}
              alt=""
              className="
                absolute
                bottom-[-30px]
                left-[-20px]
                h-[650px]
                w-auto
                pointer-events-none
                select-none
                z-50
              "
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}