import { motion } from "framer-motion";
import { getStrapiMedia } from "../../lib/strapi";

export function HomePanelPartners({ data }: { data?: any }) {
  const mainTitle = data?.main_title;

  const partners =
    data?.logo_list?.length > 0
      ? data.logo_list
          .map((item: any, i: number) => ({
            image: getStrapiMedia(item.image),
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
                src={partner.image}
                alt={partner.name}
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