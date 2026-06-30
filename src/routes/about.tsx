import { PageShell } from "../components/page-shell";
import { AboutPanelStory } from "./about/panel-3-story";
import { AboutPanelTeam } from "./about/panel-4-team";
import { AboutPanelCta } from "./about/panel-5-cta";
import keepInTouch2 from "../assets/images/cms/KeepInTouch2.svg";

export default function About() {
  return (
    <PageShell>
      {/* Mobile Horizontal Scroll */}
      <div className="w-full overflow-x-auto md:overflow-visible">
        <div className="flex min-w-[520px] md:min-w-0 overflow-visible">
          {/* Main Content */}
          <div className="flex-1 min-w-[390px] overflow-visible">
            <AboutPanelStory />
            <AboutPanelTeam />
            <AboutPanelCta />
          </div>

          {/* Blank Space + Character */}
          <div className="static w-80 sm:w-40 md:w-0 flex-shrink-0 overflow-visible">
            <img
              src={keepInTouch2}
              alt=""
              className="
                static
                h-[710px]
                w-auto
                -ml-5
                scale-[1]
                mt-[1875px]
                pointer-events-none
                select-none
              "
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}