import { PageShell } from "../components/page-shell";
import { HomePanelHero } from "./home/panel-1-hero";
import { HomePanelServices } from "./home/panel-3-services";
import { HomePanelPartners } from "./home/panel-5-partners";
import PromoBar from "../components/promo-bar";
import { HomePanelAwards } from "./home/panel-6-awards";
import { HomePanelCta } from "./home/panel-9-cta";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { MouseLight } from "../components/mouse-light";

export default function Home() {
  return (
     <div className="relative min-h-screen">
         <MouseLight />
         <Navbar />
      <HomePanelHero />
      <HomePanelServices />
      <PromoBar />
      <HomePanelPartners />
      <HomePanelAwards />
      <HomePanelCta />
     <Footer />
         
        </div>
  );
}
