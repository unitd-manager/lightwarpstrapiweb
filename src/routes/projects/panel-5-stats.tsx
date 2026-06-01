import { motion } from "framer-motion";
import { Section } from "../../components/section";

const metrics = [
  { value: "180+", label: "Projects Delivered", detail: "Across 12 industries" },
  { value: "40+", label: "Global Brands", detail: "From startups to Fortune 500" },
  { value: "12", label: "Industry Awards", detail: "In 7 years of operation" },
  { value: "98%", label: "On-Time Delivery", detail: "Across all project tiers" },
  { value: "24h", label: "Response Guarantee", detail: "During active production" },
  { value: "3×", label: "Average Return Rate", detail: "Clients who come back" },
];

export function ProjectsPanelStats() {
  return (
    <Section
      eyebrow="By The Numbers"
      title={
        <>
          Results That <span className="text-gradient">Speak</span>
        </>
      }
      subtitle="We measure our success by the impact we create for the brands we partner with."
    >
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/10">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-black/80 p-8 text-center transition-colors hover:bg-white/[0.05]"
            >
              <p className="text-4xl font-black text-gradient sm:text-5xl">{m.value}</p>
              <p className="mt-2 text-sm font-semibold">{m.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{m.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
