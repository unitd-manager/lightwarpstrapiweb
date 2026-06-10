import { Section } from "../../components/section";

const logos = [
  {
    src: "https://lightwarp3d.com/wp-content/uploads/2026/01/Unreal_Engine-Logo.png",
    alt: "Unreal Engine",
    // The source file has a solid black circular badge baked in — screen-blend
    // it so the black drops out and it sits flush in the card instead of
    // showing as a dark circle.
    blendScreen: true,
  },
  {
    src: "https://lightwarp3d.com/wp-content/uploads/2026/01/blender.png",
    alt: "Blender",
    blendScreen: false,
  },
  {
    src: "https://lightwarp3d.com/wp-content/uploads/2026/01/Substance.png",
    alt: "Substance 3D",
    blendScreen: false,
  },
  {
    src: "https://lightwarp3d.com/wp-content/uploads/2026/01/USDLogoLrgWithAlpha.png",
    alt: "USD",
    blendScreen: false,
  },
  {
    src: "https://lightwarp3d.com/wp-content/uploads/2026/01/amazon-web-services.png",
    alt: "AWS",
    blendScreen: false,
  },
  {
    src: "https://lightwarp3d.com/wp-content/uploads/2026/01/logo-perforce-vert-rev.svg",
    alt: "Perforce",
    blendScreen: false,
  },
];

export function ServicesPanelTools() {
  return (
    <Section className="pt-0">
      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6 items-center justify-items-center">
        {logos.map((logo) => (
          <div key={logo.alt} className="flex h-24 w-full items-center justify-center rounded-3xl bg-white/5 p-4 shadow-lg shadow-black/10">
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-16 object-contain"
              style={logo.blendScreen ? { mixBlendMode: "screen" } : undefined}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
