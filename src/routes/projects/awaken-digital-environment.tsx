import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import { VideoPlayer } from "../../components/video-player";
import CreditsSection from "../../components/CreditsSection";

const logoGap =  "10px"
const logoHeight =  "22px"
const logoPadding = "6px 2px"

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

export default function AwakenDigitalEnvironment() {
  return (
    <PageShell copyrightText="© 2025 Lightwarp LLC. All rights reserved.">
      <section className="bg-[#050517] text-white">
        <div className="w-full overflow-hidden">
          <img
            src="https://static.wixstatic.com/media/ddc236_eecc3bc85d484d748fc25aeafe0c2c92~mv2.png"
            alt="Awaken Digital Environment"
            className="w-full h-[45vh] max-w-none object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-0 pb-16 lg:pb-2">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
            >
              <div className="space-y-6 max-w-3xl">
                <h1 className="project-title">Awaken Digital Environment</h1>
                <p className="project-subtitle text-white/70 max-w-2xl">
                  Unreal Artist/TD, Production Assistant, Lighting, Cinematography, Look Development, Compositing, VFX
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
                className="space-y-6 max-w-2xl"
              >
                <p className="project-body text-white/75">
                  Stray Vista Studios in Dripping Springs, Texas is one of the largest active virtual production facilities in the state and a pioneer in the field. I was honored to have my first industry experience at this studio with the team as an Unreal Engine Technical Director Intern, Site Rep, and Production Assistant. Along with creating studio tools to streamline virtual production workflows in the studio for commercials, music videos, etc, I had also participated in creating and designing virtual sets, assets, and full CG-shots for the productions during my time.
                </p>
                <p className="project-body text-white/75">
                  I had participated in 4 major projects in my time at Stray Vista: 1) A music video for Breaking Benjamin's song Awaken, where I served as a Digital Imaging Technician on set, created 3 full CG shots doing cinematography, lighting, layout and design of the shots as requested by the director and line producer, and assisted with post production and VFX renders and prep for final delivery 2) A commercial for DrumWave, where I created a Virtual Environment in Unreal of a contemporary workout studio with state-of-the-art custom hardware-raytracing supported glass and subsurface shaders and GI lighting in Lumen 3) A commercial for KANE shoes, where I served as a VP operator on-set 4) A campaign commerical for the Film Texas Initiative starring Matthew McConaughey, Woody Harrelson, Dennis Quaid, Billy Bob Thornton, and Renee Zellweger to promote in-state productions and incentives, where I served as a set production assistant and studio representative to help setup, run, and takedown the whole production.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="space-y-6">
                   <div className="overflow-hidden rounded-none border border-white/10 bg-black shadow-2xl shadow-black/50">
                  <div className="w-full aspect-[11/5]">
                    <VideoPlayer src="https://www.youtube.com/embed/w0GfewGYR3g" title="Awaken Digital Environment" autoplay={false} hideControls={false} />
                  </div>
                </div>
                {/* <div className="overflow-hidden rounded-none border border-white/10 bg-black shadow-2xl shadow-black/50">
                  <div className="w-full aspect-[11/5]">
                    <VideoPlayer src="https://i.vimeocdn.com/video/1963145845-1f07bc368e41b4c30f3f6249294b94821374404eda7696410f0478bb227ff12c-d_960" title="Stray Vista Studios" autoplay={false} hideControls={false} />
                  </div>
                </div> */}
               <div className="overflow-hidden rounded-none border border-white/10 bg-black shadow-2xl shadow-black/50">
                  <div className="w-full aspect-[11/5]">
                    <VideoPlayer src="https://www.youtube.com/embed/bpgrUK9EGjI" title="Awaken Digital Environment" autoplay={false} hideControls={false} />
                  </div>
                </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <CreditsSection credits={[
          { role: 'Produced and Shot', names: [] },
        ]} />
      </section>
    </PageShell>
  );
}