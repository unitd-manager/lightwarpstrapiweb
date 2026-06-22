import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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

const extraProjects = [
  {
    id: 17,
    title: "Samsung S7 ad",
    copyright: "© 2016 Adithya Sathyanarayanan",
    description: "This early production marks Lightwarp's first foray into full 3D animation — a high school commercial project executed entirely in Blender that went well beyond the scope of the original assignment. Over the course of two months, every asset was built from the ground up, encompassing modeling, surfacing, and lighting entirely from scratch. The project served as the foundation for Lightwarp's lighting philosophy, exploring HDRI-based product lighting, IES profiles, and deliberate camera choreography to draw out form, material detail, and visual storytelling. Though produced at an early stage, the discipline of running a complete production cycle and the creative possibilities unlocked through light established the core sensibilities that continue to define Lightwarp's work today.",
    videoId: "4Esie0f7HVw",
    align: "right",
  },
  {
    id: 4,
    title: "Cyberia 2084",
    copyright: "© 2016 Adithya Sathyanarayanan",
    description: "Cyberia 2084 is a solo worldbuilding project conceived and executed in a single semester — a travelogue-style introduction to a sprawling, multilayered cyberpunk city built entirely from the ground up. Drawing inspiration from Ian Hubert's dense image-based texturing techniques, the project pushed how much atmospheric depth and narrative scale could be achieved independently. Rendered in Blender using baked lighting, irradiance caching, and optimized approaches to reflections and global illumination, it stands as Lightwarp's first real-time cinematic experiment. Cyberia 2084 earned the Disney Aggie Alumni Award scholarship, presented by the head of characters at Walt Disney Animation Studios and signed by Disney alumni — recognition that cemented the studio's commitment to building worlds that tell stories through scale, atmosphere, and light.",
    videoId: "pTmzrHqdS_4",
    align: "left",
  },
];

export function ProjectsPanelExtraVideos() {
  return (
    <>
      {extraProjects.map((item, idx) => (
        <section
          key={item.id}
          className="relative min-h-[90svh] overflow-hidden bg-[#04050f] text-white font-display sm:min-h-[90vh]"
        >
          <div className="absolute inset-0 overflow-hidden">
            <LazyYouTubeBackground
              videoId={item.videoId}
              start={item.start}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[67.5vw] min-w-[213.33vh] min-h-[120%] border-0 object-cover pointer-events-none"
              priority={idx === 0}
            />
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

                  {/* Title */}
                  <h2 className="inline text-5xl sm:text-6xl font-bold leading-tight text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-black/10 backdrop-blur-[3px] px-2 py-1">
                    {item.title}
                  </h2>

                  {/* Copyright */}
                  <div className="text-sm text-white/100">
                    {item.copyright}
                  </div>

                  {/* Description */}
                  <div className="rounded-xl bg-black/25 backdrop-blur-[4px] px-3 py-2">
                    <p className="text-[18px] leading-8 text-white font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to={`/projects/${slugify(item.title)}`}
                      className="inline-flex items-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}