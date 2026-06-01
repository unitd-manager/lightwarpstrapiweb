import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";

const credits = [
  { role: "Direction & Producer", name: "Adithya Sathya" },
  { role: "Co-Producer", name: "James Morris" },
  { role: "Art Direction", name: "Multiple Artists" },
  { role: "Real-Time Pipeline", name: "Unreal Engine 5" },
  { role: "Character Animation", name: "24-Artist Team" },
  { role: "Compositing & VFX", name: "Post Production Team" },
];

const awards = [
  { name: "Austin Under the Stars 2025", result: "Winner" },
  { name: "ShortShorts Film Festival", result: "Official Selection" },
];

const coverage = [
  "80LVL",
  "Epic Games",
  "Texas A&M University",
  "Austin Film Festival",
  "ShortShorts Film Festival",
];

export default function ShellYouBeMine() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden bg-[#05050d] text-white flex items-end pb-16 pt-32">
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/pLu4iXYhI4k?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playlist=pLu4iXYhI4k"
            title="Shell You Be Mine Background"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "160%",
              height: "110%",
              transform: "translate(-50%, -50%)",
              border: "none",
            }}
            allow="autoplay; encrypted-media"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050d] via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
              Featured Project · Award-Winning Short Film
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-[-0.02em]">
              Shell You Be Mine?
            </h1>
            <p className="mt-4 text-xl text-white/70">
              24 artists · 15 weeks · A Novel Realtime Pipeline
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-black py-4">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-2xl" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/yinRrmEpfr4"
              title="Shell You Be Mine? — Official Film"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="bg-black py-20 px-6">
        <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-semibold text-white">About the Project</h2>
            <div className="space-y-4 text-lg leading-8 text-white/75">
              <p>
                <span className="text-white font-semibold">Shell You Be Mine?</span> is a 3-minute, award-winning animated short film created by a team of 24 artists in just 15 weeks — entirely within Unreal Engine 5 using a novel real-time pipeline.
              </p>
              <p>
                The film follows a hermit crab's journey to find the perfect shell home, told through lush underwater environments, character-driven animation, and a whimsical original score. Every frame was crafted to push the boundaries of what real-time production can deliver.
              </p>
              <p>
                Showcased by 80LVL, Epic Games, and Texas A&amp;M University, the film has screened at festivals from Austin to Japan and stands as a benchmark for the studio's capabilities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://www.youtube.com/watch?v=yinRrmEpfr4"
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
                ← All Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Project details */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Studio</p>
                  <p className="text-white font-semibold">Lightwarp 3D</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Year</p>
                  <p className="text-white font-semibold">2024</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Duration</p>
                  <p className="text-white font-semibold">3 minutes</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Pipeline</p>
                  <p className="text-white font-semibold">Unreal Engine 5</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Team Size</p>
                  <p className="text-white font-semibold">24 Artists</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Production</p>
                  <p className="text-white font-semibold">15 Weeks</p>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Awards & Screenings</h3>
              <ul className="space-y-3">
                {awards.map((a) => (
                  <li key={a.name} className="flex items-center justify-between text-sm">
                    <span className="text-white/70">{a.name}</span>
                    <span className="text-white font-semibold bg-white/10 px-3 py-1 rounded-full text-xs">
                      {a.result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">As Featured In</h3>
              <div className="flex flex-wrap gap-2">
                {coverage.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credits */}
      <section className="bg-[#07080f] py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-10">Credits</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {credits.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-xl border border-white/8 bg-white/4 px-6 py-5"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">{c.role}</p>
                  <p className="text-white font-semibold">{c.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl space-y-6"
        >
          <h2 className="text-4xl font-semibold text-white">Ready to create something like this?</h2>
          <p className="text-lg text-white/60">
            Let's build your next project with the same quality and speed that made Shell You Be Mine? a reality.
          </p>
          <a
            href="/contact"
            className="inline-flex rounded-full bg-white px-10 py-4 text-sm font-semibold text-black transition hover:opacity-95"
          >
            Start a Project
          </a>
        </motion.div>
      </section>
    </PageShell>
  );
}
