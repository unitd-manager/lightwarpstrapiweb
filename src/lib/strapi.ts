// src/lib/strapi.ts
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export function getStrapiMedia(media: any): string | null {
  const url = media?.url || media?.data?.attributes?.url;
  if (!url) return null;
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

export async function strapiFetch(path: string) {
  try {
    const res = await fetch(`${STRAPI_URL}/api${path}`, {
      headers: {
        // only needed if you locked down public read and are using a token instead
        // Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
    });
    if (!res.ok)
      console.warn(`Strapi fetch failed (${res.status}) for ${path}`);
      return null;
    const json = await res.json();
    return json;
  } catch (err) {
    console.warn("Strapi fetch failed, falling back to static content:", err);
    return null;
  }
}