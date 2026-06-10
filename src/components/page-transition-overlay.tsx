
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const DURATION_MS = 1400;

/** Reads the logo position so the beam always originates from the lighthouse lantern. */
function getBeaconPos(): { x: number; y: number } {
  const isMobile = window.innerWidth < 768;
  const imgs = Array.from(document.querySelectorAll("header img")) as HTMLImageElement[];
  const logo = imgs.find((img) => img.getBoundingClientRect().width > 0);
  if (!logo) return { x: isMobile ? Math.round(window.innerWidth / 2) : 74, y: 39 };

  const r = logo.getBoundingClientRect();
  const y = Math.round(r.top + r.height * 0.5);

  const x = isMobile ? Math.round(window.innerWidth / 2) : Math.round(r.left + r.width * 0.5);
  return { x, y };
}

export function PageTransitionOverlay() {
  const { pathname } = useLocation();
  const [beams, setBeams] = useState<Array<{ id: number; beacon: { x: number; y: number } }>>([]);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    const beacon = getBeaconPos();
    const id = Date.now();
    setBeams((prev) => [...prev, { id, beacon }]);

    setTimeout(() => {
      setBeams((prev) => prev.filter((b) => b.id !== id));
    }, DURATION_MS + 400);
  }, [pathname]);

  if (beams.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[500] overflow-hidden" aria-hidden>
      {beams.map(({ id, beacon }) => (
        <BeamEffect key={id} beacon={beacon} />
      ))}
    </div>
  );
}

/**
 * Client requirement:
 *  1) Light starts at the logo, swings horizontally to the RIGHT, then returns to the logo.
 *  2) It expands like a flash from the logo’s corner.
 *  3) The beam swings out to the right across the page and fades.
 */
function BeamEffect({ beacon }: { beacon: { x: number; y: number } }) {
  const dur = `${DURATION_MS}ms`;
  const coneSize = "200vmax";

  const wedgeStyle = (gradient: string, blur: string) => ({
    position: "absolute" as const,
    left: beacon.x,
    top: beacon.y,
    width: coneSize,
    height: coneSize,
    background: gradient,
    filter: `blur(${blur})`,
    mixBlendMode: "screen" as const,
    transformOrigin: "0 0",
    animation: `lwBeamSweep ${dur} cubic-bezier(0.45, 0, 0.3, 1) forwards`,
  });

  return (
    <>
      {/* Step 1+2: start at logo, swing RIGHT, return, then flash/expand */}
      <div
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          left: beacon.x - 90,
          top: beacon.y - 90,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,253,255,1) 0%, rgba(225,215,255,0.75) 30%, rgba(190,170,255,0.30) 55%, transparent 75%)",
          filter: "blur(8px)",
          mixBlendMode: "screen",
          // IMPORTANT: unique keyframes name to avoid old CSS overriding
          animation: `lwSwingFromLogoFlashRight ${dur} cubic-bezier(0.45, 0, 0.3, 1) forwards`,
        }}
      />

      {/* Step 3: soft halo wedge */}
      <div
        style={wedgeStyle(
          `conic-gradient(from 65deg at 0% 0%,
            transparent 0deg,
            rgba(200,185,255,0.28) 18deg,
            rgba(215,205,255,0.16) 45deg,
            transparent 75deg)`,
          "50px"
        )}
      />

      {/* Step 3: crisp beam wedge */}
      <div
        style={wedgeStyle(
          `conic-gradient(from 65deg at 0% 0%,
            transparent 0deg,
            rgba(255,255,255,0.95) 6deg,
            rgba(235,228,255,0.55) 20deg,
            rgba(210,200,255,0.15) 40deg,
            transparent 55deg)`,
          "4px"
        )}
      />

      <style>{`
        /* Step 1 (0–30%): start AT logo, swing RIGHT, return to logo.
           Step 2 (30–70%): expand into a flash, then fade. */
        @keyframes lwSwingFromLogoFlashRight {
          0%   { transform: translate3d(0,0,0)      scale(0.35); opacity: 0;    }
          8%   { opacity: 1; }
          18%  { transform: translate3d(140px,0,0) scale(0.55); opacity: 1;    } /* RIGHT */
          30%  { transform: translate3d(0,0,0)      scale(1.00); opacity: 1;    } /* back */
          48%  { transform: translate3d(0,0,0)      scale(1.85); opacity: 0.65; } /* flash */
          70%  { transform: translate3d(0,0,0)      scale(2.45); opacity: 0;    }
          100% { opacity: 0; }
        }

        /* Cone stays collapsed during swing/flash start, then blooms, then swings right. */
        @keyframes lwBeamSweep {
          0%   { transform: scale(0.015) rotate(-10deg); opacity: 0; }
          30%  { transform: scale(0.015) rotate(-10deg); opacity: 0; } /* hold during swing */
          48%  { transform: scale(1)     rotate(-10deg); opacity: 1; } /* bloom */
          100% { transform: scale(1)     rotate(22deg);  opacity: 0; } /* swing right */
        }
      `}</style>
    </>
  );
}