import { Link } from "react-router-dom";

export function ServicesPanelCta() {
  return (
    <section className="bg-[#c7402f] py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 text-center text-black">
        <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Ready to get started?
        </h2>
        <p className="mt-6 max-w-3xl text-base sm:text-lg text-black/80">
          Whether it's individual assets or a full animation, our team is here to help! Click the button below to get stellar content for your 3D needs.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex rounded-full bg-[#645dff] px-8 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(100,93,255,0.28)] transition hover:-translate-y-0.5"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
