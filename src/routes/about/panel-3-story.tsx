import { Section } from "../../components/section";
import images from "../../assets/images/image 5.png";
import images1 from "../../assets/images/OctopusStill.png";

export function AboutPanelStory() {
  return (
    <Section
      eyebrow="About"
      title={<>Our <span className="text-gradient">Story</span></>}
    >
      <div className="w-full lg:w-[70%]">
        <div
          className="
            relative overflow-hidden rounded-[32px]
            bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90
            backdrop-blur-xl
            border border-white/10
            p-8 md:p-12
            shadow-[0_30px_80px_rgba(0,0,0,0.45)]
            transition-all duration-500
            hover:-translate-y-1
            hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)]
          "
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%)]" />

          <img
            src={images}
            alt="Mascot"
            className="
              absolute
              right-[-20px]
              top-[10px]
              w-[300px] md:w-[280px]
              opacity-90
              pointer-events-none
              select-none
            "
          />

          <img
            src={images1}
            alt="Mascot"
            className="
              absolute
              right-[0px]
              bottom-[20px]
              w-[240px] md:w-[240px]
              opacity-90
              pointer-events-none
              select-none
            "
          />

          <div className="relative z-10 max-w-[78%]">
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              A studio born on the coast, obsessed with light. We treat every frame
              like a lighthouse: a focused beam guiding attention through darkness.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-300">
              Started by an alum of Texas A&M University, Lightwarp 3D Studio was
              built on a vision of using real-time rendering with tools like Unreal
              Engine and Blender to create high-quality 3D stories and visuals at
              blazing fast speed.
            </p>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-300">
              With our proprietary real-time pipeline and workflows, we create,
              iterate, and deliver results fast with cinematic quality. Backed by
              industry experience from major animation studios and a talented
              associate team, we combine creativity, technology, and efficiency to
              deliver exceptional results for every client.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
