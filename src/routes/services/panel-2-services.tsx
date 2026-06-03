import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "3D Commercials & Cinematics",
    bg: "bg-[#341FBE]",
    hex: "#341FBE",
    description: (
      <>
        Want to capture attention and spark engagement with <strong>high-quality animated commercial campaigns</strong> that tell your story with style? Our team can help you do that!
        <br />
        <br />
        We can deliver fully 3D-animated <strong>advertisements</strong> for your campaign and brand from start to finish. From 30-second spots to full 1-2 min ads, we offer the most pristine quality artistry, design, and rendering to help showcase your brand for any platform, enhance brand recall, and drive sales and results.
      </>
    ),
    subItems: [
      "TV & Social Media Ads",
      "Game Cinematics & Trailers",
      "Previs & Animatics",
      "Storyboards",
      "Product Visualizations",
      "Brand Films",
    ],
  },
  {
    title: "3D Asset Services",
    bg: "bg-[#AC1F72]",
    hex: "#AC1F72",
    description: (
      <>
        Need <strong>stunning, optimized 3D assets</strong> for your game, film, or virtual production? We can craft <strong>environments, props, and in-world assets</strong> with precision and creativity—balancing artistry with technical performance.
        <br />
        <br />
        Whether you need us to own <strong>full environment builds, create standout hero assets</strong>, or handle <strong>specific tasks like look development, modeling, or texturing</strong>, we plug in where you need us most. Every asset is built with production in mind—clean, scalable, and ready for real-time or cinematic use.
      </>
    ),
    subItems: [
      "Environment & World Building",
      "Hero Asset Creation",
      "Character Modeling & Rigging",
      "Look Development & Texturing",
      "Prop & Level Design",
      "USD / Game-Ready Assets",
    ],
  },
  {
    title: "Original IP & Content",
    bg: "bg-[#168399]",
    hex: "#168399",
    description: (
      <>
        Looking for <strong>original characters, rich backstories, or IP development?</strong> We design <strong>iconic characters and immersive storylines</strong> tailored to your brand, campaign, or transmedia universe—ready to evolve into animations, games, comics, or merchandise.
        <br />
        <br />
        Need a story or campaign idea? Our team of creatives can craft <strong>engaging narratives</strong> that align with your vision and capture your audience's attention.
      </>
    ),
    subItems: [
      "Original Short Films",
      "Character & World Design",
      "Transmedia Story Development",
      "Pilot & Series Production",
      "Narrative Concept & Scripting",
      "Merchandise-Ready IP",
    ],
  },
  {
    title: "Creative & Technical Consulting",
    bg: "bg-[#4C11A7]",
    hex: "#4C11A7",
    description: (
      <>
        Need help <strong>navigating real-time production?</strong> We offer <strong>expert consulting in real-time rendering workflows, pipeline development, and creative problem-solving</strong>. With real-world experience delivering projects across animation, games, and virtual production, we understand what it takes to move ideas from concept to execution efficiently and at scale.
        <br />
        <br />
        Whether you're <strong>optimizing a team, building a pipeline, or planning a project</strong>, we're here to help you do it smarter.
      </>
    ),
    subItems: [
      "Real-Time Pipeline Development",
      "Unreal Engine Integration",
      "Team & Workflow Optimization",
      "Virtual Production Setup",
      "Project Scoping & Planning",
      "Technical Art Direction",
    ],
  },
];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${service.bg} text-white shadow-[0_40px_80px_rgba(0,0,0,0.25)] flex flex-col`}
      style={{ borderRadius: "49px", padding: "5%", alignItems: "center", textAlign: "center" }}
    >
      <h3
        className="text-2xl font-semibold mb-6"
        style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 600 }}
      >{service.title}</h3>

      {/* Description with clamp */}
      <div className="relative" style={{ width: "100%" }}>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-[600px]" : "max-h-[7.5rem]"
          }`}
          style={{ fontFamily: '"Sora", sans-serif', fontSize: "16px", fontWeight: 300, lineHeight: "24px", color: "rgba(255,255,255,0.90)" }}
        >
          {service.description}
        </div>

        {/* Fade mask — only visible when collapsed */}
        {!expanded && (
          <div
            className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
            style={{ background: `linear-gradient(to top, ${service.hex} 0%, transparent 100%)` }}
          />
        )}
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 text-white/50 hover:text-white/90 transition-colors duration-200 flex items-center gap-1.5"
        style={{ fontFamily: '"Sora", sans-serif', fontSize: "16px", fontWeight: 500 }}
      >
        {expanded ? "Show less" : "Read more"}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Sub-items — always visible, pinned to bottom */}
      {service.subItems && service.subItems.length > 0 && (
        <div className="mt-auto pt-8" style={{ width: "100%" }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gradient-to-r from-white/40 to-transparent" />
            <span style={{ fontFamily: '"Sora", sans-serif', fontSize: "16px", fontWeight: 500 }} className="text-white/40 uppercase tracking-[0.2em]">What We Offer</span>
            <div className="h-px flex-1 bg-gradient-to-l from-white/40 to-transparent" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {service.subItems.map((item) => (
              <div
                key={item}
                className="group p-px rounded-2xl bg-gradient-to-br from-white/35 via-white/10 to-transparent hover:from-white/50 hover:via-white/20 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.3)] min-h-[60px]"
              >
                <div className="flex items-center gap-2.5 bg-black/35 group-hover:bg-black/25 transition-colors duration-300 rounded-[15px] px-3.5 py-3 h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="w-5 h-5 shrink-0 rounded-full bg-white/15 border border-white/20 flex items-center justify-center group-hover:bg-white/25 transition-colors duration-300">
                    <svg className="w-2.5 h-2.5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[12px] font-semibold text-white/85 leading-tight tracking-wide">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function ServicesPanelServices() {
  return (
    <section className="bg-transparent px-6 pt-24 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2
            className="services-cards-heading"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: "52px",
              fontWeight: 600,
              lineHeight: "62px",
              letterSpacing: "-1px",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Lightwarp has you covered
          </h2>
        </div>

        <div className="grid md:grid-cols-2" style={{ gap: "2vw" }}>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
