import { motion } from "framer-motion";

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
    <section className="mx-auto max-w-[1200px] px-6 py-16 sm:py-24">

      {/* Meet our Team heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-[36px] font-bold text-center"
      >
        Meet our Team
      </motion.h2>

      {/* Founder — centered, rounded-square photo matching WP 360×360 */}
      <div className="mb-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto w-[220px] h-[220px] overflow-hidden rounded-xl">
            <img
              src={founderPhoto}
              alt="Adithya Sathyanarayanan"
              className="h-full w-full object-cover object-top"
              decoding="async"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          </div>
          <h3 className="mt-5 text-[22px] font-semibold">Adithya Sathyanarayanan</h3>
          <p className="mt-1 text-[14px] text-muted-foreground">Founder &amp; Chief Creative Officer</p>
        </motion.div>
      </div>

      {/* Our Associates heading — same size as Meet our Team */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-[36px] font-bold"
      >
        Our Associates
      </motion.h2>

      {/* Associates — 3-column plain text grid, no cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-6">
        {associates.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <h3 className="text-[20px] font-bold">{m.name}</h3>
            <p className="mt-1 text-[13px] text-muted-foreground">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
