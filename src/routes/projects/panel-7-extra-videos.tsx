// src/pages/projects/ProjectsPanelExtraVideos.tsx
import { motion } from "framer-motion";
import { TransitionLink } from "../../components/page-transition-overlay";
import { VideoBackground } from "../../components/VideoBackground";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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

export function ProjectsPanelExtraVideos({ data }: { data?: any[] }) {
  const publishedData = (data ?? []).filter((item) => item.publish !== false);

  const items = publishedData.map((item, idx) => ({
    id: item.id ?? idx,
    title: item.title ?? "",
    copyrightText: item.copyrightText ?? "",
    description: item.description ?? "",
    videoSrc: item.video_url || null,
    ctaLabel: item.ctaLabel ?? "Learn More",
    ctaLink: item.ctaLink ?? (item.title ? `/projects/${slugify(item.title)}` : "/"),
    align: idx % 2 === 0 ? ("right" as const) : ("left" as const),
  }));

  if (items.length === 0) return null;

  return (
    <>
      {items.map((item, idx) => (
        <section
          key={item.id}
          className="relative min-h-[90svh] overflow-hidden bg-[#04050f] text-white font-display sm:min-h-[90vh]"
        >
          <div className="absolute inset-0 overflow-hidden">
            {item.videoSrc && (
              <VideoBackground
                src={item.videoSrc}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[67.5vw] min-w-[213.33vh] min-h-[120%] object-cover pointer-events-none"
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
      ))}
    </>
  );
}