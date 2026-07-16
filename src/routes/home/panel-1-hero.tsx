// src/routes/home/panel-1-hero.tsx
import { TransitionLink } from "../../components/page-transition-overlay";
import { motion } from "framer-motion";
import lightwarpLogo from "../../assets/images/cms/Lightwarp_Horizontal.png";

// Imported directly since it lives in src/assets (not public/) — Vite
// needs the import so it can resolve and bundle the file correctly.
const FALLBACK_LOGO_SRC = lightwarpLogo;

// Editors paste a full Vimeo link (e.g. https://vimeo.com/1177318410 or
// https://vimeo.com/1177318410/abcdef123). This pulls out just the numeric
// video ID we need to build the embed/poster URLs. Falls back to treating
// the input as a bare ID if it isn't a URL at all.
function extractVimeoId(input?: string): string | undefined {
  if (!input) return undefined;
  const trimmed = input.trim();

  if (/^\d+$/.test(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);
    if (!url.hostname.replace(/^www\./, "").includes("vimeo.com")) return undefined;
    const match = url.pathname.match(/(\d+)/);
    return match ? match[1] : undefined;
  } catch {
    return undefined;
  }
}

export function HomePanelHero({ data }: { data?: any }) {
  // No logo field exists on "home-partner", so this stays a fixed
  // technical asset. Video is fully dynamic — editors paste a full Vimeo
  // link into Strapi's video_url field, no hardcoded video anywhere.
  const logoSrc = FALLBACK_LOGO_SRC;

  const vimeoId = extractVimeoId(data?.video_url);
  const videoSrc = vimeoId
    ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&muted=1&background=1`
    : undefined;

  // Video starts playing immediately once the section mounts.

  const mainTitle = data?.main_title;
  const subtitle = data?.sub_title;
  const description = data?.description ? data.description.replace(/<[^>]+>/g, "") : "";

  const ctaLabel = data?.button?.label;
  const ctaHref = data?.button?.url;

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
          <iframe
            key={vimeoId}
            src={videoSrc}
            loading="eager"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "177.78vh",
              height: "56.25vw",
              minWidth: "100%",
              minHeight: "100%",
              transform: "translate(-50%, -50%) scale(1.02)",
              border: "none",
            }}
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
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
                alt="Lightwarp"
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
              <TransitionLink
                to={ctaHref}
                className="inline-flex items-center justify-center rounded-sm border border-white/35 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
              >
                {ctaLabel}
              </TransitionLink>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}