// src/lib/getPage.ts
import { strapiFetch } from "./strapi";

export async function getPageBySlug(slug: string) {
  const json = await strapiFetch(
    `/pages?filters[slug][$eq]=${slug}&populate[pageBuilder][populate]=*`
  );
  const entry = json?.data?.[0];
  if (!entry) return null;
  return entry.attributes ?? entry;
}