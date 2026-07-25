import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TransitionLink } from "../../components/page-transition-overlay";
import { ProjectCredits } from "../../components/ProjectCredits";
import type { CapabilityItem } from "../capabilities";

// ─── Helpers ──────────────────────────────────────────────────────────────────

type CreditEntry = { role: string; names: string };

type MappedProject = {
  id: number;
  title: string;
  contributions: string[];
  contributionsLabel: string;
  creditsLabel: string;
  credits: CreditEntry[];
  description: string;
  videoId: string;
  hideLearnMore: boolean;
  start?: number;
  watchLink?: string;
  watchLabel?: string;
  ctaLink?: string;
  ctaLabel?: string;
  copyrightText?: string;
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const watchBtnClass =
  "inline-flex items-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:scale-105";

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

// ─── LazyMediaBackground ─────────────────────────────────────────────────────

const LazyMediaBackground = ({
  videoId,
  className,
  priority,
  start,
}: {
  videoId: string;
  className?: string;
  priority?: boolean;
  start?: number;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(Boolean(priority));

  useEffect(() => {
    if (priority) return;
    if (!containerRef.current) return;
    let unloadTimer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
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

  const isVideo   = /\.(mp4|webm|ogg|mov)$/i.test(videoId);
  const isImage   = /\.(avif|webp|jpe?g|png|gif|svg)$/i.test(videoId);
  const isYouTube = !isVideo && !isImage;

  const embedSrc =
    "https://www.youtube.com/embed/" + videoId +
    "?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0&iv_load_policy=3&playlist=" +
    videoId + (start ? "&start=" + start : "");

  const posterSrc = isYouTube
    ? "https://i.ytimg.com/vi/" + videoId + "/hqdefault.jpg"
    : undefined;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {!shouldLoad && isImage
        ? <img src={videoId} alt="" className={className} loading={priority ? "eager" : "lazy"} decoding="async" />
        : null}
      {!shouldLoad && !isImage && posterSrc
        ? <img src={posterSrc} alt="" className={className} loading={priority ? "eager" : "lazy"} decoding="async" />
        : null}
      {shouldLoad ? (
        isVideo ? (
          <video src={videoId} className={className} autoPlay muted loop playsInline preload="auto" />
        ) : isImage ? (
          <img src={videoId} alt="" className={className} />
        ) : (
          <iframe
            src={embedSrc}
            title="Project Background"
            className={className}
            style={{ border: "none" }}
            allowFullScreen
            allow="autoplay; encrypted-media; picture-in-picture"
            loading={priority ? "eager" : "lazy"}
          />
        )
      ) : null}
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────

type Props = {
  useCaseItems?: CapabilityItem[];
};

export function ProjectsPanelExtraVideosCapabilities({ useCaseItems }: Props) {
  // Drop individually unpublished items first (Caught Off Guard, The Jab, etc.)
  const publishedItems = (useCaseItems ?? []).filter(
    (item: any) => item.publish !== false
  );

  const projects: MappedProject[] = publishedItems.map((item) => ({
    id:                 item.id,
    title:              item.title ?? "",
    contributions:      parseContributions(item.highlight_description ?? ""),
    contributionsLabel: item.contributionsLabel ?? "",
    creditsLabel:       item.creditsLabel ?? "",
    // Drop individually unpublished credit rows within each item
    credits:            (item.credits ?? []).filter((c: any) => c.publish !== false),
    description:        item.description ?? "",
    videoId:            extractYouTubeId(item.video_url ?? "") || (item.video_url ?? ""),
    hideLearnMore:      !item.ctaLink,
    ctaLink:            item.ctaLink,
    ctaLabel:           item.ctaLabel,
    watchLabel:         item.watchnow_label,
    watchLink:          resolveWatchHref(item.video_url, item.watchnow_link),
    copyrightText:      item.copyrightText,
  }));

  if (projects.length === 0) return null;

  return (
    <>
      {projects.map((item, idx) => (
        <section
          key={item.id}
          className="relative min-h-[90svh] overflow-hidden bg-[#04050f] text-white font-display sm:min-h-[90vh]"
        >
          <div className="absolute inset-0 overflow-hidden">
            <LazyMediaBackground
              videoId={item.videoId}
              start={item.start}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[67.5vw] min-w-[213.33vh] min-h-[120%] border-0 object-cover pointer-events-none"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
            <div className={`flex ${idx % 2 === 1 ? "justify-end" : "justify-start"}`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                className="w-full max-w-[95vw] sm:max-w-[50vw] p-6 border border-white/40 rounded-2xl"
              >
                <div className="space-y-6">

                  {/* Title */}
                  {item.title && (
                    <h2 className="inline text-5xl sm:text-6xl font-bold leading-tight text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-black/10 backdrop-blur-[3px] px-2 py-1">
                      {item.title}
                    </h2>
                  )}

                  {/* Contributions */}
                  {item.contributions.length > 0 && (
                    <div className="rounded-2xl border border-white/60 bg-white/5 backdrop-blur-sm p-5">
                      {item.contributionsLabel && (
                        <p className="text-xs font-bold text-white/100 uppercase tracking-widest mb-3">
                          {item.contributionsLabel}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-3">
                        {item.contributions.map((c) => (
                          <span
                            key={c}
                            className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Credits */}
                  {item.credits.length > 0 && (
                    <div className="rounded-2xl border border-white/60 bg-white/5 backdrop-blur-sm p-5">
                      <div className="text-white [&_*]:text-white">
                        <ProjectCredits
                          label={item.creditsLabel}
                          entries={item.credits}
                          copyright={item.copyrightText}
                        />
                      </div>
                    </div>
                  )}

                  {/* Description */}
                {item.description && (
  <div className="rounded-xl bg-black/25 backdrop-blur-[4px] px-3 py-2 space-y-3">
    {item.description.split("\n\n").map((para, i) => (
      <p key={i} className="text-[18px] leading-8 text-white font-light">
        {para}
      </p>
    ))}
  </div>
)}

                  {/* CTA */}
                  {!item.hideLearnMore && (
                    <div className="flex flex-wrap gap-4">
                      {item.ctaLabel && (
                        <TransitionLink
                          to={item.ctaLink || "/" + slugify(item.title)}
                          className={watchBtnClass}
                        >
                          {item.ctaLabel}
                        </TransitionLink>
                      )}
                      {!isVideoOrImage(item.videoId) && item.watchLink && item.watchLabel && (
                        <a
                          href={item.watchLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={watchBtnClass}
                        >
                          {item.watchLabel}
                        </a>
                      )}
                    </div>
                  )}

                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

function isVideoOrImage(videoId: string): boolean {
  return /\.(mp4|webm|mov|avif|webp|jpe?g|png|gif|svg)$/i.test(videoId);
}