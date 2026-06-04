import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import video29 from "../../assets/images/video29.mp4";
import image06 from "../../assets/images/img26.png";

const videoCards = [
  { title: "", subtitle: "", video: "/src/assets/images/img23.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img24.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img25.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img26.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img23.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img24.png" },
];

export default function CaughtOffGuard() {
  return (
    <PageShell>
      <section className="bg-[#05050d] text-white">
       <div className="w-full overflow-hidden">
          <img
            src={image06}
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
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-[-0.03em]">
                  Caught Off Guard
                </h1>
                <h4 className="text-2xl text-white max-w-2xl">
                  Production Manager, Lighting, Look Development, Compositing, Layout, Modelling
                </h4>
              </div>

              <div className="space-y-6 max-w-2xl">
                <p className="text-lg leading-8 text-white/75">
                  As project manager and pipeline lead, I directed my team in creating Caught Off Guard, a playful short film known for its dynamic lighting and stylized visuals. This was one of the first studio shorts at Texas A&M to implement the ACES color workflow, much before it became widely adopted in the industry, and I led the charge in bringing this system into production. On the artistic side, I lit and rendered sequences in RenderMan, surfaced the main serpent character and props, and explored advanced compositing techniques in Nuke including post volumetrics, motion blur, and depth of field. I also designed animated lighting driven by video playback to simulate interactive illumination from computer screens. The result was a technically ambitious and visually engaging short that gave me early experience as both a creative and technical leader.
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
                  src="https://www.youtube.com/embed/7iZBroHtizk"
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
                href="/projects/samsung-s7-ad"
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
                href="/projects/cyberia-2084"
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
