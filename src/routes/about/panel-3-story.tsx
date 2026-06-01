import { motion } from "framer-motion";

const crabStill = "https://lightwarp3d.com/wp-content/uploads/2026/01/CrabStill.png";

export function AboutPanelStory() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row items-stretch overflow-hidden rounded-[25px] bg-[#6250DA] border-2 border-white"
        style={{ fontFamily: '"Sora", sans-serif' }}
      >
        {/* Left: crab image — sits flush to bottom */}
        <div className="w-full lg:w-[42%] flex items-end justify-center self-end">
          <img
            src={crabStill}
            alt="3D Studio Crab Still"
            className="w-full h-auto object-contain"
            decoding="async"
          />
        </div>

        {/* Right: story text — exact live-site typography */}
        <div className="w-full lg:w-[58%] p-[5%] flex flex-col justify-center">
          <h4 className="text-[24px] sm:text-[35px] lg:text-[45px] text-white font-semibold leading-tight lg:leading-[60px] tracking-[-1px] mb-[30px]">
            Our Story
          </h4>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white font-light leading-[24px] text-justify">
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
