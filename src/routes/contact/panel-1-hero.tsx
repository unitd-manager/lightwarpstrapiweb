import { motion } from "framer-motion";

const cloud1 = "https://lightwarp3d.com/wp-content/uploads/2026/01/coffe2go-clound-num8.svg";
const cloud2 = "https://lightwarp3d.com/wp-content/uploads/2026/01/cloud-img-2-1.svg";
const cloud3 = "https://lightwarp3d.com/wp-content/uploads/2026/01/cloud-img-3.svg";

function Ball({ size, color }: { size: number; color: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ width: size, height: size, borderRadius: '50%', backgroundColor: color, flexShrink: 0 }}
    />
  );
}

export function ContactPanelHero() {
  return (
    /* Section is the single positioning context — always 220px tall.
       All decoratives position relative to the section, not an inner div,
       so percentages are consistent on every screen size. */
    <section
      className="w-full bg-[#2E188D] relative overflow-hidden contact-hero-section flex items-center justify-center"
      style={{ fontFamily: '"Sora", sans-serif', minHeight: '220px' }}
    >
      {/* ── Cloud 1 top-left ── */}
      <motion.img
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        src={cloud1} alt="" aria-hidden="true"
        className="absolute pointer-events-none select-none object-contain"
        style={{ left: '16%', bottom: '65%', width: '16%', height: '6.5vh' }}
      />

      {/* ── Cloud 2 bottom-right ── */}
      <motion.img
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
        src={cloud2} alt="" aria-hidden="true"
        className="absolute pointer-events-none select-none object-contain"
        style={{ right: '31%', bottom: '6%', width: '17%', height: '7.5vh' }}
      />

      {/* ── Cloud 3 mid-right (below pink ball) ── */}
      <motion.img
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        src={cloud3} alt="" aria-hidden="true"
        className="absolute pointer-events-none select-none object-contain"
        style={{ right: '21%', bottom: '40%', width: '9%' }}
      />

      {/* ── Ball pink — upper right ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute pointer-events-none"
        style={{ top: '24%', right: '29%' }}
      >
        <Ball size={33} color="#F1AEF9" />
      </motion.div>

      {/* ── Ball purple — lower left ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute pointer-events-none"
        style={{ bottom: '27%', left: '26%' }}
      >
        <Ball size={59} color="#6250DA" />
      </motion.div>

      {/* ── Ball blue — bottom center ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute pointer-events-none"
        style={{ bottom: '5%', left: '41%' }}
      >
        <Ball size={35} color="#3B8BFF" />
      </motion.div>

      {/* ── Heading — centered in section ── */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        className="relative z-10 text-center text-white contact-hero-heading"
        style={{ fontFamily: '"Sora", sans-serif', fontSize: '75px', fontWeight: 600, lineHeight: '85px', letterSpacing: '-2px' }}
      >
        Contact us
      </motion.h1>
    </section>
  );
}
