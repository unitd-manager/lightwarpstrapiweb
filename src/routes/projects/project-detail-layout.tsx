import { motion } from "framer-motion";
import CreditsSlider from "../../components/CreditsSlider";
import { PageShell } from "../../components/page-shell";
import { VideoPlayer } from "../../components/video-player";

type CreditItem = {
  role: string;
  names: string;
};

type VideoCard = {
  title: string;
  subtitle: string;
  video: string;
};

type ProjectDetailLayoutProps = {
  title: string;
  subtitle: string;
  roleLine?: string;
  roles?: string[];
  overview: string[];
  videoSrc: string;
  watchHref: string;
  watchLabel: string;
  backgroundImage?: string;
  relatedProjects?: VideoCard[];
  previousHref?: string;
  nextHref?: string;
  copyrightText?: string;
  pageCredits?: string;
  credits?: CreditItem[];
  extraImages?: string[];
};

const isYouTubeEmbed = (url: string): boolean => {
  return url.includes("youtube.com/embed");
};

const isVideoUrl = (url: string): boolean => {
  if (!url) return false;
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url) || url.includes("/video/");
};

const VideoRenderer = ({
  src,
  className,
  ...props
}: {
  src: string;
  className?: string;
  [key: string]: any;
}) => {
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
    title: "Awaken Digital Environment",
    subtitle: "",
    video: "/src/assets/images/video1.mp4",
  },
];

const lushLogos = [
  {
    src: "https://static.wixstatic.com/media/ddc236_24adb982b89f47bcb935321431de9767~mv2.png",
    alt: "Unreal Engine",
    blendScreen: false,
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_e2fc4ec6be4342f7916b6acdd157c5a9~mv2.png",
    alt: "Blender",
    blendScreen: false,
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_3d79dc80ee084230b2a96316abae79cb~mv2.png",
    alt: "Substance 3D",
    blendScreen: true,
  },
];

const stuffedLogos = [
  {
    src: "https://static.wixstatic.com/media/ddc236_24adb982b89f47bcb935321431de9767~mv2.png",
    alt: "Substance 3D",
    blendScreen: false,
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_e56fb512f1f540c7b6025875fdea7217~mv2.png",
    alt: "Blender",
    blendScreen: false,
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_e2fc4ec6be4342f7916b6acdd157c5a9~mv2.png",
    alt: "USD",
    blendScreen: false,
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_3d79dc80ee084230b2a96316abae79cb~mv2.png",
    alt: "Unreal Engine",
    blendScreen: true,
  },
];

const logos = [
  {
    src: "https://static.wixstatic.com/media/ddc236_e87923663ea941a08dcdcd667ae9e03b~mv2.png",
    alt: "Unreal Engine",
    blendScreen: true,
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_75cb156520ae4ab99854737db24bba00~mv2.png",
    alt: "Blender",
    blendScreen: false,
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_24adb982b89f47bcb935321431de9767~mv2.png",
    alt: "Substance 3D",
    blendScreen: false,
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_e56fb512f1f540c7b6025875fdea7217~mv2.png",
    alt: "USD",
    blendScreen: false,
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_c96a3c58f3db467eb48714cf3af338cc~mv2.png",
    alt: "AWS",
    blendScreen: false,
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_29f8c8953a6149f1b7c533df8a7d8de6~mv2.png",
    alt: "Perforce",
    blendScreen: false,
  },
  {
    src: "https://static.wixstatic.com/media/ddc236_ab0eebd4077744e1ba7bbc84edd51303~mv2.png",
    alt: "Perforce",
    blendScreen: false,
  },
];

