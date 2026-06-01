import { Section } from "../../components/section";

export function ServicesPanelProcess() {
  return (
    <Section
      title="How we deliver"
      subtitle="Our cutting-edge pipeline is built with production scalability, real-time rendering, and multi-disciplinary artists in mind. We leverage industry-standard frameworks like OpenUSD and ACES, and connect them with the forward-thinking DCCs like Blender, Unreal Engine, and cloud workflows to create and iterate."
    >
      <div className="mt-16 flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
        <img
          src="https://lightwarp3d.com/wp-content/uploads/2026/01/Unreal_Engine-Logo.png"
          alt="Unreal Engine"
          className="h-20 object-contain"
        />
        <img
          src="https://lightwarp3d.com/wp-content/uploads/2026/01/blender.png"
          alt="Blender"
          className="h-20 object-contain"
        />
        <img
          src="https://lightwarp3d.com/wp-content/uploads/2026/01/Substance.png"
          alt="Substance 3D"
          className="h-20 object-contain"
        />
        <img
          src="https://lightwarp3d.com/wp-content/uploads/2026/01/USDLogoLrgWithAlpha.png"
          alt="USD"
          className="h-20 object-contain"
        />
        <img
          src="https://lightwarp3d.com/wp-content/uploads/2026/01/amazon-web-services.png"
          alt="AWS"
          className="h-20 object-contain"
        />
        <img
          src="https://lightwarp3d.com/wp-content/uploads/2026/01/logo-perforce-vert-rev.svg"
          alt="Perforce"
          className="h-20 object-contain"
        />
      </div>
    </Section>
  );
}
