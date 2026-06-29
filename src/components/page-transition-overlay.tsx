import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DURATION_MS  = 950;    // circular expand stays visible but transition feels brisk
const NAV_FRACTION = 0.4;    // navigate when glare peaks (fully covers screen)
const FADE_OUT_MS  = 450;

function getBeaconPos(): { x: number; y: number } {
  // Both mobile and desktop logos carry data-logo-beacon.
  // Only the one that is actually rendered has a non-zero bounding rect —
  // the other is display:none and returns all zeros.
  const logos = Array.from(document.querySelectorAll("[data-logo-beacon]")) as HTMLElement[];
  const logo  = logos.find(el => el.getBoundingClientRect().width > 0);
  if (!logo) return { x: 74, y: 39 };
  const r = logo.getBoundingClientRect();
  return {
    x: Math.round(r.left + r.width  * 0.5),
    y: Math.round(r.top  + r.height * 0.5),
  };
}

type CtxType = { go: (to: string) => void };
const TransitionCtx = createContext<CtxType>({ go: () => {} });
export function useTransitionNav() {
  return useContext(TransitionCtx).go;
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate     = useNavigate();
  const { pathname } = useLocation();
  const [beam, setBeam]       = useState<{ id: number; beacon: { x: number; y: number } } | null>(null);
  const [visible, setVisible] = useState(false);
  const navTimer   = useRef<ReturnType<typeof setTimeout>>();
  const fadeTimer  = useRef<ReturnType<typeof setTimeout>>();
  const cleanTimer = useRef<ReturnType<typeof setTimeout>>();

  const go = useCallback(
    (to: string) => {
      if (to === pathname) return;

      clearTimeout(navTimer.current);
      clearTimeout(fadeTimer.current);
      clearTimeout(cleanTimer.current);

      const beacon = getBeaconPos();
      setBeam({ id: Date.now(), beacon });
      setVisible(true);

      navTimer.current = setTimeout(() => {
        navigate(to);
      }, DURATION_MS * NAV_FRACTION);

      // After the glare finishes, fade the overlay wrapper out smoothly.
      // Glare circles are already opacity-0 by then so this is just a safety
      // net — the new page (faded in via lwPageIn on PageShell) is fully visible.
      fadeTimer.current = setTimeout(() => {
        setVisible(false);
      }, DURATION_MS);

      cleanTimer.current = setTimeout(() => {
        setBeam(null);
      }, DURATION_MS + FADE_OUT_MS + 50);
    },
    [navigate, pathname],
  );

  useEffect(() => () => {
    clearTimeout(navTimer.current);
    clearTimeout(fadeTimer.current);
    clearTimeout(cleanTimer.current);
  }, []);

  return (
    <TransitionCtx.Provider value={{ go }}>
      {children}
      <GlareKeyframes />
      <div
        className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
        style={{
          opacity:    visible ? 1 : 0,
          transition: visible ? "none" : `opacity ${FADE_OUT_MS}ms ease-in-out`,
          transform:  "translateZ(0)",
          willChange: "opacity, transform",
          contain:    "strict",
        }}
        aria-hidden
      >
        {beam && <GlareEffect beacon={beam.beacon} />}
      </div>
    </TransitionCtx.Provider>
  );
}

export function TransitionLink({
  to,
  className,
  style,
  children,
  onClick,
}: {
  to: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  onClick?: () => void;
}) {
  const go = useTransitionNav();
  return (
    <a
      href={to}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        go(to);
      }}
    >
      {children}
    </a>
  );
}

