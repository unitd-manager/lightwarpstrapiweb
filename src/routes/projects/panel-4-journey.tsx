import { motion } from "framer-motion";
import { Section } from "../../components/section";

const steps = [
  {
    num: "01",
    title: "Submit Your Brief",
    desc: "Fill out a short creative brief or drop us a message. We respond within 24 hours with questions, ideas, and an initial scope.",
    tag: "Day 1",
  },
  {
    num: "02",
    title: "Creative Kickoff",
    desc: "A focused call with your dedicated team. We align on vision, references, tone, and timeline before a single frame is touched.",
    tag: "Day 2–3",
  },
  {
    num: "03",
    title: "Concept & Storyboard",
    desc: "Style frames and a full storyboard are shared for your review. We iterate until the direction feels exactly right.",
    tag: "Week 1",
  },
  {
    num: "04",
    title: "Production",
    desc: "3D build, animation, lighting, VFX, and color — all in-house. You receive milestone previews so there are never any surprises.",
    tag: "Week 2–4",
  },
  {
    num: "05",
    title: "Final Delivery",
    desc: "Master files in every format you need, plus a revision window post-delivery. Your project, ready to publish.",
    tag: "Final Week",
  },
];

export function ProjectsPanelJourney() {
  return (
    <Section
      eyebrow="The Process"
      title={
        <>
          From Brief <span className="text-gradient">to Screen</span>
        </>
      }
      subtitle="Every project follows a battle-tested production flow — transparent at every stage, no surprises at the end."
    >
      <div className="mx-auto max-w-3xl space-y-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex gap-5 rounded-2xl glass border-gradient p-6 transition-transform hover:-translate-y-0.5"
          >
            <div className="shrink-0 text-3xl font-black text-gradient leading-none pt-1">
              {s.num}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-base font-semibold">{s.title}</h3>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
