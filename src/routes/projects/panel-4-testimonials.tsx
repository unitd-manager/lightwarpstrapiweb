import { motion } from "framer-motion";
import { Section } from "../../components/section";

const testimonials = [
  {
    quote:
      "LightWarp transformed our product launch. The CGI was indistinguishable from live footage and our conversion rates doubled after the campaign.",
    name: "Jordan Mercer",
    role: "VP of Marketing, Nova Timepieces",
    initials: "JM",
  },
  {
    quote:
      "We've worked with studios twice their size and LightWarp's level of craft and communication puts them all to shame. Truly exceptional team.",
    name: "Priya Nair",
    role: "Creative Director, Echo Labs",
    initials: "PN",
  },
  {
    quote:
      "The Breaking Benjamin VFX spot went viral overnight. LightWarp nailed the brief and then some — every frame was exactly what we envisioned.",
    name: "Kyle Donovan",
    role: "Head of Content, Vanta Audio",
    initials: "KD",
  },
  {
    quote:
      "From brief to delivery in 3 weeks, the Samsung render was photorealistic perfection. We'll be coming back for every product launch.",
    name: "Amara Hassan",
    role: "Brand Lead, Helios Realty",
    initials: "AH",
  },
];

export function ProjectsPanelTestimonials() {
  return (
    <Section
      eyebrow="Client Words"
      title={
        <>
          What Our <span className="text-gradient">Clients Say</span>
        </>
      }
      subtitle="The work speaks for itself. But so do the people we've worked with."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl glass border-gradient p-7 transition-transform hover:-translate-y-1"
          >
            <div className="absolute -left-2 -top-6 select-none font-serif text-7xl leading-none text-pink/10">
              "
            </div>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-violet/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t.quote}
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-xs font-semibold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </footer>
            </div>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  );
}
