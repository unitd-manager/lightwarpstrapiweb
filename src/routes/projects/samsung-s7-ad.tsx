import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import video17 from "../../assets/images/video17.mp4";
import image07 from "../../assets/images/image07.png";

const videoCards = [
  { title: "", subtitle: "", video: "/src/assets/images/img19.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img20.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img21.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img22.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img19.png" },
  { title: "", subtitle: "", video: "/src/assets/images/img20.png" },
];

export default function SamsungS7Ad() {
  return (
    <PageShell>
      <section className="bg-[#05050d] text-white">
        <div className="relative left-1/2 right-1/2 mx-[-50vw] w-screen overflow-hidden mb-10">
          <img
            src={image07}
            alt="Samsung S7 ad"
            className="w-full h-auto object-cover"
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
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-[-0.03em]">
                  Samsung S7 ad
                </h1>
                <p className="text-2xl text-white max-w-2xl">
                  Responsible for All Aspects
                </p>
              </div>

              <div className="space-y-6 max-w-2xl">
                <p className="text-lg leading-8 text-white/75">
                  This high school project marked my first dive into full 3D animation, and it remains a formative experience in my journey as an artist. Tasked with creating a commercial in Blender, I went far beyond the assignment’s requirements: modeling, surfacing, and lighting assets from scratch over the course of two months. It was here that I discovered my love for lighting, experimenting with HDRI-based product lighting, IES profiles, and camera choreography to highlight form and detail. Though created at an early stage in my career, this project laid the groundwork for my technical and artistic growth, teaching me both the discipline of a full production cycle and the excitement of storytelling through light.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.youtube.com/watch?v=4Esie0f7HVw"
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
                <iframe
                  src="https://www.youtube.com/embed/4Esie0f7HVw"
                  className="w-full aspect-[16/9] object-cover"
                  style={{ border: "none" }}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </motion.div>
          </div>
        </div>

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
                      className="w-full aspect-[16/9] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </section>
    </PageShell>
  );
}
