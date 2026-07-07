import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // adjust import if using a different router
import { ProjectDetailLayout } from "./project-detail-layout";
import {
  fetchCaseStudyBySlug,
  blocksToParagraphs,
  parseContributionsString,
  type StrapiCaseStudy,
} from "../../lib/strapi-case-study"; // adjust path to wherever you put the file above

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
        setError(err.message || "Failed to load case study");
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#050517] text-white/60">
        Loading...
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#050517] text-white/60">
        Case study not found.
      </div>
    );
  }
const STRAPI_BASE_URL = "http://localhost:1337"; // same as in strapi-case-study.ts

const logos = (caseStudy.logo || [])
  .map((item) => item.link)
  .filter(Boolean)
  .map((link) => ({
    src: link,
    alt: "Software logo",
  }));
  
  const overviewParagraphs = blocksToParagraphs(caseStudy.description);
  const fullDescriptionParagraphs = blocksToParagraphs(caseStudy.full_description);
  const combinedOverview = [...overviewParagraphs, ...fullDescriptionParagraphs];

  const roles = parseContributionsString(caseStudy.contributions);

  const extraImages = caseStudy.gallery
    .map((g) => g.link)
    .filter(Boolean);

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
      watchLabel={caseStudy.ctaLabel || "Watch Full Reel"}
      backgroundImage={caseStudy.bannerImage}
      previousHref={caseStudy.previous_link}
      nextHref={caseStudy.next_link}
      credits={caseStudy.rate}
      extraImages={extraImages}
      logos={logos}
    />
  );
}