import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import { VideoPlayer } from "../../components/video-player";
const logoGap =  "10px"
const logoHeight =  "22px"
const logoPadding = "6px 2px"
const isVideoUrl = (url: string): boolean => {
  if (!url) return false;
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url) || url.includes("/video/");
};
const logos = [
  {
    src: "https://static.wixstatic.com/media/ddc236_b3e21d7df52d4ee2999ddb9b9deeebb0~mv2.png",
    alt: "Blender",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_e2fc4ec6be4342f7916b6acdd157c5a9~mv2.png",
    alt: "Substance 3D",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_c96a3c58f3db467eb48714cf3af338cc~mv2.png",
    alt: "USD",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_3d79dc80ee084230b2a96316abae79cb~mv2.png",
    alt: "AWS",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_75cb156520ae4ab99854737db24bba00~mv2.png",
    alt: "Perforce",
  },
    {
    src: "https://static.wixstatic.com/media/ddc236_ab0eebd4077744e1ba7bbc84edd51303~mv2.png",
    alt: "Perforce",
  },
];

const videoCards = [
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_a165ac753364425e8cf30ec65df365fc~mv2.png" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_4b8b0a9f5b744d36807c633679020a46~mv2.png" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_824aaf6a5ff248569497227d1792297e~mv2.png" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_09a6b4ba16f447a684df51e086de4c0a~mv2.png" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_d283b7619bf04fc98c0b33cf02ead42ff000.jpg" },
  { title: "", subtitle: "", video: "https://video.wixstatic.com/video/ddc236_bb23752fef66403c9399763a8e8174b6/480p/mp4/file.mp4" },
];

export default function CaughtOffGuard() {
  return (
    <PageShell copyrightText="© 2025 Lightwarp LLC. All rights reserved.">
      <section className="bg-[#050517] text-white">
       <div className="w-full overflow-hidden">
          <img
            src="https://static.wixstatic.com/media/ddc236_23396263688047c0a08fa6de010381e9~mv2.png"
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
              
              <div className="space-y-6 max-w-3xl">
                {/* <p className="text-sm uppercase tracking-[0.3em] text-white/60 mt-8">
                  LIGHTWARP
                </p> */}
                <h1 className="project-title">
                  Caught Off Guard
                </h1>
                <h4 className="project-subtitle text-white max-w-2xl">
                  Production Manager, Lighting, Look Development, Compositing, Layout, Modelling
                </h4>
                <div className="text-sm text-white/60 mt-2">
                  <p>Story & Production by Adithya Sathyanarayanan & Alyssa Curran</p>
                  <p>Design and Concepts by Gus McClain, Rachel Fikir, & Alyssa Curran</p>
                  <p>Character and Environment Models by Jaime Diaz, Britain Thomas, Rachel Fikir</p>
                  <p>Look Development and Surfacing by Alyssa Curran, Adithya Sathyanarayanan, Rachel Fikir & Britain Thomas</p>
                  <p>Animation, Storyboard, Camera and Final Layout by Gus McClain & Ethan Umanos</p>
                  <p>Final Edit & Sound by Ethan Umanos</p>
                </div>
                <p className="text-sm text-white/60 mt-2">© 2021 Rachel Fikir, Britain Thomas, Ethan Umanos, Gus McClain, Adithya Sathyanarayan, Alyssa Curran, Jaime Diaz.</p>
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
                  As project manager and pipeline lead, I directed my team in creating Caught Off Guard, a playful short film known for its dynamic lighting and stylized visuals. This was one of the first studio shorts at Texas A&M to implement the ACES color workflow, much before it became widely adopted in the industry, and I led the charge in bringing this system into production. On the artistic side, I lit and rendered sequences in RenderMan, surfaced the main serpent character and props, and explored advanced compositing techniques in Nuke including post volumetrics, motion blur, and depth of field. I also designed animated lighting driven by video playback to simulate interactive illumination from computer screens. The result was a technically ambitious and visually engaging short that gave me early experience as both a creative and technical leader.
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
                  <VideoPlayer src="https://www.youtube.com/embed/7iZBroHtizk" title="Caught Off Guard" />
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
                    {isVideoUrl(card.video) ? (
                      <video
                        src={card.video}
                        className="w-full aspect-[16/9] object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      />
                    ) : (
                      <img
                        src={card.video}
                        className="w-full aspect-[16/9] object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-between gap-3 sm:flex-row">
              <a
                href="/projects/our-capabilities"
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
                href="/projects/the-jab"
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