import { useState } from "react";
import { motion } from "framer-motion";

const locationIcon = "https://lightwarp3d.com/wp-content/uploads/2026/01/location_info.svg";
const contactIcon  = "https://lightwarp3d.com/wp-content/uploads/2026/01/contact_info.svg";

const subjects = [
  "General Inquiry",
  "Services Request",
  "Request a Quote",
  "Partnership Request",
  "Employment Interest",
];

function GoogleGIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export function ContactPanelForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

        {/* Left column — contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[36px] font-bold leading-tight">Get in touch</h3>
          <p className="mt-4 text-[14px] text-muted-foreground leading-relaxed">
            We are ready to do business with you and create stunning visuals and stories!
            <br />
            Send us a message through the form or contact us through the emails below to
            get started! To schedule an appointment/virtual meeting via Google Meet, click
            on the button below
          </p>

          {/* Contact cards — vertical layout, centered content */}
          <div className="mt-8 grid grid-cols-2 gap-5">
            {/* New Business */}
            <div className="flex flex-col items-center text-center rounded-2xl border border-white/20 bg-white/[0.03] p-6">
              <img
                src={locationIcon}
                alt=""
                aria-hidden="true"
                className="h-14 w-14 object-contain mb-4"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <p className="text-[18px] font-bold text-white">New Business</p>
              <p className="mt-2 text-[13px] text-muted-foreground break-all">
                newbiz@lightwarp3d.com
              </p>
            </div>

            {/* Information */}
            <div className="flex flex-col items-center text-center rounded-2xl border border-white/20 bg-white/[0.03] p-6">
              <img
                src={contactIcon}
                alt=""
                aria-hidden="true"
                className="h-14 w-14 object-contain mb-4"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <p className="text-[18px] font-bold text-white">Information</p>
              <p className="mt-2 text-[13px] text-muted-foreground break-all">
                info@lightwarp3d.com
              </p>
            </div>
          </div>

          {/* Schedule a Meeting button — centered */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://calendar.app.google/zYHnxEYxui76S9tR6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-md bg-[#e25830] hover:bg-[#c94e28] px-8 py-3 text-[14px] font-semibold text-white transition-colors"
            >
              <GoogleGIcon />
              Schedule a Meeting
            </a>
          </div>
        </motion.div>

        {/* Right column — purple form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl bg-[#6b4fd8] p-8 sm:p-10"
        >
          <p className="text-[16px] font-medium text-white mb-6">
            We would love to hear from you!
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="flex flex-col gap-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full rounded-lg bg-white px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none border border-gray-200"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-white px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none border border-gray-200"
            />

            <div className="relative w-full">
              <select
                name="subject"
                className="w-full rounded-lg bg-white px-4 py-3 pr-10 text-[14px] text-gray-500 outline-none border border-gray-200 appearance-none cursor-pointer"
              >
                <option value="">Subject</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              className="w-full rounded-lg bg-white px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none border border-gray-200 resize-none"
            />

            <button
              type="submit"
              disabled={sent}
              className="w-[33%] rounded-lg bg-black hover:bg-black/80 px-4 py-3 text-[14px] font-semibold text-white transition-colors disabled:opacity-60"
            >
              {sent ? "Sent ✓" : "Send"}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
