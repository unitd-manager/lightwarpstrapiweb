import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageShell } from "../components/page-shell";
import { Section } from "../components/section";
import { LighthouseBeam } from "../components/lighthouse-beam";

const featuredVideos = [
  {
    title: "Featured Project Reel",
    label: "Studio Project",
    desc: "A flagship project video created by our team to showcase client storytelling, motion design, and polished visual execution.",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1524041253189-71bc4786b35c?auto=format&fit=crop&w=1200&q=80",
    highlight: "+28% audience recall",
  },
  {
    title: "Product Motion Reel",
    label: "Product Visuals",
    desc: "A product-focused video that shows material detail, animation, and a cohesive branded look.",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Immersive Scene Breakdown",
    label: "Environment",
    desc: "A short case film highlighting our scene creation, lighting, and atmosphere work in a polished edit.",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Character Spotlight",
    label: "Animation",
    desc: "A character-centric demo reel showcasing emotion, gesture, and performance animation.",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "VFX Showcase",
    label: "Visual Effects",
    desc: "A collection of visual effects work demonstrating compositing, particle systems, and dynamic simulations.",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Motion Graphics Reel",
    label: "Graphics",
    desc: "A reel of kinetic typography, animated infographics, and brand-focused motion design.",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1499716066022-abc6e34c9e77?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Architectural Visualization",
    label: "Arch Viz",
    desc: "A walkthrough of an architectural space, showcasing lighting, materials, and environmental design.",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cinematic Sequence",
    label: "Cinematography",
    desc: "A short cinematic sequence with full production quality, camera work, and color grading.",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FeaturedVideos() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative -mt-28 min-h-[50vh] flex items-center overflow-hidden">
        <LighthouseBeam intensity="strong" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand pulse-glow" />
              Studio Portfolio
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.95]">
              Our <span className="text-gradient">Video</span> Work
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
              A complete collection of videos created by our studio — from concept through final delivery. Every frame is a reflection of our craft and commitment to visual excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ALL VIDEOS */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredVideos.map((video) => (
            <motion.article
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-black/10 transition-transform hover:-translate-y-1"
            >
              <video
                controls
                preload="metadata"
                poster={video.poster}
                className="h-60 w-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {video.label}
                </div>
                <h4 className="text-xl font-semibold text-white">{video.title}</h4>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{video.desc}</p>
                {video.highlight && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-brand" />
                    {video.highlight}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative">
        <div className="relative overflow-hidden rounded-3xl glass border-gradient p-10 sm:p-16 text-center">
          <LighthouseBeam />
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-60 w-[120%] rounded-[100%] bg-pink/20 blur-3xl" />
          <div className="relative">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Inspired by our work?</div>
            <h2 className="mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Let's Create <span className="text-gradient">Your Story</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Ready to bring your vision to life with stunning visuals? Let's talk.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand pulse-glow transition-transform hover:scale-105"
            >
              Start Your Project →
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
