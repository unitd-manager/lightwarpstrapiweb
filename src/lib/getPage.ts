// src/lib/getPage.ts
import { strapiFetch } from "./strapi";

export async function getPageBySlug(slug: string) {
  const json = await strapiFetch(
    `/pages?filters[slug][$eq]=${slug}&populate=deep,5`
  );
  const entry = json?.data?.[0];
  if (!entry) return null;
  // Strapi v5 flattens attributes onto the entry directly in many setups;
  // if you're on v4-style responses, use entry.attributes instead.
  return entry.attributes ?? entry;
}