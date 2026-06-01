import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../../components/section";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects range from 2 to 8 weeks depending on complexity. A 30-second product spot typically takes 2–3 weeks; a full CGI campaign or broadcast package can take 6–10 weeks. We share a detailed timeline during the discovery call.",
  },
  {
    q: "What do you need from us to get started?",
    a: "A creative brief or rough concept is all we need to begin. We'll walk you through our onboarding process, gather brand assets, and align on vision during the kickoff session. The clearer the brief, the faster we move.",
  },
  {
    q: "Do you handle scriptwriting and storyboarding?",
    a: "Yes. Our creative team offers end-to-end production — from script and storyboard to final delivery. You can hand us a concept and leave the rest to us, or collaborate as closely as you'd like at every stage.",
  },
  {
    q: "What file formats do you deliver?",
    a: "We deliver in any format you need: MP4, MOV, ProRes, WebM, and more. Source files (Blender, C4D, After Effects) are available on Studio and Enterprise plans.",
  },
  {
    q: "Can you work with our existing brand guidelines?",
    a: "Absolutely. We adapt to your brand identity — color systems, typography, tone, and visual language. We've integrated seamlessly with in-house teams at Fortune 500 companies and boutique agencies alike.",
  },
  {
    q: "Do you offer retainer or long-term partnerships?",
    a: "Yes. Many of our clients work with us on ongoing retainer agreements for consistent content output. Reach out and we'll put together a custom arrangement that fits your production cadence.",
  },
];

export function ServicesPanelFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section
      eyebrow="FAQ"
      title={
        <>
          Questions, <span className="text-gradient">Answered</span>
        </>
      }
      subtitle="Everything you need to know before we start making something extraordinary together."
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="overflow-hidden rounded-2xl glass border-gradient"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="pr-4 text-sm font-semibold sm:text-base">{faq.q}</span>
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="shrink-0 text-xl text-pink"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
