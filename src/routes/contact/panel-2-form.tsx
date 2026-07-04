import { useState } from "react";
import { motion } from "framer-motion";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import locationIconFallback from "../../assets/images/cms/location_info.svg";
import contactIconFallback from "../../assets/images/cms/contact_info.svg";
import { getStrapiMedia } from "../../lib/strapi";

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
      <path fill="#FFFFFF" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#FFFFFF" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FFFFFF" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#FFFFFF" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function FieldError(props: { msg: string }) {
  const msg = props.msg;
  return (
    <div className="flex items-center gap-1" style={{ color: "#FF4D4D", fontSize: "13px", fontWeight: 400, marginTop: "-20px" }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
      {msg}
    </div>
  );
}

function isValidEmail(raw: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(raw.trim());
}

function RichDescription(props: { content: any }) {
  const content = props.content;

  // Static fallback: plain string with \n line breaks
  if (typeof content === "string") {
    const lines = content.split("\n");
    return (
      <p className="text-white" style={{ fontSize: "16px", fontWeight: 300, lineHeight: "24px" }}>
        {lines.map(function (line, i) {
          return (
            <span key={i}>
              {line}
              {i < lines.length - 1 ? <br /> : null}
            </span>
          );
        })}
      </p>
    );
  }

  // Strapi Blocks format: array of rich-text nodes
  return (
    <div className="text-white" style={{ fontSize: "16px", fontWeight: 300, lineHeight: "24px" }}>
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => <p style={{ marginBottom: "12px" }}>{children}</p>,
        }}
      />
    </div>
  );
}

const STATIC_CONTACT = {
  sub_heading: "Get in touch",
  description:
    "We are ready to do business with you and create stunning visuals and stories!\nSend us a message through the form or contact us through the emails below to get started! To schedule an appointment/virtual meeting via Google Meet, click on the button below",
  Contact_card1: "New Business",
  Contact_card2: "Information",
  Contact_card3: "newbiz@lightwarp3d.com",
  Contact_card4: "info@lightwarp3d.com",
  CTA_button: "Schedule a Meeting",
  CTA_link: "https://calendar.app.google/zYHnxEYxui76S9tR6",
  heading: "We would love to hear from you!",
  send_btn: "Send",
};

