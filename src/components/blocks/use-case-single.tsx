import { ProjectsPanelCapabilities } from "../../routes/projects/panel-3-capabilities";
import type { CapabilityItem } from "../../routes/capabilities";

export interface UseCaseSingleProps {
  main_title?: string;
  category_name?: string;
  use_case_items?: CapabilityItem[];
}

export function UseCaseSingle({
  main_title,
  category_name,
  use_case_items = [],
}: UseCaseSingleProps) {
  // Every project — including what used to be the special "hero" first item —
  // now renders through the same panel used for "Lush Victorian Garden", so
  // the whole list looks and behaves consistently.
  const publishedItems = use_case_items.filter((item) => item.publish !== false);

  return (
    <>
      {/* Page title banner */}
      {(main_title || category_name) && (
        <section className="relative text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/25 via-cyan-500/15 to-indigo-700/25" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-16 text-center">
            {category_name && (
              <p className="text-white/70 font-semibold uppercase tracking-widest text-xs mb-3">
                {category_name}
              </p>
            )}
            <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl text-white bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 [text-shadow:0_1px_0_rgba(255,255,255,0.18),0_-1px_0_rgba(0,0,0,0.7),0_14px_30px_rgba(0,0,0,0.55)]">
              {main_title}
            </h1>
          </div>
        </section>
      )}
      {publishedItems.map((item) => (
        <ProjectsPanelCapabilities key={item.id} item={item} />
      ))}
    </>
  );
}
