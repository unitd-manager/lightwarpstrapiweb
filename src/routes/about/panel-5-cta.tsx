import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const keepInTouch1 = "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepinTouch1.svg";
const keepInTouch2 = "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepInTouch2.svg";

export function AboutPanelCta() {
  return (
    /*
     * Original Elementor: 1b6335b9
     *   flex-direction: row, min-height 533px, background #D5462F
     *   padding 0% top/bottom, 4% left/right
     *   margin-top: 5%
     */
    <section
      className="w-full relative overflow-hidden"
      style={{
        fontFamily: '"Sora", sans-serif',
        backgroundColor: '#D5462F',
        minHeight: '533px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 4%',
        marginTop: '5%',
      }}
    >
      {/* Left illustration — absolute, offset left like original */}
      <motion.img
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        src={keepInTouch1}
        alt=""
        aria-hidden="true"
        className="hidden sm:block absolute bottom-0 w-auto pointer-events-none select-none"
        style={{ left: '-50px', height: '280px' }}
      />

      {/*
       * Center content: b312f45
       *   flex column, gap 40px, padding 25% left/right
       *   min-height 525px
       */}
      <div
        className="relative z-10 text-center flex flex-col items-center cta-content"
        style={{
          paddingLeft: '25%',
          paddingRight: '25%',
          gap: '40px',
          minHeight: '525px',
          justifyContent: 'center',
        }}
      >
        {/* Heading — 00db7d0 typography: 75px / 600 / 85px line-height / -2px tracking */}
        <h2
          className="text-black cta-heading"
          style={{
            fontFamily: '"Sora", sans-serif',
            fontSize: '75px',
            fontWeight: 600,
            lineHeight: '85px',
            letterSpacing: '-2px',
          }}
        >
          Let's work together!
        </h2>

        {/* Body text */}
        <p
          className="text-black"
          style={{
            fontFamily: '"Sora", sans-serif',
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: '24px',
          }}
        >
          We are a team of real artists, technicians, and production staff with passion,
          vision, and intention.
          <br />
          We are ready to help with any of your 3D visualization needs!
        </p>

        {/*
         * Button: exact padding from original
         *   padding-block 20px, padding-inline 44px
         *   background: accent (#6250DA), border 2px white
         */}
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded text-white hover:bg-white hover:text-black transition-colors"
          style={{
            fontFamily: '"Sora", sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            backgroundColor: '#6250DA',
            border: '2px solid white',
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingLeft: '44px',
            paddingRight: '44px',
          }}
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
        className="hidden sm:block absolute bottom-0 w-auto pointer-events-none select-none"
        style={{ right: '-50px', height: '280px' }}
      />
    </section>
  );
}
