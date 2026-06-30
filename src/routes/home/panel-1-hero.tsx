import { TransitionLink } from "../../components/page-transition-overlay";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import lightwarpHorizontalLogo from "../../assets/images/cms/Lightwarp_Horizontal.png";

type HomeHeroContent = {
  videoSrc: string;
  logoSrc: string;
  subtitle: string;
  ctaHref: string;
  ctaLabel: string;
};

const DEFAULT_CONTENT: HomeHeroContent = {
  // Note: a `quality=540p` param was tried here to speed up mobile start
  // time, but `quality` isn't an officially supported URL parameter for
  // Vimeo's standard embed player — on iPhone it caused the player to fail
  // to initialize entirely (video never plays) rather than just being
  // ignored. Reverted; Vimeo's own adaptive bitrate selection already
  // serves a lower-bitrate stream automatically on slower connections.
  videoSrc:
    "https://player.vimeo.com/video/1177318410?autoplay=1&loop=1&muted=1&background=1",
  logoSrc: lightwarpHorizontalLogo,
  subtitle: "A New Age Creative 3D Studio. Powered by Real-Time 3D Technology",
  ctaHref: "/projects/#latest",
  ctaLabel: "Our Recent Work",
};

const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";
const STRAPI_HOME_HERO_ENDPOINT = import.meta.env.VITE_STRAPI_HOME_HERO_ENDPOINT;
const STRAPI_SECTION_KEY = import.meta.env.VITE_STRAPI_SECTION_KEY?.trim();
const STRAPI_SECTION_SLUG = import.meta.env.VITE_STRAPI_SECTION_SLUG?.trim();
const STRAPI_SECTION_TITLE = import.meta.env.VITE_STRAPI_SECTION_TITLE?.trim();

function isAbsoluteUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function joinUrl(baseUrl: string, maybePath: string) {
  if (!maybePath) return baseUrl;
  if (isAbsoluteUrl(maybePath)) return maybePath;
  if (baseUrl.endsWith("/") && maybePath.startsWith("/")) {
    return `${baseUrl}${maybePath.slice(1)}`;
  }
  if (!baseUrl.endsWith("/") && !maybePath.startsWith("/")) {
    return `${baseUrl}/${maybePath}`;
  }
  return `${baseUrl}${maybePath}`;
}

function pickFirstString(obj: unknown, keys: string[]): string | null {
  if (!obj || typeof obj !== "object") return null;
  const record = obj as Record<string, unknown>;
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return null;
}

function resolveStrapiMediaUrl(baseUrl: string, value: unknown): string | null {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return null;
    return joinUrl(baseUrl, trimmed);
  }
  if (!value || typeof value !== "object") return null;

  const record = value as Record<string, unknown>;
  const directUrl = record.url;
  if (typeof directUrl === "string" && directUrl.trim()) {
    return joinUrl(baseUrl, directUrl.trim());
  }

  const data = record.data;
  if (!data || typeof data !== "object") return null;
  const dataRecord = data as Record<string, unknown>;
  const attributes = dataRecord.attributes;
  if (!attributes || typeof attributes !== "object") return null;
  const attrRecord = attributes as Record<string, unknown>;
  const attrUrl = attrRecord.url;
  if (typeof attrUrl === "string" && attrUrl.trim()) {
    return joinUrl(baseUrl, attrUrl.trim());
  }

  return null;
}

function getMediaUrlFromGallery(baseUrl: string, value: unknown): string | null {
  if (!isRecord(value)) return null;
  const data = value.data;

  if (Array.isArray(data)) {
    for (const item of data) {
      if (!isRecord(item)) continue;
      const direct = resolveStrapiMediaUrl(baseUrl, item);
      if (direct) return direct;
      if (isRecord(item.attributes)) {
        const nested = resolveStrapiMediaUrl(baseUrl, item.attributes);
        if (nested) return nested;
      }
    }
  }

  return resolveStrapiMediaUrl(baseUrl, value);
}

function getCandidateEndpoints() {
  const endpoints = new Set<string>();

  if (STRAPI_HOME_HERO_ENDPOINT) {
    endpoints.add(STRAPI_HOME_HERO_ENDPOINT);
  }

  const matches = [
    STRAPI_SECTION_KEY,
    STRAPI_SECTION_SLUG,
    STRAPI_SECTION_TITLE,
    "home-hero",
    "home hero",
    "light warp",
  ].filter(Boolean) as string[];

  for (const match of matches) {
    const encoded = encodeURIComponent(match);
    endpoints.add(`/api/sections?populate=*&filters[slug][$eq]=${encoded}`);
    endpoints.add(`/api/sections?populate=*&filters[key][$eq]=${encoded}`);
    endpoints.add(`/api/sections?populate=*&filters[identifier][$eq]=${encoded}`);
    endpoints.add(`/api/sections?populate=*&filters[type][$eq]=${encoded}`);
    endpoints.add(`/api/sections?populate=*&filters[location][$eq]=${encoded}`);
    endpoints.add(`/api/sections?populate=*&filters[section_title][$eq]=${encoded}`);
    endpoints.add(`/api/sections?populate=*&filters[name][$eq]=${encoded}`);
    endpoints.add(`/api/sections?populate=*&filters[title][$eq]=${encoded}`);
  }

  endpoints.add("/api/sections?populate=*");

  return Array.from(endpoints);
}

