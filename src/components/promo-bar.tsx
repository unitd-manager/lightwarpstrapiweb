import { motion } from "framer-motion";
import { TransitionLink } from "./page-transition-overlay";

export default function PromoBar({ data }: { data?: any }) {
  if (data?.publish === false) return null;

  const message = data?.description
    ? data.description.replace(/<[^>]+>/g, "").trim()
    : "";
  const showButton = !!data?.cta_button && data.cta_button.publish !== false;
  const label = data?.cta_button?.label;
  const url = data?.cta_button?.url;
  const bgColor = data?.background_color || "#ffffff";

  if (!message) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
      style={{ backgroundColor: bgColor, color: "#000000" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6 md:py-4 gap-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left flex-1">
          {message}
        </h3>
        {showButton && label && url && (
          <div className="flex-shrink-0">
            <TransitionLink
              to={url}
              className="inline-flex items-center gap-3 bg-black text-orange-700 px-8 py-3 rounded-full font-semibold text-[18px] shadow-sm hover:bg-orange-500 hover:text-black hover:shadow-md transition-all"
            >
              {label}
            </TransitionLink>
          </div>
        )}
      </div>
    </motion.div>
  );
}