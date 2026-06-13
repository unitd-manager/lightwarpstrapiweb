import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import { VideoPlayer } from "../../components/video-player";
import CreditsSection from "../../components/CreditsSection";
const logoGap =  "10px"
const logoHeight =  "22px"
const logoPadding = "6px 2px"
const logos = [
  {
    src: "https://static.wixstatic.com/media/ddc236_75cb156520ae4ab99854737db24bba00~mv2.png",
    alt: "Unreal Engine",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_ab0eebd4077744e1ba7bbc84edd51303~mv2.png",
    alt: "Blender",
  },
];

const videoCards = [
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_51637ffdf1514793a5eb7683a1bf44f1~mv2.png" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_84dcf8993ef54a9291e1f8caf59e805e~mv2.png" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_447ff49650e746f8b8d221bd7dfae868~mv2.png" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_969f71790e4b48b8be4b03a247d08f33~mv2.png" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_4ca74331cb1d4e49973d819561a4c9df~mv2.gif/v1/fit/w_654,h_345,q_90,enc_avif,quality_auto/ddc236_4ca74331cb1d4e49973d819561a4c9df~mv2.gif" },
];

export default function SamsungS7Ad() {
  return (
    <PageShell copyrightText="© 2025 Lightwarp LLC. All rights reserved.">
      <section className="bg-[#050517] text-white">
        <div className="w-full overflow-hidden">
          <img
            src="	https://static.wixstatic.com/media/ddc236_00810eb4c48041d4941a90995acca434~mv2.png"
            alt="Samsung S7 ad"
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
              <div className="space-y-6 max-w-3xl">
                <h1 className="project-title">Samsung S7 ad</h1>
                <p className="text-sm text-white/60 mt-2">© 2016 Adithya Sathyanarayanan.</p>

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
                className="space-y-6 max-w-2xl"
              >
                <p className="project-body text-white/75">
                  This high school project marked my first dive into full 3D animation, and it remains a formative experience in my journey as an artist. Tasked with creating a commercial in Blender, I went far beyond the assignment's requirements: modeling, surfacing, and lighting assets from scratch over the course of two months. It was here that I discovered my love for lighting, experimenting with HDRI-based product lighting, IES profiles, and camera choreography to highlight form and detail. Though created at an early stage in my career, this project laid the groundwork for my technical and artistic growth, teaching me both the discipline of a full production cycle and the excitement of storytelling through light.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="overflow-hidden rounded-none border border-white/10 bg-black shadow-2xl shadow-black/50">
                  <div className="w-full aspect-[16/9] min-h-[26rem]">
                    <VideoPlayer src="https://www.youtube.com/embed/4Esie0f7HVw" title="Samsung S7 ad" />
                  </div>
                </div>
              </motion.div>
            </div>
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
                href="/projects/shell-you-be-mine"
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
                href="/projects/cyberia-2084"
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
              >
                Next
              </a>
            </div>
          </div>
        </section>
        {/* <CreditsSection credits={[]} /> */}
      </section>
    </PageShell>
  );
}