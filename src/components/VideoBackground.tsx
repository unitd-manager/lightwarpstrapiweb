// src/components/VideoBackground.tsx
import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  className?: string;
  priority?: boolean;
}

function mimeTypeFor(url: string): string {
  if (url.endsWith(".webm")) return "video/webm";
  return "video/mp4";
}

export function VideoBackground({ src, className, priority }: VideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(Boolean(priority));

  useEffect(() => {
    if (priority) return;
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "400px 0px", threshold: 0.01 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked — video stays paused on first frame, not an error.
      });
    }
  }, [shouldLoad]);

  if (!shouldLoad) {
    return <div ref={containerRef} className="absolute inset-0 overflow-hidden" />;
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "none"}
        aria-hidden="true"
      >
        <source src={src} type={mimeTypeFor(src)} />
      </video>
    </div>
  );
}