import { ProjectDetailLayout } from "./project-detail-layout";

export default function OurCapabilities() {
  return (
    <ProjectDetailLayout
      title="Lush Victorian Garden"
      copyrightText="© 2025 Lightwarp LLC. All rights reserved."
      pageCredits="© 2025 Alyssa Curran, Adithya Sathyanarayanan, Nimi Parmar."
      subtitle=""
      roles={["Lighting", "Compositing", "Cinematography"]}
      overview={[
        "Lush Victorian Garden is a collaborative exterior lighting study that merges naturalistic detail with a whimsical, storybook aesthetic. The environment balances imaginative wonder with grounded realism — every element of foliage, atmosphere, and composition crafted to feel believable while transporting the viewer into a dreamlike space. Lit and rendered using RenderMan's ML denoiser at its public release, with final compositing in Nuke layering in bloom, god rays, chromatic aberration, vignette, and precise lighting refinements, the piece demonstrates LightWarp Studios' command of cinematic exterior lighting and photorealistic environmental rendering."
      ]}
      videoSrc="https://www.youtube.com/embed/b-qRx-LlB1A?start=2"
      watchHref="https://www.youtube.com/watch?v=b-qRx-LlB1A&t=2s"
      watchLabel="Watch Full Reel"
      backgroundImage="https://static.wixstatic.com/media/ddc236_9799e1fa8a134a27b50523940d8b4f98~mv2.png"
      nextHref="/projects/caught-off-guard"
      credits={[
        { role: 'Look Development, Set Dressing, Layout, and Procedural Assets by', names: ['Adithya Sathyanarayanan', 'Alyssa Curran'] },
        { role: 'Bridge Model by', names: ['Nimi Parmar'] },
      ]}
      extraImages={[
        "https://static.wixstatic.com/media/ddc236_24ec6c84332440a69b60fca5190dc578~mv2.png",
        "https://static.wixstatic.com/media/ddc236_a377d11331fd427594c636cf646b5ecf~mv2.jpg",
      ]}
    />
  );
}