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

function embedUrl(
  src: string,
  options: {
    autoplay: boolean;
    muted: boolean;
    loop: boolean;
    playsInline: boolean;
    hideControls: boolean;
    cover: boolean;
  },
): string {
  try {
    const url = new URL(src);

    if (options.autoplay) url.searchParams.set("autoplay", "1");
    if (options.muted) {
      url.searchParams.set(src.includes("youtube.com") ? "mute" : "muted", "1");
    }

    if (options.playsInline) url.searchParams.set("playsinline", "1");

    if (src.includes("youtube.com")) {
      url.searchParams.set("rel", "0");
      url.searchParams.set("modestbranding", "1");
      if (options.hideControls) url.searchParams.set("controls", "0");

      if (options.loop) {
        url.searchParams.set("loop", "1");
        const id = getYouTubeId(src);
        if (id) url.searchParams.set("playlist", id);
      }
    }

    if (src.includes("vimeo.com")) {
      if (options.cover) {
        url.searchParams.set("background", "1");
      }
      if (options.hideControls) {
        url.searchParams.set("title", "0");
        url.searchParams.set("byline", "0");
        url.searchParams.set("portrait", "0");
        url.searchParams.set("controls", "0");
      }
      if (options.loop) url.searchParams.set("loop", "1");
      url.searchParams.set("autopause", "0");
      url.searchParams.set("dnt", "1");
    }

    return url.toString();
  } catch {
    return src;
  }
}

export function VideoPlayer({
  src,
  title,
  autoplay = false,
  hideControls = false,
  cover = false,
}: {
  src: string;
  title: string;
  autoplay?: boolean;
  hideControls?: boolean;
  cover?: boolean;
}) {
  const [playing, setPlaying] = useState(autoplay);

  const youtubeId = getYouTubeId(src);
  const vimeoId = getVimeoId(src);

  const thumbnail = youtubeId
    ? `https://i.ytimg.com/vi/${youtubeId}/sddefault.jpg`
    : vimeoId
    ? `https://vumbnail.com/${vimeoId}.jpg`
    : null;

  if (playing) {
    const iframe = (
      <iframe
        src={embedUrl(src, {
          autoplay: true,
          muted: true,
          loop: true,
          playsInline: true,
          hideControls,
          cover,
        })}
        title={title}
        className={
          cover
            ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-w-[177.78vh] min-h-full border-0"
            : "h-full w-full"
        }
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );

    if (cover) {
      return <div className="relative h-full w-full overflow-hidden">{iframe}</div>;
    }

    return (
      iframe
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group relative block h-full w-full overflow-hidden"
      aria-label={`Play ${title}`}
    >
      <div
        className={
          thumbnail
            ? "h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            : "h-full w-full bg-white/5"
        }
        style={thumbnail ? { backgroundImage: `url("${thumbnail}")` } : undefined}
      />

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
