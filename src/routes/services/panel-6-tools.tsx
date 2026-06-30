import { Section } from "../../components/section";
import unrealEngineLogo from "../../assets/images/cms/Unreal_Engine-Logo.png";
import blenderLogo from "../../assets/images/cms/blender.png";
import substanceLogo from "../../assets/images/cms/Substance.png";
import usdLogo from "../../assets/images/cms/USDLogoLrgWithAlpha.png";
import awsLogo from "../../assets/images/cms/amazon-web-services.png";
import perforceLogo from "../../assets/images/cms/logo-perforce-vert-rev.svg";

const logos = [
  {
    src: unrealEngineLogo,
    alt: "Unreal Engine",
    // The source file has a solid black circular badge baked in — screen-blend
    // it so the black drops out and it sits flush in the card instead of
    // showing as a dark circle.
    blendScreen: true,
  },
  {
    src: blenderLogo,
    alt: "Blender",
    blendScreen: false,
  },
  {
    src: substanceLogo,
    alt: "Substance 3D",
    blendScreen: false,
  },
  {
    src: usdLogo,
    alt: "USD",
    blendScreen: false,
  },
  {
    src: awsLogo,
    alt: "AWS",
    blendScreen: false,
  },
  {
    src: perforceLogo,
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
