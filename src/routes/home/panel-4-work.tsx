import { Link } from "react-router-dom";
import { Section } from "../../components/section";
import { VideoPlayer } from "../../components/video-player";

const workVideos = [
  {
    title: "Shell You Be Mine?",
    label: "Short Film",
    desc: "24 artists. 15 weeks. A novel real-time pipeline — award-winning short film from concept to completion.",
    src: "https://www.youtube.com/embed/yinRrmEpfr4",
  },
  {
    title: "Lightwarp Studios Capabilities Reel",
    label: "Studio Reel",
    desc: "An immersive capabilities reel showcasing our full production range — crafted with detail and atmosphere.",
    src: "https://player.vimeo.com/video/1153379831",
  },
  {
    title: "The Jab",
    label: "Short Film",
    desc: "A short film highlighting our scene creation, lighting, and atmosphere work in a polished cinematic edit.",
    src: "https://www.youtube.com/embed/4d27i10x2wI?t=3s",
  },
  {
    title: "Cyberia 2084",
    label: "Animation",
    desc: "A Blender EEVEE animated short showcasing character performance, emotion, and real-time rendering quality.",
    src: "https://www.youtube.com/embed/pTmzrHqdS_4",
  },
];

export function HomePanelWork() {
  return (
    <Section
      eyebrow="Our Work"
      title={<>Studio <span className="text-gradient">Videos</span></>}
      subtitle="Real work in motion — every video produced by our team using our proprietary real-time pipeline."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {workVideos.map((video) => (
          <article
            key={video.title}
            className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/[0.03] border border-gradient p-2 hover:shadow-[0_0_40px_rgba(255,77,205,0.4)] transition-transform hover:-translate-y-1"
          >
            <div className="aspect-video w-full rounded-2xl overflow-hidden">
              <VideoPlayer src={video.src} title={video.title} />
            </div>
            <div className="p-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {video.label}
              </div>
              <h4 className="text-xl font-semibold text-gradient">{video.title}</h4>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{video.desc}</p>
            </div>
          </article>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/projects"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand transition-transform hover:scale-[1.03]"
        >
          <span className="relative z-10">See All Projects</span>
          <span className="relative z-10">→</span>
          <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-medium backdrop-blur transition-colors hover:bg-white/[0.08]"
        >
          Start A Project →
        </Link>
      </div>
    </Section>
  );
}
