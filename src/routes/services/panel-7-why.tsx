import { motion } from "framer-motion";
import { Section } from "../../components/section";

const reasons = [
  {
    icon: "◐",
    stat: "Full Pipeline",
    title: "Concept to Final Frame",
    desc: "We handle every stage in-house — script, storyboard, 3D, VFX, color, and delivery. No hand-offs, no gaps, no miscommunication.",
  },
  {
    icon: "✦",
    stat: "Boutique Focus",
    title: "Your Project Gets Our A-Team",
    desc: "We don't farm work out. Every project is led by our senior creatives from kickoff to final render. You always know who's on your work.",
  },
  {
    icon: "◉",
    stat: "Real-time Ready",
    title: "Unreal Engine Native",
    desc: "From LED wall content to interactive XR, we build in real-time from day one — not as an afterthought. Faster iteration, richer output.",
  },
  {
    icon: "▣",
    stat: "24h Turnaround",
    title: "Always Reachable",
    desc: "A dedicated project manager keeps you in the loop at every milestone. We respond within 24 hours — even mid-production.",
  },
  {
    icon: "◭",
    stat: "Award-Winning",
    title: "12 Industry Awards",
    desc: "Recognized at Short Shorts, Motion Awards, and Vimeo Staff Pick. We don't just meet the brief — we make it something worth celebrating.",
  },
  {
    icon: "◇",
    stat: "Global Reach",
    title: "San Francisco & Lisbon",
    desc: "Two studios across two time zones means near-round-the-clock production capacity and creative perspectives that span continents.",
  },
];

export function ServicesPanelWhy() {
  return (
    <Section
      eyebrow="Why LightWarp"
      title={
        <>
          The Studio That <span className="text-gradient">Delivers</span>
        </>
      }
      subtitle="There are a lot of studios out there. Here's what makes working with us different."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-2xl glass border-gradient p-7 transition-transform hover:-translate-y-1"
          >
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-pink/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-pink">
                {r.stat}
              </div>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-lg text-white transition-transform group-hover:rotate-12">
                {r.icon}
              </div>
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {r.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
