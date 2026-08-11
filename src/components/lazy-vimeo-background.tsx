import { useEffect, useRef, useState } from "react";
/**
 * Lazily mounts a Vimeo background iframe only while the section is near the
 * viewport, and unmounts it again once scrolled well away. A poster image
 * covers the gap either way.
 *
 * The unmount-when-offscreen half matters a lot on iOS Safari: it caps how
 * many concurrent decoded <video>/autoplay <iframe> elements a page can keep
 * alive, and silently kills + reloads the page ("A problem repeatedly
 * occurred") once that's exceeded. A page with several video sections that
 * each mount-once-and-never-unmount will blow past that limit as soon as the
 * user scrolls through all of them.
 */
export function LazyVimeoBackground({
  embedSrc,
  posterSrc,
  title,
  className,
}: {
  embedSrc: string;
  posterSrc: string;
  title: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  useEffect(() => {
    if (!containerRef.current) return;
    let unloadTimer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          clearTimeout(unloadTimer);
          setShouldLoad(true);
        } else {
          // iOS Safari's address bar dynamically resizes as you scroll,
          // which can fire a spurious "not intersecting" event mid-scroll
          // even though the element never actually left the screen. A
          // timer-only grace period still unloads (and freezes/blacks out
          // a playing video) if that single bad event sneaks through, so
          // re-verify with the element's real position before acting.
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
  }, []);
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <img
        src={posterSrc}
        alt=""
        className={className}
        fetchPriority="high"
        decoding="async"
      />
      {shouldLoad ? (
        <iframe
          src={embedSrc}
          title={title}
          className={className}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : null}
    </div>
  );
}