import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function HomePanelHero() {
  return (
    <section className="relative w-screen max-w-none left-1/2 right-1/2 -mx-[50vw] -mt-6 min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
      {/* Vimeo Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1177318410?autoplay=1&loop=1&muted=1&background=1"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.78vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
          }}
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Lightwarp Horizontal Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <img
            src="https://lightwarp3d.com/wp-content/uploads/2026/01/Lightwarp_Horizontal.png"
            alt="Lightwarp"
            className="h-20 sm:h-28 md:h-32 w-auto object-contain"
          />
        </motion.div>

        {/* Main Heading */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-6 tracking-tight"
        >
          LIGHTWARPbb
        </motion.h1> */}

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/95 leading-relaxed">
            A New Age Creative 3D Studio. Powered by Real-Time 3D Technology
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <Link
            to="/projects#latest"
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full backdrop-blur-md transition-all duration-300 font-medium text-base sm:text-lg"
          >
            Our Recent Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
