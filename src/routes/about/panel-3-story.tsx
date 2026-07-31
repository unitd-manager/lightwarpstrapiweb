import { motion } from "framer-motion";
import { getStrapiMedia } from "../../lib/strapi";
export function AboutPanelStory({ data }: { data?: any }) {
  const title = data?.MainTitle
  const description = data?.Description
  const image = getStrapiMedia(data?.Image)

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
          {image && <img src={image} alt="3D Studio Crab" className="w-full max-w-[300px] h-auto object-contain" />}
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
          {image && <img src={image} alt="3D Studio Crab" className="w-full h-auto object-contain translate-x-20" />}
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