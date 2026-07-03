// src/pages/projects/ProjectsPanelHero.tsx
import { motion } from "framer-motion";
import { TransitionLink } from "../../components/page-transition-overlay";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function getYouTubeId(url?: string) {
  if (!url) return null;
  const match = url.match(/(?:v=|\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

// Renders CMS rich-text HTML if present, otherwise splits plain text into paragraphs
function RichDescription({ text }: { text: string }) {
  const isHtml = /<[a-z][\s\S]*>/i.test(text);
  if (isHtml) {
    return (
      <div
        className="text-[18px] leading-8 text-white font-light [&_p]:mb-4"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }
  return (
    <>
      {text
        .split(/\n\s*\n/)
        .filter(Boolean)
        .map((para, i) => (
          <p key={i} className="text-[18px] leading-8 text-white font-light mt-4 first:mt-0">
            {para.trim()}
          </p>
        ))}
    </>
  );
}

const STATIC_FEATURED = {
  title: "Featured Project: Shell You Be Mine?",
  highlight_description: "24 artists. 15 weeks. A Novel Realtime Pipeline.",
  copyrightText: "© 2025 Lightwarp LLC",
  description: `That's all it took to deliver this 3-minute, award-winning short from concept to final film. Showcased by 80lvl, Epic Games, Texas A&M, and multiple film festivals from Austin to Japan, Shell You Be Mine? is a passion project built to push real-time animation forward and deliver feature-quality results.

The studio's first project serves as a benchmark and template for upcoming commercial projects — Lightwarp delivers results at or above this level for your brand, campaign, and story.`,
  video_url: "https://www.youtube.com/watch?v=pLu4iXYhI4k",
  ctaLabel: "Learn More",
  ctaLink: `/projects/${slugify("Shell You Be Mine")}`,
};

export function ProjectsPanelHero({ data }: { data?: any }) {
  const title = data?.title || STATIC_FEATURED.title;
  const highlight = data?.highlight_description || STATIC_FEATURED.highlight_description;
  const copyright = data?.copyrightText || STATIC_FEATURED.copyrightText;
  const description = data?.description || STATIC_FEATURED.description;
  const ctaLabel = data?.ctaLabel || STATIC_FEATURED.ctaLabel;
  const ctaLink = data?.ctaLink || STATIC_FEATURED.ctaLink;
  const videoId = getYouTubeId(data?.video_url) || getYouTubeId(STATIC_FEATURED.video_url)!;

  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0&iv_load_policy=3&playlist=${videoId}`;
  const posterSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <section className="relative min-h-[calc(100svh-80px)] bg-transparent text-white font-display sm:min-h-[calc(100vh-80px)]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={posterSrc}
          alt=""
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[56.25vw] w-[100vw] min-h-full min-w-[177.78vh] scale-[1.75] border-0 object-cover sm:scale-[1.25] md:scale-[1.15]"
          loading="eager"
          decoding="async"
        />
        <iframe
          src={embedSrc}
          title={`${title} Background Video`}
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[56.25vw] w-[100vw] min-h-full min-w-[177.78vh] scale-[1.75] border-0 sm:scale-[1.25] md:scale-[1.15]"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="eager"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
      </div>

      <div className="relative flex w-full items-center px-1 py-3 sm:px-3 lg:px-8">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-[95vw] sm:w-full sm:max-w-[50vw] p-6 border border-white/40 rounded-2xl"
          >
            <div className="space-y-6">
              <h2 className="inline text-5xl sm:text-6xl font-bold leading-tight text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-black/10 backdrop-blur-[3px] px-2 py-1">
                {title}
              </h2>

              <div className="space-y-1">
                <p className="text-base sm:text-xl font-semibold text-white/80">{highlight}</p>
                <p className="text-sm text-white/100">{copyright}</p>
              </div>

              <div className="rounded-xl bg-black/25 backdrop-blur-[4px] px-3 py-2">
                <RichDescription text={description} />
              </div>

              <div className="flex flex-wrap gap-4">
                <TransitionLink
                  to={ctaLink}
                  className="inline-flex items-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:scale-105"
                >
                  {ctaLabel}
                </TransitionLink>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}