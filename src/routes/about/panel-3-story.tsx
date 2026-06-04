import { motion } from "framer-motion";

const crabStill =
  "https://lightwarp3d.com/wp-content/uploads/2026/01/CrabStill.png";

export function AboutPanelStory() {
  return (
    <section className="mx-auto max-w-[1340px] px-4 sm:px-6 pt-2 sm:pt-2 pb-2 sm:pb-2">


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          flex flex-col lg:flex-row
          items-stretch
          overflow-hidden
          rounded-[28px]
          bg-[#6250DA]
          border border-white/20
          shadow-[0_0_35px_rgba(255,255,255,0.12)]
        "
        style={{ fontFamily: '"Sora", sans-serif' }}
      >
        {/* Left: Crab Image */}
        <div
          className="
            w-full lg:w-[46.5%]
            flex items-center justify-center
            pt-3 pb-2
            sm:py-6
            lg:py-8
          "
        >
          <img
            src={crabStill}
            alt="3D Studio Crab Still"
            decoding="async"
            className="
              block
              w-full
              max-w-[320px]
              sm:max-w-[440px]
              lg:max-w-none
              h-auto
              object-contain
              lg:translate-x-20
            "
          />
        </div>

        {/* Right: Story Text */}
        <div
          className="
            w-full lg:w-[54.5%]
            p-6
            sm:p-[5%]
            flex flex-col justify-center
            pt-2
            sm:pt-10
            lg:pt-16
          "
        >
          <h4
            className="
              text-[20px]
              sm:text-[33px]
              lg:text-[45px]
              pb-6
              sm:pb-[30px]
              text-white
              font-semibold
              leading-tight
              tracking-[-1px]
            "
          >
            Our Story
          </h4>

          <p
            className="
              text-[14px]
              md:text-[15px]
              text-white
              font-light
              leading-[24px]
              tracking-wide
              text-justify
            "
          >
            Started by an alum of Texas A&amp;M University, Lightwarp 3D
            Studio was built on a vision of using real-time rendering with
            tools like Unreal Engine and Blender to create high-quality 3D
            stories and visuals at blazing fast speed. With our proprietary
            real-time pipeline and workflows, we create, iterate, and deliver
            results fast and with cinematic quality as a leading-edge studio.
            We bring our industry experience at major animated studios and a
            talented associate team to ensure quality and results for you.
          </p>
        </div>
      </motion.div>
    </section>
  );
}