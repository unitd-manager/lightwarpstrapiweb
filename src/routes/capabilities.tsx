import { Link } from "react-router-dom";
import { PageShell } from "../components/page-shell";
import { Section } from "../components/section";
import { VideoPlayer } from "../components/video-player";

const projects = [
  {
    title: "Shell You Be Mine?",
    description:
      "A collaborative short film built with 23 artists in 15 weeks, featuring a real-time Unreal pipeline, advanced grooming, and cinematic lighting.",
    path: "/projects/shell-you-be-mine",
  },
  {
    title: "Stuffed",
    description:
      "A high-energy film created with mentorship from DreamWorks Animation and Meta, showcasing character effects, hair workflows, and bold stylized lighting.",
    path: "/projects/stuffed",
  },
  {
    title: "The Jab",
    description:
      "A student short film that demonstrates fast-paced execution, compositing, and lighting problem-solving under a tight production schedule.",
    path: "/projects/the-jab",
  },
  {
    title: "Samsung S7 ad",
    description:
      "A commercial-grade project that explores product lighting, camera choreography, and polished studio visuals in Blender.",
    path: "/projects/samsung-s7-ad",
  },
  {
    title: "Caught Off Guard",
    description:
      "A playful short film produced with ACES workflow and advanced lighting techniques to deliver bold stylized visuals.",
    path: "/projects/caught-off-guard",
  },
  {
    title: "Cyberia 2084",
    description:
      "A solo cyberpunk worldbuilding project that highlights atmosphere, detailed environments, and polished rendering.",
    path: "/projects/cyberia-2084",
  },
  {
    title: "Stray Vista Studios",
    description:
      "Virtual production and Unreal tools work from one of Texas’s leading virtual production facilities, with a focus on studio workflow and asset design.",
    path: "/projects/stray-vista-studios",
  },
];

export default function Capabilities() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="mx-auto py-10 sm:py-14 lg:py-16">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#05050f] shadow-2xl shadow-black/30">
            <div className="aspect-video w-full">
              <VideoPlayer
                src="https://player.vimeo.com/video/1153379831"
                title="Lightwarp Studios Capabilities Reel"
                autoplay
                hideControls
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/70">
              Capabilities
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
                Capabilities Reel
              </h1>
              <p className="text-lg leading-8 text-white/70">
                Our artists have delivered engaging visuals and productions both personally and professionally before Lightwarp was formed. These projects showcase some of these individual and collaborative work to celebrate and affirm the talent we bring to the table when you work with us.
              </p>
              <p className="text-sm leading-7 text-white/60">
                All work showcased in the Capabilities reel and section is not property of Lightwarp Studios and isn’t claimed by the company as its property unless explicitly stated or present in the Projects page of the Lightwarp website. All rights to the following content, IP, and creative attribution belong to the respective artist(s) and owners of the content and are only displayed for showcasing purposes.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://player.vimeo.com/video/1153379831"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
              >
                Watch Full Reel
              </a>
              <Link
                to="/projects"
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Capabilities Projects"
        title={<>Featured projects in the reel</>}
        subtitle="Each project below reflects individual and collaborative work that helped shape the reel’s look and feel."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.path}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={project.path}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
