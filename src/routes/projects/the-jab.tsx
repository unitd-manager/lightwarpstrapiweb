import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import video10 from "../../assets/images/video10.mp4";
import image02 from "../../assets/images/image02.png";

const videoCards = [
  { title: "", subtitle: "", video: "/src/assets/images/img15.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img16.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img17.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img18.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img15.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img18.png" },
];

export default function TheJab() {
  return (  
    <PageShell>
      <section className="bg-[#05050d] text-white">
        <div className="relative left-1/2 right-1/2 mx-[-50vw] w-screen overflow-hidden">
          <img
            src={image02}
            alt="The Jab"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_minmax(440px,0.9fr)] items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-left"
            >
              <div className="space-y-6 max-w-3xl">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-[-0.03em]">
                  The Jab
                </h1>
                <p className="text-2xl text-white max-w-2xl">
                  Lighting, Rendering, Compositing, Final Layout
                </p>
              </div>

              <div className="space-y-6 max-w-2xl text-left" style={{ textAlign: "left" }}>
                <p className="text-lg leading-8 text-white/75" style={{ textAlign: "left" }}>
                  The Jab was a group short film project and my final student short at Texas A&M before I finished my masters degree. I had rolled on to the project late as a lighting/compositing artist and with the very little time of 1 month before delivery and still majorly contributed in delivering the short and fixing many data issues and hitches that would have stalled the film from being completed on the final layout and material assembly.
                </p>
                <p className="text-lg leading-8 text-white/75" style={{ textAlign: "left" }}>
                  The lighting design of The Jab was truly a new challenge for me, as due there being no visdev/concept art, little primary references and a singular matte painting for the whole scene, light setup was primarily designed based on what would seamlessly work with that background element as personally consulting to that team of wanted to push for a punchy, graphic, saturated look with sun dawn tones of reds, magentas and cool purple for the film to bring visual appeal.
                </p>
                <p className="text-lg leading-8 text-white/75" style={{ textAlign: "left" }}>
                  The major creative challenge I decided to take for this project was to created animated dramatic lights that would accentuate the theatrical performance of the chameleon, primary being the blue stage light that appears at the climax of the short. This was accomplished by fully rendering all lights on in RenderMan and through light group splits, animate the lights in Nuke for flickers, eye spec light, and dramatic ramps.
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
                  src="https://www.youtube.com/embed/4d27i10x2wI"
                  className="w-full aspect-[16/9] object-cover"
                  style={{ border: "none" }}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              href="/projects/samsung-s7-ad"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Next
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
