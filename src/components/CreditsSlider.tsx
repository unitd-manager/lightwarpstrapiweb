import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Credit = {
  role: string;
  names: string | string[];
};

const CHUNK_SIZE = 4;
const AUTO_PLAY_DELAY = 4000;

const GRID_COLS_CLASS: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

const chunk = <T,>(items: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
};

const CreditEntry = ({ role, names }: { role: string; names: string[] }) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-wide text-white/40">{role}</p>
    <div className="mt-1 text-lg text-white/85">
      {names.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  </div>
);

export default function CreditsSlider({
  credits = [],
}: {
  credits?: Credit[];
}) {
  const slides = credits.map((c) => ({
    role: c.role,
    names: Array.isArray(c.names) ? c.names : [c.names],
  }));

  const pageCount = Math.max(1, Math.ceil(slides.length / CHUNK_SIZE));
  const itemsPerPage = Math.ceil(slides.length / pageCount);
  const pages = chunk(slides, itemsPerPage);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (pages.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % pages.length);
    }, AUTO_PLAY_DELAY);
    return () => clearInterval(timer);
  }, [pages.length]);

  if (!pages.length) return null;

  const goTo = (next: number) => {
    setIndex((next + pages.length) % pages.length);
  };

  if (pages.length === 1) {
    return (
      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
          Credits
        </p>
        <div className={`mt-4 grid gap-4 ${GRID_COLS_CLASS[pages[0].length] ?? "sm:grid-cols-2"}`}>
          {pages[0].map((slide) => (
            <CreditEntry key={slide.role} role={slide.role} names={slide.names} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
          Credits
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous credits"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/30 hover:text-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next credits"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/30 hover:text-white"
          >
            ›
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`grid gap-4 ${GRID_COLS_CLASS[pages[index].length] ?? "sm:grid-cols-2"}`}
          >
            {pages[index].map((slide) => (
              <CreditEntry key={slide.role} role={slide.role} names={slide.names} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {pages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to credits page ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white/70" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
