import { PageShell } from "../components/page-shell";
import { motion } from "framer-motion";
import { LazyVimeoBackground } from "../components/lazy-vimeo-background";
import { ProjectsPanelCapabilities } from "./projects/panel-3-capabilities";
import { ProjectsPanelExtraVideosCapabilities } from "./projects/panel-7-extra-videos-capabilities";

export default function Capabilities() {
  const vimeoId = "1153379831";
  const posterSrc = `https://vumbnail.com/${vimeoId}.jpg`;
  const embedSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&autopause=0&background=1&controls=0&title=0&byline=0&portrait=0&dnt=1&keyboard=0&quality=720p`;
  const vimeoPageUrl = `https://vimeo.com/${vimeoId}`;

  return (
    <PageShell copyrightText="© 2025 Lightwarp LLC. All rights reserved.">

      {/* Page title banner */}
      <section className="relative text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/25 via-cyan-500/15 to-indigo-700/25" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-16 text-center">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl text-white bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 [text-shadow:0_1px_0_rgba(255,255,255,0.18),0_-1px_0_rgba(0,0,0,0.7),0_14px_30px_rgba(0,0,0,0.55)]">
            OUR CAPABILITIES
          </h1>
        </div>
      </section>

      {/* Hero reel section */}
      <section className="relative h-[calc(100svh-80px)] overflow-hidden bg-transparent text-white font-display sm:h-[calc(100vh-80px)]">
        <div className="absolute inset-0 overflow-hidden">
          <LazyVimeoBackground
            embedSrc={embedSrc}
            posterSrc={posterSrc}
            title="Capabilities Reel Background Video"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[56.25vw] w-[100vw] min-h-full min-w-[177.78vh] scale-[1.75] border-0 object-cover sm:scale-[1.25] md:scale-[1.15]"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
        </div>

        <div className="relative flex h-[540px] w-full items-center px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[50vw] p-6 border border-white/40 rounded-2xl"
          >
            <div className="space-y-6">

              {/* Title */}
              <h2 className="inline text-3xl sm:text-4xl font-bold leading-tight text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-black/10 backdrop-blur-[3px] px-2 py-1">
                Watch our capabilities reel — a quick look at what we deliver
              </h2>

              {/* Description */}
              <div className="rounded-xl bg-black/30 backdrop-blur-[4px] mt-[10px] px-3 py-3 space-y-3">
                <p className="text-[
                16px] leading-7 text-white font-light">
                  Before the founding of our studio, our team members have always been creating stunning 3D renders, tools, assets, and projects.
                </p>
                <p className="text-[16px] leading-7 text-white font-light">
                  Our Capabilities Reel showcases many of these personal projects and collaborations to give even more context and confidence to our skillsets and quality of work.
                </p>
                <p className="text-[16px] leading-7 text-white/70 font-light">
                  Creative direction, visual development, and reel production by Lightwarp Studio.
                </p>
              </div>

              {/* Button */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={vimeoPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:bg-white/90 hover:scale-105"
                >
                  Watch Now
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <ProjectsPanelCapabilities />
      <ProjectsPanelExtraVideosCapabilities />

    </PageShell>
  );
}