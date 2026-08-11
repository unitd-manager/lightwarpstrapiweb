// src/pages/about/AboutPanelCta.tsx
import { TransitionLink } from "../../components/page-transition-overlay";
import { FadeIn } from "@/hooks/FadeIn";
import { resolveStrapiImage } from "@/lib/resolve-strapi-image";

const IMAGE1_MOBILE_TARGET_WIDTH = 100;
const IMAGE1_DESKTOP_TARGET_WIDTH = 260;
const IMAGE2_DESKTOP_TARGET_WIDTH = 260;

export function AboutPanelCta({ data }: { data?: any }) {
  if (data?.Publish === false) return null;

  const title = data?.MainTitle ?? "";
  const description = data?.Description ?? "";
  const buttonLabel = data?.CTAButton?.Label ?? "";
  const buttonUrl = data?.CTAButton?.URL ?? "/";
  const showButton = !!data?.CTAButton && data.CTAButton.Publish !== false;

  const image1Mobile = resolveStrapiImage(data?.Image, IMAGE1_MOBILE_TARGET_WIDTH);
  const image1Desktop = resolveStrapiImage(data?.Image, IMAGE1_DESKTOP_TARGET_WIDTH);
  const image2 = resolveStrapiImage(data?.Image1?.[0], IMAGE2_DESKTOP_TARGET_WIDTH);

  const [line1, line2] = title.split("\n");

  if (!title && !description && !image1Mobile && !image2) return null;

  return (
    <section className="relative w-full overflow-hidden font-['Sora']">
      {/* ================= MOBILE ================= */}
      <FadeIn className="lg:hidden relative bg-[#c72e17] min-h-[500px] flex flex-col items-center justify-center px-3 py-6 text-center overflow-hidden">
        {image1Mobile && (
          <img
            src={image1Mobile.src}
            alt=""
            width={image1Mobile.width}
            height={image1Mobile.height}
            className="absolute left-[-190px] bottom-38 w-[100px] h-[300px] scale-300 select-none pointer-events-none"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        )}
        <h2 className="text-[45px] font-extrabold leading-[1.05] tracking-[-2px] text-black relative z-10">
          {line1}
          {line2 && <><br />{line2}</>}
        </h2>
        <p className="mt-8 max-w-[280px] text-[14px] leading-[1.5] text-black font-light relative z-10 tracking-[0.013em]">
          {description}
        </p>
        {showButton && (
          <TransitionLink
            to={buttonUrl}
            className="mt-10 w-[170px] h-[60px] bg-[#6250DA] border-2 border-white rounded-[8px] text-white text-[16px] font-medium flex items-center justify-center no-underline relative z-10"
          >
            {buttonLabel}
          </TransitionLink>
        )}
      </FadeIn>

      {/* ================= DESKTOP ================= */}
      <FadeIn className="hidden lg:flex relative min-h-[620px] items-center justify-center bg-[#D5462F]">
        {image1Desktop && (
          <FadeIn
            as="img"
            {...{
              src: image1Desktop.src,
              alt: "",
              width: image1Desktop.width,
              height: image1Desktop.height,
            }}
            y={0}
            className="absolute select-none pointer-events-none"
            style={{ left: "100px", top: "84px", height: "360px", width: "auto" }}
          />
        )}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[760px]">
          <h2 className="text-[78px] font-extrabold leading-[1] tracking-[-3px] text-black mb-[50px]" style={{ fontFamily: "Inter, sans-serif" }}>
            {line1}
            {line2 && <><br />{line2}</>}
          </h2>
          <p className="text-[16px] leading-[1.8] text-black max-w-[600px] mb-[45px] font-light">
            {description}
          </p>
          {showButton && (
            <TransitionLink
              to={buttonUrl}
              className="w-[180px] h-[64px] bg-[#6250DA] border-2 border-white rounded-[8px] text-white text-[16px] font-medium flex items-center justify-center no-underline transition-all duration-300"
            >
              {buttonLabel}
            </TransitionLink>
          )}
        </div>
        {image2 && (
          <img
            src={image2.src}
            alt=""
            width={image2.width}
            height={image2.height}
            className="absolute select-none pointer-events-none"
            style={{ right: "100px", top: "84px", height: "360px", width: "auto" }}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        )}
      </FadeIn>
    </section>
  );
}

export default AboutPanelCta;