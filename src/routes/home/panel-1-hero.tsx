import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function HomePanelHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Vimeo Video Background */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        {/* Poster frame — shown instantly while the Vimeo player connects & buffers */}
        <img
          src="https://vumbnail.com/1177318410.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.78vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%) scale(1.18)',
            objectFit: 'cover',
          }}
        />
        <iframe
          src="https://player.vimeo.com/video/1177318410?autoplay=1&loop=1&muted=1&background=1&dnt=1&quality=720p"
          loading="eager"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.78vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%) scale(1.18)',
            border: 'none',
          }}
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center text-center">
        <div className="lw-hero-container flex min-h-[calc(100svh-75px)] flex-col items-center justify-center pt-[75px]">
        {/* Lightwarp Horizontal Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-5"
        >
          <img
            src="https://lightwarp3d.com/wp-content/uploads/2026/01/Lightwarp_Horizontal.png"
            alt="Lightwarp"
            className="h-[clamp(120px,10vw,280px)] w-auto object-contain"
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
          className="mx-auto max-w-[720px]"
        >
          <p className="text-[clamp(20px,1.15vw,22px)] font-normal text-white/85 leading-relaxed">
            A New Age Creative 3D Studio. Powered by Real-
            <br className="hidden sm:block" />
            Time 3D Technology
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            to="/projects#latest"
            className="inline-flex items-center justify-center rounded-sm border border-white/35 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
          >
            Our Recent Work
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
