import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import { VideoPlayer } from "../../components/video-player";
import CreditsSection from "../../components/CreditsSection";
const logoGap =  "10px"
const logoHeight =  "22px"
const logoPadding = "6px 2px"
const videoCards = [
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_62e1f14bb205491097f55c59e7dfbcb8~mv2.gif/v1/fit/w_655,h_368,q_90,enc_avif,quality_auto/ddc236_62e1f14bb205491097f55c59e7dfbcb8~mv2.gif" },
  { title: "", subtitle: "", video: "	https://static.wixstatic.com/media/ddc236_37b98b9b5b0e431fb2c8147149dd3d90~mv2.jpg" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_da965203bb32437eb5e78b3b2833b16f~mv2.jpg" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_aecf95926ec640e1833228ab9700c710~mv2.jpg" },
  { title: "", subtitle: "", video: "	https://static.wixstatic.com/media/ddc236_4ef1817e70d54eb6b29ba3128a3433ad~mv2.png" },
];
const logos = [
  {
    src: "https://static.wixstatic.com/media/ddc236_24adb982b89f47bcb935321431de9767~mv2.png",
    alt: "Unreal Engine",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_e2fc4ec6be4342f7916b6acdd157c5a9~mv2.png",
    alt: "Blender",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_3d79dc80ee084230b2a96316abae79cb~mv2.png",
    alt: "Substance 3D",
  },
  
];
export default function TrenchRender() {
  return (  
    <PageShell>
      <section className="bg-[#050517] text-white">
        <div className="w-full overflow-hidden">
          <img
            src="https://static.wixstatic.com/media/ddc236_182fbce862454c15b052a6e90022b0dc~mv2.png"
            alt="The Jab"
            className="w-full h-[45vh] max-w-none object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-0 pb-16 lg:pb-24">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
            >
              <div className="space-y-6 max-w-3xl text-left">
                <h1 className="project-title">Trench Render</h1>
                
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="services-logo-row"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: logoGap,
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
                      padding: logoPadding,
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="services-logo-img"
                      style={{
                        height: logoHeight,
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-[1fr_minmax(540px,1.15fr)] lg:items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-6 max-w-2xl text-left"
                style={{ textAlign: "left" }}
              >
                <p className="project-body text-white/75" style={{ textAlign: "left" }}>
                  This project was a personal exploration of creating a cinematic Star Wars-inspired scene in Unreal Engine 5. I was responsible for all aspects of the production, from modeling and texturing the trench and ship assets to lighting the scene and rendering the final animation. The goal was to capture the iconic aesthetic of the original trilogy while leveraging the power of modern real-time rendering techniques.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="overflow-hidden rounded-none border border-white/10 bg-black shadow-2xl shadow-black/50">
                  <div className="w-full aspect-[16/9]">
                    <VideoPlayer src="https://www.youtube.com/embed/4d27i10x2wI" title="The Jab" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
                className="overflow-hidden rounded-none border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={card.video}
                    alt={card.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <a
              href="/projects/stuffed"
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
              href="/projects/samsung-s7-ad"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
            >
              Next
            </a>
          </div>
        </div>
      </section>
        <CreditsSection credits={[{ role: 'Responsible for All Aspects', names: [] }]} />
    </PageShell>
  );
}