import { useEffect, useRef, useState } from "react";

/**
 * Lazily mounts a Vimeo background iframe only once the section is about to
 * scroll into view. A poster image is shown immediately so there's no blank
 * gap, and the (heavy) Vimeo player + video stream don't compete for
 * bandwidth/connections with other reels on the page until needed.
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

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "600px 0px", threshold: 0.01 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <img src={posterSrc} alt="" className={className} loading="lazy" decoding="async" />
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
