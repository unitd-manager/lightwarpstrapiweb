import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SORA: React.CSSProperties = { fontFamily: '"Sora", sans-serif' };

const keepInTouch1 = "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepinTouch1.svg";
const keepInTouch2 = "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepInTouch2.svg";

export function AboutPanelCta() {
  return (
    <section
      className="w-full bg-[#D5462F]"
      style={{ ...SORA, minHeight: '533px' }}
    >
      <div
        className="relative mx-auto max-w-7xl flex items-center justify-center px-[4%]"
        style={{ minHeight: '533px' }}
      >
        {/* Left illustration */}
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src={keepInTouch1}
          alt=""
          aria-hidden="true"
          className="absolute left-0 bottom-0 h-[220px] sm:h-[280px] w-auto pointer-events-none select-none"
        />

        {/* Center content — 25% horizontal padding on the text block */}
        <div className="relative z-10 text-center w-full px-[25%] flex flex-col items-center gap-[40px]">
          <h2
            className="text-[24px] sm:text-[35px] lg:text-[45px] font-semibold text-black leading-tight lg:leading-[60px] tracking-[-1px]"
          >
            Let's work together!
          </h2>
          <p
            className="text-black font-light leading-[24px]"
            style={{ fontSize: '16px' }}
          >
            We are a team of real artists, technicians, and production staff with passion,
            vision, and intention.
            <br />
            We are ready to help with any of your 3D visualization needs!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded bg-[#6250DA] hover:bg-white border-2 border-white px-11 py-5 text-white hover:text-black transition-colors"
            style={{ fontSize: '16px', fontWeight: 400 }}
          >
            Contact us
          </Link>
        </div>

        {/* Right illustration */}
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src={keepInTouch2}
          alt=""
          aria-hidden="true"
          className="absolute right-0 bottom-0 h-[220px] sm:h-[280px] w-auto pointer-events-none select-none"
        />
      </div>
    </section>
  );
}
