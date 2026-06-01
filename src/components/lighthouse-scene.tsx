import { motion } from "framer-motion";

/** Stylized 3D-ish lighthouse using SVG with parallax/float. Hero centerpiece. */
export function LighthouseScene({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      {/* Soft halo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-pink/30 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-blue/20 blur-3xl" />

      {/* Rotating rays behind lighthouse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rays h-[700px] w-[700px] rounded-full opacity-70"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(255, 106, 0, 0.18) 18deg, transparent 36deg, transparent 162deg, rgba(30, 107, 255, 0.18) 180deg, transparent 198deg)",
            filter: "blur(2px)",
          }}
        />
      </div>

      <motion.svg
        viewBox="0 0 400 600"
        className="relative z-10 mx-auto h-[520px] w-auto float-y drop-shadow-[0_30px_60px_rgba(30,107,255,0.35)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="hero-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--pink)" />
            <stop offset="55%" stopColor="var(--violet)" />
            <stop offset="100%" stopColor="var(--blue)" />
          </linearGradient>
          <linearGradient id="tower-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1230" />
            <stop offset="100%" stopColor="#0a0820" />
          </linearGradient>
          <radialGradient id="lantern-g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#ffd7b8" />
            <stop offset="100%" stopColor="var(--blue)" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Light beams */}
        <g opacity="0.7">
          <path d="M200 130 L20 60 L30 200 Z" fill="url(#hero-g)" opacity="0.35" />
          <path d="M200 130 L380 60 L370 200 Z" fill="url(#hero-g)" opacity="0.35" />
        </g>

        {/* Top spire */}
        <path d="M195 30 L205 30 L200 0 Z" fill="url(#hero-g)" />
        <circle cx="200" cy="36" r="4" fill="var(--pink)" />

        {/* Roof */}
        <path d="M170 90 L200 50 L230 90 Z" fill="url(#hero-g)" />
        <rect x="172" y="88" width="56" height="4" fill="url(#hero-g)" />

        {/* Lantern room (light source) */}
        <rect x="178" y="95" width="44" height="40" rx="3" fill="url(#tower-g)" stroke="url(#hero-g)" strokeWidth="2" />
        <circle cx="200" cy="115" r="14" fill="url(#lantern-g)" />
        <circle cx="200" cy="115" r="22" fill="#ffffff" opacity="0.15" />

        {/* Gallery */}
        <rect x="170" y="135" width="60" height="6" fill="url(#hero-g)" />

        {/* Tower upper */}
        <path d="M178 141 L222 141 L228 230 L172 230 Z" fill="url(#tower-g)" stroke="url(#hero-g)" strokeWidth="1.5" />
        {/* Diagonal stripes */}
        <path d="M178 150 L222 175 M178 175 L222 200 M178 200 L222 225"
          stroke="url(#hero-g)" strokeWidth="1" opacity="0.6" />

        {/* Middle */}
        <rect x="172" y="230" width="56" height="6" fill="url(#hero-g)" />
        <path d="M165 236 L235 236 L245 380 L155 380 Z" fill="url(#tower-g)" stroke="url(#hero-g)" strokeWidth="1.5" />
        <rect x="190" y="260" width="20" height="30" rx="10" fill="var(--pink)" opacity="0.4" stroke="url(#hero-g)" />
        <rect x="190" y="310" width="20" height="30" rx="10" fill="var(--blue)" opacity="0.4" stroke="url(#hero-g)" />

        {/* Base */}
        <rect x="155" y="380" width="90" height="8" fill="url(#hero-g)" />
        <path d="M150 388 L250 388 L260 460 L140 460 Z" fill="url(#tower-g)" stroke="url(#hero-g)" strokeWidth="1.5" />
        <rect x="185" y="410" width="30" height="50" rx="14" fill="#0a0820" stroke="url(#hero-g)" />
        <circle cx="200" cy="430" r="2" fill="var(--pink)" />

        {/* Rocky island */}
        <path d="M80 460 Q150 440 200 460 Q260 478 320 460 L340 540 L60 540 Z" fill="#0a0820" stroke="url(#hero-g)" strokeWidth="1.2" opacity="0.9" />
      </motion.svg>

      {/* Waves */}
      <div className="pointer-events-none absolute -bottom-6 left-0 right-0 h-32 overflow-hidden opacity-60">
        <svg className="wave absolute bottom-0 left-0 h-full w-[200%]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120 Z" fill="url(#hero-g)" opacity="0.25" />
        </svg>
        <svg className="wave absolute bottom-0 left-0 h-full w-[200%]" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ animationDuration: "9s" }}>
          <path d="M0,80 C200,40 400,100 600,70 C800,40 1000,90 1200,60 L1200,120 L0,120 Z" fill="var(--blue)" opacity="0.18" />
        </svg>
      </div>
    </div>
  );
}
