// src/components/blocks/page-builder-renderer.tsx
import { BannerLayout } from "./banner-layout";
import { TeamSection } from "./team-section";
import { FooterCommonCta } from "./footer-common-cta";
import { UseCaseSingle } from "./use-case-single";
import { ContactPanelHero } from "../../routes/contact/panel-1-hero";
import { ContactPanelForm } from "../../routes/contact/panel-2-form";

import { HomePanelHero } from "../../routes/home/panel-1-hero";
import { ServicesPanels } from "../services-panel";
import PromoBar from "../promo-bar";
import { HomePanelPartners } from "../../routes/home/panel-5-partners";
import { HomePanelAwards } from "../../routes/home/panel-6-awards";
import { HomePanelCta } from "../../routes/home/panel-9-cta";

const BLOCK_COMPONENTS: Record<string, React.ComponentType<any>> = {
  // Generic banner (used by About, Services, etc.)
  "acf-sections.banner-layout": function BannerWrapper(props: any) {
    return <BannerLayout {...props} />;
  },
  "acf-sections.about-team-section": function TeamWrapper(props: any) {
    return <TeamSection {...props} />;
  },
  // Generic CTA (used by About, Services, etc.)
  "acf-sections.footer-common-cta": function CtaWrapper(props: any) {
    return <FooterCommonCta {...props} />;
  },
  "acf-sections.use-case-single": function UseCaseWrapper(props: any) {
    return <UseCaseSingle {...props} />;
  },
  "acf-sections.contact-location-section": function ContactWrapper(props: any) {
    return (
      <>
        <ContactPanelHero data={props} />
        <ContactPanelForm data={props} />
      </>
    );
  },
  "acf-sections.grid-layout": function GridLayoutWrapper(props: any) {
    return (
      <>
        <ServicesPanels data={props} />
        <PromoBar data={props} />
      </>
    );
  },
  "acf-sections.home-client-logo": function ClientLogoWrapper(props: any) {
    return <HomePanelPartners data={props} />;
  },
  // Home page hero — Strapi component is "home-partner", not "banner-layout"
  "acf-sections.home-partner": function HomeHeroWrapper(props: any) {
    return <HomePanelHero data={props} />;
  },
  // Home page CTA — Strapi component is "content-image-split-block", not "footer-common-cta"
  "acf-sections.content-image-split-block": function HomeCtaWrapper(props: any) {
    return <HomePanelCta data={props} />;
  },
};

export function PageBuilderRenderer({ blocks }: { blocks: any[] }) {
  const awardsBlock = blocks.find((b) => b.__component === "acf-sections.home-awards-and-certificates");
  const awardWinnerBlock = blocks.find((b) => b.__component === "acf-sections.home-award-winner");

  return (
    <>
      {blocks.map((block, i) => {
        if (
          block.__component === "acf-sections.home-awards-and-certificates" ||
          block.__component === "acf-sections.home-award-winner"
        ) {
          return null;
        }
        const Component = BLOCK_COMPONENTS[block.__component];
        if (!Component) {
          if (import.meta.env.DEV) {
            console.warn("[PageBuilderRenderer] No component for:", block.__component);
          }
          return null;
        }
        const { id, __component, ...props } = block;
        return <Component key={id ?? i} {...props} />;
      })}

      {(awardsBlock || awardWinnerBlock) && (
        <HomePanelAwards awardsData={awardsBlock} artistsData={awardWinnerBlock} />
      )}
    </>
  );
}