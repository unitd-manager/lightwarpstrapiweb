// src/pages/projects/PanelHeroes.tsx
export function PanelHeroes({ data }: { data?: any }) {
  const title = data?.main_title

  return (
    <section
      className="relative flex min-h-[140px] items-center justify-center overflow-hidden px-4 py-5 sm:min-h-[180px] font-display"
      style={{ backgroundColor: "rgba(89, 48, 255, 0.69)" }}
    >
      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl md:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
}