import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/*
 * Elementor: elementor-element-4296891 — bg #D5462F; overflow hidden
 *
 * 3-column flex layout:
 *   Left  22% — character image, bottom-aligned, ~85% section height
 *   Center flex-1 — heading + description + button, vertically centered
 *   Right 22% — character image, bottom-aligned, ~85% section height
 *
 * Characters anchored at column bottom, height fills from above heading level
 * down to section bottom. No absolute positioning — uses flex alignment.
 *
 * Heading: Sora 75px/600/85px/-2px; color #000000; max-width 480px → wraps
 * Description: Sora 16px/300/24px; color #000000
 * Button: bg #6250DA; border 2px solid white; border-radius 12px; padding 20px/44px
 */

const keepInTouch1 = "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepinTouch1.svg";
const keepInTouch2 = "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepInTouch2.svg";

export function ServicesPanelCta() {
  return (
    <section
      className="overflow-hidden services-cta-section"
      style={{
        backgroundColor: "#D5462F",
        minHeight: "533px",
        fontFamily: '"Sora", sans-serif',
        marginLeft: "12px",
        marginRight: "12px",
      }}
    >
      {/* 3-column flex row — full section height */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          width: "100%",
          height: "533px",
          minHeight: "533px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* ── Left character column (22%) ── */}
        <div
          style={{
            flex: "0 0 22%",
            height: "533px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            overflow: "hidden",
          }}
        >
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src={keepInTouch1}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none"
            style={{ height: "88%", width: "auto", objectFit: "contain", objectPosition: "bottom right" }}
          />
        </div>

        {/* ── Center text column ── */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "40px",
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
              maxWidth: "480px",
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

        {/* ── Right character column (22%) ── */}
        <div
          style={{
            flex: "0 0 22%",
            height: "533px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            overflow: "hidden",
          }}
        >
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src={keepInTouch2}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none"
            style={{ height: "88%", width: "auto", objectFit: "contain", objectPosition: "bottom left" }}
          />
        </div>

      </div>
    </section>
  );
}
