import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function ProjectsPanelHero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#05050d] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/pLu4iXYhI4k?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=pLu4iXYhI4k"
          title="Shell You Be Mine? Background Video"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '160%',
            height: '110%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
          }}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute" />
        <div className="absolute" />
      </div>

     <div className="relative max-w-none w-screen left-1/2 right-1/2 -mx-[50vw] px-6 py-24 lg:py-28">
        <div className="max-w-2xl ml-6 sm:ml-8 lg:ml-12">
         

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-16 rounded-[2rem] border border-white/8 bg-black/25 p-10 backdrop-blur-md shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
                  Featured Project:
                  <br />
                  Shell You Be Mine?
                </h2>
                <p className="text-xl font-semibold text-white/80">
                  24 artists. 15 weeks. A Novel Realtime Pipeline.
                </p>
              </div>

              <div className="space-y-4 text-lg leading-8 text-white/75">
                <p>
                  That’s all it took for us to deliver this 3-minute, award-winning short from concept to final film. Showcased by 80lvl, Epic Games, Texas A&M, and multiple film festivals from Austin to Japan, <span className="text-white">Shell You Be Mine?</span> is a passion project that was meant to push real-time animation forward and deliver feature-quality results.
                </p>
                <p>
                  The studio’s first project serves as a benchmark and template for upcoming commercial projects, as LightWarp will deliver results at or above the level for your brand, campaign, and story.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects/shell-you-be-mine"
                  className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
                >
                  Learn More
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=yinRrmEpfr4"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-white/20"
                >
                  Watch Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
