// import { Link } from "react-router-dom";
import { PageShell } from "../components/page-shell";
// import { Section } from "../components/section";
import { motion } from "framer-motion";
import { ProjectsPanelCapabilities } from "./projects/panel-3-capabilities";
import { ProjectsPanelExtraVideosCapabilities } from "./projects/panel-7-extra-videos-capabilities";

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
    title: "Awaken Digital Environment",
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
    <PageShell copyrightText="© 2025 Lightwarp LLC. All rights reserved.">
      
     <section className="relative text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/25 via-cyan-500/15 to-indigo-700/25" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-16 text-center">
          <div className="inline-flex items-center justify-center gap-3">
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl text-white bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 [text-shadow:0_1px_0_rgba(255,255,255,0.18),0_-1px_0_rgba(0,0,0,0.7),0_14px_30px_rgba(0,0,0,0.55)]">
            OUR CAPABILITIES
          </h1>
          
        </div>
      </section>
       <section className="relative h-[calc(100svh-80px)] overflow-hidden bg-transparent text-white font-display sm:h-[calc(100vh-80px)]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={posterSrc}
          alt=""
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[56.25vw] w-[100vw] min-h-full min-w-[177.78vh] scale-[1.75] border-0 object-cover sm:scale-[1.25] md:scale-[1.15]"
          loading="eager"
          decoding="async"
        />
        <iframe
          src={embedSrc}
          title="Shell You Be Mine? Background Video"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[56.25vw] w-[100vw] min-h-full min-w-[177.78vh] scale-[1.75] border-0 sm:scale-[1.25] md:scale-[1.15]"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
      </div>

     <div className="relative flex h-full w-full items-center px-4 sm:px-6 lg:px-10">
        <div className="w-full">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full max-w-[640px] rounded-[3rem] bg-transparent p-6 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-8 md:p-5"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h5 className="text-2xl font-semibold leading-tight sm:text-4xl md:text-4xl">
                  Watch our capabilities reel a quick <br/>
                  look at what we deliver
            
                </h5>
                
              </div>

              <div className="space-y-4 text-sm sm:text-lg leading-7 sm:leading-8 text-white/75">
                <p>
                 Before the founding of our studio, our team members have always been creating stunning 3D renders, tools, assets, and projects.
                </p>
                <p>
                 Our Capabilities Reel showcases many of these personal projects and collaborations to give even more context and confidence to our skillsets and quality of work.
                </p>
                <p className="text-white/60">
                  Good design credits: creative direction, visual development, and reel production by Lightwarp Studio.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      <ProjectsPanelCapabilities />
      <ProjectsPanelExtraVideosCapabilities />

     
    </PageShell>
  );
}
