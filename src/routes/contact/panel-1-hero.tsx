import { motion } from "framer-motion";

const SORA: React.CSSProperties = { fontFamily: '"Sora", sans-serif' };

const cloud1 = "https://lightwarp3d.com/wp-content/uploads/2026/01/coffe2go-clound-num8.svg";
const cloud2 = "https://lightwarp3d.com/wp-content/uploads/2026/01/cloud-img-2-1.svg";
const cloud3 = "https://lightwarp3d.com/wp-content/uploads/2026/01/cloud-img-3.svg";

export function ContactPanelHero() {
  return (
    <section
      className="w-full bg-[#2E188D] pt-28 pb-12 relative overflow-hidden"
      style={{ ...SORA, minHeight: '225px' }}
    >
      <div className="relative mx-auto max-w-[1200px] px-[4%] flex items-center justify-center min-h-[180px]">

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

        {/* Heading — exact live-site typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center text-white font-semibold tracking-[-2px]"
          style={{
            fontSize: 'clamp(40px, 5.5vw, 75px)',
            lineHeight: 'clamp(1.2em, 1.15em, 85px)',
          }}
        >
          Contact us
        </motion.h1>
      </div>
    </section>
  );
}
