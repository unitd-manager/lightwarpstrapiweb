import { Section } from "../../components/section";

export function HomePanelStats() {
  return (
    <Section className="py-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-xl p-5 lg:p-6">
          <div className="absolute -top-20 left-1/4 h-30 w-30 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute -bottom-20 right-1/4 h-30 w-30 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 relative z-10">
            {[
              { k: "180+", v: "Projects", icon: "🚀" },
              { k: "12", v: "Awards", icon: "🏆" },
              { k: "40+", v: "Brands", icon: "✨" },
            ].map((s) => (
              <div
                key={s.v}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="text-6xl lg:text-7xl font-bold leading-none bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                  {s.k}
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.25em] text-white/60">{s.v}</div>
                <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-pink-500 to-violet-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
