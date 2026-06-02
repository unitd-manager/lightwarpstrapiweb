import { ProjectDetailLayout } from "./project-detail-layout";
import video25 from "../../assets/images/video25.mp4";
import image1 from "../../assets/images/image 1.png";

export default function OurCapabilities() {
  return (
    <ProjectDetailLayout
      title="Lush Victorian Garden"
      subtitle="Lighting, Compositing, Cinematography"
      overview={[
        "Curated work from the Lightwarp team across commercial, cinematic, and experiential projects.",
        "Created in collaboration with my friend Alyssa Curran, this project gave me the opportunity to light a lush, naturalistic exterior environment while leaning into a whimsical, storybook vibe.",
        "Using RenderMan’s ML denoiser and finishing touches in Nuke, I layered bloom, god rays, chromatic aberration, and a subtle vignette to enhance depth and atmosphere while preserving naturalistic lighting.",
      ]}
      videoSrc={video25}
      watchHref={video25}
      watchLabel="Watch Full Reel"
      backgroundImage={image1}
    />
  );
}
