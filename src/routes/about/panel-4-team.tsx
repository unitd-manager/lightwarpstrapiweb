import { motion } from "framer-motion";

const founderPhoto = "https://lightwarp3d.com/wp-content/uploads/2026/01/HeadShot.jpg";

// Rows of 3 — matching original Elementor row grouping exactly
const associateRows = [
  [
    { name: "Alyssa Curran",   role: "Look Development Artist" },
    { name: "Cristina Kovacs", role: "Character Designer" },
    { name: "Diego Romero",    role: "Pipeline Technical Director" },
  ],
  [
    { name: "Dominic Nguyen",  role: "Visual Development Artist" },
    { name: "Ethan Umanos",    role: "Animator" },
    { name: "Magnus Haarseth", role: "3D Asset Artist", smallName: true },
  ],
  [
    { name: "Melanie Riojas",  role: "Story Artist" },
    { name: "Nimi Parmar",     role: "3D Asset Artist" },
    { name: "Robert Harweth",  role: "3D Environment Artist" },
  ],
  [
    { name: "Spencer Bryant",  role: "Rigging & CFX Artist" },
    { name: "Theron Smith",    role: "Animator" },
    { name: "Travis Rainford", role: "VFX Artist" },
  ],
];

export function AboutPanelTeam() {
  return (
    <section
      style={{ fontFamily: '"Sora", sans-serif', overflow: 'hidden' }}
      className="flex flex-col gap-[46px] px-[2%] pt-[3%] pb-[1%] min-h-[380px]"
    >
      {/* ── Meet our Team heading ── */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full text-center text-white"
        style={{
          fontFamily: '"Sora", sans-serif',
          fontSize: 'clamp(28px, 4vw, 45px)',
          fontWeight: 600,
          lineHeight: '60px',
          letterSpacing: '-1px',
        }}
      >
        Meet our Team
      </motion.h2>

      {/* ── Founder ── */}
      <div className="flex justify-center" style={{ marginTop: '-20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center founder-box"
          style={{ width: '29%', maxWidth: '29%' }}
        >
          {/* Photo — 50% of the box width, 25px radius, 2px white border */}
          <div
            style={{
              width: '50%',
              margin: '0 auto',
              overflow: 'hidden',
              borderRadius: '25px',
              border: '2px solid white',
            }}
          >
            <img
              src={founderPhoto}
              alt="Adithya Sathyanarayanan"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              decoding="async"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </div>

          {/* Name */}
          <h3
            className="founder-name text-white"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '40px',
              fontWeight: 600,
              lineHeight: '60px',
              letterSpacing: '-1px',
              marginBottom: '20px',
              marginTop: 0,
            }}
          >
            Adithya Sathyanarayanan
          </h3>

          {/* Role */}
          <p
            className="founder-role text-white"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '22px',
              fontWeight: 'normal',
              lineHeight: '30px',
              letterSpacing: 0,
            }}
          >
            Founder &amp; Chief Creative Officer
          </p>
        </motion.div>
      </div>

      {/* ── Our Associates heading ── */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full text-center text-white"
        style={{
          fontFamily: '"Sora", sans-serif',
          fontSize: 'clamp(28px, 4vw, 45px)',
          fontWeight: 600,
          lineHeight: '60px',
          letterSpacing: '-1px',
          marginTop: '10px',
        }}
      >
        Our Associates
      </motion.h2>

      {/* ── Associate rows — flex space-around, 30% each, centered text ── */}
      {associateRows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="associate-row flex flex-row flex-wrap justify-around px-[3%]"
          style={{ marginBottom: 0 }}
        >
          {row.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (rowIdx * 3 + i) * 0.05 }}
              className="associate-item text-center"
              style={{ width: '30%', maxWidth: '30%', alignSelf: 'center' }}
            >
              <h3
                className="associate-name text-white"
                style={{
                  fontFamily: '"Sora", sans-serif',
                  fontSize: m.smallName ? '38px' : '40px',
                  fontWeight: 600,
                  lineHeight: '60px',
                  letterSpacing: '-1px',
                  marginBottom: '20px',
                }}
              >
                {m.name}
              </h3>
              <p
                className="associate-role text-white"
                style={{
                  fontFamily: '"Sora", sans-serif',
                  fontSize: '22px',
                  fontWeight: 'normal',
                  lineHeight: '30px',
                  letterSpacing: 0,
                }}
              >
                {m.role}
              </p>
            </motion.div>
          ))}
        </div>
      ))}
    </section>
  );
}
