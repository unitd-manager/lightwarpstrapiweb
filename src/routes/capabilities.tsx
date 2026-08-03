import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LazyVimeoBackground } from "../components/lazy-vimeo-background";
import { PageShell } from "../components/page-shell";
import { ProjectsPanelCapabilities } from "./projects/panel-3-capabilities";
import { ProjectsPanelExtraVideosCapabilities } from "./projects/panel-7-extra-videos-capabilities";

export type CapabilityItem = {
  id: number;
  title: string;
  description: string;
  sub_heading: string;
  highlight_description: string;
  ctaLabel: string;
  ctaLink: string;
  video_url: string;
  copyrightText: string;
  contributionsLabel?: string;
  creditsLabel?: string;
  // Matches Strapi's actual component field name — it's "Credits" (capital C), not "credits"
  Credits?: { role: string; names: string; publish?: boolean }[];
  watchnow_label?: string;
  watchnow_link?: string;
  publish?: boolean;
};

async function fetchCapabilitiesPage() {
  const res = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/pages/by-slug/capabilities`);
  if (!res.ok) throw new Error("Failed to fetch capabilities page");
  const json = await res.json();

  const useCaseBlock = json.data.pageBuilder.find(
    (block: any) => block.__component === "acf-sections.use-case-single"
  );

  // Whole "Use Case Single" section is hidden if its own publish is false
  if (useCaseBlock && useCaseBlock.publish === false) return null;

  return useCaseBlock;
}

function resolveWatchHref(videoUrl?: string, watchnowLink?: string): string | undefined {
  if (watchnowLink) return watchnowLink;
  if (!videoUrl) return undefined;
  if (/^[a-zA-Z0-9_-]{11}$/.test(videoUrl)) return `https://www.youtube.com/watch?v=${videoUrl}`;

  try {
    const url = new URL(videoUrl);
    const host = url.hostname.replace(/^www\./, "");
    const path = url.pathname.replace(/(^\/|\/$)/g, "");

    if (host === "youtu.be") return `https://www.youtube.com/watch?v=${path}`;
    if (host === "youtube.com" || host === "m.youtube.com") {
      if (path.startsWith("embed/")) return `https://www.youtube.com/watch?v=${path.split("/").pop()}`;
      const id = url.searchParams.get("v") || path.split("/").pop();
      return id ? `https://www.youtube.com/watch?v=${id}` : videoUrl;
    }
  } catch {
    // fall through to return raw URL
  }

  return videoUrl;
}

export default function Capabilities() {
  const vimeoId      = "1204856098";
  const posterSrc    = `https://vumbnail.com/${vimeoId}.jpg`;
  const embedSrc     = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&autopause=0&background=1&controls=0&title=0&byline=0&portrait=0&dnt=1&keyboard=0`;
  const vimeoPageUrl = `https://vimeo.com/${vimeoId}`;

  const [block, setBlock] = useState<any>(null);

  useEffect(() => {
    fetchCapabilitiesPage()
      .then(setBlock)
      .catch(() => setBlock(null));
  }, []);

  // Split by ORIGINAL position first, then check publish per-slot.
  // This keeps Lush always mapped to its own slot regardless of what's
  // published before or after it.
  const allItems: CapabilityItem[] = block?.use_case_items ?? [];
  const [heroItemRaw, lushItemRaw, ...extraItemsRaw] = allItems;

  const heroItem = heroItemRaw && heroItemRaw.publish !== false ? heroItemRaw : undefined;
  const lushItem = lushItemRaw && lushItemRaw.publish !== false ? lushItemRaw : undefined;
  const extraItems = extraItemsRaw.filter((item) => item.publish !== false);

  const pageTitle      = block?.main_title ?? "";
  const heroWatchHref  = resolveWatchHref(heroItem?.video_url, heroItem?.watchnow_link) || heroItem?.ctaLink || vimeoPageUrl;
  const heroWatchLabel = heroItem?.watchnow_label || heroItem?.ctaLabel || "";

  return (
    <PageShell>

      {/* Page title banner */}
      <section className="relative text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/25 via-cyan-500/15 to-indigo-700/25" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-16 text-center">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl text-white bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 [text-shadow:0_1px_0_rgba(255,255,255,0.18),0_-1px_0_rgba(0,0,0,0.7),0_14px_30px_rgba(0,0,0,0.55)]">
            {pageTitle}
          </h1>
        </div>
      </section>

      {/* Hero reel section — use_case_items[0], hidden entirely if unpublished */}
      {heroItem && (
        <section className="relative h-[calc(100svh-80px)] overflow-hidden bg-transparent text-white font-display sm:h-[calc(100vh-80px)]">
          <div className="absolute inset-0 overflow-hidden">
            <LazyVimeoBackground
              embedSrc={embedSrc}
              posterSrc={posterSrc}
              title="Capabilities Reel Background Video"
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[56.25vw] w-[100vw] min-h-full min-w-[177.78vh] scale-[1.15] border-0 object-cover sm:scale-[1.05] md:scale-100"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,58,255,0.24),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,205,0.16),transparent_28%)]" />
          </div>

          <div className="relative flex h-[540px] w-full items-center px-4 sm:px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[95vw] sm:w-full sm:max-w-[50vw] p-6 border border-white/40 rounded-2xl"
            >
              <div className="space-y-6">

                {heroItem?.title && (
                  <h2 className="inline text-3xl sm:text-4xl font-bold leading-tight text-white [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-black/10 backdrop-blur-[3px] px-2 py-1">
                    {heroItem.title}
                  </h2>
                )}

                <div className="rounded-xl bg-black/30 backdrop-blur-[4px] mt-[10px] px-3 py-3 space-y-3">
                  {heroItem?.description && (
                    <div
                      className="text-[16px] leading-7 text-white font-light"
                      dangerouslySetInnerHTML={{ __html: heroItem.description }}
                    />
                  )}
                  <p className="text-[13px] leading-7 text-white font-light">
                    {heroItem?.highlight_description}
                  </p>
                </div>

                {heroWatchLabel && (
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={heroWatchHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:bg-white/90 hover:scale-105"
                    >
                      {heroWatchLabel}
                    </a>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Lush Victorian Garden — use_case_items[1] */}
      <ProjectsPanelCapabilities item={lushItem} />

      {/* Extra video panels — use_case_items[2..n] (Caught Off Guard, The Jab, Stray Vista Studios, Lego Fluid Dance, Trench Render) */}
      <ProjectsPanelExtraVideosCapabilities useCaseItems={extraItems.length ? extraItems : undefined} />

    </PageShell>
  );
}