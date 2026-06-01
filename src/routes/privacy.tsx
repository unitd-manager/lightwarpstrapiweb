import { PageShell } from "../components/page-shell";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    body: `We collect information you provide directly to us, such as when you fill out our contact form, request a quote, or communicate with us by email. This includes your name, email address, phone number, company name, and project details.\n\nWe also automatically collect certain technical data when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. This data is collected via standard web analytics tools and cookies.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use the information we collect to:\n\n• Respond to your inquiries and deliver the services you request\n• Send project updates, invoices, and production communications\n• Improve and optimize our website experience\n• Comply with legal obligations and protect our rights\n\nWe do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    title: "Cookies",
    body: `Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You may disable cookies through your browser settings; however, some features of the site may not function properly without them.\n\nWe use first-party cookies for analytics and session management only. We do not use third-party advertising cookies.`,
  },
  {
    title: "Data Retention",
    body: `We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Client project files and communications are retained for a minimum of three years following project completion.`,
  },
  {
    title: "Third-Party Services",
    body: `Our website may embed third-party content such as YouTube and Vimeo videos. These services may collect data according to their own privacy policies. We are not responsible for the data practices of third-party services linked to or embedded in our site.\n\nWe use industry-standard analytics tools (such as Google Analytics) to understand website usage. These tools collect anonymized, aggregated data.`,
  },
  {
    title: "Your Rights",
    body: `Depending on your location, you may have the right to:\n\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data\n• Opt out of marketing communications at any time\n\nTo exercise any of these rights, contact us at hello@lightwarp.com. We will respond within 30 days.`,
  },
  {
    title: "Security",
    body: `We take reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date. Continued use of our website after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "Contact",
    body: `If you have questions about this Privacy Policy or how we handle your data, please contact us:\n\nLightWarp Studio\nhello@lightwarp.com\nSan Francisco, CA`,
  },
];

export default function Privacy() {
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
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-sm">
            Effective date: January 1, 2025 &nbsp;·&nbsp; LightWarp Studio, San Francisco CA
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            LightWarp Studio ("we," "our," or "us") is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard information when you visit
            our website or engage our services.
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
