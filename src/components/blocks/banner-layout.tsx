const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;

interface StrapiMedia {
  url: string;
  alternativeText?: string;
}

export interface BannerLayoutProps {
  main_title?: string;
  description?: string;
  image?: StrapiMedia;
}

function resolveUrl(url?: string) {
  if (!url) return undefined;
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

export function BannerLayout({
  main_title,
  description,
  image,
}: BannerLayoutProps) {
  const heroImage = image;
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
           
          </div>
        </div>
      </div>
    </section>
  );
}
