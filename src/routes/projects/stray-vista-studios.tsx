import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import { VideoPlayer } from "../../components/video-player";
import image01 from "../../assets/images/img32.png";
import image02 from "../../assets/images/img31.png";
import image03 from "../../assets/images/img32.png";
import image04 from "../../assets/images/img33.png";
import image05 from "../../assets/images/img34.png";

const logos = [
  {
    src: "https://static.wixstatic.com/media/ddc236_e87923663ea941a08dcdcd667ae9e03b~mv2.png",
    alt: "Unreal Engine",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_75cb156520ae4ab99854737db24bba00~mv2.png",
    alt: "Blender",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_29f8c8953a6149f1b7c533df8a7d8de6~mv2.png",
    alt: "Substance 3D",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_ab0eebd4077744e1ba7bbc84edd51303~mv2.png",
    alt: "USD",
  },

];

const videoCards = [
  { title: "", subtitle: "", video: image02 },
  { title: "", subtitle: "", video: image03 },
  { title: "", subtitle: "", video: image04 },
  { title: "", subtitle: "", video: image05 },
  { title: "", subtitle: "", video: image01 },
  { title: "", subtitle: "", video: image02 },
];

export default function StrayVistaStudios() {
  return (
    <PageShell>
      <section className="bg-[#050517] text-white">
        <div className="w-full overflow-hidden">
          <img
            src={image01}
            alt="The Jab"
            className="w-full h-[45vh] max-w-none object-cover"
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
                <h1 className="project-title">
                  Stray Vista Studios
                </h1>
                <p className="project-subtitle text-white/70 max-w-2xl">
                  Unreal Artist/TD, Production Assistant, Lighting, Cinematography, Look Development, Compositing, VFX
                </p>
              </div>

              <div className="space-y-6 max-w-2xl">
                <p className="project-body text-white/75">
                  Stray Vista Studios in Dripping Springs, Texas is one of the largest active virtual production facilities in the state and a pioneer in the field. I was honored to have my first industry experience at this studio with the team as an Unreal Engine Technical Director Intern, Site Rep, and Production Assistant. Along with creating studio tools to streamline virtual production workflows in the studio for commercials, music videos, etc, I had also participated in creating and designing virtual sets, assets, and full CG-shots for the productions during my time.
I had participated in 4 major projects in my time at Stray Vista:
1) A music video for Breaking Benjamin's song Awaken, where I served as a Digital Imaging Technician on set, created 3 full CG shots doing cinematography, lighting, layout and design of the shots as requested by the director and line producer, and assisted with post production and VFX renders and prep for final delivery
2) A commercial for DrumWave, where I created a Virtual Environment in Unreal of a contemporary workout studio with state-of-the-art custom hardware-raytracing supported glass and subsurface shaders and GI lighting in Lumen
3) A commercial for KANE shoes, where I served as a VP operator on-set
4) A campaign commerical for the Film Texas Initiative starring Matthew McConaughey, Woody Harrelson, Dennis Quaid, Billy Bob Thornton, and Renée Zellweger to promote in-state productions and incentives, where I served as a set production assistant and studio representative to help setup, run, and takedown the whole production.
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
                  <VideoPlayer src="https://www.youtube.com/embed/w0GfewGYR3g" title="Stray Vista Studios" />
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
                href="/projects/cyberia-2084"
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
              <button
                 disabled
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </section>
    </PageShell>
  );
}

