import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/*
 * Elementor: elementor-element-4296891 — bg #D5462F; overflow hidden
 *
 * Mirrors the About page "Let's Work Together" CTA approach:
 *   - Section: position relative, flex center
 *   - Characters: position absolute, left/right: 65px, top: 84px, height: 360px
 *   - Content: centered div with z-index 10
 *
 * Heading: Sora 75px/600/85px/-2px; color #000000
 * Description: Sora 16px/300/24px; color #000000
 * Button: bg #6250DA; border 2px solid white; border-radius 12px; padding 20px/44px
 */

const keepInTouch1 = "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepinTouch1.svg";
const keepInTouch2 = "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepInTouch2.svg";

export function ServicesPanelCta() {
  return (
    <section
      className="relative overflow-hidden services-cta-section"
      style={{
        backgroundColor: "#D5462F",
        minHeight: "533px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Sora", sans-serif',
        marginLeft: "12px",
        marginRight: "12px",
      }}
    >
      {/* ── Left character ── */}
      <motion.img
        src={keepInTouch1}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="block md:hidden lg:block absolute pointer-events-none select-none services-cta-char-left"
        style={{
          left: "65px",
          top: "84px",
          height: "360px",
          width: "auto",
        }}
      />

      {/* ── Center content ── */}
      <div
        className="relative z-10 flex flex-col items-center services-cta-inner"
        style={{
          textAlign: "center",
          maxWidth: "560px",
          padding: "50px 20px",
        }}
      >
        <h2
          className="services-cta-heading"
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

        <Link
          to="/contact"
          className="inline-flex items-center justify-center transition-colors hover:bg-white hover:text-black services-cta-btn"
          style={{
            fontFamily: '"Sora", sans-serif',
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px",
            color: "#FFFFFF",
            backgroundColor: "#6250DA",
            border: "2px solid #FFFFFF",
            borderRadius: "12px",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "44px",
            paddingRight: "44px",
          }}
        >
          Contact us
        </Link>
      </div>

      {/* ── Right character ── */}
      <motion.img
        src={keepInTouch2}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="block md:hidden lg:block absolute pointer-events-none select-none services-cta-char-right"
        style={{
          right: "65px",
          top: "84px",
          height: "360px",
          width: "auto",
        }}
      />
    </section>
  );
}
