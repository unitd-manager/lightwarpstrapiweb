import { ProjectDetailLayout } from "./project-detail-layout";

export default function ShellYouBeMine() {
  return (
    <ProjectDetailLayout
      title="Shell You Be Mine?"
      subtitle=""
      roleLine="Director, Cinematographer, VFX Supervisor, Lighting Design, Rendering, Compositing, Character Groom and Shading (Octopus), Unreal TD"
      overview={[
        "Shell You Be Mine? was one of the most rewarding and challenging projects I’ve ever taken on. Alongside Alyssa Curran, I co-directed and produced the film, bringing together 23 graduate students outside of class to make this short a reality. It was incredible to see so many artists come together, and part of my role was making sure we had both the creative vision and the technical foundation to actually pull it off.",
        "I built an entire Unreal Engine pipeline from the ground up, stress-testing it as we went, and used it to handle lighting, grooming workflows between Blender and Unreal, and advanced hair shading that really pushed the renderer. I also stepped in as VFX supervisor, problem-solving everything from FX integration to custom facial expression tools to material export scripts (my first real dive into Python scripting for Unreal!). It was a crash course in leadership and technical direction, and I loved every second of finding solutions and making the film possible.",
        "We wrapped the whole 3 min film in just 15 weeks, and the response was beyond anything I expected: features by the official Epic Games and Unreal Engine team themselves, coverage and a article on 80lvl, and screenings at Short Shorts Film Festival & Asia as well as Austin Under the Stars, where it was nominated for Best Student Short. For me, the project was proof that when you combine community, good pipelines, and a bit of stubborn determination, you can create something way bigger than the sum of its parts."
      ]}
      videoSrc="https://www.youtube.com/embed/yinRrmEpfr4"
      watchHref="https://www.youtube.com/watch?v=yinRrmEpfr4"
      watchLabel="Watch Full Film"
      backgroundImage="	https://static.wixstatic.com/media/ddc236_238a3691e81343cb8121614525d5d709~mv2.png"
      nextHref="/projects/our-capabilities"
    />
  );
}
