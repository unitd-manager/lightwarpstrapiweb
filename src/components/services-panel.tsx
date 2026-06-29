import { motion } from "framer-motion";
import { TransitionLink } from "./page-transition-overlay";
import "./services-panel.css";

const services = [
  {
    title: "3D Commercials & Cinematics",
    description:
      "Creative, Impactful 3D animation. Built to engage, convert, and perform",
    href: "/services/#ads",
    bgSolid: "#3420c4",
  },
  {
    title: "3D Asset Services",
    description:
      "Production-ready 3D assets built for games, film, and real-time worlds.",
    href: "/services/#assets",
    bgSolid: "#b1196fe5",
  },
  {
    title: "Original IP & Content",
    description:
      "Iconic characters and immersive stories that audiences remember.",
    href: "/services/#ip",
    bgSolid: "#1a6798",
  },
  {
    title: "Creative & Technical Consulting",
    description:
      "From concept to scale—real-time production done right.",
    href: "/services/#consulting",
    bgSolid: "#4f10aa",
  },
];

const LONG_TITLE_MIN_CHARS = 24;

function normalizeServiceTitle(rawTitle: string) {
  return rawTitle
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/\\n/g, "\n")
    .replace(/\/n/g, "\n")
    .trim();
}

function renderServiceTitle(rawTitle: string, padShortTitlesToTwoLines: boolean) {
  const normalizedTitle = normalizeServiceTitle(rawTitle);

  if (normalizedTitle.includes("\n")) {
    const parts = normalizedTitle.split("\n").filter(Boolean);
    return (
      <>
        {parts.map((part, idx) => (
          <span key={`${part}-${idx}`}>
            {part}
            {idx < parts.length - 1 ? <br /> : null}
          </span>
        ))}
      </>
    );
  }

  const amp = " & ";
  if (normalizedTitle.includes(amp) && normalizedTitle.length >= LONG_TITLE_MIN_CHARS) {
    const [first, ...rest] = normalizedTitle.split(amp);
    const second = rest.join(amp);
    return (
      <>
        {first} &<br />
        {second}
      </>
    );
  }

  if (padShortTitlesToTwoLines) {
    return (
      <>
        {normalizedTitle}
        <br />
        <span aria-hidden="true">&nbsp;</span>
      </>
    );
  }

  return normalizedTitle;
}

export function ServicesPanels() {
  const normalizedTitles = services.map((s) => normalizeServiceTitle(s.title));
  const shouldPadShortTitlesToTwoLines = normalizedTitles.some(
    (t) => t.includes("\n") || t.length >= LONG_TITLE_MIN_CHARS,
  );

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-title-wrapper"
        >
          <h2 className="services-title">Our Services</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid e-con-boxed e-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="service-card-wrapper"
            >



              <TransitionLink
  to={service.href}
  className="service-card e-con-full e-flex e-con animated-fast fadeInUp"
  style={
    service.bgSolid
      ? { backgroundColor: service.bgSolid }
      : undefined
  }
>
              {/*<TransitionLink
                to={service.href}
                className={`service-card e-con-full e-flex e-con ${service.bgColor ? `bg-gradient-to-br ${service.bgColor}` : ""} animated-fast fadeInUp`}
                style={service.bgSolid ? { backgroundColor: service.bgSolid } : undefined}
              >*/}
                {/* Title Container */}
                <div className="e-con-full e-flex e-con service-title-container">
                  <div className="elementor-widget elementor-widget-heading">
                    <h2 className="service-title">
                      {renderServiceTitle(service.title, shouldPadShortTitlesToTwoLines)}
                    </h2>
                  </div>
                </div>

                {/* Description Container */}
                <div className="e-con-full e-flex e-con service-description-container">
                  <div className="elementor-widget elementor-widget-text-editor">
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>

                {/* Learn More Container */}
                <div className="e-con-full e-flex e-con service-learn-container">
                  <div className="elementor-widget elementor-widget-text-editor">
                    <h6 className="service-learn-text">Learn More</h6>
                  </div>
                  <div className="elementor-widget elementor-widget-icon service-icon-widget">
                    <div className="elementor-icon-wrapper">
                      <div className="elementor-icon">
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-arrow-circle-right"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </TransitionLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
