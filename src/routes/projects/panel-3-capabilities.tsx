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
   <section className="relative min-h-[90vh] overflow-hidden bg-transparent text-white">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/b-qRx-LlB1A?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=b-qRx-LlB1A"
          title="Lush Victorian Garden Background Video"
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
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-1 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:ml-auto lg:max-w-2xl"
          >
            <div className="space-y-6">
              <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
                Lush Victorian Garden
              </h2>
            </div>
            <p className="max-w-2xl text-left text-lg leading-7 text-white/60">
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
