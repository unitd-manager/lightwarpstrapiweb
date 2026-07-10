const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;

interface StrapiMedia {
  url: string;
  alternativeText?: string;
}

interface CtaButton {
  label: string;
  url: string;
  targetBlank?: boolean;
}

export interface FooterCommonCtaProps {
  main_title?: string;
  description?: string;
  cta_button?: CtaButton;
  image?: StrapiMedia;        // left character SVG
  image1?: StrapiMedia[];     // right character SVG(s)
}

function resolveUrl(url?: string) {
  if (!url) return undefined;
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

export function FooterCommonCta({
  main_title,
  description,
  cta_button,
  image,
  image1,
}: FooterCommonCtaProps) {
  const leftImg = image;
  const rightImg = image1?.[0];

  return (
    /*
      Orange full-width CTA — matches WordPress exactly:
      [left character]  [BIG TITLE + desc + button]  [right character]
    */
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#d94f2c" }}
    >
      <div className="lw-container relative">
        <div className="flex items-end justify-between gap-4 py-0">

          {/* Left character image — sits at bottom, bleeds upward */}
          {leftImg?.url ? (
            <div
              className="hidden md:block flex-shrink-0 self-end"
              style={{ width: "160px", marginBottom: 0 }}
            >
              <img
                src={resolveUrl(leftImg.url)}
                alt={leftImg.alternativeText ?? ""}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "260px", objectPosition: "bottom" }}
              />
            </div>
          ) : (
            <div className="hidden md:block flex-shrink-0" style={{ width: "160px" }} />
          )}

          {/* Center: title + description + CTA button */}
          <div className="flex-1 text-center py-16 px-4">
            {main_title && (
              <h2
                className="text-white font-black leading-tight mb-5"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {main_title}
              </h2>
            )}
            {description && (
              <p className="text-white/80 text-base lg:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
                {description}
              </p>
            )}
            {cta_button?.url && (
              <a
                href={cta_button.url}
                target={cta_button.targetBlank ? "_blank" : undefined}
                rel={cta_button.targetBlank ? "noopener noreferrer" : undefined}
                className="inline-flex items-center bg-[#6250da] hover:bg-[#7361e8] text-white px-9 py-3.5 rounded-full font-semibold text-base transition-colors shadow-xl"
              >
                {cta_button.label}
              </a>
            )}
          </div>

          {/* Right character image */}
          {rightImg?.url ? (
            <div
              className="hidden md:block flex-shrink-0 self-end"
              style={{ width: "160px", marginBottom: 0 }}
            >
              <img
                src={resolveUrl(rightImg.url)}
                alt={rightImg.alternativeText ?? ""}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "260px", objectPosition: "bottom" }}
              />
            </div>
          ) : (
            <div className="hidden md:block flex-shrink-0" style={{ width: "160px" }} />
          )}

        </div>
      </div>
    </section>
  );
}
