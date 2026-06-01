import { motion } from "framer-motion";
import { Section } from "../../components/section";

const awards = [
  {
    year: "2026",
    title: "Short Shorts Film Festival",
    category: "Best Animation",
    org: "International Short Film Festival",
  },
  {
    year: "2025",
    title: "AUTS Award Winner",
    category: "Outstanding Visual Effects",
    org: "Animation United Technical Society",
  },
  {
    year: "2024",
    title: "Vimeo Staff Pick",
    category: "Motion Design",
    org: "Vimeo",
  },
  {
    year: "2024",
    title: "Awwwards Site of the Day",
    category: "UI & Web Experience",
    org: "Awwwards",
  },
  {
    year: "2023",
    title: "Motion Awards",
    category: "Best Product Visualization",
    org: "North American Motion Awards",
  },
  {
    year: "2022",
    title: "Behance Featured Project",
    category: "3D & Animation",
    org: "Adobe Behance",
  },
];

const press = [
  {
    outlet: "Motionographer",
    quote:
      "One of the most technically impressive boutique studios working today.",
  },
  {
    outlet: "Creative Bloq",
    quote:
      "LightWarp's CGI work sets the bar for what small studios can achieve.",
  },
  {
    outlet: "Communication Arts",
    quote:
      "A future-facing studio that marries art direction with technical precision.",
  },
];

export function AboutPanelAwards() {
  return (
    <Section
      eyebrow="Recognition"
      title={
        <>
          Awards & <span className="text-gradient">Press</span>
        </>
      }
      subtitle="The industry has taken notice. Here's what they're saying."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-3">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Awards & Honors
          </p>
          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-4 rounded-xl glass border-gradient px-5 py-4 transition-transform hover:-translate-y-0.5"
            >
              <span className="mt-0.5 shrink-0 text-xs font-semibold text-pink">
                {a.year}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{a.title}</p>
                <p className="text-xs text-muted-foreground">
                  {a.category} · {a.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Press & Media
          </p>
          {press.map((p, i) => (
            <motion.blockquote
              key={p.outlet}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl glass border-gradient p-7"
            >
              <div className="absolute left-5 top-4 select-none font-serif text-5xl leading-none text-pink/20">
                "
              </div>
              <p className="relative pt-4 text-sm italic leading-relaxed text-muted-foreground">
                {p.quote}
              </p>
              <footer className="mt-4 text-xs font-semibold text-pink">
                — {p.outlet}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
