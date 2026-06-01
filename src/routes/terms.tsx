import { PageShell } from "../components/page-shell";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing this website or engaging LightWarp Studio for services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.\n\nWe reserve the right to update these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.`,
  },
  {
    title: "Services",
    body: `LightWarp Studio provides 3D animation, CGI, VFX, motion graphics, product visualization, architectural visualization, character animation, and real-time production services.\n\nAll service engagements are governed by a separate project agreement or statement of work (SOW) signed by both parties. In the event of a conflict between these Terms and a signed SOW, the SOW shall prevail.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on this website — including but not limited to animations, renders, images, copy, and design — is the exclusive property of LightWarp Studio and is protected by U.S. and international copyright law.\n\nUpon full payment for a project, clients receive a license to use the final delivered assets as outlined in their project agreement. Source files and underlying intellectual property remain the property of LightWarp Studio unless explicitly transferred in writing.`,
  },
  {
    title: "Payment Terms",
    body: `Payment schedules, milestone structures, and rates are defined in the project agreement. Unless otherwise agreed:\n\n• A 50% deposit is due before production begins\n• The remaining balance is due upon final delivery\n• Invoices not paid within 30 days are subject to a 1.5% monthly late fee\n\nLightWarp Studio reserves the right to withhold final deliverables until all outstanding balances are settled.`,
  },
  {
    title: "Revisions and Approvals",
    body: `The number of revision rounds included in a project is specified in the project agreement. Additional revisions beyond the agreed scope will be billed at our standard hourly rate.\n\nClient approval at each production milestone (storyboard, style frames, rough cut) constitutes sign-off on that stage. Changes requested after sign-off may incur additional charges.`,
  },
  {
    title: "Confidentiality",
    body: `Both parties agree to keep confidential any proprietary or sensitive information shared during the course of a project. LightWarp Studio will not publicly share client project details, briefs, or deliverables without prior written consent, except as required by law or as part of our portfolio with explicit approval.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the fullest extent permitted by law, LightWarp Studio shall not be liable for any indirect, incidental, special, or consequential damages arising out of or relating to our services or this website.\n\nOur total liability for any claim arising from a project shall not exceed the total amount paid by the client for that specific project.`,
  },
  {
    title: "Warranties and Disclaimers",
    body: `LightWarp Studio warrants that all work will be original and will not knowingly infringe on the intellectual property of third parties. We do not warrant that our website will be error-free or uninterrupted.\n\nAll services are provided "as is" and "as available." We disclaim all warranties not expressly stated in the project agreement.`,
  },
  {
    title: "Governing Law",
    body: `These Terms and any disputes arising from our services shall be governed by the laws of the State of California, United States, without regard to conflict of law provisions. Any legal action shall be brought exclusively in the courts of San Francisco County, California.`,
  },
  {
    title: "Contact",
    body: `Questions about these Terms? Reach out:\n\nLightWarp Studio\nhello@lightwarp.com\nSan Francisco, CA`,
  },
];

export default function Terms() {
  return (
    <PageShell>
      <section className="relative mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand pulse-glow" />
            Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Terms & <span className="text-gradient">Conditions</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-sm">
            Effective date: January 1, 2025 &nbsp;·&nbsp; LightWarp Studio, San Francisco CA
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            These Terms and Conditions govern your use of the LightWarp Studio website and the
            engagement of our creative production services. Please read them carefully before
            proceeding.
          </p>
        </motion.div>

        <div className="mt-14 space-y-10">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <div className="mt-3 space-y-3">
                {s.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
