import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import { VideoPlayer } from "../../components/video-player";
import image1 from "../../assets/images/img15.png";
import image2 from "../../assets/images/img16.png";
import image3 from "../../assets/images/img17.png";
import image4 from "../../assets/images/img18.png";
const logoGap =  "10px"
const logoHeight =  "22px"
const logoPadding = "6px 2px"
const videoCards = [
  { title: "", subtitle: "", video: image1 },
  { title: "", subtitle: "", video: image2 },
  { title: "", subtitle: "", video: image3 },
  { title: "", subtitle: "", video: image4 },
  { title: "", subtitle: "", video: image1 },
  { title: "", subtitle: "", video: image4 },
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
export default function TheJab() {
  return (  
    <PageShell>
      <section className="bg-[#050517] text-white">
        <div className="w-full overflow-hidden">
          <img
            src={image3}
            alt="The Jab"
            className="w-full h-[45vh] max-w-none object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
            >
              <div className="space-y-6 max-w-3xl text-left">
                <h1 className="project-title">
                  The Jab
                </h1>
                <p className="project-subtitle text-white max-w-2xl">
                  Lighting, Rendering, Compositing, Final Layout
                </p>
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
                  The Jab was a group short film project and my final student short at Texas A&M before I finished my masters degree. I had rolled on to the project late as a lighting/compositing artist and with the very little time of 1 month before delivery and still majorly contributed in delivering the short and fixing many data issues and hitches that would have stalled the film from being completed on the final layout and material assembly.
                </p>
                <p className="project-body text-white/75" style={{ textAlign: "left" }}>
                  The lighting design of The Jab was truly a new challenge for me, as due there being no visdev/concept art, little primary references and a singular matte painting for the whole scene, light setup was primarily designed based on what would seamlessly work with that background element as personally consulting to that team of wanted to push for a punchy, graphic, saturated look with sun dawn tones of reds, magentas and cool purple for the film to bring visual appeal.
                </p>
                <p className="project-body text-white/75" style={{ textAlign: "left" }}>
                  The major creative challenge I decided to take for this project was to created animated dramatic lights that would accentuate the theatrical performance of the chameleon, primary being the blue stage light that appears at the climax of the short. This was accomplished by fully rendering all lights on in RenderMan and through light group splits, animate the lights in Nuke for flickers, eye spec light, and dramatic ramps.
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
    </PageShell>
  );
}
