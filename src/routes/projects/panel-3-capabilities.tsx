import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProjectCredits } from "../../components/ProjectCredits";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const LUSH_VIDEO_ID = "b-qRx-LlB1A";

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

  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=${videoId}`;
  const posterSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div ref={containerRef} className="absolute inset-0" overflow-hidden>
      <img src={posterSrc} alt="" className={className} loading="lazy" decoding="async" />
      {shouldLoad ? (
        <iframe
          src={embedSrc}
          title="Lush Victorian Garden Background Video"
          className={className}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : null}
    </div>
  );
};

export function ProjectsPanelCapabilities() {
  return (
   <section className="relative min-h-[90svh] overflow-hidden bg-transparent text-white font-display sm:min-h-[90vh]">
      <div className="absolute inset-0 overflow-hidden">
        <LazyYouTubeBackground
          videoId={LUSH_VIDEO_ID}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[67.5vw] min-w-[213.33vh] min-h-[120%] border-0 object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-1 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:ml-auto lg:max-w-2xl w-full max-w-[640px] rounded-[3rem] bg-transparent p-6 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Lush Victorian Garden
              </h2>
              <ProjectCredits
                entries={[
                  { role: "Look Development, Set Dressing, Layout, and Procedural Assets by", names: "Alyssa Curran" },
                  { role: "Bridge Model by", names: "Nimi Parmar" },
                ]}
                copyright="© 2025 Alyssa Curran, Adithya Sathyanarayanan, Nimi Parmar"
              />
            </div>
            <p className="max-w-2xl text-left text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Created in collaboration with my friend Alyssa Curran, this project gave me the opportunity to light a lush, naturalistic exterior environment while leaning into a whimsical, storybook vibe. The challenge was to balance a sense of wonder with grounded realism, ensuring the foliage, atmosphere, and composition all felt believable while still transporting viewers into a dreamlike space. Using RenderMan’s ML denoiser when it first released publically and finishing touches in Nuke, I layered in bloom, god rays, chromatic aberration, vignette, and subtle lighting fixes to enhance depth and magic. The final piece not only captured the intended charm but also deepened my passion for lighting as I grew my craft through experimentation and collaboration.
            </p>
            {/* <p className="max-w-2xl text-left text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
              Good design credit: Lightwarp Studio.
            </p> */}
             <div className="flex flex-wrap gap-4">
                <Link
                  to={`/projects/${slugify("Our Capabilities")}`}
                  className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
                >
                  Learn More
                </Link>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}