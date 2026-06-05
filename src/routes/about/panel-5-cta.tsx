import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const keepInTouch1 =
  "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepinTouch1.svg";

const keepInTouch2 =
  "https://lightwarp3d.com/wp-content/uploads/2026/01/KeepInTouch2.svg";

export function AboutPanelCta() {
  return (
    <section className="relative w-full overflow-hidden font-['Sora']">

      {/* ================= MOBILE ================= */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="
    lg:hidden
    relative
    bg-[#c72e17]
    min-h-[500px]
    flex flex-col
    items-center
    justify-center
    px-3
    py-6
    text-center
    overflow-hidden
  "
>
  {/* Left Character */}
  <img
    src={keepInTouch1}
    alt=""
    className="
      absolute
      left-[-190px]
      bottom-38
      w-[100px]
      h-[300px]
      scale-300
     select-none
      pointer-events-none
    "
  />

  {/* Right Character */}
  {/*<img
    src={keepInTouch2}
    alt=""
    className="
      absolute
      right-[-190px]
      bottom-40

      w-[100px]
      h-[300px]
      scale-300
      select-none
      pointer-events-none
    "
  />*/}



  {/* Right Character */}
{/*<motion.img
  src={keepInTouch2}
  alt=""
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
  static
  h-[440px]
  w-auto
  -mr-[690px]
  -mt-[250px]
  translate-y-[50%]
  select-none
  pointer-events-none

  "
/>*/}

  <h2
    className="
      text-[45px]
      font-extrabold
      leading-[1.05]
      tracking-[-2px]
      text-black
      relative z-10
    "
  >
    Let's work
    <br />
    together!
  </h2>

  <p
    className="
      mt-8
      max-w-[280px]
      text-[14px]
      leading-[1.5]
      text-black
      font-light
      relative z-10
      tracking-[0.013em]
      
    "
  >
    We are a team of real artists, technicians, and production staff
    with passion, vision, and intention. We are ready to help with any
    of your 3D visualization needs!
  </p>

  <Link
    to="/contact"
    className="
      mt-10
      w-[170px]
      h-[60px]
      bg-[#6250DA]
      border-2 border-white
      rounded-[8px]
      text-white
      text-[16px]
      font-medium
      flex items-center justify-center
      no-underline
      relative z-10
    "
  >
    Contact us
  </Link>
</motion.div>

      {/* ================= DESKTOP ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          hidden
          lg:flex
          relative
          min-h-[620px]
          items-center
          justify-center
          bg-[#D5462F]
        "
      >
        {/* Left Character */}
        <motion.img
          src={keepInTouch1}
          alt=""
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute select-none pointer-events-none"
          style={{
            left: "100px",
            top: "84px",
            height: "360px",
            width: "auto",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[760px]">
          <h2
            className="
              text-[78px]
              font-extrabold
              leading-[1]
              tracking-[-3px]
              text-black
              mb-[50px]
            "
          >
            Let's work
            <br />
            together!
          </h2>

          <p
            className="
              text-[16px]
              leading-[1.8]
              text-black
              max-w-[600px]
              mb-[45px]
              font-light
            "
          >
            We are a team of real artists, technicians, and production staff
            with passion, vision, and intention. We are ready to help with any
            of your 3D visualization needs!
          </p>

          <Link
            to="/contact"
            className="
              w-[180px]
              h-[64px]
              bg-[#6250DA]
              border-2 border-white
              rounded-[8px]
              text-white
              text-[16px]
              font-medium
              flex items-center justify-center
              no-underline
              transition-all duration-300
            "
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
          className="absolute select-none pointer-events-none"
          style={{
            right: "100px",
            top: "84px",
            height: "360px",
            width: "auto",
          }}
        />
      </motion.div>
    </section>
  );
}

export default AboutPanelCta;