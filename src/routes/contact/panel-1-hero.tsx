import { motion } from "framer-motion";

const cloud1 = "https://lightwarp3d.com/wp-content/uploads/2026/01/coffe2go-clound-num8.svg";
const cloud2 = "https://lightwarp3d.com/wp-content/uploads/2026/01/cloud-img-2-1.svg";
const cloud3 = "https://lightwarp3d.com/wp-content/uploads/2026/01/cloud-img-3.svg";

/*
 * Solid circle ball — matches Elementor icon-circle decorative elements in hero
 */
function Ball({ size, color }: { size: number; color: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        flexShrink: 0,
      }}
    />
  );
}

export function ContactPanelHero() {
  return (
    /*
     * Elementor: elementor-element-278d55ca
     *   display:flex; flex-direction:row; justify-content:center; align-items:center;
     *   padding: 0% 4% 0% 4%; background-color:#2E188D; overflow:hidden;
     *   min-height: 225px (desktop) / 340px (tablet) / 240px (mobile)
     *
     * Heading 4c9a125f → typography 00db7d0:
     *   Sora, 75px, 600, 85px line-height, -2px letter-spacing
     *
     * Decorative icons (absolute positioned):
     *   6bc2c753 — 33px, color #F1AEF9, top:24% right:29%
     *   7c06ceb3 — 59px, color #6250DA, bottom:27% left:26%, rotate(123deg)
     *   5b41bb47 — 35px, color #3B8BFF, bottom:5% left:41%, rotate(189deg)
     *
     * Decorative images (absolute positioned):
     *   1237b547 — 16% width, 6.5vh height, bottom:65% left:16%
     *   4a708fb1 — 17% width, 7.5vh height, bottom:6% right:31%
     *   4fc98688 — 9% width, 5vh height, bottom:40% right:21%
     */
    <section
      className="w-full bg-[#2E188D] pt-28 pb-12 relative overflow-hidden contact-hero-section"
      style={{ fontFamily: '"Sora", sans-serif', minHeight: '225px' }}
    >
      <div
        className="relative w-full px-[4%] flex items-center justify-center"
        style={{ minHeight: '180px' }}
      >

        {/* ── Decorative cloud images ── */}

        {/* Cloud bottom-left: elementor-element-1237b547 (16% width, 6.5vh, bottom 65%, left 16%) */}
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={cloud1}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none object-contain"
          style={{ left: '16%', bottom: '65%', width: '16%', height: '6.5vh', objectPosition: 'center center' }}
        />

        {/* Cloud bottom-right: elementor-element-4a708fb1 (17% width, 7.5vh, bottom 6%, right 31%) */}
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          src={cloud2}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none object-contain"
          style={{ right: '31%', bottom: '6%', width: '17%', height: '7.5vh', objectPosition: 'center center' }}
        />

        {/* Cloud small: elementor-element-4fc98688 (9% width, 5vh, bottom 40%, right 21%) */}
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src={cloud3}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none object-contain"
          style={{ right: '21%', bottom: '40%', width: '9%', height: '5vh', objectPosition: 'center center' }}
        />

        {/* ── Decorative circle balls ── */}

        {/*
         * Ball 1 — elementor-element-6bc2c753
         *   font-size: 33px → diameter 33px; color: #F1AEF9 (pink/lavender)
         *   top: 24%; right: 29%
         */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute pointer-events-none"
          style={{ top: '24%', right: '29%' }}
        >
          <Ball size={33} color="#F1AEF9" />
        </motion.div>

        {/*
         * Ball 2 — elementor-element-7c06ceb3
         *   font-size: 59px → diameter 59px; color: #6250DA (purple/accent)
         *   bottom: 27%; left: 26%
         */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute pointer-events-none"
          style={{ bottom: '27%', left: '26%' }}
        >
          <Ball size={59} color="#6250DA" />
        </motion.div>

        {/*
         * Ball 3 — elementor-element-5b41bb47
         *   font-size: 35px → diameter 35px; color: #3B8BFF (blue)
         *   bottom: 5%; left: 41%
         */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute pointer-events-none"
          style={{ bottom: '5%', left: '41%' }}
        >
          <Ball size={35} color="#3B8BFF" />
        </motion.div>

        {/*
         * "Contact us" heading — elementor-element-4c9a125f
         *   typography 00db7d0: Sora / 75px / 600 / 85px / -2px
         *   text-align:center; z-index:5; color:#FFFFFF
         *   Responsive: tablet 52px / mobile 40px (via .contact-hero-heading CSS class)
         */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center text-white contact-hero-heading"
          style={{
            fontFamily: '"Sora", sans-serif',
            fontSize: '75px',
            fontWeight: 600,
            lineHeight: '85px',
            letterSpacing: '-2px',
          }}
        >
          Contact us
        </motion.h1>
      </div>
    </section>
  );
}
