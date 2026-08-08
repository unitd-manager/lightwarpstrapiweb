import { motion } from "framer-motion";
import { resolveStrapiImage } from "@/lib/resolve-strapi-image";

// Target widths matching the report's image slots for this panel.
const LOGO_TARGET_WIDTH = 280;

export function AboutPanelStory({ data }: { data?: any }) {
  if (data?.Publish === false) return null;

  const title = data?.MainTitle;
  const description = data?.Description;
  const logo = resolveStrapiImage(data?.Image, LOGO_TARGET_WIDTH);
  const logoAlt = data?.Image?.alternativeText || "Lightwarp";
  const logoWidth = logo?.width;
  const logoHeight = logo?.height;

  if (!title && !description && !logo) return null;

  return (
    <section className="w-full px-4 pt-[20px] pb-12 sm:px-6">
      {/* ================= MOBILE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:hidden mx-auto w-full max-w-[1600px] overflow-hidden rounded-[24px] bg-[#6250DA] border border-white/20 shadow-[0_0_35px_rgba(255,255,255,0.12)] p-6"
        style={{ fontFamily: '"Sora", sans-serif' }}
      >
        <div className="flex justify-center">
          {logo && (
            <img
              src={logo.src}
              alt={logoAlt}
              width={logo.width}
              height={logo.height}
              className="w-full max-w-[300px] h-auto object-contain"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          )}
        </div>
        <h4 className="mt-4 text-[26px] text-white font-extrabold tracking-[-1px] text-center leading-15">
          {title}
        </h4>
        <p className="mt-4 text-[15px] leading-[23px] tracking-[-0.8px] text-white text-center font-light">
          {description}
        </p>
      </motion.div>

      {/* ================= DESKTOP ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="hidden lg:flex mx-auto w-full max-w-[1250px] items-stretch overflow-hidden rounded-[20px] bg-[#6250DA] border border-white/20 shadow-[0_0_35px_rgba(255,255,255,0.12)]"
        style={{ fontFamily: '"Sora", sans-serif' }}
      >
        <div className="w-[45%] flex items-center justify-center py-12">
          {logo && (
            <img
              src={logo.src}
              alt={logoAlt}
              width={logo.width}
              height={logo.height}
              className="w-full h-auto object-contain translate-x-20"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          )}
        </div>
        <div className="w-[55%] p-[6%] flex flex-col justify-center">
          <h4 className="text-[46px] pb-[30px] text-white font-extrabold leading-[1.2] [word-spacing:2px] tracking-[-1.4px]">
            {title}
          </h4>
          <p className="text-[15px] text-white font-light leading-[24px] tracking-[0.025em] [word-spacing:0px] text-justify">
            {description}
          </p>
        </div>
      </motion.div>
    </section>
  );
}