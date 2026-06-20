import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import { VideoPlayer } from "../../components/video-player";
import CreditsSlider from "../../components/CreditsSlider";

const logoGap = "10px";
const logoHeight = "22px";
const logoPadding = "6px 2px";

const videoCards = [
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_62e1f14bb205491097f55c59e7dfbcb8~mv2.gif/v1/fit/w_655,h_368,q_90,enc_avif,quality_auto/ddc236_62e1f14bb205491097f55c59e7dfbcb8~mv2.gif" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_37b98b9b5b0e431fb2c8147149dd3d90~mv2.jpg" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_da965203bb32437eb5e78b3b2833b16f~mv2.jpg" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_aecf95926ec640e1833228ab9700c710~mv2.jpg" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_4ef1817e70d54eb6b29ba3128a3433ad~mv2.png" },
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
    <PageShell copyrightText="© 2025 Lightwarp LLC. All rights reserved.">
      <section className="bg-[#050517] text-white">
        <div className="w-full overflow-hidden">
          <img
            src="https://static.wixstatic.com/media/ddc236_182fbce862454c15b052a6e90022b0dc~mv2.png"
            alt="The Jab"
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
              <div className="space-y-6 max-w-3xl text-left">
                <h1 className="project-title">The Jab</h1>
                <p className="text-sm text-white/50">
                  © 2025 Cooper Heathcock, Adithya Sathyanarayanan, Theron Smith, Corain Marneweck, Spencer Bryant, Steven Leal, Saif Chowdhury, Emma Peace, Liz Mars, Maleah Miller.
                </p>
                {/*<p className="project-subtitle text-white max-w-2xl">
                  Lighting, Rendering, Compositing, Final Layout
                </p>*/}



<div className="flex flex-wrap gap-2">
  {["Lighting", "Compositing", "Final Layout","Shading"].map((role) => (
    <span key={role} className="rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white/90">
      {role}
    </span>
  ))}
</div>


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
                  The Jab was a collaborative student short film and the capstone production completed prior to graduating with a master's degree from Texas A&M. Lightwarp joined the project late in the pipeline as lighting and compositing artists, and within a single month delivered a fully polished short — resolving critical data pipeline issues, reconstructing final layout, and driving material assembly across the board to carry the film across the finish line.
                </p>
                <p className="project-body text-white/75" style={{ textAlign: "left" }}>
                  With no visual development artwork, minimal primary references, and a single matte painting anchoring the entire environment, the lighting design for The Jab was built entirely from the ground up through creative intuition and close collaboration. The approach centered on seamlessly integrating practical light with the background matte while pushing toward a punchy, graphic aesthetic — rich reds and magentas at dawn bleeding into cool purples — giving the film a saturated, theatrical energy that elevated its overall visual identity.
                </p>
                <p className="project-body text-white/75" style={{ textAlign: "left" }}>
                  The defining creative challenge of the project was designing animated dramatic lighting that amplified the chameleon character's theatrical performance. The standout moment — a sweeping blue stage light crashing in at the film's climax — was achieved by rendering all light groups simultaneously in RenderMan, then compositing and animating each layer independently in Nuke. This approach allowed precise control over flicker timing, eye spec highlights, and dramatic light ramps without ever returning to render, keeping the production moving under a tight deadline.
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

            <CreditsSlider
              credits={[
                { role: 'Story, Production and Set Dressing by', names: 'Cooper Heathcock' },
                { role: '3D Animation, Layout and Character by', names: 'Theron Smith' },
                { role: 'Character Model by', names: 'Corain Marnweck' },
                { role: 'Character Rig by', names: 'Spencer Bryant' },
                { role: '2D Matte and Set Painting by', names: 'Steve Leal' },
                { role: 'Visual Effects by', names: 'Saif Chowdhury' },
                { role: 'Character Surfacing by', names: 'Emma Peace' },
                { role: '2D Animation and Final Credits by', names: ['Liz Mars', 'Maleah Miller'] },
              ]}
            />
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
              href="/projects/caught-off-guard"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
            >
              Previous
            </a>
            <a
              href="/capabilities"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
            >
              Back to Capabilities
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
    </PageShell>
  );
}