import { motion } from "framer-motion";
import unrealEngineLogo from "../../assets/images/cms/Unreal_Engine-Logo.png";
import blenderLogo from "../../assets/images/cms/blender.png";
import substanceLogo from "../../assets/images/cms/Substance.png";
import usdLogo from "../../assets/images/cms/USDLogoLrgWithAlpha.png";
import awsLogo from "../../assets/images/cms/amazon-web-services.png";
import perforceLogo from "../../assets/images/cms/logo-perforce-vert-rev.svg";

/*
 * Elementor: elementor-element-4cd58e03
 *   flex row; padding 4% all; max content-width 1600px
 *
 * Heading (ae06c75):
 *   primary typography — Sora 45px / 600 / 60px / -1px
 *   text-align: start; margin-bottom 3%; color #FFFFFF
 *
 * Body (22c0845):
 *   text typography — Sora 16px / 300 / 24px; color #FFFFFF
 *
 * Logo row (9e90257):
 *   flex row; nowrap; justify-content space-evenly; align-items center
 *   margin-top 20px; width 80% desktop
 *   Each cell: padding 35px top/bottom 55px left/right
 *   Each logo: height 80px; width auto; object-fit contain
 */

const logos = [
  {
    src: unrealEngineLogo,
    alt: "Unreal Engine",
  },
  {
    src: blenderLogo,
    alt: "Blender",
  },
  {
    src: substanceLogo,
    alt: "Substance 3D",
  },
  {
    src: usdLogo,
    alt: "USD",
  },
  {
    src: awsLogo,
    alt: "AWS",
  },
  {
    src: perforceLogo,
    alt: "Perforce",
  },
];

export function ServicesPanelProcess() {
  return (
    <section
      style={{
        fontFamily: '"Sora", sans-serif',
        padding: "1% 4% 4% 4%",
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="services-process-heading"
        style={{
          fontFamily: '"Sora", sans-serif',
          fontSize: "45px",
          fontWeight: 600,
          lineHeight: "60px",
          letterSpacing: "-1px",
          color: "#FFFFFF",
          marginBottom: "3%",
        }}
      >
        How we deliver
      </motion.h2>

      {/* Body text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="services-process-body"
        style={{
          fontFamily: '"Sora", sans-serif',
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "24px",
          color: "#FFFFFF",
        }}
      >
        Our cutting-edge pipeline is built with production scalability, real-time rendering,
        and multi-disciplinary artists in mind. We leverage industry-standard frameworks like
        OpenUSD and ACES, and connect them with the forward-thinking DCCs like Blender,
        Unreal Engine, and cloud workflows to create and iterate.
      </motion.p>

      {/* Logo row — wraps on smaller screens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="services-logo-row"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "20px",
          width: "100%",
        }}
      >
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="services-logo-cell"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "35px 55px",
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="services-logo-img"
              style={{
                height: "80px",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