export function ProjectDetailLayout({
  title,
  subtitle,
  roleLine,
  roles,
  overview,
  videoSrc,
  watchHref,
  watchLabel,
  backgroundImage,
  relatedProjects: relatedProjectsProp,
  previousHref,
  nextHref,
  copyrightText,
  pageCredits,
  credits,
  extraImages,
}: ProjectDetailLayoutProps) {
  const relatedProjects: VideoCard[] =
    relatedProjectsProp ||
    (title === "Shell You Be Mine?"
      ? [
          {
            title: "",
            subtitle: "",
            video: "https://static.wixstatic.com/media/ddc236_2b01016e82d042d89e51d64a073c0c89~mv2.png",
          },
          {
            title: "",
            subtitle: "",
            video: "https://static.wixstatic.com/media/ddc236_696ba547e8e94818ade1fa24b6c24708~mv2.png",
          },
          {
            title: "",
            subtitle: "",
            video: "https://static.wixstatic.com/media/ddc236_061e70caf8b64b8ca14621c33a8fa548~mv2.png",
          },
          {
            title: "",
            subtitle: "",
            video: "https://static.wixstatic.com/media/ddc236_968451479e354a488dc7a8f70e740f7b~mv2.png",
          },
          {
            title: "",
            subtitle: "",
            video: "https://video.wixstatic.com/video/ddc236_a5b9aa7c340245f38cb4e1b82f4bf1c3/480p/mp4/file.mp4",
          },
          {
            title: "",
            subtitle: "",
            video: "https://static.wixstatic.com/media/ddc236_53049068e4594ea8a4ff62d53e791a24~mv2.png",
          },
          {
            title: "",
            subtitle: "",
            video: "https://static.wixstatic.com/media/ddc236_62bf76f196834f329a9f57eb73f98313~mv2.png",
          },
        ]
      : title === "Lush Victorian Garden"
        ? [
            {
              title: "",
              subtitle: "",
              video: "https://static.wixstatic.com/media/ddc236_24ec6c84332440a69b60fca5190dc578~mv2.png",
            },
            {
              title: "",
              subtitle: "",
              video: "https://static.wixstatic.com/media/ddc236_a377d11331fd427594c636cf646b5ecf~mv2.jpg",
            },
            {
              title: "",
              subtitle: "",
              video: "https://static.wixstatic.com/media/ddc236_24ec6c84332440a69b60fca5190dc578~mv2.png",
            },
            {
              title: "",
              subtitle: "",
              video: "https://static.wixstatic.com/media/ddc236_a377d11331fd427594c636cf646b5ecf~mv2.jpg",
            },
          ]
        : title === "Stuffed"
          ? [
              {
                title: "",
                subtitle: "",
                video: "https://static.wixstatic.com/media/ddc236_3014706f8f4749a2bf75d169895936f2~mv2.png",
              },
              {
                title: "",
                subtitle: "",
                video: "https://static.wixstatic.com/media/ddc236_f6b54443864a461fb2d328556fbe550a~mv2.png",
              },
              {
                title: "",
                subtitle: "",
                video: "https://static.wixstatic.com/media/ddc236_66f92fed12c24b1ab434297a3eefc941~mv2.png",
              },
              {
                title: "",
                subtitle: "",
                video: "https://static.wixstatic.com/media/ddc236_08a614f6d3d74520b175303da17f9d10~mv2.gif/v1/fit/w_654,h_368,q_90,enc_avif,quality_auto/ddc236_08a614f6d3d74520b175303da17f9d10~mv2.gif",
              },
              {
                title: "",
                subtitle: "",
                video: "https://static.wixstatic.com/media/ddc236_f8a6f19bbe2d4f65998d14b6499c9087~mv2.gif",
              },
              {
                title: "",
                subtitle: "",
                video: "https://static.wixstatic.com/media/ddc236_2a251d8499ab4226bc96b571420561bb~mv2.gif/v1/fit/w_600,h_301,q_90,enc_avif,quality_auto/ddc236_2a251d8499ab4226bc96b571420561bb~mv2.gif",
              },
              {
                title: "",
                subtitle: "",
                video: "https://static.wixstatic.com/media/ddc236_ef21fbb060e6470595ca4791950a88d0~mv2.gif/v1/fit/w_654,h_368,q_90,enc_avif,quality_auto/ddc236_ef21fbb060e6470595ca4791950a88d0~mv2.gif",
              },
            ]
          : extraProjects);

  const isLushGarden = title === "Lush Victorian Garden";
  const isShellYouBeMine = title === "Shell You Be Mine?";
  const isTheJab = title === "The Jab";
  const isStuffed = title === "Stuffed";
  const logosToRender = isLushGarden ? lushLogos : isStuffed ? stuffedLogos : logos;
  const logoGap = "10px";
  const logoHeight = "22px";
  const logoPadding = "6px 2px";
  const isYouTube = isYouTubeEmbed(videoSrc);
  const videoWrapperClass = "relative w-full aspect-video overflow-hidden bg-black";
  const videoMediaClass = "h-full w-full object-cover";

  if (isLushGarden || isShellYouBeMine || isStuffed) {
    return (
      <PageShell copyrightText={copyrightText}>
        <section className="bg-[#050517] text-white font-display">
          <div className="w-full overflow-hidden">
            <img
              src={backgroundImage}
              alt={title}
              className="w-full h-[45vh] max-w-none object-cover"
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 pt-0 pb-16 lg:pb-2">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
              >
                <div className="space-y-6 max-w-3xl">
                  <h1
                    className={`project-title ${isLushGarden ? "whitespace-nowrap text-[clamp(2.75rem,4.5vw,3.75rem)] leading-[1.05]" : ""}`}
                  >
                    {title}
                  </h1>
                  {pageCredits ? (
                    <p className="text-sm text-white/50">{pageCredits}</p>
                  ) : null}
                  {roles && roles.length > 0 ? (
                    <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 max-w-xl">
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-3">
                        Lightwarp Contributions
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {roles.map((role) => (
                          <span
                            key={role}
                            className="rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white/90"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : roleLine ? (
                    <p className="project-subtitle text-white max-w-2xl">{roleLine}</p>
                  ) : null}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="services-logo-row"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: logoGap,
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
                        padding: logoPadding,
                      }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="services-logo-img"
                        style={{
                          height: logoHeight,
                          width: "auto",
                          maxWidth: "100%",
                          objectFit: "contain",
                          mixBlendMode: logo.blendScreen ? "screen" : undefined,
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <div className="grid gap-12 lg:grid-cols-[1fr_minmax(540px,1.15fr)] lg:items-start">
                <div className="space-y-6 max-w-2xl">
                  {overview.map((paragraph, idx) => (
                    <p key={idx} className="project-body text-white/75">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <div className="overflow-hidden rounded-none border border-white/10 bg-black shadow-2xl shadow-black/50">
                    <div className={videoWrapperClass}>
                      {isYouTube ? (
                        <VideoPlayer src={videoSrc} title={title} />
                      ) : (
                        <VideoRenderer
                          src={videoSrc}
                          className={videoMediaClass}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>

              <CreditsSlider credits={credits} />
            </div>
          </div>
        </section>

        {extraImages?.length ? (
          <section className="bg-[#050517] py-16 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 md:grid-cols-2">
                {extraImages.map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden rounded-none border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
                  >
                    {/\.(mp4|webm|ogg|mov)$/i.test(src) ? (
                      <video
                        src={src}
                        className="w-full aspect-[16/9] object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={src}
                        alt={`${title} still ${index + 1}`}
                        className="w-full aspect-[16/9] object-cover"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-[#050517] py-16 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mt-10 flex flex-col items-center justify-between gap-3 sm:flex-row">
              {previousHref ? (
                <a
                  href={previousHref}
                  className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
                >
                  Previous
                </a>
              ) : isShellYouBeMine || isLushGarden ? (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95 disabled:opacity-50"
                >
                  Previous
                </button>
              ) : (
                <div />
              )}
              <a
                href={isLushGarden ? "/capabilities" : "/projects"}
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
              >
                {isLushGarden ? "Back to Capabilities" : "Back to Project"}
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
    <PageShell copyrightText={copyrightText}>
      <section className="relative min-h-[75vh] overflow-hidden bg-[#050517] text-white font-display">
        <div className="absolute inset-0 overflow-hidden">
          {backgroundImage ? (
            <img
              src={backgroundImage}
              className="absolute top-1/2 left-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 object-cover"
              alt=""
            />
          ) : isYouTubeEmbed(videoSrc) ? (
            <div className="absolute top-1/2 left-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 bg-black" />
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

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-0 pb-16 lg:pb-2">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
            >
              <div className="space-y-6 max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">{subtitle}</p>
                <h1
                  className={`project-title ${isLushGarden ? "whitespace-nowrap text-[clamp(2.75rem,4.5vw,3.75rem)] leading-[1.05]" : ""}`}
                >
                  {title}
                </h1>
                <p className="project-subtitle text-white/70 max-w-2xl">{overview[0]}</p>
                {pageCredits ? <p className="text-sm text-white/60 mt-2">{pageCredits}</p> : null}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="services-logo-row"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: logoGap,
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
                      padding: logoPadding,
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="services-logo-img"
                      style={{
                        height: logoHeight,
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-[1fr_minmax(540px,1.15fr)] lg:items-start">
              <div className="space-y-6 max-w-2xl">
                {overview.slice(1).map((paragraph, idx) => (
                  <p key={idx} className="project-body text-white/75">
                    {paragraph}
                  </p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="overflow-hidden rounded-none border border-white/10 bg-black shadow-2xl shadow-black/50">
                  <div className={videoWrapperClass}>
                    {isYouTube ? (
                      <VideoPlayer src={videoSrc} title={title} />
                    ) : (
                      <VideoRenderer
                        src={videoSrc}
                        className={videoMediaClass}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
                  </div>
                </div>
              </motion.div>
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
                className="overflow-hidden rounded-none border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
              >
                <div className="relative overflow-hidden">
                  {isVideoUrl(card.video) ? (
                    <VideoRenderer
                      src={card.video}
                      className="w-full aspect-[16/9] object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    />
                  ) : (
                    <img
                      src={card.video}
                      alt={card.title}
                      className="w-full aspect-[16/9] object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {card.subtitle}
                    </p>
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
            ) :(
              <div />
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}