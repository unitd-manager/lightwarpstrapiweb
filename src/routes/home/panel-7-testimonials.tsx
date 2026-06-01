import { motion } from "framer-motion";
import { Section } from "../../components/section";

const testimonials = [
  {
    name: "Sophia Patel",
    role: "Marketing Manager",
    quote: "Working with this studio was seamless. The visuals exceeded expectations and boosted our campaign.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Product Lead",
    quote: "Their creativity and professionalism stood out. The 3D animation helped us connect with our audience.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Creative Director",
    quote: "A fantastic team that truly understands storytelling. The final output was polished and impactful.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export function HomePanelTestimonials() {
  return (
    <Section
      eyebrow="Testimonials"
      title={<>Voices of <span className="text-gradient">Trust</span></>}
      subtitle="What our clients say about working with us."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="rounded-2xl bg-white/[0.05] border border-white/10 p-6 shadow-lg hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-gradient" />
              <div>
                <div className="font-semibold text-gradient">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">"{t.quote}"</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
