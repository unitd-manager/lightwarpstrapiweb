import { useEffect, useRef, useState } from "react";

interface LazyVideoBackgroundProps {
  videoSrc: string;
  posterSrc?: string;
  title: string;
  className?: string;
}

// src/components/lazy-video-background.tsx
//
// The poster image (not the video) is what paints first and is what
// Lighthouse's LCP measurement sees, so it loads immediately/eagerly.
// The actual .mp4 is what was previously killing performance: `preload="auto"`
// + `autoPlay` meant the browser started pulling down the full video file the
// instant the component mounted, fighting the JS bundle, fonts, and poster
// image for bandwidth on the same connection during the most critical part
// of the page load.
//
// Fix: keep `preload="none"` and don't attach a <source> at all until *after*
// the browser has painted (next idle callback / short timeout), and only
// start the video once it's actually in (or near) the viewport. On a hero
// that's on-screen at load, this still starts the video almost immediately
// for the user — it just no longer competes with the render-critical
// resources for the first paint.
export function LazyVideoBackground({
  videoSrc,
  posterSrc,
  title,
  className,
}: LazyVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // If the video isn't even in/near the viewport, don't bother loading it
    // until it scrolls close — this also makes the component safe to reuse
    // for below-the-fold background video, not just hero sections.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          // Defer past the initial paint so the poster, fonts, and critical
          // JS win the bandwidth race first.
          const schedule =
            "requestIdleCallback" in window
              ? (cb: () => void) => (window as any).requestIdleCallback(cb, { timeout: 1500 })
              : (cb: () => void) => setTimeout(cb, 300);
          schedule(() => setShouldLoad(true));
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      // Attaching src only now is what actually defers the network request —
      // preload="none" alone isn't enough once a <source> is already present.
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay can be blocked by the browser in some contexts (e.g. data
        // saver mode) — muted+playsInline covers most cases, but silently
        // no-op rather than throwing if it's still refused.
      });
    }
  }, [shouldLoad]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={posterSrc || undefined}
        aria-label={title}
        className={className}
      >
        {shouldLoad && <source src={videoSrc} type="video/mp4" />}
      </video>
    </div>
  );
}