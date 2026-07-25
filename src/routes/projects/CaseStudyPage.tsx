import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectDetailLayout } from "./project-detail-layout";
import { PageShell } from "../../components/page-shell";
import {
  fetchCaseStudyBySlug,
  blocksToParagraphs,
  parseContributionsString,
  type StrapiCaseStudy,
} from "../../lib/strapi-case-study";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<StrapiCaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    setLoading(true);
    setError(null);

    fetchCaseStudyBySlug(slug)
      .then((data) => {
        if (cancelled) return;
        setCaseStudy(data);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message ?? "Failed to load case study");
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <PageShell>
        <div className="min-h-[60vh] flex items-center justify-center text-white/60">
          Loading...
        </div>
      </PageShell>
    );
  }

  // 👇 Treat an unpublished case study the same as "not found"
  if (error || !caseStudy || caseStudy.publish === false) {
    return (
      <PageShell>
        <div className="min-h-[60vh] flex items-center justify-center text-white/60">
          Case study not found.
        </div>
      </PageShell>
    );
  }

  // ✅ Resolve logo image URLs — use STRAPI_URL for relative paths
  const logos = (caseStudy.logo ?? [])
  .filter((item) => item.publish !== false)
    .map((item) => item.link)
    .filter(Boolean)
    .map((link) => ({
      src: link.startsWith("http") ? link : `${STRAPI_URL}${link}`,
      alt: "Software logo",
    }));

  const overviewParagraphs = blocksToParagraphs(caseStudy.description);
  const fullDescriptionParagraphs = blocksToParagraphs(caseStudy.full_description);
  const combinedOverview = [...overviewParagraphs, ...fullDescriptionParagraphs];

  const roles = parseContributionsString(caseStudy.contributions);

  // ✅ Resolve gallery image URLs
  const extraImages = (caseStudy.gallery ?? [])
   .filter((g) => g.publish !== false)
    .map((g) => g.link)
    .filter(Boolean)
    .map((link) => (link.startsWith("http") ? link : `${STRAPI_URL}${link}`));

  // ✅ Resolve banner image URL
  const backgroundImage = caseStudy.bannerImage
    ? caseStudy.bannerImage.startsWith("http")
      ? caseStudy.bannerImage
      : `${STRAPI_URL}${caseStudy.bannerImage}`
    : undefined;

  // 👇 Only pass through credits that are explicitly published (or missing the flag)
  const visibleCredits = (caseStudy.rate ?? []).filter((c) => c.publish !== false);

  return (
    <ProjectDetailLayout
      title={caseStudy.title}
      copyrightText="© 2025 Lightwarp LLC. All rights reserved."
      pageCredits={caseStudy.copyrightText}
      subtitle=""
      roles={roles}
      contributionsLabel={caseStudy.contributionsLabel}
      creditsLabel={caseStudy.creditsLabel}
      overview={combinedOverview}
      videoSrc={caseStudy.video_url}
      videoSrc2={caseStudy.video_url_2}
      watchHref={caseStudy.video_url}
      watchLabel={caseStudy.ctaLabel}
      sub_heading={caseStudy.sub_heading}
      backgroundImage={backgroundImage}
      previousHref={caseStudy.previous_link}
      nextLabel={caseStudy.next_label}
      nextHref={caseStudy.next_link}
      credits={visibleCredits}
      previousLabel={caseStudy.previous_label}
      extraImages={extraImages}
      logos={logos}
    />
  );
}