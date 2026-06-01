import { motion } from "framer-motion";
import { Section } from "../../components/section";

const industries = [
  {
    icon: "◐",
    title: "Film & Television",
    desc: "Title sequences, broadcast packages, and cinematic VFX for screens big and small.",
  },
  {
    icon: "◭",
    title: "Gaming",
    desc: "Trailers, cutscenes, in-game assets, and marketing renders for studios at any scale.",
  },
  {
    icon: "▣",
    title: "Architecture & Real Estate",
    desc: "Photorealistic walk-throughs and flythroughs that sell spaces before a single brick is laid.",
  },
  {
    icon: "◇",
    title: "Product & E-Commerce",
    desc: "Hero shots, 360° spins, and AR-ready assets that move inventory and elevate brands.",
  },
  {
    icon: "◉",
    title: "Live Events & XR",
    desc: "LED wall content, virtual backgrounds, and immersive mixed-reality stage experiences.",
  },
  {
    icon: "✦",
    title: "Brand & Advertising",
    desc: "Campaign visuals designed to command attention across every platform and format.",
  },
];

export function ServicesPanelIndustries() {
  return (
    <Section
      eyebrow="Industries"
      title={
        <>
          Who We <span className="text-gradient">Illuminate</span>
        </>
      }
      subtitle="Every industry has a story worth telling. We make it impossible to look away."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-2xl glass border-gradient p-6 transition-transform hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-xl text-white transition-transform group-hover:rotate-12">
                {ind.icon}
              </div>
              <h3 className="text-xl font-semibold">{ind.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{ind.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
