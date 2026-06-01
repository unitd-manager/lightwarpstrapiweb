import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const keepInTouch1 = "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepinTouch1.svg";
const keepInTouch2 = "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepInTouch2.svg";

export function AboutPanelCta() {
  return (
    <section className="w-full bg-[#e25830]">
      <div className="relative mx-auto max-w-7xl flex items-center justify-center min-h-[340px] py-16 px-6">

        {/* Left illustration — portrait SVG (612×792), pinned bottom-left */}
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

        {/* Center content */}
        <div className="relative z-10 text-center px-4 sm:px-56">
          <h2 className="text-[36px] sm:text-[42px] font-black text-black leading-tight">
            Let's work together!
          </h2>
          <p className="mt-4 text-[14px] text-black/80 max-w-sm mx-auto">
            We are a team of real artists, technicians, and production staff with passion,
            vision, and intention.
            <br />
            We are ready to help with any of your 3D visualization needs!
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center border border-[#6b4fd8] rounded bg-[#6b4fd8] hover:bg-[#5a3fc0] px-8 py-2.5 text-[14px] font-semibold text-white transition-colors"
          >
            Contact us
          </Link>
        </div>

        {/* Right illustration — portrait SVG (612×792), pinned bottom-right */}
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
