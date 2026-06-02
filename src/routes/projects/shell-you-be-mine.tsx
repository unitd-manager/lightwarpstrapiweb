import { ProjectDetailLayout } from "./project-detail-layout";
import video24 from "../../assets/images/video24.mp4";

export default function ShellYouBeMine() {
  return (
    <ProjectDetailLayout
      title="Shell You Be Mine?"
      subtitle="Featured Short · Real-Time Animation"
      overview={[
        "Shell You Be Mine? is a 3-minute, award-winning animated short film created by a team of 24 artists in just 15 weeks — entirely within Unreal Engine 5 using a novel real-time pipeline.",
        "The film follows a hermit crab's journey to find the perfect shell home, told through lush underwater environments, character-driven animation, and a whimsical original score.",
        "Showcased by 80LVL, Epic Games, and Texas A&M University, the film has screened at festivals from Austin to Japan and stands as a benchmark for the studio's capabilities.",
      ]}
      videoSrc={video24}
      watchHref="https://www.youtube.com/watch?v=yinRrmEpfr4"
      watchLabel="Watch Full Film"
    />
  );
}
