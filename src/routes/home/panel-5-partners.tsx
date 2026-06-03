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
<<<<<<< HEAD
    <section className="py-20 px-6 bg-transparent">
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
=======
    <section id="partners" className="bg-black pt-24 pb-10">
      <div className="mx-auto max-w-[1660px] px-6">
        <h2 className="text-center text-5xl md:text-6xl font-bold text-white">
          Partners and Clients
        </h2>
>>>>>>> 9307146749d322ddf7e4afb63c28e1e9ca73697b

        <div className="mt-16 flex items-center justify-center gap-20 md:gap-28">
          {partners.map((partner, idx) => (
            <img
              key={partner.name}
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
      </div>
    </section>
  );
}
