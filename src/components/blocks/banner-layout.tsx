const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;

interface StrapiMedia {
  url: string;
  alternativeText?: string;
}

export interface BannerLayoutProps {
  main_title?: string;
  sub_title?: string;
  description?: string;
  image?: StrapiMedia;
  background_image?: StrapiMedia;
  banner_image?: StrapiMedia;
  button?: { label: string; url: string; targetBlank?: boolean };
  secondary_button?: { label: string; url: string; targetBlank?: boolean };
}

function resolveUrl(url?: string) {
  if (!url) return undefined;
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

export function BannerLayout({
  main_title,
  sub_title,
  description,
  image,
  background_image,
  banner_image,
  button,
  secondary_button,
}: BannerLayoutProps) {
  const heroImage = image ?? banner_image ?? background_image;
  const hasImage = !!heroImage?.url;

  return (
    <section className="lw-container lw-section">
      {/*
        Purple card — image LEFT, text RIGHT
        Exactly matches the WordPress About page banner
      */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #5b4bcf 0%, #7c5ce8 100%)",
        }}
      >
        <div className={`grid grid-cols-1 ${hasImage ? "lg:grid-cols-2" : ""} items-center`}>

          {/* Left: image — square crop, fills full height of card */}
          {hasImage && (
            <div className="w-full h-56 lg:h-72 overflow-hidden">
              <img
                src={resolveUrl(heroImage!.url)}
                alt={heroImage!.alternativeText ?? main_title ?? ""}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          {/* Right: text */}
          <div className="px-8 py-10 lg:px-12 lg:py-12">
            {sub_title && (
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">
                {sub_title}
              </p>
            )}
            {main_title && (
              <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight mb-5">
                {main_title}
              </h2>
            )}
            {description && (
              <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                {description}
              </p>
            )}
            {(button?.url || secondary_button?.url) && (
              <div className="flex flex-wrap gap-3 mt-7">
                {button?.url && (
                  <a
                    href={button.url}
                    target={button.targetBlank ? "_blank" : undefined}
                    rel={button.targetBlank ? "noopener noreferrer" : undefined}
                    className="bg-white text-[#5b4bcf] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors"
                  >
                    {button.label}
                  </a>
                )}
                {secondary_button?.url && (
                  <a
                    href={secondary_button.url}
                    target={secondary_button.targetBlank ? "_blank" : undefined}
                    rel={secondary_button.targetBlank ? "noopener noreferrer" : undefined}
                    className="border border-white/50 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
                  >
                    {secondary_button.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
