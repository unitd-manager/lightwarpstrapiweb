// import { Link } from "react-router-dom";
import { PageShell } from "../components/page-shell";
// import { Section } from "../components/section";
import { ProjectsPanelHero } from "./projects/panel-1-hero";
import { ProjectsPanelCapabilities } from "./projects/panel-3-capabilities";
import { ProjectsPanelExtraVideos } from "./projects/panel-7-extra-videos";

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
  const vimeoId = "1153379831";
  const posterSrc = `https://vumbnail.com/${vimeoId}.jpg`;
  const embedSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&autopause=0&background=1&controls=0&title=0&byline=0&portrait=0&dnt=1&quality=720p`;

  return (
    <PageShell>
      <section className="bg-black text-white">
        <div className="w-full bg-black">
          <div className="w-full h-[calc(100vh-100px)] overflow-hidden">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={posterSrc}
                alt=""
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-w-[177.78vh] min-h-full border-0 object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <iframe
                src={embedSrc}
                title="Lightwarp Studios Capabilities Reel"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-w-[177.78vh] min-h-full border-0"
                style={{ border: "none" }}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

     <section className="relative text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/25 via-cyan-500/15 to-indigo-700/25" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-16 text-center">
          <div className="inline-flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <span className="text-xs uppercase tracking-[0.35em] text-white/70">
              Overview
            </span>
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl text-white bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 [text-shadow:0_1px_0_rgba(255,255,255,0.18),0_-1px_0_rgba(0,0,0,0.7),0_14px_30px_rgba(0,0,0,0.55)]">
            OUR CAPABILITIES
          </h1>
          <div className="mx-auto mt-5 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
      </section>

      <ProjectsPanelHero />
      <ProjectsPanelCapabilities />
      <ProjectsPanelExtraVideos />

      {/* <section className="bg-black text-white">
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
      </Section> */}
    </PageShell>
  );
}
