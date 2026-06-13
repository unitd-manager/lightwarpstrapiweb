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

  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=${videoId}${start ? `&start=${start}` : ""}`;
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
    description: "This high school project marked my first dive into full 3D animation, and it remains a formative experience in my journey as an artist. Tasked with creating a commercial in Blender, I went far beyond the assignment's requirements: modeling, surfacing, and lighting assets from scratch over the course of two months. It was here that I discovered my love for lighting, experimenting with HDRI-based product lighting, IES profiles, and camera choreography to highlight form and detail. Though created at an early stage in my career, this project laid the groundwork for my technical and artistic growth, teaching me both the discipline of a full production cycle and the excitement of storytelling through light.",
    videoId: "4Esie0f7HVw",
  },
  {
    id: 4,
    title: "Cyberia 2084",
    copyright: "© 2016 Adithya Sathyanarayanan",
    description: "Cyberia 2084 is a personal passion project: a travelogue-style introduction to a sprawling cyberpunk city, built in one semester as a solo effort. Inspired by Ian Hubert's \"lazy tutorials\" and dense image-based texturing techniques, I challenged myself to see how much worldbuilding I could accomplish independently, creating a multilayered dystopia filled with atmosphere, detail, and scale. Rendered in Blender using baked lighting, irradiance caching, and optimized techniques for reflections and GI, the project became my first real-time cinematic experiment. Completing Cyberia 2084 earned me the Disney Aggie Alumni Award scholarship, presented by the head of characters at Walt Disney Animation Studios and signed by Disney alumni. Beyond the recognition, this film fueled my work ethic and strengthened my passion for building worlds that tell stories through scale and light.",
    videoId: "pTmzrHqdS_4",
  },
  
];

export function ProjectsPanelExtraVideos() {
  return (
    <>
      {extraProjects.map((item, idx) => (
        <section key={item.id} className="relative min-h-[90svh] overflow-hidden bg-[#04050f] text-white font-display sm:min-h-[90vh]">
          <div className="absolute inset-0 overflow-hidden">
            <LazyYouTubeBackground
              videoId={item.videoId}
              start={item.start}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[67.5vw] min-w-[213.33vh] min-h-[120%] border-0 object-cover pointer-events-none"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
            <div className="grid gap-16 lg:grid-cols-1 lg:justify-end lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                className={`space-y-8 ${item.title === "Samsung S7 ad" ? "lg:ml-auto lg:max-w-2xl lg:text-right" : "lg:max-w-2xl"} w-full max-w-[640px] rounded-[3rem] bg-transparent p-6 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.45)]`}
              >
                <div className="space-y-6 text-left">
                  <h2 className="text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">{item.title}</h2>
                    <div className="text-sm text-white/60 mt-2">
                      {item.copyright}
                    </div>
                  <div className="space-y-4 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                    <p>{item.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-end">
                  <Link
                    to={`/projects/${slugify(item.title)}`}
                    className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}