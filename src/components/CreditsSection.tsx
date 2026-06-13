import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Credit = {
  role: string;
  names: string | string[];
};

export default function CreditsSection({ credits = [] }: { credits?: Credit[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mt-12 border-t border-white/10 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3"
      >
        {credits.map(({ role, names }) => (
          <div key={role}>
            <h3 className="text-sm font-semibold">{role}</h3>
            <div className="mt-1 text-sm text-muted-foreground">
              {(Array.isArray(names) ? names : [names]).map((name) => (
                <div key={name}>{name}</div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}