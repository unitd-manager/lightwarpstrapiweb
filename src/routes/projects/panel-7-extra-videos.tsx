// src/pages/projects/ProjectsPanelExtraVideos.tsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TransitionLink } from "../../components/page-transition-overlay";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function getYouTubeId(url?: string) {
  if (!url) return null;
  const match = url.match(/(?:v=|\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function RichDescription({ text }: { text: string }) {
  const isHtml = /<[a-z][\s\S]*>/i.test(text);
  if (isHtml) {
    return (
      <div
        className="text-[18px] leading-8 text-white font-light [&_p]:mb-4"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }
  return <p className="text-[18px] leading-8 text-white font-light">{text}</p>;
}

const LazyYouTubeBackground = ({
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

  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0&iv_load_policy=3&playlist=${videoId}${start ? `&start=${start}` : ""}`;
  const posterSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <img src={posterSrc} alt="" className={className} loading={priority ? "eager" : "lazy"} decoding="async" />
      {shouldLoad ? (
        <iframe
          src={embedSrc}
          title="Project Background Video"
          className={className}
          style={{ border: "none" }}
          allowFullScreen
          allow="autoplay; encrypted-media; picture-in-picture"
          loading={priority ? "eager" : "lazy"}
        />
      ) : null}
    </div>
  );
};

export function ProjectsPanelExtraVideos({ data }: { data?: any[] }) {
  // Drop any individually unpublished items that slipped through
  // (defensive — Projects.tsx already filters, but safe to double-check here)
  const publishedData = (data ?? []).filter((item) => item.publish !== false);

  const items = publishedData.map((item, idx) => ({
    id: item.id ?? idx,
    title: item.title ?? "",
    copyrightText: item.copyrightText ?? "",
    description: item.description ?? "",
    video_url: item.video_url ?? "",
    ctaLabel: item.ctaLabel ?? "Learn More",
    ctaLink: item.ctaLink ?? (item.title ? `/projects/${slugify(item.title)}` : "/"),
    align: idx % 2 === 0 ? ("right" as const) : ("left" as const),
  }));

  if (items.length === 0) return null;

  return (
    <>
      {items.map((item, idx) => {
        const videoId = getYouTubeId(item.video_url) ?? "";
        return (
          <section
            key={item.id}
            className="relative min-h-[90svh] overflow-hidden bg-[#04050f] text-white font-display sm:min-h-[90vh]"
          >
            <div className="absolute inset-0 overflow-hidden">
              {videoId && (
                <LazyYouTubeBackground
                  videoId={videoId}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[67.5vw] min-w-[213.33vh] min-h-[120%] border-0 object-cover pointer-events-none"
                  priority={idx === 0}
                />
              )}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
              <div className={`flex ${item.align === "right" ? "justify-end" : "justify-start"}`}>
                <motion.div
                  initial={{ opacity: 0, x: item.align === "right" ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className="w-[95vw] sm:w-full sm:max-w-[50vw] p-6 border border-white/40 rounded-2xl"
                >
                  <div className="space-y-6">
                    <h2 className="inline text-5xl sm:text-6xl font-bold leading-tight text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-black/10 backdrop-blur-[3px] px-2 py-1">
                      {item.title}
                    </h2>

                    <div className="text-sm text-white/100">{item.copyrightText}</div>

                    {item.description && (
                      <div className="rounded-xl bg-black/25 backdrop-blur-[4px] px-3 py-2">
                        <RichDescription text={item.description} />
                      </div>
                    )}

                    {item.ctaLabel && (
                      <div className="flex flex-wrap gap-4">
                        <TransitionLink
                          to={item.ctaLink}
                          className="inline-flex items-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:scale-105"
                        >
                          {item.ctaLabel}
                        </TransitionLink>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}