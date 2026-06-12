import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image from "../../assets/images/WW2_Trench Scene.png";
import video from "../../assets/images/lego-fluid-dance-720p (1).mp4";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const LazyYouTubeBackground = ({
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

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "600px 0px", threshold: 0.01 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const isLocalVideo = /\.(mp4|webm|ogg|mov)$/i.test(videoId);
  const isLocalImage = /\.(avif|webp|jpe?g|png|gif|svg)$/i.test(videoId);
  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=${videoId}${start ? `&start=${start}` : ""}`;
  const posterSrc = isLocalVideo ? undefined : `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div ref={containerRef} className="absolute inset-0" overflow-hidden>
      {(!shouldLoad && isLocalImage) ? (
        <img src={videoId} alt="" className={className} loading={priority ? "eager" : "lazy"} decoding="async" />
      ) : (!shouldLoad && posterSrc ? (
        <img src={posterSrc} alt="" className={className} loading={priority ? "eager" : "lazy"} decoding="async" />
      ) : null)}
      {shouldLoad ? (
        isLocalVideo ? (
          <video
            src={videoId}
            className={className}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : isLocalImage ? (
          <img src={videoId} alt="" className={className} />
        ) : (
          <iframe
            src={embedSrc}
            title="Project Background Video"
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

const extraProjects = [
  {
    id: 29,
    title: "Caught Off Guard",
    description: "As project manager and pipeline lead, I directed my team in creating Caught Off Guard, a playful short film known for its dynamic lighting and stylized visuals. This was one of the first studio shorts at Texas A&M to implement the ACES color workflow, much before it became widely adopted in the industry, and I led the charge in bringing this system into production. On the artistic side, I lit and rendered sequences in RenderMan, surfaced the main serpent character and props, and explored advanced compositing techniques in Nuke including post volumetrics, motion blur, and depth of field. I also designed animated lighting driven by video playback to simulate interactive illumination from computer screens. The result was a technically ambitious and visually engaging short that gave me early experience as both a creative and technical leader.",
    videoId: "7iZBroHtizk",
  },
  {
    id: 10,
    title: "The Jab",
    description: "The Jab was a group short film project and my final student short at Texas A&M before I finished my masters degree. I had rolled on to the project late as a lighting/compositing artist and with the very little time of 1 month before delivery and still majorly contributed in delivering the short and fixing many data issues and hitches that would have stalled the film from being completed on the final layout and material assembly..",
    videoId: "4d27i10x2wI",
  },
  {
    id: 1,
    title: "Stray Vista Studios",
    description: "Stray Vista Studios in Dripping Springs, Texas is one of the largest active virtual production facilities in the state and a pioneer in the field. I was honored to have my first industry experience at this studio with the team as an Unreal Engine Technical Director Intern, Site Rep, and Production Assistant. Along with creating studio tools to streamline virtual production workflows in the studio for commercials, music videos, etc, I had also participated in creating and designing virtual sets, assets, and full CG-shots for the productions during my time.",
    videoId: "w0GfewGYR3g",
  },
  {
    id: 11,
    title: "Lego Fluid Dance",
    description: "This digital simulation project accomplished through a mix of Houdini-based FLIP fluids and voxel-based quantization and instancing showcases a fun animated character who gushes with happiness, joy, and lego-style bricks as it dances! Rendered fully in Karma XPU and composed through USD and Solaris as a showcase project, Lightwarp Studios can handle the creation of intricate, complex motion design and effects for your creative needs.",
    hideLearnMore: true,
    videoId: video,
  },
  {
    id: 12,
    title: "WW1 Trench Render",
    description: "This still environment scene of a filmic WW1 scene created in Blender 3D depicting trench warfare and the use of helmet decoys was conceptualized, modelled, textured and surfaced by Lightwarp artist Magnus Haarseth, camera composes, layout, and set-dressed by artist Anantha Sathyanarayanan, and lit, rendered and composited to simulate filmed footage by artist Adithya Sathyanarayanan. The team achieved the goal of portraying the dramatic tragedy and death of war simply through a single, well composed frame that could have been a part of films like Saving Private Ryan or Dunkirk, ensuring that a picture can convey immense meaning and feeling.",
    hideLearnMore: true,
    videoId: image,
  },
];

export function ProjectsPanelExtraVideosCapabilities() {
  return (
    <>
      {extraProjects.map((item, idx) => (
        <section key={item.id} className="relative min-h-[90svh] overflow-hidden bg-[#04050f] text-white font-display sm:min-h-[90vh]">
          <div className="absolute inset-0 overflow-hidden">
            <LazyYouTubeBackground
              videoId={item.videoId}
              start={item.start}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[67.5vw] min-w-[213.33vh] min-h-[120%] border-0 object-cover pointer-events-none"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
            <div className="grid gap-16 lg:grid-cols-1 lg:justify-end lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                className={`space-y-8 ${idx % 2 === 1 ? "lg:ml-auto lg:max-w-2xl lg:text-right" : "lg:max-w-2xl"} w-full max-w-[640px] rounded-[3rem] bg-transparent p-6 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.45)]`}
              >
                <div className="space-y-6 text-left">
                  <h2 className="text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">{item.title}</h2>
                  <div className="space-y-4 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                    <p>{item.description}</p>
                    {/* <p className="text-sm text-white/50">Good design credit: Lightwarp Studio.</p> */}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {!item.hideLearnMore ? (
                    <Link
                      to={`/projects/${slugify(item.title)}`}
                      className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
                    >
                      Learn More
                    </Link>
                  ) : null}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
