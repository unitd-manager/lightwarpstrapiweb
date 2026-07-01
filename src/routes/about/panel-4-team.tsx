import { motion } from "framer-motion";
import founderPhoto from "../../assets/images/cms/HeadShot.jpg";
import { getStrapiMedia } from "../../lib/strapi";

const STATIC_FOUNDER = {
  name: "Adithya Sathyanarayanan",
  designation: "Founder & Chief Creative Officer",
  photo: founderPhoto,
};

const STATIC_ASSOCIATES = [
  { name: "Alyssa Curran",   role: "Look Development Artist" },
  { name: "Cristina Kovacs", role: "Character Designer" },
  { name: "Diego Romero",    role: "Pipeline Technical Director" },
  { name: "Dominic Nguyen",  role: "Visual Development Artist" },
  { name: "Ethan Umanos",    role: "Animator" },
  { name: "Magnus Haarseth", role: "3D Asset Artist", smallName: true },
  { name: "Melanie Riojas",  role: "Story Artist" },
  { name: "Nimi Parmar",     role: "3D Asset Artist" },
  { name: "Robert Harweth",  role: "3D Environment Artist" },
  { name: "Spencer Bryant",  role: "Rigging & CFX Artist" },
  { name: "Theron Smith",    role: "Animator" },
  { name: "Travis Rainford", role: "VFX Artist" },
];

function chunkIntoThrees<T>(arr: T[]): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < arr.length; i += 3) rows.push(arr.slice(i, i + 3));
  return rows;
}

export function AboutPanelTeam({ data }: { data?: any }) {
  const members = data?.team_members?.member ?? [];

  let founder = STATIC_FOUNDER;
  let associateRows: any[][] = chunkIntoThrees(STATIC_ASSOCIATES);

  if (members.length > 0) {
    const founderEntry = members.find((m: any) => m.is_founder) || members[0];
    const associateEntries = members.filter((m: any) => m !== founderEntry);

    founder = {
      name: founderEntry.name,
      designation: founderEntry.designation,
      photo: getStrapiMedia(founderEntry.profile_picture) || founderPhoto,
    };

    associateRows = chunkIntoThrees(
      associateEntries.map((m: any) => ({
        name: m.name,
        role: m.designation,
      }))
    );
  }

  const mainTitle = data?.main_title || "Meet our Team";
  const subTitle = data?.sub_title || "Our Associates";

  return (
    <section
      style={{ fontFamily: '"Sora", sans-serif', overflow: "hidden" }}
      className="flex flex-col gap-[50px] px-[2%] pt-[3%] pb-[1%] min-h-[380px] mb-[60px]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full text-center text-white"
        style={{ fontFamily: '"Sora", sans-serif', fontSize: "clamp(28px, 4vw, 45px)", fontWeight: 600, lineHeight: "60px", letterSpacing: "-1px" }}
      >
        {mainTitle}
      </motion.h2>

      {/* Founder */}
      <div className="flex justify-center" style={{ marginTop: "-20px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center founder-box"
          style={{ width: "29%", maxWidth: "29%" }}
        >
          <div style={{ width: "50%", margin: "0 auto", overflow: "hidden", borderRadius: "25px", border: "2px solid white" }}>
            <img
              src={founder.photo}
              alt={founder.name}
              style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "top", display: "block" }}
              decoding="async"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          </div>
          <h3 className="founder-name text-white" style={{ fontFamily: '"Sora", sans-serif', fontSize: "40px", fontWeight: 600, lineHeight: "60px", letterSpacing: "-1px", marginBottom: "20px", marginTop: 0 }}>
            {founder.name}
          </h3>
          <p className="founder-role text-white" style={{ fontFamily: '"Sora", sans-serif', fontSize: "22px", fontWeight: "normal", lineHeight: "30px", letterSpacing: 0 }}>
            {founder.designation}
          </p>
        </motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full text-center text-white"
        style={{ fontFamily: '"Sora", sans-serif', fontSize: "clamp(28px, 4vw, 45px)", fontWeight: 600, lineHeight: "60px", letterSpacing: "-1px", marginTop: "10px" }}
      >
        {subTitle}
      </motion.h2>

      {associateRows.map((row, rowIdx) => (
        <div key={rowIdx} className="associate-row flex flex-row flex-wrap justify-around px-[3%]" style={{ marginBottom: 0 }}>
          {row.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (rowIdx * 3 + i) * 0.05 }}
              className="associate-item text-center"
              style={{ width: "30%", maxWidth: "30%", alignSelf: "center" }}
            >
              <h3 className="associate-name text-white" style={{ fontFamily: '"Sora", sans-serif', fontSize: m.smallName ? "38px" : "40px", fontWeight: 600, lineHeight: "60px", letterSpacing: "-1px", marginBottom: "20px" }}>
                {m.name}
              </h3>
              <p className="associate-role text-white" style={{ fontFamily: '"Sora", sans-serif', fontSize: "22px", fontWeight: "normal", lineHeight: "30px", letterSpacing: 0 }}>
                {m.role}
              </p>
            </motion.div>
          ))}
        </div>
      ))}
    </section>
  );
}