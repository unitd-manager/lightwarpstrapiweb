import { TransitionLink } from "../../components/page-transition-overlay";
import { motion } from "framer-motion";
import { resolveStrapiImage } from "@/lib/resolve-strapi-image";

// Connected to the existing "acf-sections.content-image-split-block"
// component in Strapi (fields: main_title, description, image, cta_button)
// instead of footer-common-cta, since that one is reused elsewhere.
//
// Image renders at "lg:max-w-[360px]" — matches the report's
// Octopus_Still.png ("Shelly Character") target of 360×360 exactly.
const CTA_IMAGE_TARGET_WIDTH = 360;

export function HomePanelCta({ data }: { data?: any }) {
  if (data?.publish === false) return null;

  const title = data?.main_title;
  const description = data?.description ? data.description.replace(/<[^>]+>/g, "") : "";
  const showButton = !!data?.cta_button && data.cta_button.Publish !== false;
  const buttonLabel = data?.cta_button?.Label;
  const buttonUrl = data?.cta_button?.URL;
  const image = resolveStrapiImage(data?.image, CTA_IMAGE_TARGET_WIDTH);

  if (!title && !description && !image) return null;

  const titleLines = title ? title.split("\n") : [];

  return (
    <section className="lw-section-tight bg-transparent">
      <div className="lw-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[2.5rem] bg-[#6b5bf7e1] p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_40px_80px_rgba(91,74,235,0.25)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-4 items-center">
            {image && (
              <div className="flex justify-center lg:justify-end">
                <img
                  src={image.src}
                  alt="Shelly Character"
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[360px] object-contain"
                />
              </div>
            )}

            <div className="text-center text-white">
              {titleLines.length > 0 && (
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.03em] mb-6">
                  {titleLines.map((line: string, idx: number) => (
                    <span className="block" key={idx}>
                      {line}
                    </span>
                  ))}
                </h2>
              )}

              {description && (
                <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/90 leading-relaxed mb-10">
                  {description}
                </p>
              )}

              {showButton && buttonLabel && buttonUrl && (
                <TransitionLink
                  to={buttonUrl}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-4 py-3 text-[20px] font-bold text-white shadow-[0_30px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white hover:text-[#6453FF]"
                >
                  {buttonLabel}
                </TransitionLink>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}