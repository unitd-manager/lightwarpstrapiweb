import { useEffect, useState } from "react";

export function MouseLight() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
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
