import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DURATION_MS  = 1250;   // circular expand stays visible but transition feels brisk
const NAV_FRACTION = 0.44;   // navigate when glare peaks (fully covers screen)
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
      <div
        className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
        style={{
          opacity:    visible ? 1 : 0,
          transition: visible ? "none" : `opacity ${FADE_OUT_MS}ms ease-in-out`,
          transform:  "translateZ(0)",
          willChange: "opacity",
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
  children,
  onClick,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const go = useTransitionNav();
  return (
    <a
      href={to}
      className={className}
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
      {/* Layer 1 – wide diffuse amber warmth */}
      <div style={ring(
        "radial-gradient(circle, rgba(255,180,30,0.55) 0%, rgba(255,120,0,0.30) 28%, rgba(200,60,0,0.10) 55%, transparent 72%)",
        "72px",
      )} />

      {/* Layer 2 – main amber ring */}
      <div style={ring(
        "radial-gradient(circle, rgba(255,220,80,0.85) 0%, rgba(255,160,20,0.62) 16%, rgba(255,100,0,0.26) 38%, transparent 58%)",
        "22px",
      )} />

      {/* Layer 3 – sharp inner brilliance */}
      <div style={ring(
        "radial-gradient(circle, rgba(255,255,210,1) 0%, rgba(255,230,100,0.95) 5%, rgba(255,180,30,0.80) 13%, rgba(255,120,0,0.32) 27%, transparent 46%)",
        "5px",
      )} />

      {/* Layer 4 – white-hot pinpoint core */}
      <div style={{
        position: "absolute",
        width: S,
        height: S,
        left: L,
        top: T,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,245,1) 0%, rgba(255,240,160,0.95) 2%, rgba(255,200,60,0.45) 7%, transparent 14%)",
        filter: "blur(1px)",
        mixBlendMode: "screen" as const,
        animation: `lwGlareCore ${dur} linear forwards`,
        willChange: "transform, opacity" as const,
      }} />

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
            animation-timing-function: cubic-bezier(0.8, 0.05, 0.95, 0.3);
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
          58% { transform: scale(1);     opacity: 1; animation-timing-function: cubic-bezier(0.8, 0.05, 0.95, 0.3); }
          92% { transform: scale(0.025); opacity: 1; animation-timing-function: linear; }
          100%{ transform: scale(0.025); opacity: 0; }
        }
      `}</style>
    </>
  );
}
