import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-6 py-12 sm:py-28 ${className}`}>
      <div ref={ref}>
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-14 max-w-3xl"
          >
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand pulse-glow" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}   