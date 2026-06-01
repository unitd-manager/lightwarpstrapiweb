import { motion } from "framer-motion";
import { Section } from "../../components/section";

const timeline = [
  { year: "2018", title: "First Beam", desc: "Two friends, one render farm in a garage." },
  { year: "2020", title: "Studio Founded", desc: "Lightwarp opens its San Francisco doors." },
  { year: "2022", title: "Lisbon Annex", desc: "European studio expands the practice across timezones." },
  { year: "2024", title: "Realtime Lab", desc: "Unreal-powered virtual production division." },
  { year: "2026", title: "Today", desc: "180+ shipped projects. 12 awards. Still illuminating." },
];

export function AboutPanelTimeline() {
  return (
    <Section
      eyebrow="About"
      title={<>Our <span className="text-gradient">Story</span></>}
      subtitle="A studio born on the coast, obsessed with light. We treat every frame like a lighthouse: a focused beam guiding attention through darkness."
    >
      <div className="relative pl-8 md:pl-0">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-pink via-violet to-blue md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-12">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="relative md:grid md:grid-cols-2 md:gap-12"
            >
              <div className="absolute left-3 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-brand pulse-glow" />
              <div className={`${i % 2 ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="text-sm font-display font-semibold text-gradient">{t.year}</div>
                <h3 className="mt-1 text-2xl font-semibold">{t.title}</h3>
              </div>
              <div className={`${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"} mt-2 md:mt-0`}>
                <p className="text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
