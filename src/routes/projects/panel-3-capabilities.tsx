import { motion } from "framer-motion";
import { VideoPlayer } from "../../components/video-player";
import { Link } from "react-router-dom";
import video25 from "../../assets/images/video25.mp4";


const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function ProjectsPanelCapabilities() {
  return (
    <section className="relative overflow-hidden bg-transparent text-white">
      <div className="absolute inset-0 overflow-hidden">
        <video
  src={video25}
          className="absolute top-1/2 left-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          loop
          muted
          playsInline
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
                Lush Victorian Garden
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/60">
              Created in collaboration with my friend Alyssa Curran, this project gave me the opportunity to light a lush, naturalistic exterior environment while leaning into a whimsical, storybook vibe. The challenge was to balance a sense of wonder with grounded realism, ensuring the foliage, atmosphere, and composition all felt believable while still transporting viewers into a dreamlike space. Using RenderMan’s ML denoiser when it first released publically and finishing touches in Nuke, I layered in bloom, god rays, chromatic aberration, vignette, and subtle lighting fixes to enhance depth and magic. The final piece not only captured the intended charm but also deepened my passion for lighting as I grew my craft through experimentation and collaboration.
            </p>
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
