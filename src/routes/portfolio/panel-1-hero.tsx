import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { Particles } from "../../components/particles";
import { LighthouseBeam, ScanLine } from "../../components/lighthouse-beam";

import image1 from "../../assets/images/image 1.png";
import image2 from "../../assets/images/image 2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image 4.png";

const portfolioImages = [image1, image2, image3, image4];

export default function PortfolioHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % portfolioImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

    return (
  <section className="relative overflow-hidden bg-[#040816] pt-0 -mt-28 min-h-screen">

    {/* Background Effects */}
    <Particles count={70} />
    <ScanLine />

    <div className="absolute inset-0 opacity-70">
      <LighthouseBeam intensity="strong" />
    </div>

    {/* Gradient */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,120,255,0.18),transparent_35%)]" />

    {/* Main Container */}
    <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 px-6 pt-10 pb-20 lg:grid-cols-[1.05fr_0.95fr]">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="pt-6 lg:pt-12"
      >

        {/* Tag */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-gradient-brand pulse-glow" />

          Creative Portfolio
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold leading-[0.92]">
          Bringing Ideas Into{" "}
          <span className="text-gradient">
            Motion, Depth & Reality
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          Discover immersive 3D visuals, cinematic animations,
          motion graphics, and futuristic digital storytelling
          crafted for modern brands.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">

          {/*<Link
            to="/projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-white glow-brand transition-transform hover:scale-[1.03]"
          >
            <span className="relative z-10">
              Explore Projects
            </span>

            <span className="relative z-10">→</span>

            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-white/[0.08]"
          >
            Get Started

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>*/}

        </div>
      </motion.div>

      {/* RIGHT IMAGE SECTION */}
      <div className="relative flex items-center justify-center h-[450px] md:h-[650px]">

        {/* Glow */}
        <div className="absolute h-[320px] w-[320px] md:h-[500px] md:w-[500px] rounded-full bg-blue-500/20 blur-3xl" />

        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="absolute h-[350px] w-[350px] md:h-[560px] md:w-[560px] rounded-full border border-blue-500/20"
        />

        {/* Animated Image */}
        <motion.div
          animate={{
            rotateY: [0, 8, -8, 0],
            rotateX: [0, 4, -4, 0],
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="relative z-20 w-full max-w-[680px]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={portfolioImages[current]}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
              alt="Portfolio Showcase"
              className="rounded-[32px] border border-white/10 shadow-2xl object-cover"
            />
          </AnimatePresence>
        </motion.div>

        {/* Floating Badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="absolute right-2 top-6 md:right-6 md:top-14 z-30 rounded-3xl border border-white/10 bg-black/40 p-4 md:p-5 backdrop-blur-xl"
        >
          <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Featured Showcase
          </div>

          <div className="mt-2 text-lg md:text-2xl font-semibold">
            Creative Motion Design
          </div>
        </motion.div>

      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
      Scroll

      <div className="h-10 w-px bg-gradient-to-b from-pink to-transparent" />
    </div>

  </section>
);}