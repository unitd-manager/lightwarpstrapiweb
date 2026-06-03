import { useState } from "react";
import { motion } from "framer-motion";

const SORA: React.CSSProperties = { fontFamily: '"Sora", sans-serif' };

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
    <section
      className="mx-auto max-w-[1200px] px-[4%] pt-[10%] pb-[14%] lg:pt-[3%] lg:pb-[4%]"
      style={SORA}
    >
      <div className="flex flex-wrap gap-[35px] items-start lg:flex-nowrap">

        {/* Left column — contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[45.815%] flex flex-col gap-[25px]"
        >
          {/* Get in touch title + description */}
          <div style={{ paddingLeft: '5%' }}>
            <h3
              className="text-white font-semibold leading-tight lg:leading-[60px] tracking-[-1px]"
              style={{ fontSize: 'clamp(24px, 3.5vw, 45px)' }}
            >
              Get in touch
            </h3>
            <p
              className="mt-4 text-white font-light leading-[24px]"
              style={{ fontSize: '16px' }}
            >
              We are ready to do business with you and create stunning visuals and stories!
              <br />
              Send us a message through the form or contact us through the emails below to
              get started! To schedule an appointment/virtual meeting via Google Meet, click
              on the button below
            </p>
          </div>

          {/* Contact cards — black container with white-bordered boxes */}
          <div className="bg-black p-[2%] md:p-[6%] lg:p-[2%]">
            <div className="flex flex-col md:flex-row gap-[20px]">
              {/* New Business */}
              <div
                className="flex-1 flex flex-col items-center text-center rounded-[25px] border-2 border-white p-4 sm:p-6"
              >
                <img
                  src={locationIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-10 sm:h-14 sm:w-14 object-contain mb-4"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
                <p className="text-white font-normal leading-[30px] text-lg sm:text-[25px]">
                  New Business
                </p>
                <p
                  className="mt-2 text-white font-light leading-[24px] break-all"
                  style={{ fontSize: '16px' }}
                >
                  newbiz@lightwarp3d.com
                </p>
              </div>

              {/* Information */}
              <div
                className="flex-1 flex flex-col items-center text-center rounded-[25px] border-2 border-white p-4 sm:p-6"
              >
                <img
                  src={contactIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-10 sm:h-14 sm:w-14 object-contain mb-4"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
                <p className="text-white font-normal leading-[30px] text-lg sm:text-[25px]">
                  Information
                </p>
                <p
                  className="mt-2 text-white font-light leading-[24px] break-all"
                  style={{ fontSize: '16px' }}
                >
                  info@lightwarp3d.com
                </p>
              </div>
            </div>
          </div>

          {/* Schedule a Meeting button — centered per live site */}
          <div className="flex justify-center">
            <a
              href="https://calendar.app.google/zYHnxEYxui76S9tR6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-[10px] bg-[#F64418] hover:bg-[#d93a10] px-8 py-3 text-white transition-colors"
              style={{ fontSize: '16px', fontWeight: 400 }}
            >
              <GoogleGIcon />
              Schedule a Meeting
            </a>
          </div>
        </motion.div>

        {/* Right column — form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full lg:w-[55%] rounded-[25px] bg-[#6250DA] border-2 border-black p-[3%] max-md:pt-[10%] max-md:pb-[10%] max-md:px-[7%]"
        >
          <p
            className="text-white font-normal leading-[30px] mb-[32px]"
            style={{ fontSize: 'clamp(21px, 1.9vw, 25px)' }}
          >
            We would love to hear from you!
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="flex flex-col gap-[32px]"
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full rounded-lg bg-white px-4 py-3 outline-none border border-gray-200"
              style={{ fontSize: '16px', fontWeight: 300, color: '#58595B' }}
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-white px-4 py-3 outline-none border border-gray-200"
              style={{ fontSize: '16px', fontWeight: 300, color: '#58595B' }}
            />

            <div className="relative w-full">
              <select
                name="subject"
                className="w-full rounded-lg bg-white px-4 py-3 pr-10 outline-none border border-gray-200 appearance-none cursor-pointer"
                style={{ fontSize: '16px', fontWeight: 300, color: '#58595B' }}
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
              className="w-full rounded-lg bg-white px-4 py-3 outline-none border border-gray-200 resize-none"
              style={{ fontSize: '16px', fontWeight: 300, color: '#58595B' }}
            />

            <button
              type="submit"
              disabled={sent}
              className="w-full sm:w-auto rounded-lg bg-black hover:bg-black/80 transition-colors disabled:opacity-60"
              style={{ fontSize: '16px', color: '#FCFCFC', paddingBlock: '12px', paddingInline: '40px' }}
            >
              {sent ? "Sent ✓" : "Send"}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
