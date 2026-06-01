import { Section } from "../../components/section";

const logos = [
  {
    src: "https://lightwarp3d.com/wp-content/uploads/2026/01/Unreal_Engine-Logo.png",
    alt: "Unreal Engine",
  },
  {
    src: "https://lightwarp3d.com/wp-content/uploads/2026/01/blender.png",
    alt: "Blender",
  },
  {
    src: "https://lightwarp3d.com/wp-content/uploads/2026/01/Substance.png",
    alt: "Substance 3D",
  },
  {
    src: "https://lightwarp3d.com/wp-content/uploads/2026/01/USDLogoLrgWithAlpha.png",
    alt: "USD",
  },
  {
    src: "https://lightwarp3d.com/wp-content/uploads/2026/01/amazon-web-services.png",
    alt: "AWS",
  },
  {
    src: "https://lightwarp3d.com/wp-content/uploads/2026/01/logo-perforce-vert-rev.svg",
    alt: "Perforce",
  },
];

export function ServicesPanelTools() {
  return (
    <Section className="pt-0">
      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6 items-center justify-items-center">
        {logos.map((logo) => (
          <div key={logo.alt} className="flex h-24 w-full items-center justify-center rounded-3xl bg-white/5 p-4 shadow-lg shadow-black/10">
            <img src={logo.src} alt={logo.alt} className="max-h-16 object-contain" />
          </div>
        ))}
      </div>
    </Section>
  );
}
