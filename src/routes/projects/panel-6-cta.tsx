import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LighthouseBeam } from "../../components/lighthouse-beam";

export function ProjectsPanelCta() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <LighthouseBeam intensity="strong" />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand pulse-glow" />
            Start A Project
          </div>
          <h2 className="text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
            Your Story Deserves{" "}
            <span className="text-gradient">The Light</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Share your brief and we'll show you what's possible. Every
            collaboration begins with a single conversation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-gradient-brand px-8 py-3.5 text-sm font-semibold text-white shadow-lg glow-brand transition-opacity hover:opacity-90"
            >
              Start A Project
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
