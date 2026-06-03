import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// Lighthouse beacon — measured from the live logo getBoundingClientRect().
// Logo: left 24, top 16, width 100, height 56.
// Lantern sits at ~50 % across, ~30 % down → (74, 33) in viewport px.
const BEACON = { x: 74, y: 33 };

// Slow, cinematic sweep — 1.8 s
const DURATION_MS = 1800;

// The beam starts pointing upper-right (-40 ° from horizontal) and rotates
// 150 ° clockwise, ending lower-right (110 °). This mimics a real lighthouse
// scanning the sea from top-right to bottom-right.
const START_DEG = -40; // conic "from" offset
const SWEEP_DEG = 150; // total rotation

export function PageTransitionOverlay() {
  const { pathname } = useLocation();
  const [beams, setBeams] = useState<number[]>([]);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    const id = Date.now();
    setBeams((prev) => [...prev, id]);
    setTimeout(
      () => setBeams((prev) => prev.filter((b) => b !== id)),
      DURATION_MS + 400
    );
  }, [pathname]);

  if (beams.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[500]" aria-hidden>
      {beams.map((id) => (
        <BeamEffect key={id} />
      ))}
    </div>
  );
}

function BeamEffect() {
  const dur = `${DURATION_MS}ms`;
  const ease = "cubic-bezier(0.4, 0, 0.2, 1)"; // slow-in, slow-out

  return (
    <>
      {/* ── Layer 1: Razor-sharp primary beam ── */}
      {/* Very narrow cone (12 °) with brilliant white core.
          Starts upper-right, sweeps clockwise across the full page. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `conic-gradient(
            from ${START_DEG}deg at ${BEACON.x}px ${BEACON.y}px,
            transparent               0deg,
            rgba(220,210,255, 0.08)   2deg,
            rgba(245,240,255, 0.75)   5deg,
            rgba(255,255,255, 1.00)   6deg,
            rgba(255,255,255, 1.00)   7deg,
            rgba(245,240,255, 0.75)  10deg,
            rgba(220,210,255, 0.08)  13deg,
            transparent              15deg
          )`,
          transformOrigin: `${BEACON.x}px ${BEACON.y}px`,
          mixBlendMode: "screen",
          filter: "blur(0.5px)",
          animation: `lwSweep ${dur} ${ease} forwards,
                      lwFadeBeam ${dur} ease forwards`,
        }}
      />

      {/* ── Layer 2: Soft luminous halo ──
          50 ° wide glow — atmospheric light scatter around the beam. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `conic-gradient(
            from ${START_DEG - 15}deg at ${BEACON.x}px ${BEACON.y}px,
            transparent               0deg,
            rgba(190,170,255, 0.05)  10deg,
            rgba(215,200,255, 0.30)  22deg,
            rgba(225,215,255, 0.20)  35deg,
            rgba(190,170,255, 0.04)  50deg,
            transparent              60deg
          )`,
          transformOrigin: `${BEACON.x}px ${BEACON.y}px`,
          mixBlendMode: "screen",
          filter: "blur(20px)",
          animation: `lwSweep ${dur} ${ease} forwards,
                      lwFadeHalo ${dur} ease forwards`,
        }}
      />

      {/* ── Layer 3: Wide ambient atmosphere ──
          Very faint 90 ° cone — "sky brightens" ahead of the beam. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `conic-gradient(
            from ${START_DEG - 35}deg at ${BEACON.x}px ${BEACON.y}px,
            transparent               0deg,
            rgba(180,160,255, 0.07)  35deg,
            rgba(200,185,255, 0.04)  70deg,
            transparent              95deg
          )`,
          transformOrigin: `${BEACON.x}px ${BEACON.y}px`,
          mixBlendMode: "screen",
          filter: "blur(45px)",
          animation: `lwSweep ${dur} ${ease} forwards,
                      lwFadeAtmo ${dur} ease forwards`,
        }}
      />

      {/* ── Layer 4: Beacon origin burst ──
          Radial bloom at the exact lighthouse lantern — light-source pulse. */}
      <div
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          left: BEACON.x - 90,
          top: BEACON.y - 90,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,253,255,1) 0%, rgba(215,200,255,0.65) 28%, rgba(185,165,255,0.25) 55%, transparent 72%)",
          filter: "blur(14px)",
          mixBlendMode: "screen",
          animation: `lwBeaconBurst ${dur} ease forwards`,
        }}
      />

      {/* ── Layer 5: Infinite-length streak ──
          A 130 vw bright line from the beacon outward — emphasises beam length.
          Rotates in sync with the main cone. */}
      <div
        style={{
          position: "absolute",
          top: BEACON.y,
          left: BEACON.x,
          width: "130vw",
          height: "3px",
          background:
            "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(230,220,255,0.50) 20%, rgba(210,195,255,0.15) 55%, transparent 100%)",
          transformOrigin: "0px 1.5px",
          filter: "blur(1.5px)",
          mixBlendMode: "screen",
          animation: `lwStreak ${dur} ${ease} forwards,
                      lwFadeBeam ${dur} ease forwards`,
        }}
      />

      <style>{`
        /* Main cone + halo + atmosphere all share the same rotation */
        @keyframes lwSweep {
          from { transform: rotate(0deg);            }
          to   { transform: rotate(${SWEEP_DEG}deg); }
        }

        /* Streak rotates to match beam — anchored at beacon */
        @keyframes lwStreak {
          from { transform: rotate(${START_DEG}deg)           translateY(-1.5px); }
          to   { transform: rotate(${START_DEG + SWEEP_DEG}deg) translateY(-1.5px); }
        }

        /* Tight beam: quick fade-in, hold, quick fade-out */
        @keyframes lwFadeBeam {
          0%   { opacity: 0;   }
          7%   { opacity: 1;   }
          80%  { opacity: 1;   }
          100% { opacity: 0;   }
        }

        /* Halo: slightly slower rise */
        @keyframes lwFadeHalo {
          0%   { opacity: 0;   }
          10%  { opacity: 1;   }
          75%  { opacity: 1;   }
          100% { opacity: 0;   }
        }

        /* Atmosphere: rises even slower, fades earlier */
        @keyframes lwFadeAtmo {
          0%   { opacity: 0;    }
          18%  { opacity: 0.85; }
          65%  { opacity: 0.85; }
          100% { opacity: 0;    }
        }

        /* Beacon burst at the origin — brief intense pulse */
        @keyframes lwBeaconBurst {
          0%   { opacity: 0;   transform: scale(0.1); }
          10%  { opacity: 1;   transform: scale(3.5); }
          40%  { opacity: 0.6; transform: scale(2.4); }
          100% { opacity: 0;   transform: scale(1.0); }
        }
      `}</style>
    </>
  );
}
