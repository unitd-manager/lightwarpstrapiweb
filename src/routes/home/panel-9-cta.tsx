import { TransitionLink } from "../../components/page-transition-overlay";
import { motion } from "framer-motion";

export function HomePanelCta() {
  return (
    <section className="lw-section-tight bg-transparent">
      <div className="lw-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[2.5rem] bg-[#6b5bf7e1] p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_40px_80px_rgba(91,74,235,0.25)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-4 items-center">
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://lightwarp3d.com/wp-content/uploads/2026/01/ShellyPose1.png"
                alt="Shelly Character"
                className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[360px] object-contain"
              />
            </div>

            <div className="text-center text-white">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.03em] mb-6">
                <span className="block">We are excited to</span>
                <span className="block">work with you!</span>
              </h2>
              <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/90 leading-relaxed mb-10">
                Get started with your 3D animated vision today! Click on the Connect button for inquiries, questions, or needs! We will get back to you quickly and help you get started!
              </p>
              <TransitionLink
                to="/contact"
                /*className="inline-flex items-center justify-center rounded-[5xl] border border-white/70 bg-white/10 px-12 py-4 text-base sm:text-lg font-semibold text-white shadow-[0_24px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:bg-white/20"*/
              className=" inline-flex
  items-center
  justify-center
  rounded-lg
  border-2
  border-white
  px-4
  py-3
  text-[20px]
  font-bold
  text-white
  shadow-[0_30px_40px_rgba(0,0,0,0.35)]
  transition-all
  duration-300
  hover:bg-white
  hover:text-[#6453FF]"
              >
                Connect
              </TransitionLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
