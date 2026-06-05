import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";
import image1 from "../../assets/images/img1.png";
import image2 from "../../assets/images/img2.png";
import image3 from "../../assets/images/img3.png";
import image4 from "../../assets/images/img4.png";
import image5 from "../../assets/images/img5.png";
import image6 from "../../assets/images/img6.png";
import image7 from "../../assets/images/img7.png";
import image8 from "../../assets/images/img8.png";
import image9 from "../../assets/images/image 1.png";
import image10 from "../../assets/images/img9.png";
import image11 from "../../assets/images/img10.png";
import image12 from "../../assets/images/img11.png";
import image13 from "../../assets/images/img12.png";
import image14 from "../../assets/images/img13.png";
import image15 from "../../assets/images/img14.png";



type VideoCard = {
  title: string;
  subtitle: string;
  video: string;
};

type ProjectDetailLayoutProps = {
  title: string;
  subtitle: string;
  roleLine?: string;
  overview: string[];
  videoSrc: string;
  watchHref: string;
  watchLabel: string;
  backgroundImage?: string;
  relatedProjects?: VideoCard[];
  previousHref?: string;
  nextHref?: string;
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

const lushLogos = [
  {
    src: "https://static.wixstatic.com/media/ddc236_24adb982b89f47bcb935321431de9767~mv2.png",
    alt: "Unreal Engine",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_e2fc4ec6be4342f7916b6acdd157c5a9~mv2.png",
    alt: "Blender",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_3d79dc80ee084230b2a96316abae79cb~mv2.png",
    alt: "Substance 3D",
  },
];

const stuffedLogos = [
  {
    src: "https://static.wixstatic.com/media/ddc236_24adb982b89f47bcb935321431de9767~mv2.png",
    alt: "Substance 3D",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_e56fb512f1f540c7b6025875fdea7217~mv2.png",
    alt: "Blender",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_e2fc4ec6be4342f7916b6acdd157c5a9~mv2.png",
    alt: "USD",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_3d79dc80ee084230b2a96316abae79cb~mv2.png",
    alt: "Unreal Engine",
  },
];

const logos = [
  {
    src: "https://static.wixstatic.com/media/ddc236_e87923663ea941a08dcdcd667ae9e03b~mv2.png",
    alt: "Unreal Engine",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_75cb156520ae4ab99854737db24bba00~mv2.png",
    alt: "Blender",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_24adb982b89f47bcb935321431de9767~mv2.png",
    alt: "Substance 3D",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_e56fb512f1f540c7b6025875fdea7217~mv2.png",
    alt: "USD",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_c96a3c58f3db467eb48714cf3af338cc~mv2.png",
    alt: "AWS",
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_29f8c8953a6149f1b7c533df8a7d8de6~mv2.png",
    alt: "Perforce",
  },
   {
    src: "https://static.wixstatic.com/media/ddc236_ab0eebd4077744e1ba7bbc84edd51303~mv2.png",
    alt: "Perforce",
  },
];

export function ProjectDetailLayout({
  title,
  subtitle,
  roleLine,
  overview,
  videoSrc,
  watchHref,
  watchLabel,
  backgroundImage,
  relatedProjects: relatedProjectsProp,
  previousHref,
  nextHref,
}: ProjectDetailLayoutProps) {
  const relatedProjects: VideoCard[] =
    relatedProjectsProp || (title === "Shell You Be Mine?"
      ? [
          { title: "", subtitle: "", video: image1 },
          { title: "", subtitle: "", video: image2 },
          { title: "", subtitle: "", video: image3 },
          { title: "", subtitle: "", video: image4 },
          { title: "", subtitle: "", video: image5 },
          { title: "", subtitle: "", video: image6 },
        ]
      : title === "Lush Victorian Garden"
      ? [
          { title: "", subtitle: "", video: image7 },
          { title: "", subtitle: "", video: image8 },
          { title: "", subtitle: "", video: image9 },
          { title: "", subtitle: "", video: image7},
          { title: "", subtitle: "", video: image8 },
          { title: "", subtitle: "", video: image9 },
        ]
      : title === "Stuffed"
      ? [
          { title: "", subtitle: "", video: image10 },
          { title: "", subtitle: "", video: image11 },
          { title: "", subtitle: "", video: image12 },
          { title: "", subtitle: "", video: image13 },
          { title: "", subtitle: "", video: image14 },
          { title: "", subtitle: "", video: image15 },
        ]
      : extraProjects);
  const isLushGarden = title === "Lush Victorian Garden";
  const isShellYouBeMine = title === "Shell You Be Mine?";
  const isStuffed = title === "Stuffed";
  const isSpecialVideoPage = isLushGarden || isShellYouBeMine || isStuffed;
  const logosToRender = isLushGarden ? lushLogos : isStuffed ? stuffedLogos : logos;
  const specialGridClass = isSpecialVideoPage ? "grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(520px,1fr)]" : "lg:grid-cols-[1.3fr_0.9fr]";
  const specialVideoClass = isSpecialVideoPage ? "w-full aspect-[16/9] min-h-[30rem] object-cover" : "w-full aspect-[16/9] object-cover";

  if (isLushGarden || isShellYouBeMine || isStuffed) {
    return (
      <PageShell>
        <section className="bg-[#050517] text-white font-display">
          <div className="w-full overflow-hidden">
            <img
              src={backgroundImage}
              alt={title}
              className="w-full h-[45vh] max-w-none object-cover"
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className={`grid gap-12 ${specialGridClass} items-start`}>
              <div className="space-y-8">
                <div className="space-y-6 max-w-2xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">{subtitle}</p>
                  <h1 className="project-title">
                    {title}
                  </h1>
                  {roleLine ? (
                    <p className="project-subtitle text-white max-w-2xl">
                      {roleLine}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-6 max-w-2xl">
                  {overview.map((paragraph, idx) => (
                    <p key={idx} className="project-body text-white/75">{paragraph}</p>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="services-logo-row"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "18px",
                    marginBottom: "20px",
                    width: "100%",
                  }}
                >
                  {logosToRender.map((logo) => (
                    <div
                      key={logo.alt}
                      className="services-logo-cell"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px 4px",
                      }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="services-logo-img"
                        style={{
                          height: "30px",
                          width: "auto",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </motion.div>

                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/50">
                  <VideoRenderer
                    src={videoSrc}
                    className={specialVideoClass}
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

        <section className="bg-[#050517] py-16 px-6">
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
            <div className="mt-10 flex flex-col items-center justify-between gap-3 sm:flex-row">
                {previousHref ? (
                  <a
                    href={previousHref}
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
                  >
                    Previous
                  </a>
                ) : isShellYouBeMine ? (
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
                  >
                    Previous
                  </button>
                ) : (
                  <div />
                )}
              <a
                href="/projects"
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
              >
                Back to Project
              </a>
              {nextHref ? (
                <a
                  href={nextHref}
                 className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
                >
                  Next
                </a>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="relative min-h-[75vh] overflow-hidden bg-[#050517] text-white font-display">
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
                <h1 className="project-title">
                  {title}
                </h1>
                <p className="project-subtitle text-white/70 max-w-2xl">{overview[0]}</p>
              </div>

              <div className="space-y-6 max-w-2xl">
                {overview.slice(1).map((paragraph, idx) => (
                  <p key={idx} className="project-body text-white/75">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="services-logo-row"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "18px",
                  marginBottom: "20px",
                  width: "100%",
                }}
              >
                {logos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="services-logo-cell"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px 4px",
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="services-logo-img"
                      style={{
                        height: "30px",
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </motion.div>

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
          <div className="mt-10 flex flex-col items-center justify-between gap-3 sm:flex-row">
            {previousHref ? (
              <a
                href={previousHref}
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Previous
              </a>
            ) : isShellYouBeMine ? (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white opacity-40 cursor-not-allowed"
              >
                Previous
              </button>
            ) : (
              <div />
            )}
            <a
              href="/projects"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
            >
              Back to Project
            </a>
            {nextHref ? (
              <a
                href={nextHref}
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Next
              </a>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
