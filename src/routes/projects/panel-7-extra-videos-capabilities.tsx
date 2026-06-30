import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TransitionLink } from "../../components/page-transition-overlay";
import { ProjectCredits } from "../../components/ProjectCredits";

import video from "../../assets/images/lego-fluid-dance.mp4";
import videoPoster from "../../assets/images/lego-fluid-dance-poster.jpg";
import image from "../../assets/images/WW2_Trench_Scene.jpg";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/*const watchBtnClass =
  "inline-flex items-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:scale-105";*/
const watchBtnClass =
  "inline-flex items-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:scale-105";
const LazyMediaBackground = ({
  videoId,
  className,
  priority,
  start,
}: {
  videoId: string;
  className?: string;
  priority?: boolean;
  start?: number;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(Boolean(priority));

  useEffect(() => {
    if (priority) return;
    if (!containerRef.current) return;
    // Mounts only while near the viewport and unmounts again once scrolled
    // well away. This page stacks several autoplay video/iframe sections —
    // iOS Safari caps how many can stay decoded concurrently and kills +
    // reloads the page ("A problem repeatedly occurred") once exceeded, so
    // each section must free its video as the user scrolls past it rather
    // than leaving every one mounted and playing forever.
    let unloadTimer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          clearTimeout(unloadTimer);
          setShouldLoad(true);
        } else {
          unloadTimer = setTimeout(() => setShouldLoad(false), 2000);
        }
      },
      { root: null, rootMargin: "400px 0px", threshold: 0.01 }
    );
    observer.observe(containerRef.current);
    return () => {
      clearTimeout(unloadTimer);
      observer.disconnect();
    };
  }, [priority]);

  const isVideo = videoId === video || /\.(mp4|webm|ogg|mov)$/i.test(videoId);
  const isImage = videoId === image || /\.(avif|webp|jpe?g|png|gif|svg)$/i.test(videoId);
  const isYouTube = !isVideo && !isImage;

  const embedSrc =
    "https://www.youtube.com/embed/" +
    videoId +
    "?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0&iv_load_policy=3&playlist=" +
    videoId +
    (start ? "&start=" + start : "");

  const posterSrc = isYouTube
    ? "https://i.ytimg.com/vi/" + videoId + "/hqdefault.jpg"
    : isVideo
      ? videoPoster
      : undefined;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {!shouldLoad && isImage ? (
        <img src={videoId} alt="" className={className} loading={priority ? "eager" : "lazy"} decoding="async" />
      ) : !shouldLoad && posterSrc ? (
        <img src={posterSrc} alt="" className={className} loading={priority ? "eager" : "lazy"} decoding="async" />
      ) : null}
      {shouldLoad ? (
        isVideo ? (
          <video src={videoId} className={className} autoPlay muted loop playsInline preload="auto" />
        ) : isImage ? (
          <img src={videoId} alt="" className={className} />
        ) : (
          <iframe
            src={embedSrc}
            title="Project Background"
            className={className}
            style={{ border: "none" }}
            allowFullScreen
            allow="autoplay; encrypted-media; picture-in-picture"
            loading={priority ? "eager" : "lazy"}
          />
        )
      ) : null}
    </div>
  );
};

type Project = {
  id: number;
  title: string;
  contributions: string[];
  description: string;
  videoId: string;
  hideLearnMore?: boolean;
  start?: number;
};

