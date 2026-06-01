import { motion } from "framer-motion";
import { Section } from "../../components/section";

const values = [
  {
    icon: "◐",
    title: "Real Artists",
    desc: "Every member of our team is a working artist or technician — no account managers, no middlemen. The people on your project are the ones who made it.",
  },
  {
    icon: "✦",
    title: "Real-Time First",
    desc: "We built our pipeline around Unreal Engine and real-time workflows from day one — delivering cinematic quality at a fraction of traditional timelines.",
  },
  {
    icon: "◉",
    title: "Passion & Intention",
    desc: "We are a team with passion, vision, and intention. Every project is treated as a creative opportunity, not just a deliverable.",
  },
  {
    icon: "◭",
    title: "Studio Experience",
    desc: "Our team brings experience from major animated studios. That industry knowledge drives quality and results for every client we work with.",
  },
];

export function AboutPanelValues() {
  return (
    <Section
      eyebrow="Our Values"
      title={
        <>
          What We <span className="text-gradient">Stand For</span>
        </>
      }
      subtitle="We are a team of real artists, technicians, and production staff with passion, vision, and intention — ready to help with any of your 3D visualization needs."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl glass border-gradient p-7 transition-transform hover:-translate-y-1"
          >
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-pink/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-xl text-white">
                {v.icon}
              </div>
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
