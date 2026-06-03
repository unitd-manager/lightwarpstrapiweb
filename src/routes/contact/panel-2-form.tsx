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
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
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
    /*
     * Outer flex row — elementor-element-431d568a
     *   Desktop:  flex-direction:row; padding:3% 4% 4% 4%; gap:0px; align-items:stretch;
     *   Tablet:   padding:10% 4% 14% 4%; gap:35px; flex-wrap:wrap; justify-content:center;
     *   Mobile:   margin-top:150px; padding:0% 6%; gap:80px;
     *
     * (All responsive overrides via .contact-outer-row CSS class)
     */
    <section
      className="w-full flex flex-row flex-wrap items-stretch contact-outer-row"
      style={{
        fontFamily: '"Sora", sans-serif',
        padding: '3% 4% 4% 4%',
        gap: '30px',
      }}
    >

      {/*
       * LEFT COLUMN — elementor-element-2ec5d63c
       *   Desktop: width 45.815%; flex-direction:column; gap:25px; justify-content:flex-start;
       *   Tablet:  width 100%; gap:25px; align-items:center;
       *   Mobile:  width 100%; gap:90px;
       */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col contact-left-col"
        style={{
          width: '44%',
          gap: '25px',
          justifyContent: 'flex-start',
        }}
      >

        {/*
         * "Get in touch" heading + description — elementor-element-6b2b9b08
         *   image-box widget: text-align start, title margin-bottom 15px
         *   NO padding-left — heading starts at left column edge (original CSS has no indent here)
         */}
        <div>
          {/*
           * "Get in touch" heading — primary typography:
           *   Sora, 45px, 600, 60px, -1px
           *   Responsive: tablet 35px / mobile 24px (via .contact-form-heading CSS class)
           */}
          <h3
            className="text-white contact-form-heading"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '45px',
              fontWeight: 600,
              lineHeight: '60px',
              letterSpacing: '-1px',
              marginBottom: '15px',
            }}
          >
            Get in touch
          </h3>
          {/* Description — text typography: Sora, 16px, 300, 24px */}
          <p
            className="text-white"
            style={{ fontSize: '16px', fontWeight: 300, lineHeight: '24px' }}
          >
            We are ready to do business with you and create stunning visuals and stories!
            <br />
            Send us a message through the form or contact us through the emails below to
            get started! To schedule an appointment/virtual meeting via Google Meet, click
            on the button below
          </p>
        </div>

        {/*
         * Contact cards container — elementor-element-3cc1a6d5 (flex column, gap 0)
         *   Inner black row — elementor-element-3324dede:
         *     bg:#000000; padding:2%; gap:20px; justify-content:space-between;
         *     Tablet: padding:6%;
         *     Mobile: padding:0 30px 30px 30px;
         */}
        <div
          className="w-full flex flex-col"
          style={{ gap: '0px' }}
        >
          <div
            className="w-full flex flex-row justify-between contact-cards-bg"
            style={{
              backgroundColor: '#000000',
              padding: '2%',
              gap: '20px',
            }}
          >
            {/* New Business card wrapper — elementor-element-f03efce (50% width) */}
            <div className="flex-1">
              {/*
               * New Business card — elementor-element-4afe4da9
               *   padding:5%; border:2px solid #FFFFFF; border-radius:25px;
               *   image width: 112px
               */}
              <div
                className="flex flex-col items-center text-center"
                style={{
                  padding: '5%',
                  border: '2px solid #FFFFFF',
                  borderRadius: '25px',
                }}
              >
                <img
                  src={locationIcon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: '112px', height: 'auto', marginBottom: '15px' }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
                {/* Title — typography-31148ca: Sora, 25px, 400, 30px */}
                <p
                  className="text-white contact-card-label"
                  style={{
                    fontFamily: '"Sora", sans-serif',
                    fontSize: '25px',
                    fontWeight: 400,
                    lineHeight: '30px',
                  }}
                >
                  New Business
                </p>
                {/* Email — text typography: 16px, 300, 24px */}
                <p
                  className="text-white mt-2 break-all"
                  style={{ fontSize: '16px', fontWeight: 300, lineHeight: '24px' }}
                >
                  newbiz@lightwarp3d.com
                </p>
              </div>
            </div>

            {/* Information card wrapper — elementor-element-0877fa5 (50% width) */}
            <div className="flex-1">
              {/*
               * Information card — elementor-element-58cbd48b
               *   padding:5%; border:2px solid #FFFFFF; border-radius:25px;
               *   image width: 112px
               */}
              <div
                className="flex flex-col items-center text-center"
                style={{
                  padding: '5%',
                  border: '2px solid #FFFFFF',
                  borderRadius: '25px',
                }}
              >
                <img
                  src={contactIcon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: '112px', height: 'auto', marginBottom: '15px' }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
                {/* Title — typography-31148ca: Sora, 25px, 400, 30px */}
                <p
                  className="text-white contact-card-label"
                  style={{
                    fontFamily: '"Sora", sans-serif',
                    fontSize: '25px',
                    fontWeight: 400,
                    lineHeight: '30px',
                  }}
                >
                  Information
                </p>
                {/* Email — text typography: 16px, 300, 24px */}
                <p
                  className="text-white mt-2 break-all"
                  style={{ fontSize: '16px', fontWeight: 300, lineHeight: '24px' }}
                >
                  info@lightwarp3d.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*
         * Schedule button row — elementor-element-17e3b8ff / 0dbad69 / f7da458
         *   padding-left: 5%; gap: 50px (single child so gap doesn't matter visually)
         *   Button: bg #F64418 (--e-global-color-c1efd99); border-radius: 10px;
         *   accent typography: Sora, 16px, normal/400, 20px line-height
         *   padding-block: 12px; padding-inline: 40px (from accent button defaults)
         */}
        <div style={{ marginTop: '5px', alignSelf: 'center' }}>
          {/*
           * Schedule a Meeting button — elementor-element-f7da458
           *   bg: #F64418 (c1efd99); color: #FFFFFF; border-radius: 10px;
           *   hover color: #000000 (secondary); NO icon — plain text only
           *   accent typography: Sora, 16px, 400, 20px line-height
           */}
          <a
            href="https://calendar.app.google/zYHnxEYxui76S9tR6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-black transition-colors"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '20px',
              backgroundColor: '#F64418',
              borderRadius: '10px',
              paddingTop: '20px',
              paddingBottom: '20px',
              paddingLeft: '44px',
              paddingRight: '44px',
            }}
          >
            <GoogleGIcon />
            Schedule a Meeting
          </a>
        </div>
      </motion.div>

      {/*
       * RIGHT COLUMN — Form card: elementor-element-7f84906a
       *   Desktop: width 55%; flex-direction:column; gap:40px; padding:3%;
       *            border:2px solid #000000; border-radius:25px; bg:#6250DA;
       *   Mobile:  padding:10% 7%;
       *
       * Form widget — elementor-element-58dc0fdf:
       *   --ehp-form-row-gap: 32px;
       *   --ehp-form-field-border-width: 1px; --ehp-form-field-border-color: #FFFFFF;
       *   --ehp-form-field-bg-color: #ffffff; --ehp-form-field-text-color: #58595B;
       *   --ehp-form-button-padding-block: 12px; --ehp-form-button-padding-inline: 40px;
       *   Send button bg: --e-global-color-78ad7a8 = #000000; hover bg: #FFFFFF;
       *   Send button text: #FCFCFC; hover text: #000000;
       */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col contact-right-col contact-form-card"
        style={{
          flex: '1 1 0',
          gap: '40px',
          padding: '3%',
          border: '2px solid #000000',
          borderRadius: '25px',
          backgroundColor: '#6250DA',
        }}
      >
        {/* "We would love to hear from you!" — typography-31148ca: 25px/400/30px */}
        <p
          className="text-white"
          style={{
            fontFamily: '"Sora", sans-serif',
            fontSize: '25px',
            fontWeight: 400,
            lineHeight: '30px',
          }}
        >
          We would love to hear from you!
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="flex flex-col"
          style={{ gap: '32px' }}
        >
          {/* Name field */}
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="w-full outline-none"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: '24px',
              color: '#58595B',
              backgroundColor: '#ffffff',
              border: '1px solid #FFFFFF',
              borderRadius: '4px',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '14px',
              paddingRight: '14px',
            }}
          />

          {/* Email field */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full outline-none"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: '24px',
              color: '#58595B',
              backgroundColor: '#ffffff',
              border: '1px solid #FFFFFF',
              borderRadius: '4px',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '14px',
              paddingRight: '14px',
            }}
          />

          {/* Subject dropdown */}
          <div className="relative w-full">
            <select
              name="subject"
              className="w-full outline-none appearance-none cursor-pointer"
              style={{
                fontFamily: '"Sora", sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: '24px',
                color: '#58595B',
                backgroundColor: '#ffffff',
                border: '1px solid #FFFFFF',
                borderRadius: '4px',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '14px',
                paddingRight: '40px',
              }}
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

          {/* Message textarea */}
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            className="w-full outline-none resize-none"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: '24px',
              color: '#58595B',
              backgroundColor: '#ffffff',
              border: '1px solid #FFFFFF',
              borderRadius: '4px',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '14px',
              paddingRight: '14px',
            }}
          />

          {/*
           * Send button — elementor-element-58dc0fdf
           *   bg: --e-global-color-78ad7a8 = #000000
           *   hover bg: --e-global-color-primary = #FFFFFF
           *   text: #FCFCFC; hover text: --e-global-color-78ad7a8 = #000000
           *   padding-block: 12px; padding-inline: 40px
           *   accent typography: Sora, 16px, 400, 20px
           */}
          {/*
           * Send button — elementor-element-58dc0fdf form button
           *   bg: #000000 (78ad7a8); text: #FCFCFC;
           *   border: 2px solid #FFFFFF
           *   hover bg: #FFFFFF; hover text: #000000
           *   padding-block: 12px; padding-inline: 40px
           *   accent typography: Sora, 16px, 400, 20px
           *   width: full (spans full form content width)
           */}
          <button
            type="submit"
            disabled={sent}
            className="inline-flex items-center justify-center contact-send-btn transition-colors hover:bg-white hover:text-black disabled:opacity-60"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '20px',
              color: '#FCFCFC',
              backgroundColor: '#000000',
              borderRadius: '4px',
              paddingTop: '12px',
              paddingBottom: '12px',
              paddingLeft: '60px',
              paddingRight: '60px',
              alignSelf: 'flex-start',
            }}
          >
            {sent ? "Sent ✓" : "Send"}
          </button>
        </form>
      </motion.div>

    </section>
  );
}