const extraProjects: Project[] = [
  {
    id: 29,
    title: "Caught Off Guard",
    contributions: ["Lighting", "Compositing", "Rough Layout", "Pipeline", "R&D", "Production Management", "Look Development"],
    description: "Caught Off Guard is a playful student short film produced at Texas A&M, distinguished by its dynamic lighting design and stylized visual language. Lightwarp led production management and pipeline development on the project, overseeing the team across all stages of the short. Notably, this was one of the first studio productions at Texas A&M to implement the ACES color workflow — well ahead of its widespread adoption across the industry — with Lightwarp driving its integration into the live pipeline.",
    videoId: "7iZBroHtizk",
  },
  {
    id: 10,
    title: "The Jab",
    contributions: ["Lighting", "Compositing", "Final Layout", "Shading"],
    description: "The Jab was a collaborative student short film and the capstone production completed prior to graduating with a master's degree from Texas A&M. Lightwarp joined the project late in the pipeline as lighting and compositing artists, and within a single month delivered a fully polished short — resolving critical data pipeline issues, reconstructing final layout, and driving material assembly across the board to carry the film across the finish line.",
    videoId: "4d27i10x2wI",
  },
  {
    id: 1,
    title: "Stray Vista Studios",
    contributions: ["Lighting", "Cinematography", "Look Development", "Compositing", "VFX"],
    description: "Stray Vista Studios in Dripping Springs, Texas stands as one of the largest active virtual production facilities in the state and a genuine pioneer in the field. Lightwarp's first industry engagement took place here, embedded with the studio team as an Unreal Engine Technical Director, on-site representative, and Production Assistant — contributing across both pipeline development and live production support. During this time, Lightwarp built proprietary studio tools designed to streamline virtual production workflows across commercials, music videos, and broadcast projects, while also designing and authoring virtual sets, assets, and full CG shots for active productions on the floor.",
    videoId: "w0GfewGYR3g",
    start: 5,
  },
  {
    id: 11,
    title: "Lego Fluid Dance",
    contributions: ["Founder Created"],
    description: "This digital simulation project accomplished through a mix of Houdini-based FLIP fluids and voxel-based quantization and instancing showcases a fun animated character who gushes with happiness, joy, and lego-style bricks as it dances! Rendered fully in Karma XPU and composed through USD and Solaris as a showcase project, Lightwarp Studios can handle the creation of intricate, complex motion design and effects for your creative needs.",
    hideLearnMore: true,
    videoId: video,
  },
  {
    id: 12,
    title: "Trench Render",
    contributions: ["Lighting", "Compositing", "Final Layout", "Shading"],
    description: "This still environment scene of a filmic WW1 scene created in Blender 3D depicting trench warfare and the use of helmet decoys was conceptualized, modelled, textured and surfaced by Lightwarp artist Magnus Haarseth, camera composition, layout, and set-dressing by artist Anantha Sathyanarayanan, and lit, rendered and composited to simulate filmed footage by artist Adithya Sathyanarayanan. The team achieved the goal of portraying the dramatic tragedy and death of war simply through a single, well composed frame that could have been a part of films like Saving Private Ryan or Dunkirk, ensuring that a picture can convey immense meaning and feeling.",
    hideLearnMore: true,
    videoId: image,
  },
];

