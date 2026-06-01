import { motion } from "framer-motion";

const services = [
  {
    title: "3D Commercials & Cinematics",
    bg: "bg-[#3f34f5]",
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
    bg: "bg-[#bb2e7a]",
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
    bg: "bg-[#1f9ab4]",
    description: (
      <>
        Looking for <strong>original characters, rich backstories, or IP development?</strong> We design <strong>iconic characters and immersive storylines</strong> tailored to your brand, campaign, or transmedia universe—ready to evolve into animations, games, comics, or merchandise.
        <br />
        <br />
        Need a story or campaign idea? Our team of creatives can craft <strong>engaging narratives</strong> that align with your vision and capture your audience’s attention.
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
    bg: "bg-[#5b1af6]",
    description: (
      <>
        Need help <strong>navigating real-time production?</strong> We offer <strong>expert consulting in real-time rendering workflows, pipeline development, and creative problem-solving</strong>. With real-world experience delivering projects across animation, games, and virtual production, we understand what it takes to move ideas from concept to execution efficiently and at scale.
        <br />
        <br />
        Whether you’re <strong>optimizing a team, building a pipeline, or planning a project</strong>, we’re here to help you do it smarter.
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

export function ServicesPanelServices() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
         
          <h2 className="text-5xl md:text-6xl font-semibold text-white">Lightwarp has you covered</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${service.bg} rounded-[2rem] p-10 min-h-[420px] text-white shadow-[0_40px_80px_rgba(0,0,0,0.25)]`}
            >
              <h3 className="text-2xl font-semibold mb-6">{service.title}</h3>
              <p className="text-base leading-7 text-white/90">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
