type Props = { size?: number; className?: string };

export function LighthouseLogo({ size = 32, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-label="Lightwarp lighthouse logo"
    >
      <defs>
        <linearGradient id="lh-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--pink)" />
          <stop offset="50%" stopColor="var(--violet)" />
          <stop offset="100%" stopColor="var(--blue)" />
        </linearGradient>
        <radialGradient id="lh-glow" cx="50%" cy="22%" r="40%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="60%" stopColor="var(--pink)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--blue)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Beam glow */}
      <circle cx="24" cy="11" r="10" fill="url(#lh-glow)" />
      {/* Light beams */}
      <path
        d="M24 11 L6 4 L8 14 Z M24 11 L42 4 L40 14 Z"
        fill="url(#lh-g)"
        opacity="0.55"
      />
      {/* Lantern room */}
      <rect x="18" y="8" width="12" height="8" rx="2" stroke="url(#lh-g)" strokeWidth="1.6" fill="rgba(255, 106, 0, 0.18)" />
      {/* Roof */}
      <path d="M16 8 L24 3 L32 8 Z" fill="url(#lh-g)" />
      {/* Tower */}
      <path
        d="M16 16 L20 42 L28 42 L32 16 Z"
        stroke="url(#lh-g)"
        strokeWidth="1.8"
        fill="rgba(30, 107, 255, 0.12)"
      />
      <line x1="17.5" y1="22" x2="30.5" y2="22" stroke="url(#lh-g)" strokeWidth="1.4" />
      <line x1="18" y1="30" x2="30" y2="30" stroke="url(#lh-g)" strokeWidth="1.4" />
      {/* Base */}
      <rect x="14" y="42" width="20" height="3" rx="1" fill="url(#lh-g)" />
    </svg>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <LighthouseLogo size={34} />
        <div className="absolute -inset-2 rounded-full bg-pink/20 blur-xl -z-10" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-display font-semibold tracking-tight">
          Light<span className="text-gradient">warp</span>
        </span>
        <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
          3D Studio
        </span>
      </div>
    </div>
  );
}
