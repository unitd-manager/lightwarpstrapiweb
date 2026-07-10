import { AboutPanelStory } from "../../routes/about/panel-3-story";
import { AboutPanelTeam } from "../../routes/about/panel-4-team";
import { AboutPanelCta } from "../../routes/about/panel-5-cta";
import { PanelHeroes } from "../../routes/projects/panel-hero";
import { ProjectsPanelHero } from "../../routes/projects/panel-1-hero";
import { ProjectsPanelExtraVideos } from "../../routes/projects/panel-7-extra-videos";
import { ContactPanelHero } from "../../routes/contact/panel-1-hero";
import { ContactPanelForm } from "../../routes/contact/panel-2-form";

// Wrapper components: the route-specific About/Projects components expect a single
// `data` prop (they were authored as `Component({ data })`). When rendering
// blocks from Strapi we receive the block's fields directly, so wrap them
// to pass `data={props}` so the components render content correctly.
const BLOCK_COMPONENTS: Record<string, React.ComponentType<any>> = {
  "acf-sections.banner-layout": function BannerWrapper(props: any) {
    return <AboutPanelStory data={props} />;
  },
  "acf-sections.about-team-section": function TeamWrapper(props: any) {
    return <AboutPanelTeam data={props} />;
  },
  "acf-sections.footer-common-cta": function CtaWrapper(props: any) {
    return <AboutPanelCta data={props} />;
  },
  "acf-sections.use-case-single": ProjectUseCaseSingle,
  "acf-sections.contact-location-section": function ContactWrapper(props: any) {
    return (
      <>
        <ContactPanelHero data={props} />
        <ContactPanelForm data={props} />
      </>
    );
  },
};

function ProjectUseCaseSingle(props: any) {
  const items: any[] = props.use_case_items ?? [];
  const [featured, ...rest] = items;

  return (
    <>
      {props.main_title ? <PanelHeroes data={props} /> : null}
      {featured ? <ProjectsPanelHero data={featured} /> : null}
      {rest.length > 0 ? <ProjectsPanelExtraVideos data={rest} /> : null}
    </>
  );
}

export function PageBuilderRenderer({ blocks }: { blocks: any[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        const Component = BLOCK_COMPONENTS[block.__component];
        if (!Component) {
          // Helps you identify unmapped blocks during development:
          if (import.meta.env.DEV) {
            console.warn("[PageBuilderRenderer] No component for:", block.__component);
          }
          return null;
        }
        // ✅ Spread block fields directly as props — Strapi v5 is already flat
        const { id, __component, ...props } = block;
        return <Component key={id ?? i} {...props} />;
      })}
    </>
  );
}
