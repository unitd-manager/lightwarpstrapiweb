import { HomePanelHero } from "./home/panel-1-hero";
import { ServicesPanels } from "../components/services-panel";
import { HomePanelPartners } from "./home/panel-5-partners";
import PromoBar from "../components/promo-bar";
import { HomePanelAwards } from "./home/panel-6-awards";
import { HomePanelCta } from "./home/panel-9-cta";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { MouseLight } from "../components/mouse-light";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MouseLight />
      <Navbar />
      <HomePanelHero />
    
      <ServicesPanels />
    
      <PromoBar />
      <HomePanelPartners />
      <HomePanelAwards />
    
      <HomePanelCta />
      <Footer />
    </div>
  );
}
