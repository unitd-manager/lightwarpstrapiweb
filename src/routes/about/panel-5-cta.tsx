// src/pages/about/AboutPanelCta.tsx
import { TransitionLink } from "../../components/page-transition-overlay";
import { motion } from "framer-motion";
import keepInTouch1 from "../../assets/images/cms/KeepinTouch1.svg";
import keepInTouch2 from "../../assets/images/cms/KeepInTouch2.svg";
import { getStrapiMedia } from "../../lib/strapi";

const STATIC_CTA = {
  title: "Let's work\ntogether!",
  description:
    "We are a team of real artists, technicians, and production staff with passion, vision, and intention. We are ready to help with any of your 3D visualization needs!",
  buttonLabel: "Contact us",
  buttonUrl: "/contact",
};

export function AboutPanelCta({ data }: { data?: any }) {
  const title = data?.main_title || STATIC_CTA.title;
  const description = data?.description || STATIC_CTA.description;
  const buttonLabel = data?.cta_button?.label || STATIC_CTA.buttonLabel;
  const buttonUrl = data?.cta_button?.url || STATIC_CTA.buttonUrl;

  const image1 = getStrapiMedia(data?.image) || keepInTouch1;
  const image2 = getStrapiMedia(data?.image1) || keepInTouch2;

  const [line1, line2] = title.split("\n");

  return (
    <section className="relative w-full overflow-hidden font-['Sora']">
      {/* ================= MOBILE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:hidden relative bg-[#c72e17] min-h-[500px] flex flex-col items-center justify-center px-3 py-6 text-center overflow-hidden"
      >
        <img src={image1} alt="" className="absolute left-[-190px] bottom-38 w-[100px] h-[300px] scale-300 select-none pointer-events-none" />
        <h2 className="text-[45px] font-extrabold leading-[1.05] tracking-[-2px] text-black relative z-10">
          {line1}
          {line2 && <><br />{line2}</>}
        </h2>
        <p className="mt-8 max-w-[280px] text-[14px] leading-[1.5] text-black font-light relative z-10 tracking-[0.013em]">
          {description}
        </p>
        <TransitionLink
          to={buttonUrl}
          className="mt-10 w-[170px] h-[60px] bg-[#6250DA] border-2 border-white rounded-[8px] text-white text-[16px] font-medium flex items-center justify-center no-underline relative z-10"
        >
          {buttonLabel}
        </TransitionLink>
      </motion.div>

      {/* ================= DESKTOP ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="hidden lg:flex relative min-h-[620px] items-center justify-center bg-[#D5462F]"
      >
        <motion.img
          src={image1}
          alt=""
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute select-none pointer-events-none"
          style={{ left: "100px", top: "84px", height: "360px", width: "auto" }}
        />
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[760px]">
          <h2 className="text-[78px] font-extrabold leading-[1] tracking-[-3px] text-black mb-[50px]" style={{ fontFamily: "Inter, sans-serif" }}>
            {line1}
            {line2 && <><br />{line2}</>}
          </h2>
          <p className="text-[16px] leading-[1.8] text-black max-w-[600px] mb-[45px] font-light">
            {description}
          </p>
          <TransitionLink
            to={buttonUrl}
            className="w-[180px] h-[64px] bg-[#6250DA] border-2 border-white rounded-[8px] text-white text-[16px] font-medium flex items-center justify-center no-underline transition-all duration-300"
          >
            {buttonLabel}
          </TransitionLink>
        </div>
        <motion.img
          src={image2}
          alt=""
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute select-none pointer-events-none"
          style={{ right: "100px", top: "84px", height: "360px", width: "auto" }}
        />
      </motion.div>
    </section>
  );
}

export default AboutPanelCta;