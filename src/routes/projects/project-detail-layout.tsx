import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";

type VideoCard = {
  title: string;
  subtitle: string;
  video: string;
};

type ProjectDetailLayoutProps = {
  title: string;
  subtitle: string;
  overview: string[];
  videoSrc: string;
  watchHref: string;
  watchLabel: string;
  backgroundImage?: string;
  relatedProjects?: VideoCard[];
};

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
  return <video src={src} className={className} {...props} />;
};

const extraProjects: VideoCard[] = [
  {
    title: "Shell You Be Mine?",
    subtitle: "",
    video: "/src/assets/images/video24.mp4",
  },
  {
    title: "Stuffed",
    subtitle: "",
    video: "/src/assets/images/video26.mp4",
  },
  {
    title: "The Jab",
    subtitle: "",
    video: "/src/assets/images/video10.mp4",
  },
  {
    title: "Samsung S7 ad",
    subtitle: "",
    video: "/src/assets/images/video17.mp4",
  },
  {
    title: "Caught Off Guard",
    subtitle: "",
    video: "/src/assets/images/video29.mp4",
  },
  {
    title: "Cyberia 2084",
    subtitle: "",
    video: "/src/assets/images/video4.mp4",
  },
  {
    title: "Stray Vista Studios",
    subtitle: "",
    video: "/src/assets/images/video1.mp4",
  },
];

export function ProjectDetailLayout({
  title,
  subtitle,
  overview,
  videoSrc,
  watchHref,
  watchLabel,
  backgroundImage,
  relatedProjects: relatedProjectsProp,
}: ProjectDetailLayoutProps) {
  const relatedProjects: VideoCard[] =
    relatedProjectsProp || (title === "Shell You Be Mine?"
      ? [
          { title: "", subtitle: "", video: "/src/assets/images/img1.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img2.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img3.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img4.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img5.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img6.png" },
        ]
      : title === "Lush Victorian Garden"
      ? [
          { title: "", subtitle: "", video: "/src/assets/images/img7.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img8.png" },
          { title: "", subtitle: "", video: "/src/assets/images/image 1.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img7.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img8.png" },
          { title: "", subtitle: "", video: "/src/assets/images/image 1.png" },
        ]
      : title === "Stuffed"
      ? [
          { title: "", subtitle: "", video: "/src/assets/images/img9.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img10.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img11.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img12.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img13.png" },
          { title: "", subtitle: "", video: "/src/assets/images/img14.png" },
        ]
      : extraProjects);
  const isRightAligned = title === "Shell You Be Mine?";
  const isLushGarden = title === "Lush Victorian Garden";
  const isShellYouBeMine = title === "Shell You Be Mine?";
  const isStuffed = title === "Stuffed";

  if (isLushGarden || isShellYouBeMine || isStuffed) {
    return (
      <PageShell>
        <section className="bg-black text-white">
          <div className="w-full overflow-hidden">
            <img
              src={backgroundImage}
              alt={title}
              className="w-full h-[45vh] max-w-none object-cover"
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] items-start">
              <div className="space-y-8">
                <div className="space-y-6 max-w-2xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">{subtitle}</p>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-[-0.03em]">
                    {title}
                  </h1>
                </div>

                <div className="space-y-6 text-lg leading-8 text-white/75 max-w-2xl">
                  {overview.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={watchHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
                  >
                    {watchLabel}
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    All Projects
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/50">
                <VideoRenderer
                  src={videoSrc}
                  className="w-full aspect-[16/9] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2">
              {relatedProjects.map((card) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={card.video}
                      alt={card.title}
                      className="w-full aspect-[16/9] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">{card.subtitle}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{card.title}</h3>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="relative min-h-[75vh] overflow-hidden bg-[#05050d] text-white">
        <div className="absolute inset-0 overflow-hidden">
          {backgroundImage ? (
            <img
              src={backgroundImage}
              className="absolute top-1/2 left-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 object-cover"
              alt=""
            />
          ) : isYouTubeEmbed(videoSrc) ? (
            <div className="absolute top-1/2 left-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 bg-black" />
          ) : (
            <video
              src={videoSrc}
              className="absolute top-1/2 left-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050d] via-black/70 to-transparent" />
          {backgroundImage && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.6),transparent_30%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.08),transparent_28%)] mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          )}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_minmax(440px,0.9fr)] items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6 max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">{subtitle}</p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-[-0.03em]">
                  {title}
                </h1>
                <p className="text-xl text-white/70 max-w-2xl">{overview[0]}</p>
              </div>

              <div className="space-y-6 max-w-2xl">
                {overview.slice(1).map((paragraph, idx) => (
                  <p key={idx} className="text-lg leading-8 text-white/75">
                    {paragraph}
                  </p>
                ))}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={watchHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
                  >
                    {watchLabel}
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
                <VideoRenderer
                  src={videoSrc}
                  className="w-full aspect-[16/9] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {relatedProjects.map((card) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={card.video}
                    alt={card.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{card.subtitle}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{card.title}</h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
