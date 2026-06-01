import { Section } from "../../components/section";
import gif1 from "../../assets/images/gif1.gif";
import gif2 from "../../assets/images/gif2.gif";
import gif3 from "../../assets/images/gif3.gif";
import gif4 from "../../assets/images/gif4.gif";
import gif5 from "../../assets/images/gif5.gif";
import gif6 from "../../assets/images/gif6.gif";
import gif7 from "../../assets/images/gif 7.gif";
import gif8 from "../../assets/images/gif8.gif";

const creativeGifs = [gif8, gif2, gif3, gif4, gif5, gif6, gif7, gif1];

export function HomePanelShowcase() {
  return (
    <Section
      eyebrow="Creative Showcase"
      title={<>Infinite <span className="text-gradient">Frames of Creativity</span></>}
      subtitle="A curated collection of motion, imagination, and immersive visual storytelling."
    >
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          {creativeGifs.slice(0, 3).map((gif, index) => (
            <div key={index} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <img src={gif} alt={`Creative GIF ${index + 1}`} className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {creativeGifs.slice(3, 5).map((gif, index) => (
            <div key={index} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <img src={gif} alt={`Creative GIF ${index + 4}`} className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {creativeGifs.slice(5, 8).map((gif, index) => (
            <div key={index} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <img src={gif} alt={`Creative GIF ${index + 6}`} className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
