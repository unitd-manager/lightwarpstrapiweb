import { ProjectDetailLayout } from "./project-detail-layout";
import image04 from "../../assets/images/image04.png";

export default function Stuffed() {
  return (
    <ProjectDetailLayout
      title="Stuffed"
      subtitle=""
      overview={[
        "During the Texas A&M Visualization Summer Industry Course, I had the privilege of working alongside mentors from DreamWorks Animation and Meta to create Stuffed, an ambitious short film produced in just 10 weeks. My role spanned character effects, grooming, and lighting — from developing workflows for millions of strands of hair and soft body simulations, to designing stylized black-and-white and punchy color looks inspired by classic film stock. I experimented with advanced techniques such as bi-directional path tracing in Pixar’s Unified integrator, which ultimately improved render efficiency by 300% while enhancing groom color and indirect specular response. I also lit sequences using fully distant lights for “polyworld” shots and pushed ACES color workflows throughout production. This project was both a technical and artistic milestone, combining cutting-edge research with heartfelt storytelling — and one of the most rewarding collaborations of my academic career."
      ]}
      videoSrc="https://www.youtube.com/embed/bzCrjcqWliU?start=1"
      watchHref="https://www.youtube.com/watch?v=bzCrjcqWliU&t=1s"
      watchLabel="Watch Full Film"
      backgroundImage={image04}
      previousHref="/projects/our-capabilities"
      nextHref="/projects/the-jab"
    />
  );
}
