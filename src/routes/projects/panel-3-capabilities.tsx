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

  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0&iv_load_policy=3&playlist=${videoId}`;
  const posterSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
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
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[50vw] p-6 border border-white/40 rounded-2xl"
          >
            <div className="space-y-6">

              {/* Title */}
              <h2 className="inline text-5xl sm:text-6xl font-bold leading-tight text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-black/10 backdrop-blur-[3px] px-2 py-1">
                Lush Victorian Garden
              </h2>

              {/* LightWarp Contributions */}
              <div className="space-y-4">
                <h3 className="inline text-lg font-semibold mr-2 mb-2 text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-black/10 backdrop-blur-[3px] px-3 py-1">
                  Lightwarp Contributions
                </h3>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["Lighting", "Compositing", "Camera"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credits */}
              <div className="rounded-2xl border border-white/60 bg-white/5 backdrop-blur-sm p-5">
                <div className="text-white [&_*]:text-white">
                  <ProjectCredits
                    entries={[
                      { role: "Look Development, Set Dressing, Layout, and Procedural Assets by", names: "Alyssa Curran" },
                      { role: "Bridge Model by", names: "Nimi Parmar" },
                    ]}
                    copyright="© 2025 Alyssa Curran, Adithya Sathyanarayanan, Nimi Parmar"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="rounded-xl bg-black/30 backdrop-blur-[4px] px-3 py-2">
                <p className="text-[18px] leading-8 text-white font-light">
                  Lush Victorian Garden is a collaborative exterior lighting study that merges naturalistic detail with a whimsical, storybook aesthetic. The environment balances imaginative wonder with grounded realism — every element of foliage, atmosphere, and composition crafted to feel believable while transporting the viewer into a dreamlike space. Lit and rendered using RenderMan's ML denoiser at its public release, with final compositing in Nuke layering in bloom, god rays, chromatic aberration, vignette, and precise lighting refinements, the piece demonstrates Lightwarp's command of cinematic exterior lighting and photorealistic environmental rendering.
                </p>
              </div>

              {/* Button */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to={`/projects/${slugify("Our Capabilities")}`}
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
  );
}