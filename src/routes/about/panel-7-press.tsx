import { motion } from "framer-motion";
import { Section } from "../../components/section";

const quotes = [
  {
    outlet: "Motionographer",
    quote:
      "One of the most technically impressive boutique studios working today — LightWarp is doing things with real-time rendering that studios ten times their size haven't figured out yet.",
  },
  {
    outlet: "Creative Bloq",
    quote:
      "LightWarp's CGI work sets a new bar for what a small studio can achieve. Their product visualization is indistinguishable from live photography.",
  },
  {
    outlet: "Communication Arts",
    quote:
      "A future-facing studio that marries art direction with technical precision. Every frame carries the weight of intentional craft.",
  },
  {
    outlet: "Stash Magazine",
    quote:
      "Their Unreal Engine pipeline is one of the most sophisticated we've seen outside of a major VFX house. LightWarp is redefining indie production.",
  },
];

const featuredIn = [
  "Motionographer",
  "Creative Bloq",
  "Communication Arts",
  "Stash Magazine",
  "Vimeo Staff Pick",
  "Awwwards",
];

export function AboutPanelPress() {
  return (
    <Section
      eyebrow="Press & Media"
      title={
        <>
          What the Industry <span className="text-gradient">Is Saying</span>
        </>
      }
      subtitle="Recognized by the publications that set the standard in motion design and visual production."
    >
      <div className="space-y-10">
        <div className="flex flex-wrap gap-3">
          {featuredIn.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              {name}
            </motion.span>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.outlet}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass border-gradient p-7 transition-transform hover:-translate-y-1"
            >
              <div className="absolute left-5 top-3 select-none font-serif text-6xl leading-none text-pink/15">
                "
              </div>
              <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-pink/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="relative pt-5 text-sm italic leading-relaxed text-muted-foreground">
                {q.quote}
              </p>
              <footer className="mt-5 text-xs font-semibold text-pink">
                — {q.outlet}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
