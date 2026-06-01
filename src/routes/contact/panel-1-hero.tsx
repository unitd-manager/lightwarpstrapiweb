import { motion } from "framer-motion";

const cloud1 = "https://lightwarp3d.com/wp-content/uploads/2026/01/coffe2go-clound-num8.svg";
const cloud2 = "https://lightwarp3d.com/wp-content/uploads/2026/01/cloud-img-2-1.svg";
const cloud3 = "https://lightwarp3d.com/wp-content/uploads/2026/01/cloud-img-3.svg";

export function ContactPanelHero() {
  return (
    <section className="w-full bg-[#6b4fd8] pt-28 pb-12 relative overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-6 flex items-center justify-center min-h-[180px]">

        {/* Cloud bottom-left */}
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={cloud1}
          alt=""
          aria-hidden="true"
          className="absolute left-0 bottom-0 w-[220px] sm:w-[311px] h-auto pointer-events-none select-none"
        />

        {/* Cloud bottom-right */}
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          src={cloud2}
          alt=""
          aria-hidden="true"
          className="absolute right-0 bottom-0 w-[190px] sm:w-[275px] h-auto pointer-events-none select-none"
        />

        {/* Cloud top-right small */}
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src={cloud3}
          alt=""
          aria-hidden="true"
          className="absolute right-24 top-2 w-[120px] sm:w-[179px] h-auto pointer-events-none select-none"
        />

        {/* Decorative circles */}
        <div className="absolute left-[38%] top-4 w-4 h-4 rounded-full bg-white/20 pointer-events-none" />
        <div className="absolute left-[44%] top-2 w-3 h-3 rounded-full bg-white/15 pointer-events-none" />
        <div className="absolute right-[38%] bottom-4 w-5 h-5 rounded-full bg-white/20 pointer-events-none" />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center text-[48px] sm:text-[64px] font-bold text-white leading-tight"
        >
          Contact us
        </motion.h1>
      </div>
    </section>
  );
}
