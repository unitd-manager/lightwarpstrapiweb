import { ProjectDetailLayout } from "./project-detail-layout";

export default function ShellYouBeMine() {
  return (
    <ProjectDetailLayout
      title="Shell You Be Mine?"
      copyrightText="© 2025 Lightwarp LLC. All rights reserved."
      pageCredits="© 2025 Lightwarp LLC."
      subtitle=""
      roleLine="Director, Cinematographer, VFX Supervisor, Lighting Design, Rendering, Compositing, Character Groom and Shading (Octopus), Unreal TD"
      overview={[
        "Shell You Be Mine? stands as one of Lightwarp's most ambitious and technically demanding productions to date. Co-directed and produced alongside Alyssa Curran, the film brought together 23 graduate students outside of class hours — unified around a shared creative vision and the technical infrastructure needed to actually realize it at a professional level.",
        "Lightwarp built an entire Unreal Engine pipeline from the ground up for this production, stress-testing and refining it throughout the shoot. The pipeline handled lighting, grooming workflows bridging Blender and Unreal, and advanced hair shading that pushed the renderer to its limits. On the VFX side, Lightwarp served as supervisor across all effects integration, developing custom facial expression tooling, material export scripts, and Python-based automation for Unreal — solving pipeline challenges in real time to keep 23 artists moving forward without interruption.",
        "The entire 3-minute film was delivered in just 15 weeks. The response exceeded all expectations: the project received features from the official Epic Games and Unreal Engine teams, dedicated coverage and an article on 80lvl, and screened at Short Shorts Film Festival & Asia as well as Austin Under the Stars, where it was nominated for Best Student Short. Shell You Be Mine? stands as proof that the combination of strong community, disciplined pipelines, and creative determination can produce something far greater than the sum of its parts."
      ]}
      videoSrc="https://www.youtube.com/embed/yinRrmEpfr4"
      watchHref="https://www.youtube.com/watch?v=yinRrmEpfr4"
      watchLabel="Watch Full Film"
      backgroundImage="https://static.wixstatic.com/media/ddc236_238a3691e81343cb8121614525d5d709~mv2.png"
      nextHref="/projects/samsung-s7-ad"
      extraImages={[
        "https://static.wixstatic.com/media/ddc236_2b01016e82d042d89e51d64a073c0c89~mv2.png",
        "https://static.wixstatic.com/media/ddc236_696ba547e8e94818ade1fa24b6c24708~mv2.png",
        "https://static.wixstatic.com/media/ddc236_061e70caf8b64b8ca14621c33a8fa548~mv2.png",
        "https://static.wixstatic.com/media/ddc236_968451479e354a488dc7a8f70e740f7b~mv2.png",
        "https://static.wixstatic.com/media/ddc236_53049068e4594ea8a4ff62d53e791a24~mv2.png",
        "https://video.wixstatic.com/video/ddc236_a5b9aa7c340245f38cb4e1b82f4bf1c3/480p/mp4/file.mp4",
        "https://static.wixstatic.com/media/ddc236_62bf76f196834f329a9f57eb73f98313~mv2.png",
      ]}
    />
  );
}