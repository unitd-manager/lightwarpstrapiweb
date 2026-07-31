import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface UseCaseItem {
  id: number;
  title?: string;
  description?: string;
  highlight_description?: string;
  ctaLabel?: string;
  ctaLink?: string;
  video_url?: string;
  copyrightText?: string;
  watchnow_label?: string;
  watchnow_link?: string;
  publish?: boolean;
}

export interface UseCaseSingleProps {
  main_title?: string;
  category_name?: string;
  use_case_items?: UseCaseItem[];
}

function extractYouTubeId(videoUrl: string): string {
  if (!videoUrl) return "";
  if (/^[a-zA-Z0-9_-]{11}$/.test(videoUrl)) return videoUrl;

  try {
    const url = new URL(videoUrl);
    const host = url.hostname.replace(/^www\./, "");
    const isYouTubeHost =
      host === "youtube.com" || host === "youtu.be" || host === "m.youtube.com";

    if (isYouTubeHost) {
      return url.searchParams.get("v") ?? url.pathname.split("/").pop() ?? videoUrl;
    }
    return videoUrl;
  } catch {
    return videoUrl;
  }
}

function parseContributions(highlight: string): string[] {
  if (!highlight) return [];
  return highlight
    .replace(/<[^>]+>/g, "")
    .trim()
    .split(/[•·,|]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function resolveWatchHref(videoUrl?: string, watchnowLink?: string): string | undefined {
  if (watchnowLink) return watchnowLink;
  if (!videoUrl) return undefined;
  if (/^[a-zA-Z0-9_-]{11}$/.test(videoUrl)) return `https://www.youtube.com/watch?v=${videoUrl}`;

  try {
    const url = new URL(videoUrl);
    const host = url.hostname.replace(/^www\./, "");
    const path = url.pathname.replace(/(^\/|\/$)/g, "");

    if (host === "youtu.be") return `https://www.youtube.com/watch?v=${path}`;
    if (host === "youtube.com" || host === "m.youtube.com") {
      if (path.startsWith("embed/")) return `https://www.youtube.com/watch?v=${path.split("/").pop()}`;
      const id = url.searchParams.get("v") || path.split("/").pop();
      return id ? `https://www.youtube.com/watch?v=${id}` : videoUrl;
    }
  } catch {
    // fall through
  }

  return videoUrl;
}

const LazyYouTubeBackground = ({
  videoId,
  className,
}: {
  videoId: string;
  className?: string;
}) => {
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

  const embedSrc =
    "https://www.youtube.com/embed/" +
    videoId +
    "?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0&iv_load_policy=3&playlist=" +
    videoId;
  const posterSrc = "https://i.ytimg.com/vi/" + videoId + "/hqdefault.jpg";

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <img src={posterSrc} alt="" className={className} loading="lazy" decoding="async" />
      {shouldLoad ? (
        <iframe
          src={embedSrc}
          title="Use case background video"
          className={className}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : null}
    </div>
  );
};

// Single use-case card — now styled like ProjectsPanelCapabilities:
// full-bleed YouTube background + right-aligned glass panel with content.
function UseCaseCard({ item }: { item: UseCaseItem }) {
  if (item.publish === false) return null;

  const videoId = extractYouTubeId(item.video_url ?? "");
  const contributions = parseContributions(item.highlight_description ?? "");
  const watchHref = resolveWatchHref(item.video_url, item.watchnow_link);

  return (
    <section className="relative min-h-[90svh] overflow-hidden bg-transparent text-white font-display sm:min-h-[90vh] rounded-2xl">
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {videoId && (
          <LazyYouTubeBackground
            videoId={videoId}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[67.5vw] min-w-[213.33vh] min-h-[120%] border-0 object-cover pointer-events-none"
          />
        )}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="flex justify-center sm:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[95vw] mx-auto sm:mx-0 sm:w-full sm:max-w-[50vw] p-6 border border-white/40 rounded-2xl"
          >
            <div className="space-y-6">

              {/* Title */}
              {item.title && (
                <h2 className="inline text-5xl sm:text-6xl font-bold leading-tight text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-black/10 backdrop-blur-[3px] px-2 py-1">
                  {item.title}
                </h2>
              )}

              {/* Highlight tags (parsed from highlight_description) */}
              {contributions.length > 0 && (
                <div className="rounded-2xl border border-white/60 bg-white/5 backdrop-blur-sm p-5">
                  <div className="flex flex-wrap gap-3">
                    {contributions.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Copyright text */}
              {item.copyrightText && (
                <p className="text-white/50 text-xs">{item.copyrightText}</p>
              )}

              {/* Description */}
              {item.description && (
                <div className="rounded-xl bg-black/30 backdrop-blur-[4px] px-3 py-2 space-y-3">
                  {item.description.split("\n\n").map((para, i) => (
                    <p key={i} className="text-[18px] leading-8 text-white font-light">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                {item.ctaLabel && (
                  <a
                    href={item.ctaLink || "/"}
                    className="inline-flex items-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:scale-105"
                  >
                    {item.ctaLabel}
                  </a>
                )}
                {watchHref && item.watchnow_label && (
                  <a
                    href={watchHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:scale-105"
                  >
                    {item.watchnow_label}
                  </a>
                )}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function UseCaseSingle({
  main_title,
  category_name,
  use_case_items = [],
}: UseCaseSingleProps) {
  return (
    <section className="w-full">

      {/* Section heading — purple full-width banner */}
      {(main_title || category_name) && (
        <div
          className="w-full text-center py-12 lg:py-16 mb-0"
          style={{ background: "linear-gradient(135deg, #4c3bc4 0%, #6250da 100%)" }}
        >
          {category_name && (
            <p className="text-white/70 font-semibold uppercase tracking-widest text-xs mb-3">
              {category_name}
            </p>
          )}
          {main_title && (
            <h2 className="text-white text-4xl lg:text-6xl font-black">{main_title}</h2>
          )}
        </div>
      )}

      {/* Use case items stacked */}
      <div className="lw-container">
        <div className="space-y-10 py-10">
          {use_case_items.map((item) => (
            <UseCaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}