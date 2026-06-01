import { lazy, Suspense } from "react";
import { PageShell } from "../components/page-shell";

import PortfolioHero from "./portfolio/panel-1-hero";

const PortfolioGallery = lazy(
  () => import("./portfolio/panel-2-gallery")
);

export default function Portfolio() {
  return (
    <PageShell>
      <PortfolioHero />

      <Suspense
        fallback={
          <div className="flex h-[300px] items-center justify-center bg-[#040816] text-white text-lg">
            Loading Portfolio...
          </div>
        }
      >
        <PortfolioGallery />
      </Suspense>
    </PageShell>
  );
}