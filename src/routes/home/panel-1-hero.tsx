// src/routes/home/panel-1-hero.tsx
import { TransitionLink } from "../../components/page-transition-overlay";
import { motion } from "framer-motion";
import { LazyVideoBackground } from "../../components/lazy-video-background";
import { resolveStrapiImage } from "@/lib/resolve-strapi-image";

export function HomePanelHero({ data }: { data?: any }) {
  const logo = resolveStrapiImage(data?.image, 280);
  const logoSrc = logo?.src;
  const logoAlt = data?.image?.alternativeText || "Lightwarp";
  const logoWidth = logo?.width;
  const logoHeight = logo?.height;

  // video_url now points directly to a self-hosted mp4 in Strapi's media
  // library instead of a Vimeo link.
  const videoSrc = data?.video_url;
  // Optional poster frame — shown instantly while the video loads. Falls
  // back to no poster (just black/gradient) if not set in Strapi yet.
  const posterSrc = resolveStrapiImage(data?.video_poster, 1920)?.src;

  const mainTitle = data?.main_title;
  const subtitle = data?.sub_title;
  const description = data?.description ? data.description.replace(/<[^>]+>/g, "") : "";
  const showButton = !!data?.button && data.button.Publish !== false;
  const ctaLabel = data?.button?.Label;
  const ctaHref = data?.button?.URL;

  const subtitleLines = subtitle
    ? subtitle
        .split(/\r?\n/g)
        .map((line: string) => line.trim())
        .filter(Boolean)
    : [];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-black">
        {videoSrc && (
          <LazyVideoBackground
            videoSrc={videoSrc}
            posterSrc={posterSrc}
            title="Lightwarp Hero Background Video"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[56.25vw] w-[100vw] min-h-full min-w-[177.78vh] scale-[1.02] border-0 object-cover"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center text-center">
        <div className="lw-hero-container flex min-h-[calc(100svh-75px)] flex-col items-center justify-center pt-[75px]">
          {logoSrc && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-5"
            >
              <img
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                className="h-[clamp(120px,10vw,280px)] w-auto object-contain"
              />
            </motion.div>
          )}

          {mainTitle && (
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 tracking-tight max-w-3xl"
            >
              {mainTitle}
            </motion.h1>
          )}

          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto max-w-[720px]"
            >
              <p className="text-[clamp(20px,1.15vw,22px)] font-normal text-white/85 leading-relaxed">
                {subtitleLines.length <= 1 ? (
                  subtitle
                ) : (
                  subtitleLines.map((line: string, idx: number) => (
                    <span key={`${idx}-${line}`}>
                      {line}
                      {idx < subtitleLines.length - 1 ? (
                        <>
                          <br className="hidden sm:block" />
                          <span className="sm:hidden"> </span>
                        </>
                      ) : null}
                    </span>
                  ))
                )}
              </p>
            </motion.div>
          )}

          {description && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mx-auto max-w-[640px] mt-4"
            >
              <p className="text-sm sm:text-base font-normal text-white/70 leading-relaxed">
                {description}
              </p>
            </motion.div>
          )}

          {ctaLabel && ctaHref && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4"
            >
              {showButton && ctaLabel && ctaHref && (
                <TransitionLink
                  to={ctaHref}
                  className="inline-flex items-center justify-center rounded-sm border border-white/35 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
                >
                  {ctaLabel}
                </TransitionLink>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}