// src/lib/strapi.ts
import qs from "qs";

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
    if (!res.ok) {
      console.warn(`Strapi fetch failed (${res.status}) for ${path}`);
      return null;
    }
    const json = await res.json();
    return json;
  } catch (err) {
    console.warn("Strapi fetch failed, falling back to static content:", err);
    return null;
  }
}

// Deep-populate query for a page's dynamic zone.
// Add an "on" entry for every component type used in pageBuilder.
const pageBuilderPopulate = qs.stringify(
  {
    populate: {
      pageBuilder: {
        on: {
          "page-builder.header": {
            populate: {
              Logo: true,
              NavLinks: true,
            },
          },
          // "page-builder.hero": { populate: "*" },
          // "page-builder.footer": { populate: "*" },
          // ...add other dynamic-zone components here as you build them
        },
      },
    },
  },
  { encodeValuesOnly: true }
);

export async function getPageBySlug(slug: string) {
  const query = qs.stringify(
    { filters: { slug: { $eq: slug } } },
    { encodeValuesOnly: true }
  );

  const json = await strapiFetch(`/pages?${query}&${pageBuilderPopulate}`);
  return json?.data?.[0] ?? null;
}

// Convenience helper to pull one component out of a page's dynamic zone
export function getComponent(page: any, componentType: string) {
  return page?.pageBuilder?.find((c: any) => c.__component === componentType);
}