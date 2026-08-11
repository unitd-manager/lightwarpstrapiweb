import { useEffect, useRef, useState } from "react";

interface LazyYouTubeBackgroundProps {
  videoId: string;
  title: string; // must be unique per instance — used as the iframe's accessible name
  className?: string;
  /** Load immediately after first paint instead of waiting for scroll (use for the one hero video only) */
  priority?: boolean;
  start?: number;
  posterWidth?: number;
  posterHeight?: number;
}

export function LazyYouTubeBackground({
  videoId,
  title,
  className,
  priority,
  start,
  posterWidth = 1280,
  posterHeight = 720,
}: LazyYouTubeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (priority) {
      // Defer even the "priority" hero iframe until after first paint,
      // so Lighthouse's LCP measurement lands on the poster <img>, not
      // the YouTube player — and the browser's main thread isn't
      // fighting YouTube's player JS during initial render.
      const id =
        "requestIdleCallback" in window
          ? (window as any).requestIdleCallback(() => setShouldLoad(true), { timeout: 2000 })
          : window.setTimeout(() => setShouldLoad(true), 300);
      return () => {
        if ("cancelIdleCallback" in window) (window as any).cancelIdleCallback(id);
        else clearTimeout(id);
      };
    }

    if (!containerRef.current) return;
    let unloadTimer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          clearTimeout(unloadTimer);
          setShouldLoad(true);
        } else {
          unloadTimer = setTimeout(() => {
            const el = containerRef.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            const stillNear = r.bottom > -600 && r.top < window.innerHeight + 600;
            if (!stillNear) setShouldLoad(false);
          }, 3000);
        }
      },
      { root: null, rootMargin: "400px 0px", threshold: 0.01 }
    );

    observer.observe(containerRef.current);
    return () => {
      clearTimeout(unloadTimer);
      observer.disconnect();
    };
  }, [priority]);

  // youtube-nocookie.com avoids setting tracking cookies until the user
  // actually interacts with the player — resolves the third-party-cookie
  // flag in Best Practices.
  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0&iv_load_policy=3&playlist=${videoId}${start ? `&start=${start}` : ""}`;
  const posterSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <img
        src={posterSrc}
        alt=""
        width={posterWidth}
        height={posterHeight}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
      {shouldLoad ? (
        <iframe
          src={embedSrc}
          title={title}
          className={className}
          style={{ border: "none" }}
          allowFullScreen
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : null}
    </div>
  );
}