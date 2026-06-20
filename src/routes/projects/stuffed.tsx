import { ProjectDetailLayout } from "./project-detail-layout";

export default function Stuffed() {
  return (
    <ProjectDetailLayout
      title="Stuffed"
      copyrightText="© 2025 Lightwarp LLC. All rights reserved."
      subtitle=""
      roleLine="Lighting, Rendering, Compositing, Pipeline and Rendering TD, Hair CFX, Surfacing Groom TD"
      overview={[
        "Stuffed is an ambitious short film produced in just 10 weeks during the Texas A&M Visualization Summer Industry Course, developed under the mentorship of industry professionals from DreamWorks Animation and Meta. Lightwarp's contribution spanned character effects, grooming, and lighting - from building workflows to handle millions of strands of hair and soft body simulations, to crafting stylized black-and-white and punchy color looks inspired by classic film stock. Advanced techniques including bi-directional path tracing in Pixar's Unified integrator were employed to improve render efficiency by 300% while enhancing groom color fidelity and indirect specular response. Sequences were lit using fully distant lights for the stylized polyworld shots, with ACES color workflows integrated throughout production - combining cutting-edge research with heartfelt storytelling in a production that stands as one of the most technically demanding collaborative projects in Lightwarp's portfolio."
      ]}
      videoSrc="https://www.youtube.com/embed/bzCrjcqWliU?start=1"
      watchHref="https://www.youtube.com/watch?v=bzCrjcqWliU&t=1s"
      watchLabel="Watch Full Film"
      backgroundImage="	https://static.wixstatic.com/media/ddc236_1ca8c8fbdd694e7292a600cf02488949~mv2.png"
      previousHref="/projects/our-capabilities"
      nextHref="/projects/the-jab"
      credits={[
          { role: 'Directed and Produced by', names: ['Adithya Sathyanarayanan', 'Alyssa Curran'] },
          { role: 'Storyboards and 2D art by', names: ['Sonia Wong', 'Melanie Riojas'] },
          { role: 'Visual Development by', names: ['Dominic Nguyen', 'Maleah Miller', 'Sonia Wong', 'Melanie Riojas'] },
          { role: 'Character Models by', names: 'Nimi Parmar' },
          { role: 'Environment Models and Look Dev by', names: ['Bria Peters', 'Kaylyn Luna', 'Magnus Haarseth', 'Sergio Alonzo Macias'] },
          { role: 'Character Look Development by', names: ['Alyssa Curran', 'Adithya Sathyanarayanan'] },
          { role: 'Rigging by', names: ['Alec Cromer', 'Saif Chowdhury'] },
          { role: 'FX & Technical Art by', names: ['Madhu Ratnakar', 'Carlos Carillo', 'Jais George'] },
          { role: 'Animation by', names: ['Zaria Steele', 'Ethan Umanos', 'Spencer Bryant', 'Soha Aftab', 'Saif Chowdhury'] },
          { role: 'Lighting & Layout by', names: ['Sina Alidoust Salimi', 'Adithya Sathyanarayananan'] },
          { role: 'Marisa Jacques as the Voice of Shelly and Jay Figueroa as the Voice of Shelldon', names: [] },
          { role: 'Sound and Final Edit by', names: ['Alec Cromer', 'Marisa Jacques'] },
        ]}
    />
  );
}