function getStrapiItems(payload: unknown): Record<string, unknown>[] {
  if (!isRecord(payload)) return [];
  const data = payload.data;

  if (Array.isArray(data)) {
    return data
      .map((item) => {
        if (!isRecord(item)) return null;
        return isRecord(item.attributes) ? item.attributes : item;
      })
      .filter(Boolean) as Record<string, unknown>[];
  }

  if (isRecord(data)) {
    return [isRecord(data.attributes) ? data.attributes : data];
  }

  return [];
}

function pickSectionRecord(items: Record<string, unknown>[]) {
  if (!items.length) return null;

  const desiredKeys = [
    STRAPI_SECTION_KEY,
    STRAPI_SECTION_SLUG,
    STRAPI_SECTION_TITLE,
    "home-hero",
    "home hero",
    "light warp",
  ]
    .filter(Boolean)
    .map((value) => value!.trim().toLowerCase());

  for (const item of items) {
    const candidateValues = [
      pickFirstString(item, ["slug", "key", "identifier", "type", "location", "name"]),
      pickFirstString(item, ["title", "section_title"]),
    ]
      .filter(Boolean)
      .map((value) => value!.trim().toLowerCase());

    if (candidateValues.some((value) => desiredKeys.includes(value))) {
      return item;
    }
  }

  const sorted = [...items].sort((a, b) => {
    const left = pickFirstString(a, ["updatedAt", "publishedAt", "createdAt"]) ?? "";
    const right = pickFirstString(b, ["updatedAt", "publishedAt", "createdAt"]) ?? "";
    return right.localeCompare(left);
  });

  return sorted[0] ?? null;
}

export function HomePanelHero() {
  const [content, setContent] = useState<HomeHeroContent>(DEFAULT_CONTENT);

  useEffect(() => {
    const controller = new AbortController();


    void (async () => {
      try {
        for (const endpoint of getCandidateEndpoints()) {
          const urlBase = isAbsoluteUrl(endpoint) ? "" : STRAPI_BASE_URL;
          const url = endpoint.includes("?")
            ? joinUrl(urlBase, endpoint)
            : `${joinUrl(urlBase, endpoint)}?populate=*`;
          const res = await fetch(url, {
            signal: controller.signal,
            headers: { Accept: "application/json" },
          });
          if (!res.ok) continue;
          const json: unknown = await res.json();
          const attrs = pickSectionRecord(getStrapiItems(json));
          if (!attrs) continue;

          const next: HomeHeroContent = {
            videoSrc:
              pickFirstString(attrs, [
                "videoSrc",
                "videoUrl",
                "backgroundVideoUrl",
                "iframeSrc",
              ]) ??
              getMediaUrlFromGallery(STRAPI_BASE_URL, attrs.backgroundVideo) ??
              resolveStrapiMediaUrl(STRAPI_BASE_URL, attrs.video) ??
              DEFAULT_CONTENT.videoSrc,
            logoSrc:
              getMediaUrlFromGallery(STRAPI_BASE_URL, attrs.images) ??
              resolveStrapiMediaUrl(STRAPI_BASE_URL, attrs.logo) ??
              resolveStrapiMediaUrl(STRAPI_BASE_URL, attrs.logoImage) ??
              pickFirstString(attrs, ["logoSrc", "logoUrl"]) ??
              DEFAULT_CONTENT.logoSrc,
            subtitle:
              pickFirstString(attrs, ["description", "subtitle", "tagline", "section_title"]) ??
              DEFAULT_CONTENT.subtitle,
            ctaLabel:
              pickFirstString(attrs, [
                "ctaLabel",
                "ctaText",
                "buttonLabel",
                "button_text",
                "buttonText",
              ]) ??
              (typeof attrs.cta === "object" && attrs.cta
                ? pickFirstString(attrs.cta, ["label", "text"])
                : null) ??
              DEFAULT_CONTENT.ctaLabel,
            ctaHref:
              pickFirstString(attrs, [
                "ctaHref",
                "ctaLink",
                "buttonHref",
                "buttonLink",
                "internal_link",
                "external_link",
              ]) ??
              (typeof attrs.cta === "object" && attrs.cta
                ? pickFirstString(attrs.cta, ["href", "link", "url", "path"])
                : null) ??
              DEFAULT_CONTENT.ctaHref,
          };

          setContent(next);
          break;
        }
      } catch {
        return;
      }
    })();

    return () => controller.abort();
  }, []);

  const subtitleLines = content.subtitle
    .split(/\r?\n/g)
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Vimeo Video Background */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        {/* Poster frame — shown instantly while the Vimeo player connects & buffers */}
        <img
          src="https://vumbnail.com/1177318410.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.78vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%) scale(1.18)',
            objectFit: 'cover',
          }}
        />
        <iframe
          src={content.videoSrc}
          loading="eager"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.78vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%) scale(1.18)',
            border: 'none',
          }}
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center text-center">
        <div className="lw-hero-container flex min-h-[calc(100svh-75px)] flex-col items-center justify-center pt-[75px]">
        {/* Lightwarp Horizontal Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-5"
        >
          <img
            src={content.logoSrc}
            alt="Lightwarp"
            className="h-[clamp(120px,10vw,280px)] w-auto object-contain"
          />
        </motion.div>

        {/* Main Heading */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-6 tracking-tight"
        >
          LIGHTWARPbb
        </motion.h1> */}

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto max-w-[720px]"
        >
          <p className="text-[clamp(20px,1.15vw,22px)] font-normal text-white/85 leading-relaxed">
            {subtitleLines.length <= 1 ? (
              content.subtitle
            ) : (
              subtitleLines.map((line, idx) => (
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <TransitionLink
            to={content.ctaHref}
            className="inline-flex items-center justify-center rounded-sm border border-white/35 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
          >
            {content.ctaLabel}
          </TransitionLink>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
