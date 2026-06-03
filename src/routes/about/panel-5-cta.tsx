import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const keepInTouch1 =
  "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepinTouch1.svg";

const keepInTouch2 =
  "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepInTouch2.svg";

export function AboutPanelCta() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#D5462F",
        minHeight: "620px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Sora", sans-serif',
      }}
    >
      {/* Left Character */}
      <motion.img
        src={keepInTouch1}
        alt=""
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block absolute bottom-0 select-none pointer-events-none"
        style={{
          left: "65px",
          top: "84px",
          height: "360px",
          width: "auto",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: '"Sora", sans-serif',
            fontSize: "78px",
            fontWeight: 800,
            lineHeight: "1",
            letterSpacing: "-3px",
            color: "#000",
            margin: 0,
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Let's work
          <br />
          together!
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#000",
            maxWidth: "600px",
            marginBottom: "45px",
            fontWeight: "100",
          }}
        >
          We are a team of real artists, technicians, and production staff with
          passion, vision, and intention. We are ready to help with any of your
          3D visualization needs!
        </p>

        <Link
          to="/contact"
          style={{
            width: "180px",
            height: "64px",
            backgroundColor: "#6250DA",
            border: "2px solid #FFFFFF",
            borderRadius: "8px",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: 500,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          Contact us
        </Link>
      </div>

      {/* Right Character */}
      <motion.img
        src={keepInTouch2}
        alt=""
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block absolute bottom-0 select-none pointer-events-none"
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

export default AboutPanelCta;