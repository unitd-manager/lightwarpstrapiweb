import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Credit = {
  role: string;
  names: string | string[];
};

export default function CreditsSection({
  credits = [],
  copyright,
}: {
  credits?: Credit[];
  copyright?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (!credits.length && !copyright) return null;

  if (!credits.length) {
    return (
      <div ref={ref} className="mt-4 max-w-2xl text-sm text-white/60">
        {copyright}
      </div>
    );
  }

  return (
    <div ref={ref} className="mt-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
          Credits
        </p>
        <dl className="mt-3 grid gap-3 sm:grid-cols-2">
          {credits.map(({ role, names }) => (
            <div key={role}>
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-white/40">
                {role}
              </dt>
              <dd className="mt-0.5 text-sm text-white/75">
                {(Array.isArray(names) ? names : [names]).map((name) => (
                  <div key={name}>{name}</div>
                ))}
              </dd>
            </div>
          ))}
        </dl>
        {copyright ? (
          <p className="mt-4 border-t border-white/10 pt-3 text-xs text-white/40">
            {copyright}
          </p>
        ) : null}
      </motion.div>
    </div>
  );
}
