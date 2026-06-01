import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Section } from "../../components/section";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for emerging brands",
    price: "$4,500",
    period: "per project",
    features: [
      "Up to 30-second animation",
      "1 revision round",
      "HD delivery (1080p)",
      "Basic motion graphics",
      "2-week turnaround",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Studio",
    tagline: "Most popular for growing brands",
    price: "$12,000",
    period: "per project",
    features: [
      "Up to 90-second animation",
      "3 revision rounds",
      "4K delivery + source files",
      "Full CGI & VFX pipeline",
      "4-week turnaround",
      "Dedicated project manager",
      "Soundtrack licensing",
    ],
    cta: "Start Studio",
    highlight: true,
  },
  {
    name: "Enterprise",
    tagline: "For global brands & agencies",
    price: "Custom",
    period: "tailored quote",
    features: [
      "Unlimited duration & assets",
      "Unlimited revisions",
      "Multi-format delivery",
      "Full production suite (CGI, VFX, XR)",
      "Priority scheduling",
      "Dedicated senior team",
      "NDA & white-label options",
    ],
    cta: "Talk to Us",
    highlight: false,
  },
];

export function ServicesPanelPricing() {
  return (
    <Section
      eyebrow="Pricing"
      title={
        <>
          Transparent <span className="text-gradient">Pricing</span>
        </>
      }
      subtitle="No hidden fees. No surprises. Just world-class work at a fair price."
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex flex-col overflow-hidden rounded-2xl p-7 ${
              plan.highlight
                ? "bg-gradient-brand text-white glow-brand"
                : "glass border-gradient"
            }`}
          >
            {plan.highlight && (
              <div className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white">
                Most Popular
              </div>
            )}
            <p
              className={`text-xs font-semibold uppercase tracking-widest ${
                plan.highlight ? "text-white/70" : "text-muted-foreground"
              }`}
            >
              {plan.name}
            </p>
            <p
              className={`mt-1 text-sm ${
                plan.highlight ? "text-white/80" : "text-muted-foreground"
              }`}
            >
              {plan.tagline}
            </p>
            <div className="mt-6">
              <span className="text-4xl font-black">{plan.price}</span>
              <span
                className={`ml-2 text-sm ${
                  plan.highlight ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {plan.period}
              </span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span
                    className={`mt-0.5 text-base leading-none ${
                      plan.highlight ? "text-white" : "text-pink"
                    }`}
                  >
                    ✦
                  </span>
                  <span className={plan.highlight ? "text-white/90" : "text-foreground"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-8 block rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                plan.highlight
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-gradient-brand text-white glow-brand hover:opacity-90"
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        All projects include a complimentary creative brief session.{" "}
        <Link to="/contact" className="text-pink hover:underline">
          Contact us
        </Link>{" "}
        for volume discounts and retainer arrangements.
      </p>
    </Section>
  );
}
