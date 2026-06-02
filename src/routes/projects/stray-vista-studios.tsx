import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import video1 from "../../assets/images/video1.mp4";

const videoCards = [
  {
   
    video: video1,
  },
  {
  
    video: video1,
  },
  {
    
    video: video1,
  },
  {
  
    video: video1,
  },
  {
   
    video: video1,
  },
  {
    
    video: video1,
  },
];

export default function Stuffed() {
  return (
    <PageShell>
      <section className="relative min-h-[75vh] overflow-hidden bg-[#05050d] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <video
            src={video1}
            className="absolute top-1/2 left-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050d] via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_minmax(440px,0.9fr)] items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6 max-w-3xl">
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-[-0.03em]">
                  Stray Vista Studios
                </h1>
                <p className="text-xl text-white/70 max-w-2xl">
                  Unreal Artist/TD, Production Assistant, Lighting, Cinematography, Look Development, Compositing, VFX
                </p>
              </div>

              <div className="space-y-6 max-w-2xl">
                <p className="text-lg leading-8 text-white/75">
                  Stray Vista Studios in Dripping Springs, Texas is one of the largest active virtual production facilities in the state and a pioneer in the field. I was honored to have my first industry experience at this studio with the team as an Unreal Engine Technical Director Intern, Site Rep, and Production Assistant. Along with creating studio tools to streamline virtual production workflows in the studio for commercials, music videos, etc, I had also participated in creating and designing virtual sets, assets, and full CG-shots for the productions during my time.
I had participated in 4 major projects in my time at Stray Vista:
1) A music video for Breaking Benjamin's song Awaken, where I served as a Digital Imaging Technician on set, created 3 full CG shots doing cinematography, lighting, layout and design of the shots as requested by the director and line producer, and assisted with post production and VFX renders and prep for final delivery
2) A commercial for DrumWave, where I created a Virtual Environment in Unreal of a contemporary workout studio with state-of-the-art custom hardware-raytracing supported glass and subsurface shaders and GI lighting in Lumen
3) A commercial for KANE shoes, where I served as a VP operator on-set
4) A campaign commerical for the Film Texas Initiative starring Matthew McConaughey, Woody Harrelson, Dennis Quaid, Billy Bob Thornton, and Renée Zellweger to promote in-state productions and incentives, where I served as a set production assistant and studio representative to help setup, run, and takedown the whole production.
                </p>
               
                <div className="flex flex-wrap gap-4">
                  <a
                    href={video1}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
                  >
                    Watch Full Film
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    All Projects
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/50">
                <video
                  src={video1}
                  className="w-full aspect-[16/9] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {videoCards.map((card) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
              >
                <div className="relative overflow-hidden">
                  <video
                    src={card.video}
                    className="w-full aspect-[16/9] object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{card.subtitle}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{card.title}</h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

