import { useState } from "react";
import { motion } from "framer-motion";

function getYouTubeId(src: string): string | null {
  const match = src.match(/(?:youtube\.com\/embed\/)([^?&]+)/);
  return match ? match[1] : null;
}

function getVimeoId(src: string): string | null {
  const match = src.match(/vimeo\.com\/video\/([^?&]+)/);
  return match ? match[1] : null;
}

function autoplayUrl(src: string): string {
  const base = src.split("?")[0];
  if (src.includes("youtube.com")) return `${base}?autoplay=1&rel=0&modestbranding=1&showinfo=0`;
  if (src.includes("vimeo.com")) return `${base}?autoplay=1`;
  return src;
}

export function VideoPlayer({ src, title }: { src: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  const youtubeId = getYouTubeId(src);
  const vimeoId = getVimeoId(src);

  const thumbnail = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : vimeoId
    ? `https://vumbnail.com/${vimeoId}.jpg`
    : null;

  if (playing) {
    return (
      <iframe
        src={autoplayUrl(src)}
        title={title}
        className="h-full w-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group relative block h-full w-full overflow-hidden"
      aria-label={`Play ${title}`}
    >
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="h-full w-full bg-white/5" />
      )}

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />

      {/* play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.3)] backdrop-blur-sm"
        >
          <svg className="ml-1 h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.div>
      </div>
    </button>
  );
}
