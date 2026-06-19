import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import { VideoPlayer } from "../../components/video-player";
import CreditsSlider from "../../components/CreditsSlider";

const logoGap = "10px";
const logoHeight = "22px";
const logoPadding = "6px 2px";

const isVideoUrl = (url: string): boolean => {
  if (!url) return false;
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url) || url.includes("/video/");
};

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
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_b9807b06ac9048b9bd7b21ec1782677b~mv2.gif/v1/fit/w_655,h_368,q_90,enc_avif,quality_auto/ddc236_b9807b06ac9048b9bd7b21ec1782677b~mv2.gif" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_2b06867646a845128a172bd1062be850~mv2.gif/v1/fit/w_654,h_368,q_90,enc_avif,quality_auto/ddc236_2b06867646a845128a172bd1062be850~mv2.gif" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_c7270ce0a4974e819a7e8e4cf7cfb493~mv2.gif/v1/fit/w_655,h_368,q_90,enc_avif,quality_auto/ddc236_c7270ce0a4974e819a7e8e4cf7cfb493~mv2.gif" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_a5688e8d850f4e759b091905098e1266~mv2.webp" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_0575181a13994f66a5da8b7cf37fb7e9~mv2.webp" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_4bc24968c3744117a7922037f804e93a~mv2.webp" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_c5890e9ccd7f45a487f4d5e3fe402907~mv2.webp" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_628308ec702d46c2b1e4fec0fb5062d7~mv2.webp" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_89ffb15832cb4d06974348d313500ae1~mv2.png" },
  { title: "", subtitle: "", video: "https://static.wixstatic.com/media/ddc236_afcad6ab468b42419092bf6a8e690475~mv2.png" },
];

export default function StrayVistaStudios() {
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
                <p className="text-sm text-white/50">© 2024 BMG.</p>
                {/*<p className="project-subtitle text-white/70 max-w-2xl">
                  Unreal Artist/TD, Production Assistant, Lighting, Cinematography, Look Development, Compositing, VFX
                </p>*/}



<div className="flex flex-wrap gap-2">
  {["Lighting", "Cinematography", "Look Development", "Compositing", "VFX"].map((role) => (
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
                className="space-y-6 max-w-2xl"
              >
                <p className="project-body text-white/75">
                  Stray Vista Studios in Dripping Springs, Texas stands as one of the largest active virtual production facilities in the state and a genuine pioneer in the field. Lightwarp's first industry engagement took place here, embedded with the studio team as an Unreal Engine Technical Director, on-site representative, and Production Assistant — contributing across both pipeline development and live production support. During this time, Lightwarp built proprietary studio tools designed to streamline virtual production workflows across commercials, music videos, and broadcast projects, while also designing and authoring virtual sets, assets, and full CG shots for active productions on the floor.
                </p>
                <p className="project-body text-white/75">
                  The engagement spanned four major productions. For Breaking Benjamin's Awaken music video, Lightwarp served as Digital Imaging Technician on set and delivered three complete CG shots — handling cinematography, lighting, layout, and shot design per director and line producer briefs — while supporting post production, VFX renders, and final delivery prep. For the DrumWave commercial, a full virtual environment was built in Unreal Engine depicting a contemporary workout studio, featuring custom hardware raytracing-supported glass and subsurface shaders alongside Lumen-based global illumination. On the KANE shoes campaign, Lightwarp operated as virtual production operator on set. Finally, for the Film Texas Initiative campaign — starring Matthew McConaughey, Woody Harrelson, Dennis Quaid, Billy Bob Thornton, and Renée Zellweger — Lightwarp served as set production assistant and studio representative, managing setup, operation, and teardown of the full production.
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
                  <div className="overflow-hidden rounded-none border border-white/10 bg-black shadow-2xl shadow-black/50">
                    <div className="w-full aspect-[11/5]">
                      <VideoPlayer src="https://www.youtube.com/embed/bpgrUK9EGjI" title="Awaken Digital Environment" autoplay={false} hideControls={false} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <CreditsSlider
              credits={[
                { role: 'Produced and Shot at Stray Vista Studios for BMG', names: 'Stray Vista Studios for BMG' },
              ]}
            />
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
                        preload="metadata"
                        className="w-full aspect-[16/9] object-cover"
                        controls
                        playsInline
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
                href="/projects/the-jab"
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
              <button
                disabled
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95 disabled:opacity-50"
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