import { ProjectDetailLayout } from "./project-detail-layout";

export default function OurCapabilities() {
  return (
    <ProjectDetailLayout
      title="Lush Victorian Garden"
      copyrightText="© 2025 Lightwarp LLC. All rights reserved."
      pageCredits="© 2025 Alyssa Curran, Adithya Sathyanarayanan, Nimi Parmar."
      subtitle="Look Development, Set Dressing, Layout, and Procedural Assets by Alyssa Curran. Bridge Model by Nimi Parmar."
      roleLine="Lighting, Compositing, Cinematography"
      overview={[
        "Created in collaboration with my friend Alyssa Curran, this project gave me the opportunity to light a lush, naturalistic exterior environment while leaning into a whimsical, storybook vibe. The challenge was to balance a sense of wonder with grounded realism, ensuring the foliage, atmosphere, and composition all felt believable while still transporting viewers into a dreamlike space. Using RenderMan’s ML denoiser when it first released publically and finishing touches in Nuke, I layered in bloom, god rays, chromatic aberration, vignette, and subtle lighting fixes to enhance depth and magic. The final piece not only captured the intended charm but also deepened my passion for lighting as I grew my craft through experimentation and collaboration..",
      ]}
      videoSrc="https://www.youtube.com/embed/b-qRx-LlB1A?start=2"
      watchHref="https://www.youtube.com/watch?v=b-qRx-LlB1A&t=2s"
      watchLabel="Watch Full Reel"
      backgroundImage="	https://static.wixstatic.com/media/ddc236_9799e1fa8a134a27b50523940d8b4f98~mv2.png"
      // previousHref="/projects/shell-you-be-mine"
      nextHref="/projects/caught-off-guard"
    />
  );
}