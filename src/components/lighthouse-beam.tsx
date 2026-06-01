type Props = {
  className?: string;
  intensity?: "soft" | "strong";
};

/** Animated lighthouse beam — rotating light wedge plus rays. Decorative only. */
export function LighthouseBeam({ className = "", intensity = "soft" }: Props) {
  const opacity = intensity === "strong" ? 0.9 : 0.55;
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Rotating rays */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rays">
        <div
          className="h-[180vmax] w-[180vmax] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(255,77,205,0.06) 10deg, transparent 25deg, rgba(77,159,255,0.05) 60deg, transparent 90deg, rgba(138,92,255,0.05) 140deg, transparent 180deg, rgba(255,77,205,0.05) 220deg, transparent 250deg, rgba(77,159,255,0.06) 300deg, transparent 330deg)",
            opacity,
          }}
        />
      </div>
      {/* Sweeping beam */}
      <div
        className="beam"
        style={{
          left: "50%",
          bottom: "0",
          width: "60vmax",
          height: "120vmax",
          marginLeft: "-30vmax",
        }}
      />
    </div>
  );
}

export function ScanLine({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="scan-line" />
    </div>
  );
}
