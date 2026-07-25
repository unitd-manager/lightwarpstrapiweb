// ─── Strapi API client for Case Study collection ──────────────────────────────

const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337"; // ← set to your real Strapi URL

export type StrapiCreditEntry = {
  role: string;
  names: string;
  publish?: boolean; // 👈 added
};

export type StrapiGalleryItem = {
  link: string;
  publish?: boolean;
};

export type StrapiLogoItem = {
  link: string;
  publish?: boolean;
};

export type StrapiCaseStudy = {
  id: number;
  publish?: boolean; // 👈 added
  title: string;
  slug: string;
  bannerImage: string;
  contributionsLabel: string;
  contributions: string; // comma-separated
  creditsLabel: string;
  rate: StrapiCreditEntry[];
  copyrightText: string;
  description: any; // Strapi "blocks" rich text
  full_description: any; // Strapi "blocks" rich text
  video_url: string;
  sub_heading: string;
  video_url_2: string;
  ctaLabel: string;
  ctaLink: string;
  gallery: StrapiGalleryItem[];
  logo: StrapiLogoItem[];
  next_label: string;
  next_link: string;
  previous_label: string;
  previous_link: string;
};

// Converts Strapi's "blocks" rich text format into an array of plain paragraph strings.
// Strapi blocks look like: [{ type: "paragraph", children: [{ type: "text", text: "..." }] }]
export function blocksToParagraphs(blocks: any): string[] {
  if (!blocks || !Array.isArray(blocks)) return [];
  return blocks
    .map((block) => {
      if (block.type !== "paragraph" || !Array.isArray(block.children)) return "";
      return block.children.map((child: any) => child.text || "").join("");
    })
    .filter((text) => text.trim().length > 0);
}

// Splits a comma-separated contributions string into a clean array.
export function parseContributionsString(contributions: string): string[] {
  if (!contributions) return [];
  return contributions
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function fetchCaseStudyBySlug(slug: string): Promise<StrapiCaseStudy | null> {
  const url =
    `${STRAPI_BASE_URL}/api/case-studies` +
    `?filters[slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate=*`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch case study "${slug}": ${res.status}`);
  }

  const json = await res.json();
  const entry = json?.data?.[0];
  if (!entry) return null;

  // Strapi v4 wraps fields in { id, attributes: {...} }.
  // Strapi v5 flattens this to { id, ...fields } directly.
  // This handles both shapes safely.
  const attrs = entry.attributes ?? entry;

  return {
    id: entry.id,
    publish: attrs.publish, // 👈 added
    title: attrs.title,
    slug: attrs.slug,
    bannerImage: attrs.bannerImage,
    contributionsLabel: attrs.contributionsLabel,
    contributions: attrs.contributions,
    creditsLabel: attrs.creditsLabel,
    rate: (attrs.rate || []).map((r: any) => ({
      role: r.role,
      names: r.names,
      publish: r.publish, // 👈 added
    })),
    sub_heading: attrs.sub_heading,
    copyrightText: attrs.copyrightText,
    description: attrs.description,
    full_description: attrs.full_description,
    video_url: attrs.video_url,
    video_url_2: attrs.video_url_2 || "",
    ctaLabel: attrs.ctaLabel,
    ctaLink: attrs.ctaLink,
   gallery: (attrs.gallery || []).map((g: any) => ({
      link: g.link,
      publish: g.publish,
    })),
    logo: (attrs.logo || []).map((l: any) => ({
      link: l.link,
      publish: l.publish,
    })),
    next_label: attrs.next_label,
    next_link: attrs.next_link || "",
    previous_label: attrs.previous_label,
    previous_link: attrs.previous_link,
  };
}