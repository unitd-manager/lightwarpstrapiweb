import { motion } from "framer-motion";

const crabStill = "https://lightwarp3d.com/wp-content/uploads/2026/01/CrabStill.png";

export function AboutPanelStory() {
  return (
    <section className="mx-auto max-w-[1300px] px-6 pt-16 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row items-stretch overflow-hidden rounded-[32px] bg-[#6250DA] border border-white/20 shadow-[0_0_35px_rgba(255,255,255,0.12)]"
        style={{ fontFamily: '"Sora", sans-serif' }}
      >
        {/* Left: crab image — sits flush to bottom */}
        <div className="w-full lg:w-[48%] flex items-center justify-center py-16">
          <img
            src={crabStill}
            alt="3D Studio Crab Still"
            className="w-full h-auto object-contain"
            decoding="async"
          />
        </div>

        {/* Right: story text — exact live-site typography */}
        <div className="w-full lg:w-[52%] p-[5%] flex flex-col justify-center pt-16">
          <h4 className="font-['Sora'] text-[24px] sm:text-[35px] lg:text-[50px] text-white font-semibold leading-tight lg:leading-[60px] tracking-[-1px] mb-[40px]">
            Our Story
          </h4>
          <p className="text-[16px] md:text-[17px] lg:text-[18px] text-white font-light leading-[24px] text-justify">
            Started by an alum of Texas A&amp;M University, Lightwarp 3D Studio was built on a
            vision of using real-time rendering with tools like Unreal Engine and Blender to
            create high-quality 3D stories and visuals at blazing fast speed. With our
            proprietary real-time pipeline and workflows, we create, iterate, and deliver results
            fast and with cinematic quality as a leading-edge studio. We bring our industry
            experience at major animated studios and a talented associate team to ensure quality
            and results for you.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
