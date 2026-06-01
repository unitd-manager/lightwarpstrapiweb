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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className={`group relative flex flex-col justify-between h-full overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${service.bgColor} min-h-[280px]`}
              >
                {/* Card Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="mt-8 flex items-center gap-2">
                  <span className="text-white font-medium text-sm">Learn More</span>
                  <svg
                    className="w-5 h-5 text-white transition-transform group-hover:translate-x-2"
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
