import { motion } from "framer-motion";
import { getStrapiMedia } from "../../lib/strapi";

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

export function HomePanelAwards({
  awardsData,
  artistsData,
}: {
  awardsData?: any;
  artistsData?: any;
}) {
  const awardsTitle = awardsData?.main_title;
  const artistsTitle = artistsData?.main_title;
  const disclaimer = artistsData?.disclaimer;

  const awards =
    awardsData?.award_and_certificate_list
      ?.map((item: any, i: number) => ({
        image: getStrapiMedia(item.image),
        title: `Award ${i + 1}`,
      }))
      .filter((a: any) => a.image) || [];

  const artists =
    artistsData?.award_winner_list
      ?.map((item: any, i: number) => ({
        image: getStrapiMedia(item.image),
        name: `Artist ${i + 1}`,
        href: item.link?.url || "#",
      }))
      .filter((a: any) => a.image) || [];

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
                      src={award.image}
                      alt={award.title}
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
                      src={artist.image}
                      alt={artist.name}
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