export function ServicesPanelHero({ data }: { data?: any }) {
  if (!data) return null;

  const title = data.main_title || data.title || "";

  if (!title) return null;

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center py-5"
      style={{ backgroundColor: "#2E188D", minHeight: "180px", paddingLeft: "4%", paddingRight: "4%" }}
    >
      <div className="relative z-10 text-center">
        <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: '75px', fontWeight: 600, lineHeight: '85px', letterSpacing: '-2px', color: '#FFFFFF' }}>
          {title}
        </h1>
      </div>
    </section>
  );
}