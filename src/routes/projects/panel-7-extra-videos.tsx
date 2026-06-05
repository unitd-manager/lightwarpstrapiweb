import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import video1 from "../../assets/images/video1.mp4";
import video4 from "../../assets/images/video4.mp4";
import video10 from "../../assets/images/video10.mp4";
import video17 from "../../assets/images/video17.mp4";
import video29 from "../../assets/images/video29.mp4";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const isYouTubeEmbed = (url: string): boolean => {
  return url.includes("youtube.com/embed");
};

const VideoRenderer = ({ src, className, ...props }: { src: string; className?: string; [key: string]: any }) => {
  if (isYouTubeEmbed(src)) {
    return (
      <iframe
        src={src}
        className={className}
        style={{ border: "none" }}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        {...props}
      />
    );
  }
  return (
    <video
      src={src}
      className={className}
      onError={(e) => {
        (e.currentTarget as HTMLVideoElement).style.display = "none";
      }}
      {...props}
    />
  );
};

const extraProjects = [
  {
    id: 26,
    title: "Stuffed",
    description: "During the Texas A&M Visualization Summer Industry Course, I had the privilege of working alongside mentors from DreamWorks Animation and Meta to create Stuffed, an ambitious short film produced in just 10 weeks. My role spanned character effects, grooming, and lighting — from developing workflows for millions of strands of hair and soft body simulations, to designing stylized black-and-white and punchy color looks inspired by classic film stock. I experimented with advanced techniques such as bi-directional path tracing in Pixar’s Unified integrator, which ultimately improved render efficiency by 300% while enhancing groom color and indirect specular response. I also lit sequences using fully distant lights for “polyworld” shots and pushed ACES color workflows throughout production. This project was both a technical and artistic milestone, combining cutting-edge research with heartfelt storytelling — and one of the most rewarding collaborations of my academic career..",
    video: "https://www.youtube.com/embed/bzCrjcqWliU?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=bzCrjcqWliU&start=1",
  },
  {
    id: 10,
    title: "The Jab",
    description: "The Jab was a group short film project and my final student short at Texas A&M before I finished my masters degree. I had rolled on to the project late as a lighting/compositing artist and with the very little time of 1 month before delivery and still majorly contributed in delivering the short and fixing many data issues and hitches that would have stalled the film from being completed on the final layout and material assembly..",
    video: "https://www.youtube.com/embed/4d27i10x2wI?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=4d27i10x2wI",
  },
  {
    id: 17,
    title: "Samsung S7 ad",
    description: "This high school project marked my first dive into full 3D animation, and it remains a formative experience in my journey as an artist. Tasked with creating a commercial in Blender, I went far beyond the assignment’s requirements: modeling, surfacing, and lighting assets from scratch over the course of two months. It was here that I discovered my love for lighting, experimenting with HDRI-based product lighting, IES profiles, and camera choreography to highlight form and detail. Though created at an early stage in my career, this project laid the groundwork for my technical and artistic growth, teaching me both the discipline of a full production cycle and the excitement of storytelling through light.",
    video: "https://www.youtube.com/embed/4Esie0f7HVw?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=4Esie0f7HVw",
  },
  {
    id: 29,
    title: "Caught Off Guard",
    description: "As project manager and pipeline lead, I directed my team in creating Caught Off Guard, a playful short film known for its dynamic lighting and stylized visuals. This was one of the first studio shorts at Texas A&M to implement the ACES color workflow, much before it became widely adopted in the industry, and I led the charge in bringing this system into production. On the artistic side, I lit and rendered sequences in RenderMan, surfaced the main serpent character and props, and explored advanced compositing techniques in Nuke including post volumetrics, motion blur, and depth of field. I also designed animated lighting driven by video playback to simulate interactive illumination from computer screens. The result was a technically ambitious and visually engaging short that gave me early experience as both a creative and technical leader.",
    video: "https://www.youtube.com/embed/7iZBroHtizk?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=7iZBroHtizk",
  },
  {
    id: 4,
    title: "Cyberia 2084",
    description: "Cyberia 2084 is a personal passion project: a travelogue-style introduction to a sprawling cyberpunk city, built in one semester as a solo effort. Inspired by Ian Hubert’s “lazy tutorials” and dense image-based texturing techniques, I challenged myself to see how much worldbuilding I could accomplish independently, creating a multilayered dystopia filled with atmosphere, detail, and scale. Rendered in Blender using baked lighting, irradiance caching, and optimized techniques for reflections and GI, the project became my first real-time cinematic experiment. Completing Cyberia 2084 earned me the Disney Aggie Alumni Award scholarship, presented by the head of characters at Walt Disney Animation Studios and signed by Disney alumni. Beyond the recognition, this film fueled my work ethic and strengthened my passion for building worlds that tell stories through scale and light.",
    video: "https://www.youtube.com/embed/pTmzrHqdS_4?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=pTmzrHqdS_4",
  },
  {
    id: 1,
    title: "Stray Vista Studios",
    description: "Stray Vista Studios in Dripping Springs, Texas is one of the largest active virtual production facilities in the state and a pioneer in the field. I was honored to have my first industry experience at this studio with the team as an Unreal Engine Technical Director Intern, Site Rep, and Production Assistant. Along with creating studio tools to streamline virtual production workflows in the studio for commercials, music videos, etc, I had also participated in creating and designing virtual sets, assets, and full CG-shots for the productions during my time.",
    video: "https://www.youtube.com/embed/w0GfewGYR3g?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=w0GfewGYR3g",
  },
];

export function ProjectsPanelExtraVideos() {
  return (
    <>
      {extraProjects.map((item, idx) => (
        <section key={item.id} className="relative min-h-[90svh] overflow-hidden bg-[#04050f] text-white font-display sm:min-h-[90vh]">
          <div className="absolute inset-0 overflow-hidden">
            <VideoRenderer
              src={item.video}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-w-[177.78vh] min-h-[100%] border-0 object-cover"
              autoPlay
              loop
              muted
              playsInline
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
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={`/projects/${slugify(item.title)}`}
                    className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

