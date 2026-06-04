import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import video4 from "../../assets/images/video4.mp4";
import image05 from "../../assets/images/image05.png";

const videoCards = [
  { title: "", subtitle: "", video: "/src/assets/images/img27.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img28.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img29.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img30.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img27.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img28.png" },
];

export default function Cyberia2084() {
  return (
    <PageShell>
      <section className="bg-[#05050d] text-white">
        <div className="relative left-1/2 right-1/2 mx-[-50vw] w-screen overflow-hidden mb-10">
          <img
            src={image05}
            alt="Cyberia 2084"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_minmax(440px,0.9fr)] items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6 max-w-3xl">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-[-0.03em]">
                  Cyberia 2084
                </h1>
                <p className="text-xl text-white/70 max-w-2xl">
                  Responsible for All Aspects (except greebles, train cables and flying cars)
                </p>
              </div>

              <div className="space-y-6 max-w-2xl">
                <p className="text-lg leading-8 text-white/75">
                  Cyberia 2084 is a personal passion project: a travelogue-style introduction to a sprawling cyberpunk city, built in one semester as a solo effort. Inspired by Ian Hubert’s “lazy tutorials” and dense image-based texturing techniques, I challenged myself to see how much worldbuilding I could accomplish independently, creating a multilayered dystopia filled with atmosphere, detail, and scale. Rendered in Blender using baked lighting, irradiance caching, and optimized techniques for reflections and GI, the project became my first real-time cinematic experiment. Completing Cyberia 2084 earned me the Disney Aggie Alumni Award scholarship, presented by the head of characters at Walt Disney Animation Studios and signed by Disney alumni. Beyond the recognition, this film fueled my work ethic and strengthened my passion for building worlds that tell stories through scale and light.
                </p>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/50">
                <iframe
                  src="https://www.youtube.com/embed/pTmzrHqdS_4"
                  className="w-full aspect-[16/9] object-cover"
                  style={{ border: "none" }}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <section className="bg-black py-16 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2">
              {videoCards.map((card, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={card.video}
                      className="w-full aspect-[16/9] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-between gap-3 sm:flex-row">
              <a
                href="/projects/caught-off-guard"
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Previous
              </a>
              <a
                href="/projects"
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
              >
                Back to Project
              </a>
              <a
                href="/projects/stray-vista-studios"
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Next
              </a>
            </div>
          </div>
        </section>
      </section>
    </PageShell>
  );
}
