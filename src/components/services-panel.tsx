import { motion } from "framer-motion";
import { TransitionLink } from "./page-transition-overlay";
import "./services-panel.css";

const FALLBACK_BG_COLORS = ["#3420c4", "#b1196fe5", "#1a6798", "#4f10aa"];

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

function flattenGridLayoutToServices(data: any) {
  const items = (data?.grid_items || []).filter((gridItem: any) => gridItem?.publish !== false);
  const cards: { title: string; description: string; href: string; label: string; linkPublished: boolean }[] = [];

  items.forEach((gridItem: any) => {
    const list = gridItem?.icon_and_text_boxes?.list || [];
    const publishedList = list.filter((link: any) => link?.publish !== false);
    publishedList.forEach((link: any) => {
      const linkPublished = link.link?.Publish !== false;
      cards.push({
        title: link.title || "",
        description: (link.description || "").replace(/<[^>]+>/g, ""),
        href: linkPublished ? (link.link?.URL || "#") : "#",
        label: linkPublished ? link.link?.Label || "" : "",
        linkPublished,
      });
    });
  });

  return cards;
}

export function ServicesPanels({ data }: { data?: any }) {
  if (data?.publish === false) return null;

  const mainTitle = data?.main_title;

  const flattened = data ? flattenGridLayoutToServices(data) : [];
  const services = flattened.map((s, i) => ({
    ...s,
    bgSolid: FALLBACK_BG_COLORS[i % FALLBACK_BG_COLORS.length],
  }));

  if (!mainTitle && services.length === 0) return null;

  const normalizedTitles = services.map((s) => normalizeServiceTitle(s.title));
  const shouldPadShortTitlesToTwoLines = normalizedTitles.some(
    (t) => t.includes("\n") || t.length >= LONG_TITLE_MIN_CHARS,
  );

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Title */}
        {mainTitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="services-title-wrapper"
          >
            <h2 className="services-title">{mainTitle}</h2>
          </motion.div>
        )}

        {/* Services Grid */}
        {services.length > 0 && (
          <div className="services-grid e-con-boxed e-grid">
            {services.map((service, i) => {
              const CardWrapper = service.linkPublished ? TransitionLink : "div";
              const cardProps = service.linkPublished ? { to: service.href } : {};

              return (
                <motion.div
                  key={`${service.title}-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="service-card-wrapper"
                >
                  <CardWrapper
                    {...cardProps}
                    className="service-card e-con-full e-flex e-con animated-fast fadeInUp"
                    style={
                      service.bgSolid
                        ? { backgroundColor: service.bgSolid }
                        : undefined
                    }
                  >
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

                    {/* Learn More Container — hidden if link is unpublished */}
                    {service.linkPublished && (
                      <div className="e-con-full e-flex e-con service-learn-container">
                        <div className="elementor-widget elementor-widget-text-editor">
                          <h6 className="service-learn-text">{service.label}</h6>
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
                    )}
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}