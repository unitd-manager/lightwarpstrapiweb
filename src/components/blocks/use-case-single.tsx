import { motion } from "framer-motion";
import { useState } from "react";

interface UseCaseItem {
  id: number;
  title?: string;
  description?: string;
  highlight_description?: string;
  ctaLabel?: string;
  ctaLink?: string;
  video_url?: string;
  copyrightText?: string;
  watchnow_label?: string;
  watchnow_link?: string;
}

export interface UseCaseSingleProps {
  main_title?: string;
  category_name?: string;
  use_case_items?: UseCaseItem[];
}

// Convert YouTube watch URL → embed URL
function toEmbedUrl(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (!match) return null;
  return `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`;
}

function isYouTube(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function isVideo(url: string) {
  return /\.(mp4|webm|ogg|mov)(\?|$)/i.test(url);
}

// Single use-case card — full bleed background video/image with text overlay
function UseCaseCard({ item }: { item: UseCaseItem }) {
  const [playing, setPlaying] = useState(false);

  const embedUrl = item.video_url && isYouTube(item.video_url)
    ? toEmbedUrl(item.video_url)
    : null;

  // YouTube thumbnail for background
  const ytThumb = item.video_url && isYouTube(item.video_url)
    ? (() => {
        const match = item.video_url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
        return match ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg` : null;
      })()
    : null;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl" style={{ minHeight: "520px" }}>

      {/* Background: video playing or thumbnail */}
      {playing && embedUrl ? (
        <iframe
          src={`${embedUrl}&autoplay=1`}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: "none" }}
        />
      ) : item.video_url && isVideo(item.video_url) ? (
        <video
          src={item.video_url}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
        />
      ) : ytThumb ? (
        <img
          src={ytThumb}
          alt={item.title ?? ""}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[#0d0d2b]" />
      )}

      {/* Dark gradient overlay — left side for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(5,5,23,0.92) 0%, rgba(5,5,23,0.75) 45%, rgba(5,5,23,0.1) 100%)"
        }}
      />

      {/* Play button overlay (YouTube only, not playing) */}
      {!playing && embedUrl && (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 flex items-center justify-center group z-10"
          aria-label="Play video"
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all border border-white/30">
            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}

      {/* Text content overlay — bottom-left, matching WP */}
      <div className="relative z-20 flex flex-col justify-end h-full p-8 lg:p-12" style={{ minHeight: "520px" }}>
        <div className="max-w-xl">
          {item.highlight_description && (
            <p className="text-[#6250da] font-bold text-sm lg:text-base mb-3">
              {item.highlight_description}
            </p>
          )}
          {item.title && (
            <h3 className="text-white text-3xl lg:text-5xl font-black leading-tight mb-2">
              {item.title}
            </h3>
          )}
          {item.copyrightText && (
            <p className="text-white/50 text-xs mb-4">{item.copyrightText}</p>
          )}
          {item.description && (
            <div
              className="rounded-xl p-4 mb-6"
              style={{ background: "rgba(5,5,23,0.65)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          )}
          <div className="flex flex-wrap gap-3">
            {item.ctaLink && (
              <a
                href={item.ctaLink}
                className="inline-flex items-center bg-white text-black px-7 py-3 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors shadow-lg"
              >
                {item.ctaLabel ?? "Learn More"}
              </a>
            )}
            {item.watchnow_link && (
              <a
                href={item.watchnow_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-white/40 text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                {item.watchnow_label ?? "Watch Now"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function UseCaseSingle({
  main_title,
  category_name,
  use_case_items = [],
}: UseCaseSingleProps) {
  return (
    <section className="w-full">

      {/* Section heading — purple full-width banner matching WP */}
      {(main_title || category_name) && (
        <div
          className="w-full text-center py-12 lg:py-16 mb-0"
          style={{ background: "linear-gradient(135deg, #4c3bc4 0%, #6250da 100%)" }}
        >
          {category_name && (
            <p className="text-white/70 font-semibold uppercase tracking-widest text-xs mb-3">
              {category_name}
            </p>
          )}
          {main_title && (
            <h2 className="text-white text-4xl lg:text-6xl font-black">{main_title}</h2>
          )}
        </div>
      )}

      {/* Use case items stacked */}
      <div className="lw-container">
        <div className="space-y-10 py-10">
          {use_case_items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <UseCaseCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
