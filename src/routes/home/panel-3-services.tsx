import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "3D Commercials & Cinematics",
    description: "Creative, Impactful 3D animation. Built to engage, convert, and perform",
    href: "/services#ads",
    bgColor: "from-purple-600 to-purple-900",
  },
  {
    title: "3D Asset Services",
    description: "Production-ready 3D assets built for games, film, and real-time worlds.",
    href: "/services#assets",
    bgColor: "from-pink-500 to-red-600",
  },
  {
    title: "Original IP & Content",
    description: "Iconic characters and immersive stories that audiences remember.",
    href: "/services#ip",
    bgColor: "from-cyan-500 to-blue-600",
  },
  {
    title: "Creative & Technical Consulting",
    description: "From concept to scale—real-time production done right.",
    href: "/services#consulting",
    bgColor: "from-purple-600 to-indigo-700",
  },
];

export function HomePanelServices() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white">
            Our Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={service.href}
                className={`group relative flex flex-col justify-center items-center text-center h-full overflow-hidden rounded-[56px] px-10 py-12 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${service.bgColor} min-h-[380px]`}
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight max-w-[280px]">
                    {service.title}
                  </h3>
                  <p className="text-white/85 text-base leading-relaxed max-w-[320px] mx-auto">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <h6 className="text-orange-400 font-semibold text-base">Learn More</h6>
                  <svg
                    className="w-6 h-6 text-orange-400 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H5" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
