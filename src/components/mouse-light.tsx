import { useEffect, useState } from "react";

export function MouseLight() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  // No pointer on touch devices, so this effect can never do anything useful
  // there — but the element itself (mix-blend-mode, fixed, full-screen) is
  // still a permanent GPU compositing cost on every page if rendered. Skip
  // it entirely rather than pay that cost for an effect that can't be seen.
  const [hasHover] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  );

  useEffect(() => {
    if (!hasHover) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [hasHover]);

  if (!hasHover) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
      style={{
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(255,77,205,0.15), rgba(77,159,255,0.08) 35%, transparent 70%)`,
        transition: "background 80ms linear",
      }}
    />
  );
}
