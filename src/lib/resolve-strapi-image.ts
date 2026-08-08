// src/lib/resolve-strapi-image.ts

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

type StrapiImageFormat = {
  url: string;
  width: number;
  height: number;
};

type StrapiImage = {
  url?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  // v4-style shape, just in case some old data still comes through this way
  data?: { attributes?: StrapiImage };
  attributes?: StrapiImage;
};

/**
 * Picks the smallest Strapi-generated format that's still >= the width you're
 * actually rendering at (so it never looks soft/blurry), falling back up to
 * the original if nothing generated is big enough, or if formats are missing
 * entirely (e.g. SVGs, which Strapi doesn't resize).
 *
 * @param image           The raw Strapi media field (data.image, data.logo, etc.)
 * @param targetWidth     The width (in px) you're actually displaying the image at.
 *                        Use the LARGEST width it renders at across breakpoints
 *                        (e.g. if it's 187px on mobile but 280px on desktop, pass 280).
 */
export function resolveStrapiImage(
  image: StrapiImage | null | undefined,
  targetWidth: number
): { src: string; width?: number; height?: number } | undefined {
  if (!image) return undefined;

  // Normalize v4/v5 shape differences
  const media = image.data?.attributes ?? image.attributes ?? image;
  if (!media?.url) return undefined;

  const toAbsolute = (path: string) => (path.startsWith("http") ? path : `${STRAPI_URL}${path}`);

  const candidates = [
    media.formats?.thumbnail,
    media.formats?.small,
    media.formats?.medium,
    media.formats?.large,
  ].filter((f): f is StrapiImageFormat => !!f);

  // Sort smallest -> largest, then pick the first one wide enough for the target.
  candidates.sort((a, b) => a.width - b.width);
  const bestFit = candidates.find((f) => f.width >= targetWidth);

  if (bestFit) {
    return { src: toAbsolute(bestFit.url), width: bestFit.width, height: bestFit.height };
  }

  // Nothing generated is big enough (or no formats exist, e.g. SVG/small originals)
  // — fall back to the original file rather than upscaling a smaller format.
  return { src: toAbsolute(media.url), width: media.width, height: media.height };
}