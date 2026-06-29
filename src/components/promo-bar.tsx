import { TransitionLink } from "./page-transition-overlay";

export default function PromoBar() {
  return (
    <div className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6 md:py-2 gap-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left flex-1">
          Know what you're looking for? Click this button to get started
        </h3>

        <div className="flex-shrink-0">
          <TransitionLink
            to="/contact"
            className="inline-flex items-center gap-3 bg-black text-orange-700 px-8 py-3 rounded-full font-semibold text-[18px] shadow-sm hover:bg-orange-500 hover:text-black hover:shadow-md transition-all"
          >
            Connect With Us
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
