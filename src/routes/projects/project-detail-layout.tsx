import { motion } from "framer-motion";
import CreditsSlider from "../../components/CreditsSlider";
import { PageShell } from "../../components/page-shell";
import { VideoPlayer } from "../../components/video-player";

type CreditItem = {
  role: string;
  names: string;
};

type LogoItem = {
  src: string;
  alt: string;
  blendScreen?: boolean;
};

type VideoCard = {
  title: string;
  subtitle: string;
  video: string;
};

type ProjectDetailLayoutProps = {
  title: string;
  subtitle?: string;
  roleLine?: string;
  roles?: string[];
  contributionsLabel?: string;
  creditsLabel?: string;
  overview: string[];
  videoSrc: string;
  videoSrc2?: string;
  watchHref?: string;
  watchLabel?: string;
  backgroundImage?: string;
  logos?: LogoItem[];
  relatedProjects?: VideoCard[];
  previousHref?: string;
  previousLabel?: string;
  nextHref?: string;
  nextLabel?: string;
  copyrightText?: string;
  pageCredits?: string;
  credits?: CreditItem[];
  extraImages?: string[];
  backLink?: string;
  backLabel?: string;
};

const isYouTubeEmbed = (url: string): boolean => {
  if (!url) return false;
  return url.includes("youtube.com/embed");
};

const isVideoUrl = (url: string): boolean => {
  if (!url) return false;
  return /\.(mp4|webm|ogg|mov)(\?|$)/i.test(url) || url.includes("/video/");
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

const logoGap = "10px";
const logoHeight = "22px";
const logoPadding = "6px 2px";
const videoWrapperClass = "relative w-full aspect-video overflow-hidden bg-black";
const videoMediaClass = "h-full w-full object-cover";

export function ProjectDetailLayout({
  title,
  subtitle,
  roleLine,
  roles,
  contributionsLabel,
  creditsLabel,
  overview,
  videoSrc,
  videoSrc2,
  watchHref,
  watchLabel,
  backgroundImage,
  logos = [],
  relatedProjects = [],
  previousHref,
  previousLabel,
  nextHref,
  nextLabel,
  copyrightText,
  pageCredits,
  credits,
  extraImages,
  backLink = "/projects",
  backLabel = "Back to Project",
}: ProjectDetailLayoutProps) {
  const isYouTube = isYouTubeEmbed(videoSrc);
  const isYouTube2 = isYouTubeEmbed(videoSrc2 || "");

  return (
    <PageShell copyrightText={copyrightText}>
      <section className="bg-[#050517] text-white font-display">
        {backgroundImage ? (
          <div className="w-full overflow-hidden">
            <img
              src={backgroundImage}
              alt={title}
              className="w-full h-[45vh] max-w-none object-cover"
            />
          </div>
        ) : null}

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
                {subtitle ? (
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">{subtitle}</p>
                ) : null}

                <h1 className="project-title">{title}</h1>

                {pageCredits ? (
                  <p className="text-sm text-white/50">{pageCredits}</p>
                ) : null}

                {roles && roles.length > 0 ? (
                  <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-3">
                      {contributionsLabel || "Lightwarp Contributions"}
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

              {logos.length > 0 ? (
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
                          mixBlendMode: logo.blendScreen ? "screen" : undefined,
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              ) : null}
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-[1fr_minmax(540px,1.15fr)] lg:items-start">
              <div className="space-y-6 max-w-2xl">
                {overview.map((paragraph, idx) => (
                  <p key={idx} className="project-body text-white/75">
                    {paragraph}
                  </p>
                ))}
              </div>

             {videoSrc ? (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.1 }}
    className="space-y-4"
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

    {videoSrc2 ? (
      <div className="overflow-hidden rounded-none border border-white/10 bg-black shadow-2xl shadow-black/50">
        <div className={videoWrapperClass}>
          {isYouTube2 ? (
            <VideoPlayer src={videoSrc2} title={title} />
          ) : (
            <VideoRenderer
              src={videoSrc2}
              className={videoMediaClass}
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </div>
      </div>
    ) : null}
  </motion.div>
) : null}
            </div>

            {credits && credits.length > 0 ? (
              <CreditsSlider credits={credits} label={creditsLabel} />
            ) : null}
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

      {relatedProjects.length > 0 ? (
        <section className="bg-black py-16 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2">
              {relatedProjects.map((card, idx) => (
                <motion.article
                  key={card.title || idx}
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
                    {(card.title || card.subtitle) ? (
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        {card.subtitle ? (
                          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                            {card.subtitle}
                          </p>
                        ) : null}
                        {card.title ? (
                          <h3 className="mt-2 text-2xl font-semibold text-white">{card.title}</h3>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </motion.article>
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
                {previousLabel || "Previous"}
              </a>
            ) : (
              <span
    aria-disabled="true"
    className="inline-flex rounded-full bg-white/20 px-8 py-4 text-sm font-semibold text-white/40 cursor-not-allowed"
  >
    {previousLabel || "Previous"}
  </span>
            )}

            <a
              href={backLink}
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
            >
              {backLabel}
            </a>

            {nextHref ? (
              <a
                href={nextHref}
                className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:opacity-95"
              >
                {nextLabel || "Next"}
              </a>
            ) : (
              <span
    aria-disabled="true"
    className="inline-flex rounded-full bg-white/20 px-8 py-4 text-sm font-semibold text-white/40 cursor-not-allowed"
  >
    {nextLabel || "Next"}
  </span>
              
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