export function ProjectsPanelExtraVideosCapabilities() {
  return (
    <>
      {extraProjects.map((item, idx) => (
        <section
          key={item.id}
          className="relative min-h-[90svh] overflow-hidden bg-[#04050f] text-white font-display sm:min-h-[90vh]"
        >
          <div className="absolute inset-0 overflow-hidden">
            <LazyMediaBackground
              videoId={item.videoId}
              start={item.start}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[67.5vw] min-w-[213.33vh] min-h-[120%] border-0 object-cover pointer-events-none"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
            <div className={`flex ${idx % 2 === 1 ? "justify-end" : "justify-start"}`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                className="w-full max-w-[95vw] sm:max-w-[50vw] p-6 border border-white/40 rounded-2xl"
              >
                <div className="space-y-6">

                  <h2 className="inline text-5xl sm:text-6xl font-bold leading-tight text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-black/10 backdrop-blur-[3px] px-2 py-1">
                    {item.title}
                  </h2>

                  {item.contributions && item.contributions.length > 0 && (
                    <div className="rounded-2xl border border-white/60 bg-white/5 backdrop-blur-sm p-5">
                      <p className="text-xs font-bold text-white/100 uppercase tracking-widest mb-3">
                        Lightwarp Contributions
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {item.contributions.map((c) => (
                          <span
                            key={c}
                            className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.title === "Caught Off Guard" && (
                    <div className="rounded-2xl border border-white/60 bg-white/5 backdrop-blur-sm p-5">
                      <div className="text-white [&_*]:text-white">
                        <ProjectCredits
                          entries={[
                            { role: "Story & Production by", names: "Adithya Sathyanarayanan & Alyssa Curran" },
                            { role: "Design and Concepts by", names: "Gus McClain, Rachel Fikir, & Alyssa Curran" },
                            { role: "Character and Environment Models by", names: "Jaime Diaz, Britain Thomas, Rachel Fikir" },
                            { role: "Look Development and Surfacing by", names: "Alyssa Curran, Adithya Sathyanarayanan, Rachel Fikir & Britain Thomas" },
                            { role: "Animation, Storyboard, Camera and Final Layout by", names: "Gus McClain & Ethan Umanos" },
                          ]}
                          copyright="© 2021 Rachel Fikir, Britain Thomas, Ethan Umanos, Gus McClain, Adithya Sathyanarayan, Alyssa Curran, Jaime Diaz."
                        />
                      </div>
                    </div>
                  )}

                  {item.title === "The Jab" && (
                    <div className="rounded-2xl border border-white/60 bg-white/5 backdrop-blur-sm p-5">
                      <div className="text-white [&_*]:text-white">
                        <ProjectCredits
                          entries={[
                            { role: "Story, Production and Set Dressing by", names: "Cooper Heathcock" },
                            { role: "3D Animation, Layout and Character by", names: "Theron Smith" },
                            { role: "Character Model by", names: "Corain Marnweck" },
                            { role: "Character Rig by", names: "Spencer Bryant" },
                            { role: "2D Matte and Set Painting by", names: "Steve Leal" },
                            { role: "Visual Effects by", names: "Saif Chowdhury" },
                            { role: "Character Surfacing by", names: "Emma Peace" },
                            { role: "2D Animation and Final Credits by", names: "Liz Mars & Maleah Miller" },
                          ]}
                          copyright="© 2025 Cooper Heathcock, Adithya Sathyanarayanan, Theron Smith, Corain Marneweck, Spencer Bryant, Steven Leal, Saif Chowdhury, Emma Peace, Liz Mars, Maleah Miller"
                        />
                      </div>
                    </div>
                  )}

                  {item.title === "Stray Vista Studios" && (
                    <div className="rounded-2xl border border-white/60 bg-white/5 backdrop-blur-sm p-5">
                      <div className="text-white [&_*]:text-white">
                        <ProjectCredits
                          entries={[
                            { role: "Role", names: "Only responsible for showcased CG Shots. Produced and Shot at Stray Vista Studios for BMG" },
                          ]}
                          copyright="© 2024 BMG"
                        />
                      </div>
                    </div>
                  )}

                  {item.title === "Lego Fluid Dance" && (
                    <div className="rounded-2xl border border-white/60 bg-white/5 backdrop-blur-sm p-5">
                      <div className="text-white [&_*]:text-white">
                        <ProjectCredits
                          entries={[
                            { role: "Background Stage provided by", names: "Ben House and Texas A&M Visualization" },
                          ]}
                        />
                      </div>
                    </div>
                  )}

                  {item.title === "Trench Render" && (
                    <div className="rounded-2xl border border-white/60 bg-white/5 backdrop-blur-sm p-5">
                      <div className="text-white [&_*]:text-white">
                        <ProjectCredits
                          entries={[
                            { role: "Look Development and Texturing by", names: "Magnus Haarseth" },
                            { role: "Cinematography and Layout by", names: "Anantha Sathyanarayanan" },
                          ]}
                          copyright="© 2026 Magnus Haarseth, Anantha Sathyanarayanan, Adithya Sathyanarayanan"
                        />
                      </div>
                    </div>
                  )}

                  <div className="rounded-xl bg-black/25 backdrop-blur-[4px] px-3 py-2">
                    <p className="text-[18px] leading-8 text-white font-light">
                      {item.description}
                    </p>
                  </div>

                  {!item.hideLearnMore && (
                    <div className="flex flex-wrap gap-4">
                      <TransitionLink
                        to={"/projects/" + slugify(item.title)}
                        className="inline-flex items-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:scale-105"
                      >
                        Learn More
                      </TransitionLink>
                      <a
                        href={"https://www.youtube.com/watch?v=" + item.videoId}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={watchBtnClass}
                      >
                        Watch Now
                      </a>
                    </div>
                  )}

                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}