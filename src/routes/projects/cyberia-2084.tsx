import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import { VideoPlayer } from "../../components/video-player";
import image05 from "../../assets/images/img28.png";
import image01 from "../../assets/images/img27.png";
import image02 from "../../assets/images/img28.png";
import image03 from "../../assets/images/img29.png";
import image04 from "../../assets/images/img30.png";

const logos = [
  {
    src: "https://static.wixstatic.com/media/ddc236_75cb156520ae4ab99854737db24bba00~mv2.png",
    alt: "Unreal Engine",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_c96a3c58f3db467eb48714cf3af338cc~mv2.png",
    alt: "Blender",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_ab0eebd4077744e1ba7bbc84edd51303~mv2.png",
    alt: "Substance 3D",
  },
  
];

const videoCards = [
  { title: "", subtitle: "", video: image01 },
  { title: "", subtitle: "", video: image02 },
  { title: "", subtitle: "", video: image03 },
  { title: "", subtitle: "", video: image04 },
  { title: "", subtitle: "", video: image01 },
  { title: "", subtitle: "", video: image02 },
];

export default function Cyberia2084() {
  return (
    <PageShell>
      <section className="bg-[#050517] text-white">
        <div className="w-full overflow-hidden">
          <img
            src={image05}
            alt="The Jab"
            className="w-full h-[45vh] max-w-none object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(540px,1.3fr)] items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6 max-w-3xl">
                <h1 className="project-title">
                  Cyberia 2084
                </h1>
                <p className="project-subtitle text-white/70 max-w-2xl">
                  Responsible for All Aspects (except greebles, train cables and flying cars)
                </p>
              </div>

              <div className="space-y-6 max-w-2xl">
                <p className="project-body text-white/75">
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="services-logo-row"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "18px",
                  marginBottom: "20px",
                  width: "100%",
                }}
              >
                {logos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="services-logo-cell"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px 4px",
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="services-logo-img"
                      style={{
                        height: "30px",
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </motion.div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/50">
                <div className="w-full aspect-[16/9]">
                  <VideoPlayer src="https://www.youtube.com/embed/pTmzrHqdS_4" title="Cyberia 2084" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <section className="bg-[#050517] py-16 px-6">
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
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
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
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
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
