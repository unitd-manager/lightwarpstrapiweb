import { motion } from "framer-motion";

const crabStill = "https://lightwarp3d.com/wp-content/uploads/2026/01/CrabStill.png";

export function AboutPanelStory() {
  return (
    <section
      style={{ fontFamily: '"Sora", sans-serif', paddingLeft: '4%', paddingRight: '4%', paddingBottom: '2%' }}
      className="w-full pt-28 md:pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row items-stretch overflow-hidden"
        style={{
          borderRadius: '25px',
          backgroundColor: '#6250DA',
          border: '2px solid white',
          padding: '5%',
        }}
      >
        {/* Left: crab image — flush to bottom */}
        <div className="w-full lg:w-[42%] flex items-end justify-center self-end">
          <img
            src={crabStill}
            alt="3D Studio Crab Still"
            className="w-full h-auto object-contain"
            decoding="async"
          />
        </div>

        {/* Right: story text */}
        <div className="w-full lg:w-[58%] flex flex-col justify-center">
          <h4
            className="text-white"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '45px',
              fontWeight: 600,
              lineHeight: '60px',
              letterSpacing: '-1px',
              marginBottom: '30px',
            }}
          >
            Our Story
          </h4>
          <p
            className="text-white"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: '24px',
              textAlign: 'justify',
            }}
          >
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
