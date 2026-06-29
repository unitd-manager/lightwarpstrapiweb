import { TransitionLink } from "../../components/page-transition-overlay";
import { motion } from "framer-motion";

const keepInTouch1 = "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepinTouch1.svg";
const keepInTouch2 = "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepInTouch2.svg";

export function ServicesPanelCta() {
  return (
    <section className="relative overflow-hidden font-['Sora']" style={{ marginLeft: "50px", marginRight: "50px" }}>

      {/* ── MOBILE (matches About page mobile CTA exactly) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:hidden relative bg-[#c72e17] min-h-[500px] flex flex-col items-center justify-center px-3 py-6 text-center overflow-hidden"
      >
        {/* Left character — peeks in from left edge */}
        <img
          src={keepInTouch1}
          alt=""
          aria-hidden="true"
          className="absolute left-[-190px] bottom-38 w-[100px] h-[300px] scale-300 select-none pointer-events-none"
        />

        {/* Right character — peeks in from right edge */}
        <img
          src={keepInTouch2}
          alt=""
          aria-hidden="true"
          className="absolute right-[-190px] bottom-38 w-[100px] h-[300px] scale-300 select-none pointer-events-none"
        />

        <h2 className="text-[45px] font-extrabold leading-[1.05] tracking-[-2px] text-black relative z-10 px-4">
          Ready to get started?
        </h2>

        <p className="mt-6 max-w-[260px] text-[15px] leading-[1.5] text-black font-normal relative z-10 text-center">
          Whether it's individual assets or a full animation, our team is here to help! Click the button below to get stellar content for your 3D needs
        </p>

        <TransitionLink
          to="/contact"
          className="mt-10 w-[170px] h-[60px] bg-[#6250DA] hover:bg-white border-2 border-white rounded-[8px] text-white hover:text-black text-[16px] font-medium flex items-center justify-center no-underline relative z-10 transition-colors duration-200"
        >
          Contact us
        </TransitionLink>
      </motion.div>

      {/* ── DESKTOP ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="hidden lg:flex relative min-h-[533px] items-center justify-center bg-[#D5462F] overflow-hidden"
      >
        {/* Left character */}
        <motion.img
          src={keepInTouch1}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute pointer-events-none select-none"
          style={{ left: "65px", top: "84px", height: "360px", width: "auto" }}
        />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[720px]">
          <h2
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: "75px",
              fontWeight: 600,
              lineHeight: "85px",
              letterSpacing: "-2px",
              color: "#000000",
              marginBottom: "40px",
            }}
          >
            Ready to get started?
          </h2>

          <p
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              color: "#000000",
              marginBottom: "40px",
            }}
          >
            Whether it's individual assets or a full animation, our team is here to help! Click
            the button below to get stellar content for your 3D needs
          </p>

          <TransitionLink
            to="/contact"
            className="inline-flex items-center justify-center bg-[#6250DA] hover:bg-white text-white hover:text-black transition-colors duration-200"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: "16px",
              fontWeight: 400,
              border: "2px solid #FFFFFF",
              borderRadius: "12px",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "44px",
              paddingRight: "44px",
            }}
          >
            Contact us
          </TransitionLink>
        </div>

        {/* Right character */}
        <motion.img
          src={keepInTouch2}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute pointer-events-none select-none"
          style={{ right: "65px", top: "84px", height: "360px", width: "auto" }}
        />
      </motion.div>

    </section>
  );
}
