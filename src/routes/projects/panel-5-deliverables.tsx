import { motion } from "framer-motion";
import { Section } from "../../components/section";

const deliverables = [
  {
    icon: "◐",
    title: "4K & 8K Masters",
    desc: "Ultra-high resolution exports ready for broadcast, cinema, and large-format display.",
  },
  {
    icon: "◇",
    title: "Multi-Format Output",
    desc: "MP4, MOV, ProRes, WebM, and platform-specific cuts for social, OTT, and OOH.",
  },
  {
    icon: "◉",
    title: "Source Files",
    desc: "Full project files in Blender, Cinema 4D, and After Effects — yours to keep and extend.",
  },
  {
    icon: "▣",
    title: "AR & Real-time Assets",
    desc: "Optimized models and scenes for Unreal Engine, Unity, and AR deployment pipelines.",
  },
  {
    icon: "✦",
    title: "Frame-by-Frame Breakdown",
    desc: "Isolated element renders, alpha channels, and multi-pass EXRs for your compositors.",
  },
  {
    icon: "◭",
    title: "Brand Asset Library",
    desc: "Logos, motion templates, and loopable assets packaged for your in-house team to use ongoing.",
  },
];

export function ProjectsPanelDeliverables() {
  return (
    <Section
      eyebrow="What You Receive"
      title={
        <>
          Every File, <span className="text-gradient">Every Format</span>
        </>
      }
      subtitle="We hand off production-ready assets built to live anywhere — screen, stage, or mixed reality."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {deliverables.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-2xl glass border-gradient p-6 transition-transform hover:-translate-y-1"
          >
            <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-violet/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-lg text-white transition-transform group-hover:rotate-12">
                {d.icon}
              </div>
              <h3 className="text-base font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