export function ContactPanelForm(props: { data?: any }) {
  const data = props.data;

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const subHeading = (data && data.sub_heading) || STATIC_CONTACT.sub_heading;
  const description = (data && data.description) || STATIC_CONTACT.description;
  const card1Label = (data && data.Contact_card1) || STATIC_CONTACT.Contact_card1;
  const card2Label = (data && data.Contact_card2) || STATIC_CONTACT.Contact_card2;
  const card1Email = (data && data.Contact_card3) || STATIC_CONTACT.Contact_card3;
  const card2Email = (data && data.Contact_card4) || STATIC_CONTACT.Contact_card4;
  const ctaLabel = (data && data.CTA_button) || STATIC_CONTACT.CTA_button;
  const ctaLink = (data && data.CTA_link) || STATIC_CONTACT.CTA_link;
  const formHeading = (data && data.heading) || STATIC_CONTACT.heading;
  const sendLabel = (data && data.send_btn) || STATIC_CONTACT.send_btn;

  const businessImage = getStrapiMedia(data && data.business_image) || locationIconFallback;
  const informationImage = getStrapiMedia(data && data.information_image) || contactIconFallback;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    let hasError = false;

    if (!email) {
      setEmailError("Email is required.");
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    }

    if (!message) {
      setMessageError("Message is required.");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setSending(true);
    setError(null);
    setEmailError("");
    setMessageError("");

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email, subject: subject, message: message, website: website }),
    })
      .then(function (res) {
        if (!res.ok) {
          return res.text().then(function (text) {
            let friendly = "Failed to send message.";
            try {
              const parsed = JSON.parse(text);
              if (parsed && parsed.error) {
                friendly = parsed.error;
              }
            } catch (e) {
              if (text) {
                friendly = text;
              }
            }
            setError(friendly);
          });
        }
        form.reset();
        setSent(true);
      })
      .catch(function () {
        setError("Failed to send message.");
      })
      .finally(function () {
        setSending(false);
      });
  }

  return (
    <section
      className="w-full flex flex-row flex-wrap items-stretch contact-outer-row"
      style={{ fontFamily: '"Sora", sans-serif', padding: "3% 4% 4% 4%", gap: "30px" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col contact-left-col"
        style={{ width: "44%", gap: "25px", justifyContent: "flex-start" }}
      >
        <div>
          <h3
            className="text-white contact-form-heading"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: "45px",
              fontWeight: 600,
              lineHeight: "60px",
              letterSpacing: "-1px",
              marginBottom: "15px",
            }}
          >
            {subHeading}
          </h3>

         <RichDescription content={description} />
        </div>

        <div className="w-full flex flex-col" style={{ gap: "0px" }}>
          <div
            className="w-full flex flex-row justify-between contact-cards-bg"
            style={{ backgroundColor: "#000000", padding: "2%", gap: "20px" }}
          >
            <div className="flex-1">
              <div
                className="flex flex-col items-center text-center"
                style={{ padding: "5%", border: "2px solid #FFFFFF", borderRadius: "25px" }}
              >
                <img
                  src={businessImage}
                  alt=""
                  aria-hidden="true"
                  style={{ width: "112px", height: "auto", marginBottom: "15px" }}
                  onError={function (e) {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <p
                  className="text-white contact-card-label"
                  style={{ fontFamily: '"Sora", sans-serif', fontSize: "25px", fontWeight: 400, lineHeight: "30px" }}
                >
                  {card1Label}
                </p>
                <p className="text-white mt-2 break-all" style={{ fontSize: "16px", fontWeight: 300, lineHeight: "24px" }}>
                  {card1Email}
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div
                className="flex flex-col items-center text-center"
                style={{ padding: "5%", border: "2px solid #FFFFFF", borderRadius: "25px" }}
              >
                <img
                  src={informationImage}
                  alt=""
                  aria-hidden="true"
                  style={{ width: "112px", height: "auto", marginBottom: "15px" }}
                  onError={function (e) {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <p
                  className="text-white contact-card-label"
                  style={{ fontFamily: '"Sora", sans-serif', fontSize: "25px", fontWeight: 400, lineHeight: "30px" }}
                >
                  {card2Label}
                </p>
                <p className="text-white mt-2 break-all" style={{ fontSize: "16px", fontWeight: 300, lineHeight: "24px" }}>
                  {card2Email}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "5px", alignSelf: "center" }}>
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-black transition-colors"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20px",
              backgroundColor: "#F64418",
              borderRadius: "10px",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "44px",
              paddingRight: "44px",
            }}
          >
            <GoogleGIcon />
            {ctaLabel}
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col contact-right-col contact-form-card"
        style={{
          flex: "1 1 0",
          gap: "40px",
          padding: "3%",
          border: "2px solid #000000",
          borderRadius: "25px",
          backgroundColor: "#6250DA",
        }}
      >
        <p
          className="text-white"
          style={{ fontFamily: '"Sora", sans-serif', fontSize: "25px", fontWeight: 400, lineHeight: "30px" }}
        >
          {formHeading}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: "32px" }}>
          <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" />

          <input
            name="name"
            type="text"
            placeholder="Name"
            className="w-full outline-none"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              color: "#58595B",
              backgroundColor: "#ffffff",
              border: "1px solid #FFFFFF",
              borderRadius: "4px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "14px",
              paddingRight: "14px",
            }}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            inputMode="email"
            onChange={function () {
              setEmailError("");
              setError(null);
            }}
            className="w-full outline-none"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              color: "#58595B",
              backgroundColor: "#ffffff",
              border: emailError ? "1px solid #FF4D4D" : "1px solid #FFFFFF",
              borderRadius: "4px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "14px",
              paddingRight: "14px",
            }}
          />

          {emailError ? <FieldError msg={emailError} /> : null}

          <div className="relative w-full">
            <select
              name="subject"
              className="w-full outline-none appearance-none cursor-pointer"
              style={{
                fontFamily: '"Sora", sans-serif',
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "24px",
                color: "#58595B",
                backgroundColor: "#ffffff",
                border: "1px solid #FFFFFF",
                borderRadius: "4px",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "14px",
                paddingRight: "40px",
              }}
            >
              <option value="">Subject</option>
              {subjects.map(function (s) {
                return (
                  <option key={s} value={s}>
                    {s}
                  </option>
                );
              })}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            onChange={function () {
              setMessageError("");
              setError(null);
            }}
            className="w-full outline-none resize-none"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              color: "#58595B",
              backgroundColor: "#ffffff",
              border: messageError ? "1px solid #FF4D4D" : "1px solid #FFFFFF",
              borderRadius: "4px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "14px",
              paddingRight: "14px",
            }}
          />

          {messageError ? <FieldError msg={messageError} /> : null}

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={sent || sending}
              className="inline-flex items-center justify-center contact-send-btn transition-colors hover:bg-white hover:text-black disabled:opacity-60"
              style={{
                fontFamily: '"Sora", sans-serif',
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "#FCFCFC",
                backgroundColor: "#000000",
                borderRadius: "4px",
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingLeft: "60px",
                paddingRight: "60px",
                alignSelf: "flex-start",
              }}
            >
              {sending ? "Sending..." : sendLabel}
            </button>

            {sent ? (
              <div
                className="flex items-center gap-2"
                style={{ fontFamily: '"Sora", sans-serif', fontSize: "14px", fontWeight: 400, color: "#FFFFFF" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Your submission was successful.
              </div>
            ) : null}

            {error ? (
              <div style={{ fontFamily: '"Sora", sans-serif', fontSize: "14px", fontWeight: 400, color: "#FFFFFF" }}>
                {error}
              </div>
            ) : null}
          </div>
        </form>
      </motion.div>
    </section>
  );
}