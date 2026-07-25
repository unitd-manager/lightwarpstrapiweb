import { motion } from "framer-motion";
import { getStrapiMedia } from "../../lib/strapi";

function stripHtml(value: string | null | undefined) {
  if (!value) return "";
  return value.replace(/<[^>]+>/g, "");
}

export function ServicesPanelProcess({ data }: { data?: any }) {
  if (!data) return null;
  if (data.publish === false) return null;

  const heading = data.title || "";
  const body = stripHtml(data.description);

  const logos =
    data?.logos
      ?.filter((entry: any) => entry?.publish !== false)
      .map((entry: any) => {
        const src = getStrapiMedia(entry.logo_image);
        if (!src) return null;
        return { src, alt: entry.logo_name || entry.logo_image?.alternativeText || entry.logo_image?.name || "Logo" };
      })
      .filter(Boolean) || [];

  return (
    <section
      style={{
        fontFamily: '"Sora", sans-serif',
        padding: "1% 4% 4% 4%",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="services-process-heading"
        style={{
          fontFamily: '"Sora", sans-serif',
          fontSize: "45px",
          fontWeight: 600,
          lineHeight: "60px",
          letterSpacing: "-1px",
          color: "#FFFFFF",
          marginBottom: "3%",
        }}
      >
        {heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="services-process-body"
        style={{
          fontFamily: '"Sora", sans-serif',
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "24px",
          color: "#FFFFFF",
        }}
      >
        {body}
      </motion.p>

      {logos.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="services-logo-row"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "20px",
            width: "100%",
          }}
        >
          {logos.map((logo: any) => (
            <div
              key={logo.alt}
              className="services-logo-cell"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "35px 55px",
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="services-logo-img"
                style={{
                  height: "80px",
                  width: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}