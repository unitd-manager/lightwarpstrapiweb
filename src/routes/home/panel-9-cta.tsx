import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function HomePanelCta() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[2.5rem] bg-[#5b4aeb] p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_40px_80px_rgba(91,74,235,0.25)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://lightwarp3d.com/wp-content/uploads/2026/01/ShellyPose1.png"
                alt="Shelly Character"
                className="w-full max-w-[360px] md:max-w-[420px] object-contain"
              />
            </div>

            <div className="text-center lg:text-left text-white">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.03em] mb-6">
                We are excited to work with you!
              </h2>
              <p className="mx-auto max-w-3xl text-base sm:text-lg text-white/90 leading-relaxed mb-10 lg:mx-0">
                Get started with your 3D animated vision today! Click on the Connect button for inquiries, questions, or needs! We will get back to you quickly and help you get started!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-12 py-4 text-base sm:text-lg font-semibold text-white shadow-[0_24px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:bg-white/20"
              >
                Connect
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
