import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function ProjectsPanelHero() {
  return (
    <section className="relative h-[calc(100svh-80px)] overflow-hidden bg-transparent text-white sm:h-[calc(100vh-80px)]">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/pLu4iXYhI4k?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=pLu4iXYhI4k"
          title="Shell You Be Mine? Background Video"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[56.25vw] w-[100vw] min-h-full min-w-[177.78vh] scale-[1.75] border-0 sm:scale-[1.25] md:scale-[1.15]"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
      </div>

     <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
        <div className="max-w-2xl mx-auto sm:mx-0 sm:ml-6 lg:ml-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[2rem] border border-white/8 bg-black/25 p-6 backdrop-blur-md shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-8 md:p-10"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl font-semibold leading-tight md:text-6xl">
                  Featured Project:
                  <br />
                  Shell You Be Mine?
                </h2>
                <p className="text-base sm:text-xl font-semibold text-white/80">
                  24 artists. 15 weeks. A Novel Realtime Pipeline.
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-lg leading-7 sm:leading-8 text-white/75">
                <p>
                  That’s all it took for us to deliver this 3-minute, award-winning short from concept to final film. Showcased by 80lvl, Epic Games, Texas A&M, and multiple film festivals from Austin to Japan, <span className="text-white">Shell You Be Mine?</span> is a passion project that was meant to push real-time animation forward and deliver feature-quality results.
                </p>
                <p>
                  The studio’s first project serves as a benchmark and template for upcoming commercial projects, as LightWarp will deliver results at or above the level for your brand, campaign, and story.
                </p>
              </div>

              <div className="flex flex-wrap">
                <Link
                  to={`/projects/${slugify("Shell You Be Mine")}`}
                  className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
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
