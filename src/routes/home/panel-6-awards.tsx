import { motion } from "framer-motion";
import { resolveStrapiImage } from "@/lib/resolve-strapi-image";

const AWARDS_HEADING_STYLE: React.CSSProperties = {
  fontFamily: '"DM Sans", sans-serif', fontSize: "35px", fontWeight: 500,
  fontStyle: "normal", textDecoration: "none", lineHeight: "1.3em",
  letterSpacing: "0px", wordSpacing: "0px",
};

const AWARDS_HEADING_STYLESS: React.CSSProperties = {
  fontFamily: '"DM Sans", sans-serif', fontSize: "30px", fontWeight: 500,
  fontStyle: "normal", textDecoration: "none", lineHeight: "1.3em",
  letterSpacing: "0px", wordSpacing: "0px",
};

// Award badges render inside a "h-48" (192px) box, "max-h-40 md:max-h-48"
// — matches the report's austin_laurel_cropped.png / shortshorts_laurel.png
// target of ~200px wide.
const AWARD_TARGET_WIDTH = 200;

// Artist logos render inside a smaller "h-32 md:h-40" (128–160px) box —
// matches the report's wdas_white_transparent.png target of ~202px wide.
const ARTIST_TARGET_WIDTH = 210;

export function HomePanelAwards({
  awardsData,
  artistsData,
}: {
  awardsData?: any;
  artistsData?: any;
}) {
  // Each half of this combined section can be hidden independently
  const awardsEnabled = awardsData?.publish !== false;
  const artistsEnabled = artistsData?.publish !== false;

  const awardsTitle = awardsEnabled ? awardsData?.main_title : undefined;
  const artistsTitle = artistsEnabled ? artistsData?.main_title : undefined;
  const disclaimer = artistsEnabled ? artistsData?.disclaimer : undefined;

  const awards = awardsEnabled
    ? (awardsData?.award_and_certificate_list ?? [])
        .filter((item: any) => item?.publish !== false)
        .map((item: any, i: number) => ({
          image: resolveStrapiImage(item.image, AWARD_TARGET_WIDTH),
          title: `Award ${i + 1}`,
        }))
        .filter((a: any) => a.image)
    : [];

  const artists = artistsEnabled
    ? (artistsData?.award_winner_list ?? [])
        .filter((item: any) => item?.publish !== false)
        .map((item: any, i: number) => ({
          image: resolveStrapiImage(item.image, ARTIST_TARGET_WIDTH),
          name: `Artist ${i + 1}`,
          href: item.link?.url || "#",
        }))
        .filter((a: any) => a.image)
    : [];

  const showAwardsBlock = awardsTitle || awards.length > 0;
  const showArtistsBlock = artistsTitle || artists.length > 0;

  if (!showAwardsBlock && !showArtistsBlock) return null;

  return (
    <section className="lw-section-tight bg-transparent">
      <div className="lw-container">
        {showAwardsBlock && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            {awardsTitle && (
              <h3 className="text-white mb-16" style={AWARDS_HEADING_STYLE}>
                {awardsTitle}
              </h3>
            )}
            {awards.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {awards.map((award: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-center justify-center h-48"
                  >
                    <img
                      src={award.image.src}
                      alt={award.title}
                      width={award.image.width}
                      height={award.image.height}
                      loading="lazy"
                      decoding="async"
                      className="max-h-40 md:max-h-48 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {showArtistsBlock && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {artistsTitle && (
              <h3 className="text-white mb-8" style={AWARDS_HEADING_STYLESS}>
                {artistsTitle}
              </h3>
            )}

            {artists.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {artists.map((artist: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-center justify-center h-32 md:h-40"
                  >
                    <img
                      src={artist.image.src}
                      alt={artist.name}
                      width={artist.image.width}
                      height={artist.image.height}
                      loading="lazy"
                      decoding="async"
                      className="max-h-32 md:max-h-40 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {disclaimer && (
              <p
                className="mt-6 ml-auto max-w-[420px] text-right text-[10px] leading-[1.4] text-white/50"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {disclaimer}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}