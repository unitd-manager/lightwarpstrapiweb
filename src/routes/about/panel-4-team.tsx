import { motion } from "framer-motion";

const SORA: React.CSSProperties = { fontFamily: '"Sora", sans-serif' };

const founderPhoto = "https://lightwarp3d.com/wp-content/uploads/2026/01/HeadShot.jpg";

const associates = [
  { name: "Alyssa Curran",   role: "Look Development Artist" },
  { name: "Cristina Kovacs", role: "Character Designer" },
  { name: "Diego Romero",    role: "Pipeline Technical Director" },
  { name: "Dominic Nguyen",  role: "Visual Development Artist" },
  { name: "Ethan Umanos",    role: "Animator" },
  { name: "Magnus Haarseth", role: "3D Asset Artist" },
  { name: "Melanie Riojas",  role: "Story Artist" },
  { name: "Nimi Parmar",     role: "3D Asset Artist" },
  { name: "Robert Harweth",  role: "3D Environment Artist" },
  { name: "Spencer Bryant",  role: "Rigging & CFX Artist" },
  { name: "Theron Smith",    role: "Animator" },
  { name: "Travis Rainford", role: "VFX Artist" },
];

export function AboutPanelTeam() {
  return (
    <section
      className="mx-auto max-w-[1200px] px-[2%] py-[3%]"
      style={SORA}
    >
      {/* Meet our Team heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[24px] sm:text-[35px] lg:text-[45px] font-semibold text-white text-center leading-tight lg:leading-[60px] tracking-[-1px] mb-[46px]"
      >
        Meet our Team
      </motion.h2>

      {/* Founder */}
      <div className="flex justify-center mb-[46px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center w-[29%] min-w-[180px]"
        >
          <div className="mx-auto w-[50%] min-w-[120px] overflow-hidden rounded-[25px] border-2 border-black">
            <img
              src={founderPhoto}
              alt="Adithya Sathyanarayanan"
              className="h-full w-full object-cover object-top"
              decoding="async"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          </div>
          <h3
            className="mt-[20px] text-white font-semibold leading-[60px] tracking-[-1px]"
            style={{ fontSize: '40px', marginBottom: '0px' }}
          >
            Adithya Sathyanarayanan
          </h3>
          <p
            className="text-white font-normal leading-[30px]"
            style={{ fontSize: '22px' }}
          >
            Founder &amp; Chief Creative Officer
          </p>
        </motion.div>
      </div>

      {/* Our Associates heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[24px] sm:text-[35px] lg:text-[45px] font-semibold text-white text-center leading-tight lg:leading-[60px] tracking-[-1px] mb-[46px]"
        style={{ marginTop: '10px' }}
      >
        Our Associates
      </motion.h2>

      {/* Associates — space-around, 3 per row */}
      <div className="flex flex-row flex-wrap justify-around gap-y-[46px] px-[3%]">
        {associates.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="w-full sm:w-[30%]"
          >
            <h3
              className="text-white font-semibold leading-[60px] tracking-[-1px]"
              style={{ fontSize: '40px', marginBottom: '0px' }}
            >
              {m.name}
            </h3>
            <p
              className="text-white font-normal leading-[30px]"
              style={{ fontSize: '22px' }}
            >
              {m.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
