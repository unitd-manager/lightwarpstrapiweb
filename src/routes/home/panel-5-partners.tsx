import { motion } from "framer-motion";

const partners = [
  {
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/StrayerPicturesLogoWhiteTransparentDROPSHADOW2-scaled.png",
    name: "Strayer Pictures",
  },
  {
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/TAM-Stacked-AllWhite.png",
    name: "TAM",
  },
];

export function HomePanelPartners() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Partners and Clients
          </h2>
        </motion.div>

        {/* Partners Layout */}
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-5 max-w-5xl mx-auto mt-12">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={
                i === 0
                  ? "flex items-center justify-center h-72 md:h-96 w-full md:w-1/2"
                  : "flex items-center justify-center h-36 md:h-40 w-full md:w-1/3"
              }
            >
              <img
                src={partner.image}
                alt={partner.name}
                className={
                  i === 0
                    ? "max-h-full w-auto object-contain opacity-90"
                    : "max-h-full w-auto object-contain opacity-90"
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
