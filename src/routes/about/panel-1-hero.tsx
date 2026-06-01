import { motion } from "framer-motion";

const crabStill = "https://lightwarp3d.com/wp-content/uploads/2026/01/CrabStill.png";

export function AboutPanelHero() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row items-center overflow-hidden rounded-2xl bg-[#6b4fd8]"
      >
        {/* Left: crab image — sits flush to the bottom of the box */}
        <div className="w-full lg:w-[42%] flex items-end justify-center pt-8 lg:pt-0 self-end">
          <img
            src={crabStill}
            alt="3D Studio Still"
            className="w-full max-w-[400px] h-auto object-contain"
            decoding="async"
          />
        </div>

        {/* Right: story text */}
        <div className="w-full lg:w-[58%] px-8 lg:px-12 py-12">
          <h4 className="text-[22px] font-bold text-white mb-4">Our Story</h4>
          <p className="text-white/90 text-[14px] leading-relaxed">
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
