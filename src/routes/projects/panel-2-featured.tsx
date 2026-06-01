import { motion } from "framer-motion";
import { Section } from "../../components/section";
import { VideoPlayer } from "../../components/video-player";

const projects = [
  {
    title: "Lush Victorian Garden Final Render ",
    client: "Nova Timepieces",
    tags: ["CGI", "Product"],
    videoSrc: "https://www.youtube.com/embed/b-qRx-LlB1A",
  },
  {
    title: "Stuffed (Summer Industry Course) Remastered CutHelios Sneaker",
    client: "Orbital",
    tags: ["Animation", "VFX"],
    videoSrc: "https://www.youtube.com/embed/bzCrjcqWliU",
  },
  {
    title: "Breaking Benjamin - Awaken (Official Music Video)Vanta Headset",
    client: "Vanta Audio",
    tags: ["Product Viz"],
    videoSrc: "https://www.youtube.com/embed/w0GfewGYR3g?t=1s",
  },
  {
    title: "Samsung S7 Ad - Blender 3D Animated Commercial Concept",
    client: "Helios Realty",
    tags: ["Arch Viz"],
    videoSrc: "https://www.youtube.com/embed/4Esie0f7HVw",
  },
  {
    title: "True To Texas - Let's Bring Productions HomeEcho Companion",
    client: "Echo Labs",
    tags: ["Character"],
    videoSrc: "https://www.youtube.com/embed/bpgrUK9EGjI",
  },
  {
    title: "Caught Off Guard - VIZ Vertical Studio Fall 2021",
    client: "Kairos",
    tags: ["CGI", "Motion"],
    videoSrc: "https://www.youtube.com/embed/7iZBroHtizk",
  },
];

export function ProjectsPanelFeatured() {
  return (
    <Section
      eyebrow="Selected Work"
      title={<>Featured <span className="text-gradient">Projects</span></>}
      subtitle="A reel of recent collaborations. Hover to feel the frame breathe."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-3xl glass border-gradient"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <VideoPlayer src={p.videoSrc} title={p.title} />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{p.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
