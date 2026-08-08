import { motion } from "framer-motion";
import { resolveStrapiImage } from "@/lib/resolve-strapi-image";

// The first partner renders larger ("h-46 md:h-82" ≈ up to 328px tall),
// the rest render smaller ("h-28 md:h-46" ≈ up to 184px tall). Matches the
// report's Brayer_Pictures_logo.png target of ~187px wide for the smaller slot.
const FIRST_PARTNER_TARGET_WIDTH = 300;
const OTHER_PARTNER_TARGET_WIDTH = 187;

export function HomePanelPartners({ data }: { data?: any }) {
  if (data?.publish === false) return null;

  const mainTitle = data?.main_title;

  const partners =
    data?.logo_list?.length > 0
      ? data.logo_list
          .filter((item: any) => item?.publish !== false)
          .map((item: any, i: number) => ({
            image: resolveStrapiImage(
              item.image,
              i === 0 ? FIRST_PARTNER_TARGET_WIDTH : OTHER_PARTNER_TARGET_WIDTH
            ),
            name: `Partner ${i + 1}`,
          }))
          .filter((p: any) => p.image)
      : [];

  if (!mainTitle && partners.length === 0) return null;

  return (
    <section className="lw-section bg-transparent">
      <div className="lw-container">
        {mainTitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white">{mainTitle}</h2>
          </motion.div>
        )}

        {partners.length > 0 && (
          <div className="mt-16 flex items-center justify-center gap-20 md:gap-28">
            {partners.map((partner: any, idx: number) => (
              <img
                key={`${partner.name}-${idx}`}
                src={partner.image.src}
                alt={partner.name}
                width={partner.image.width}
                height={partner.image.height}
                className={
                  idx === 0
                    ? "h-46 md:h-82 w-auto object-contain opacity-90"
                    : "h-28 md:h-46 w-auto object-contain opacity-90"
                }
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}