function GlareEffect({ beacon }: { beacon: { x: number; y: number } }) {
  const bx  = beacon.x;
  const by  = beacon.y;
  const S   = "300vmax";
  const L   = `calc(${bx}px - 150vmax)`;
  const T   = `calc(${by}px - 150vmax)`;
  const dur = `${DURATION_MS}ms`;

  const ring = (bg: string, blur: string) => ({
    position: "absolute" as const,
    width: S,
    height: S,
    left: L,
    top: T,
    borderRadius: "50%",
    background: bg,
    filter: `blur(${blur})`,
    mixBlendMode: "screen" as const,
    // linear overall — per-keyframe timing functions control each phase
    animation: `lwGlare ${dur} linear forwards`,
    willChange: "transform, opacity" as const,
  });

  return (
    <>
      {/* Veil – the colorful glow rings fade to transparent well before
          reaching screen corners (their gradients end ~2070px from center,
          while a 1920x1080 screen's far corner from a top-anchored beacon is
          ~2120px away). Without this, the new page is fully visible through
          the corners the entire time the glow is "covering" the screen —
          this is the actual full-opacity layer that hides it, synced to the
          same timeline so it darkens/lightens in lockstep with the glow
          rather than competing with it. */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: "#0c0805",
        mixBlendMode: "normal" as const,
        animation: `lwVeil ${dur} linear forwards`,
        willChange: "opacity, transform" as const,
        transform: "translateZ(0)",
      }} />

      {/* Layer 1 – wide diffuse warmth.
          Blur radius kept small relative to the layer's huge (300vmax) box —
          Chrome rasterizes `filter: blur()` over the element's full unclipped
          bounds every frame, so a large blur on a multi-thousand-px layer is
          a heavy per-frame cost that shows up as flicker/jank on Chrome's
          compositor even though the same CSS is cheap in Edge. The gradient
          stops already feather the edge, so blur here is just a touch-up. */}
      <div style={ring(
        "radial-gradient(circle, rgba(255,170,90,0.42) 0%, rgba(255,130,55,0.24) 28%, rgba(220,90,25,0.08) 55%, transparent 72%)",
        "18px",
      )} />

      {/* Layer 2 – main ring */}
      <div style={ring(
        "radial-gradient(circle, rgba(255,205,145,0.75) 0%, rgba(255,150,75,0.52) 16%, rgba(255,110,40,0.22) 38%, transparent 58%)",
        "8px",
      )} />

      {/* Layer 3 – sharp inner brilliance */}
      <div style={ring(
        "radial-gradient(circle, rgba(255,235,205,0.92) 0%, rgba(255,190,130,0.85) 5%, rgba(255,150,75,0.62) 13%, rgba(255,120,45,0.26) 27%, transparent 46%)",
        "2px",
      )} />

      {/* Layer 4 – warm orange pinpoint core */}
      <div style={{
        position: "absolute",
        width: S,
        height: S,
        left: L,
        top: T,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,225,190,0.85) 0%, rgba(255,185,125,0.75) 2%, rgba(255,150,70,0.35) 7%, transparent 14%)",
        filter: "blur(1px)",
        mixBlendMode: "screen" as const,
        animation: `lwGlareCore ${dur} linear forwards`,
        willChange: "transform, opacity" as const,
      }} />
    </>
  );
}

// Mounted once with the provider — never recreated per-navigation, so a
// transition's first frame doesn't pay for re-parsing/re-injecting CSS.
function GlareKeyframes() {
  return (
    <style>{`
      /*
       * 0–6%   : gentle ignite — eases in as a visible glowing circle at the logo
       * 6–12%  : HOLD at logo size — eye clearly registers "it starts here"
       * 12–44% : expand outward to fill screen (ease-out, decelerates)
       * 44–58% : hold at full brightness
       * 58–92% : contract back to logo (ease-in, accelerates toward logo)
       * 92–100%: shrink back to logo dot and fade out
       */
      @keyframes lwGlare {
        0%  {
          transform: scale(0.028);
          opacity: 0;
          /* gentle ignite — eases in rather than snapping to full brightness */
          animation-timing-function: ease-out;
        }
        6%  {
          transform: scale(0.028);
          opacity: 1;
          /* hold at logo — makes origin unmistakably visible */
          animation-timing-function: linear;
        }
        12% {
          transform: scale(0.028);
          opacity: 1;
          /* now expand: fast initial burst, decelerates as it fills screen */
          animation-timing-function: cubic-bezier(0.1, 0.8, 0.2, 1);
        }
        44% {
          transform: scale(1);
          opacity: 1;
          animation-timing-function: linear;
        }
        58% {
          transform: scale(1);
          opacity: 0.95;
          /* contract back: slow leaving full, accelerates toward logo */
          animation-timing-function: ease-in-out;
        }
        92% {
          transform: scale(0.028);
          opacity: 1;
          animation-timing-function: linear;
        }
        100% { transform: scale(0.028); opacity: 0; }
      }

      @keyframes lwGlareCore {
        0%  { transform: scale(0.025); opacity: 0; animation-timing-function: ease-out; }
        6%  { transform: scale(0.025); opacity: 1; animation-timing-function: linear; }
        12% { transform: scale(0.025); opacity: 1; animation-timing-function: cubic-bezier(0.1, 0.8, 0.2, 1); }
        44% { transform: scale(1);     opacity: 1; animation-timing-function: linear; }
        58% { transform: scale(1);     opacity: 1; animation-timing-function: ease-in-out; }
        92% { transform: scale(0.025); opacity: 1; animation-timing-function: linear; }
        100%{ transform: scale(0.025); opacity: 0; }
      }

      /* Opacity-only — ramps up in lockstep with the glow's own expansion
       * (0–44%) so it reads as part of the same effect rather than a
       * separate flash, holds alongside the glow's full-coverage window
       * (44–58%), then recedes in lockstep with the contraction (58–100%). */
      @keyframes lwVeil {
        0%   { opacity: 0; }
        12%  { opacity: 0.15; }
        44%  { opacity: 0.92; }
        58%  { opacity: 0.92; }
        92%  { opacity: 0.15; }
        100% { opacity: 0; }
      }
    `}</style>
  );
}
