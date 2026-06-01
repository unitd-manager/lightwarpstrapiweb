// panel-2-gallery.tsx

import video1 from "../../assets/images/video1.mp4";
import video2 from "../../assets/images/video2.mp4";
import video3 from "../../assets/images/video3.mp4";
import video4 from "../../assets/images/video4.mp4";
import video5 from "../../assets/images/video5.mp4";
import video6 from "../../assets/images/video6.mp4";
import video7 from "../../assets/images/video7.mp4";
import video8 from "../../assets/images/video8.mp4";
import video9 from "../../assets/images/video9.mp4";
import video10 from "../../assets/images/video10.mp4";
import video11 from "../../assets/images/video11.mp4";
import video12 from "../../assets/images/video12.mp4";
import video13 from "../../assets/images/video13.mp4";
import video14 from "../../assets/images/video14.mp4";
import video15 from "../../assets/images/video15.mp4";
import video16 from "../../assets/images/video16.mp4";
import video17 from "../../assets/images/video17.mp4";
import video18 from "../../assets/images/video18.mp4";
import video19 from "../../assets/images/video19.mp4";
import video20 from "../../assets/images/video20.mp4";
import video21 from "../../assets/images/video21.mp4";
import video22 from "../../assets/images/video22.mp4";
import video23 from "../../assets/images/video23.mp4";
import video24 from "../../assets/images/video24.mp4";
import video25 from "../../assets/images/video25.mp4";
import video26 from "../../assets/images/video26.mp4";
import video27 from "../../assets/images/video27.mp4";
import video28 from "../../assets/images/video28.mp4";
import video29 from "../../assets/images/video29.mp4";

const videos = [
  video25,
  video2,
  video9,
  video17,
  video4,
  video28,
  video11,
  video1,
  video22,
  video6,
  video14,
  video29,
  video3,
  video19,
  video8,
  video24,
  video12,
  video27,
  video5,
  video16,
  video21,
  video10,
  video26,
  video7,
  video15,
  video23,
  video13,
  video18,
  video20,
];

const VideoCard = ({
  src,
  height,
}: {
  src: string;
  height: string;
}) => (
  <div className="group overflow-hidden rounded-3xl bg-black shadow-2xl">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={`w-full ${height} object-cover transition-transform duration-500 group-hover:scale-105`}
    >
      <source src={src} type="video/mp4" />
    </video>
  </div>
);

export default function PortfolioGallery() {
  return (
    <div className="space-y-6 bg-[#040816] p-6">

      {/* Row 1 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <VideoCard src={videos[0]} height="h-80" />
        <VideoCard src={videos[1]} height="h-80" />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <VideoCard src={videos[2]} height="h-64" />
        <VideoCard src={videos[3]} height="h-64" />
        <VideoCard src={videos[4]} height="h-64" />
      </div>

      {/* Row 3 */}
      <VideoCard src={videos[5]} height="h-[500px]" />

      {/* Row 4 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <VideoCard src={videos[6]} height="h-72" />
        <VideoCard src={videos[7]} height="h-72" />
      </div>

      {/* Row 5 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <VideoCard src={videos[8]} height="h-72" />
        <VideoCard src={videos[9]} height="h-72" />
        <VideoCard src={videos[10]} height="h-72" />
      </div>

      {/* Row 6 */}
      <VideoCard src={videos[11]} height="h-[450px]" />

      {/* Row 7 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <VideoCard src={videos[12]} height="h-80" />
        <VideoCard src={videos[13]} height="h-80" />
      </div>

      {/* Row 8 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <VideoCard src={videos[14]} height="h-64" />
        <VideoCard src={videos[15]} height="h-64" />
        <VideoCard src={videos[16]} height="h-64" />
      </div>

      {/* Row 9 */}
      <VideoCard src={videos[17]} height="h-[550px]" />

      {/* Row 10 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <VideoCard src={videos[18]} height="h-72" />
        <VideoCard src={videos[19]} height="h-72" />
      </div>

      {/* Row 11 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <VideoCard src={videos[20]} height="h-64" />
        <VideoCard src={videos[21]} height="h-64" />
        <VideoCard src={videos[22]} height="h-64" />
      </div>

      {/* Row 12 */}
      <VideoCard src={videos[23]} height="h-[500px]" />

      {/* Row 13 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <VideoCard src={videos[24]} height="h-72" />
        <VideoCard src={videos[25]} height="h-72" />
      </div>

      {/* Row 14 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <VideoCard src={videos[26]} height="h-72" />
        <VideoCard src={videos[27]} height="h-72" />
      </div>

      {/* Row 15 */}
      <VideoCard src={videos[28]} height="h-[550px]" />
    </div>
  );
}