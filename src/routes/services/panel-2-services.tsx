import { motion } from "framer-motion";
import { useState } from "react";

function hexFromBgColor(bgColor: string | null | undefined) {
  if (!bgColor) return "#341FBE";
  const stripped = bgColor.replace(/^color/i, "").trim();
  return stripped.startsWith("#") ? stripped : `#${stripped}`;
}

function buildServicesFromGridData(data: any) {
  const gridItems = data?.grid_items || [];
  return gridItems.map((item: any) => {
    const checklist =
      item?.icon_and_text_boxes?.list?.map((entry: any) => entry.title).filter(Boolean) || [];

    return {
      title: item.title || "",
      hex: hexFromBgColor(item.bg_color),
      description: (
        <>
          {item.description}
          {item.full_description && (
            <>
              <br />
              <br />
              {item.full_description}
            </>
          )}
        </>
      ),
      subItems: checklist,
    };
  });
}

function ServiceCard({ service }: { service: { title: string; hex: string; description: React.ReactNode; subItems: string[] } }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-white shadow-[0_40px_80px_rgba(0,0,0,0.25)] flex flex-col"
      style={{ backgroundColor: service.hex, borderRadius: "49px", padding: "5%", alignItems: "center", textAlign: "center" }}
    >
      <h3
        className="font-semibold mb-6"
        style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 600, fontSize: '34px', lineHeight: '1.2em' }}
      >{service.title}</h3>

      <div className="relative" style={{ width: "100%" }}>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-[600px]" : "max-h-[7.5rem]"
          }`}
          style={{ fontFamily: '"Sora", sans-serif', fontSize: "16px", fontWeight: 300, lineHeight: "24px", color: "rgba(255,255,255,0.90)" }}
        >
          {service.description}
        </div>

        {!expanded && (
          <div
            className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
            style={{ background: `linear-gradient(to top, ${service.hex} 0%, transparent 100%)` }}
          />
        )}
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 text-white/50 hover:text-white/90 transition-colors duration-200 flex items-center gap-1.5"
        style={{ fontFamily: '"Sora", sans-serif', fontSize: "16px", fontWeight: 500 }}
      >
        {expanded ? "Show less" : "Read more"}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {service.subItems && service.subItems.length > 0 && (
        <div className="mt-auto pt-8" style={{ width: "100%" }}>
          <div className="grid grid-cols-2 gap-2">
            {service.subItems.map((item) => (
              <div
                key={item}
                className="group p-px rounded-2xl bg-gradient-to-br from-white/35 via-white/10 to-transparent hover:from-white/50 hover:via-white/20 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.3)] min-h-[60px]"
              >
                <div className="flex items-center gap-2.5 bg-black/35 group-hover:bg-black/25 transition-colors duration-300 rounded-[15px] px-3.5 py-3 h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="w-5 h-5 shrink-0 rounded-full bg-white/15 border border-white/20 flex items-center justify-center group-hover:bg-white/25 transition-colors duration-300">
                    <svg className="w-2.5 h-2.5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[12px] font-semibold text-white/85 leading-tight tracking-wide">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function ServicesPanelServices({ data }: { data?: any }) {
  if (!data) return null;

  const services = buildServicesFromGridData(data);
  const heading = data?.main_title || "";

  return (
    <section className="bg-transparent px-6 pt-24 pb-8 services-main-section">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-5 sm:mb-12">
          <h2
            className="services-cards-heading"
            style={{
              fontFamily: '"Sora", sans-serif',
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "50px",
              letterSpacing: "-1px",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            {heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2" style={{ gap: "clamp(12px, 2vw, 40px)" }}>
          {services.map((service: any) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}