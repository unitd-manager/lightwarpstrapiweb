import { TransitionLink } from "../../components/page-transition-overlay";
import { motion } from "framer-motion";
import { getStrapiMedia } from "../../lib/strapi";

export function ServicesPanelCta({ data }: { data?: any }) {
  if (!data) return null;
  if (data.publish === false) return null;

  const title = data.main_title || "";
  const body = data.description || "";
  const showCta = !!data?.cta_button && data.cta_button.publish !== false;
  const ctaLabel = data?.cta_button?.label || "";
  const ctaUrl = (data?.cta_button?.url || "/contact").trim();
  const leftImage = getStrapiMedia(data?.decorative_image_left) || "";
  const rightImage = getStrapiMedia(data?.decorative_image_right) || "";

  return (
    <section className="relative overflow-hidden font-['Sora']" style={{ marginLeft: "50px", marginRight: "50px" }}>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:hidden relative bg-[#c72e17] min-h-[500px] flex flex-col items-center justify-center px-3 py-6 text-center overflow-hidden"
      >
        <img
          src={leftImage}
          alt=""
          aria-hidden="true"
          className="absolute left-[-190px] bottom-38 w-[100px] h-[300px] scale-300 select-none pointer-events-none"
        />
        <img
          src={rightImage}
          alt=""
          aria-hidden="true"
          className="absolute right-[-190px] bottom-38 w-[100px] h-[300px] scale-300 select-none pointer-events-none"
        />

        <h2 className="text-[45px] font-extrabold leading-[1.05] tracking-[-2px] text-black relative z-10 px-4">
          {title}
        </h2>

        <p className="mt-6 max-w-[260px] text-[15px] leading-[1.5] text-black font-normal relative z-10 text-center">
          {body}
        </p>

        {showCta && ctaLabel && (
          <TransitionLink
            to={ctaUrl}
            className="mt-10 w-[170px] h-[60px] bg-[#6250DA] hover:bg-white border-2 border-white rounded-[8px] text-white hover:text-black text-[16px] font-medium flex items-center justify-center no-underline relative z-10 transition-colors duration-200"
          >
            {ctaLabel}
          </TransitionLink>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="hidden lg:flex relative min-h-[533px] items-center justify-center bg-[#D5462F] overflow-hidden"
      >
        <motion.img
          src={leftImage}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute pointer-events-none select-none"
          style={{ left: "65px", top: "84px", height: "360px", width: "auto" }}
        />

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
            {title}
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
            {body}
          </p>

          {showCta && ctaLabel && (
            <TransitionLink
              to={ctaUrl}
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
              {ctaLabel}
            </TransitionLink>
          )}
        </div>

        <motion.img
          src={rightImage}
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