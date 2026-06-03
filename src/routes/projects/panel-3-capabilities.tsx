import { motion } from "framer-motion";
import { VideoPlayer } from "../../components/video-player";

export function ProjectsPanelCapabilities() {
  return (
    <section className="relative overflow-hidden bg-transparent text-white">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1153379831?autoplay=1&loop=1&muted=1&background=1"
          title="Capabilities Reel Background"
          className="absolute top-1/2 left-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-1 lg:justify-end lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:ml-auto lg:max-w-2xl lg:text-right"
          >
            <div className="space-y-6">
              <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
                Our Capabilities
              </h2>
              <div className="space-y-4 text-lg leading-8 text-white/75">
                <p>
                  Our artists have delivered engaging visuals and productions both personally and professionally before Lightwarp was formed. These projects showcase some of these individual and collaborative work to celebrate and affirm the talent we bring to the table when you work with us.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://vimeo.com/1153379831"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
              >
                Watch Now
              </a>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-white/60">
              All work showcased in the Capabilities reel and section is not property of Lightwarp Studios. These are works created by our individual artists prior to the formation of Lightwarp, or are collaborative projects shared with permission. All rights belong to their respective owners.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
