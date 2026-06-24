import { motion } from "framer-motion";
import austinLaurel from "../../assets/images/austin-laurel-cropped.png";
import shortShortsLaurel from "../../assets/images/shortshorts-laurel.png";
import wdasTransparent from "../../assets/images/wdas-white-transparent.png";

const AWARDS_HEADING_STYLE: React.CSSProperties = {
  fontFamily: '"DM Sans", sans-serif',
  fontSize: "35px",
  fontWeight: 500,
  fontStyle: "normal",
  textDecoration: "none",
  lineHeight: "1.3em",
  letterSpacing: "0px",
  wordSpacing: "0px",
};

const AWARDS_HEADING_STYLESS: React.CSSProperties = {
  fontFamily: '"DM Sans", sans-serif',
  fontSize: "30px",
  fontWeight: 500,
  fontStyle: "normal",
  textDecoration: "none",
  lineHeight: "1.3em",
  letterSpacing: "0px",
  wordSpacing: "0px",
};

const awards = [
  {
    // Original source had a 1080x1080 canvas with the laurel artwork only
    // filling ~60% of the height — cropped locally to its real content
    // bounds so it renders at the same visual size as the other laurel.
    image: austinLaurel,
    title: "Austin Under the Stars",
    blendScreen: false,
  },
  {
    // Original source had a solid black background baked in with no alpha —
    // re-exported locally with the black chroma-keyed to real transparency.
    image: shortShortsLaurel,
    title: "ShortShorts Film Festival",
    blendScreen: false,
  },
];

const artists = [
  {
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/dwalogo.png",
    name: "DreamWorks",
    blendScreen: false,
  },
  {
    // Original source had a fully opaque black background — re-exported
    // locally with the black chroma-keyed to real transparency.
    image: wdasTransparent,
    name: "Walt Disney Animation Studios",
    blendScreen: false,
  },
];

export function HomePanelAwards() {
  return (
    <section className="lw-section-tight bg-transparent">
      <div className="lw-container">
        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3
            className="text-white mb-16"
            style={AWARDS_HEADING_STYLE}
          >
            Awards & Accolades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {awards.map((award, i) => (
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
                  style={award.blendScreen ? { mixBlendMode: "screen" } : undefined}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Artists Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-white mb-8"
            style={AWARDS_HEADING_STYLESS}
          >
            Artists with experience from*
          </h3>
       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {artists.map((artist, i) => (
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
                  style={artist.blendScreen ? { mixBlendMode: "screen" } : undefined}
                />
              </motion.div>
            ))}
          </div>

          <p
            className="mt-6 ml-auto max-w-[420px] text-right text-[10px] leading-[1.4] text-white/50"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            *Logos shown only to represent prior professional experience of team members and do not imply current affiliation, partnership, or endorsement. All logos and trademarks are the property of their respective owners.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
