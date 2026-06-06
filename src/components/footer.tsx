import { Instagram, Youtube } from "lucide-react";
import lightwarpLogo from "../assets/images/lightwarp_transparent.png";

const SORA: React.CSSProperties = { fontFamily: '"Sora", sans-serif' };

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-black/50 backdrop-blur-xl border-t border-white/10" style={SORA}>

      {/* Main grid — 4 cols desktop / 2 cols tablet / 1 col mobile */}
      <div className="lw-container lw-section-tight">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[340px_1fr_1fr_1fr] gap-y-[60px] gap-x-[40px]">

        {/* Logo — no copyright here on mobile */}
        <div className="flex flex-col items-start gap-5">
          <a href="/">
            <img
              src={lightwarpLogo}
              alt="Lightwarp"
              className="h-[65px] w-auto object-contain lg:h-[180px] lg:w-[320px] lg:max-w-none"
            />
          </a>
          {/* Copyright visible on desktop only */}
          <p
            className="text-white hidden lg:block"
            style={{ fontSize: '16px', fontWeight: 300, lineHeight: '24px' }}
          >
            &copy;2026. Lightwarp LLC. All rights reserved.
          </p>
        </div>

        {/* Contact for Inquiries */}
        <div>
          <h6
            className="text-white leading-[30px] mb-[20px]"
            style={{ fontSize: '20px', fontWeight: 400 }}
          >
            Contact for Inquiries
          </h6>
          <ul className="space-y-[8px]">
            <li>
              <a
                href="mailto:info@lightwarp3d.com?subject=Consultation/Information Request"
                className="text-white hover:text-[#6250da] transition-colors"
                style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
              >
                Email: info@lightwarp3d.com
              </a>
            </li>
            <li>
              <a
                href="tel:615-571-9395"
                className="text-white hover:text-[#6250da] transition-colors"
                style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
              >
                Phone: (615) 571-9395
              </a>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h6
            className="text-white leading-[30px] mb-[20px]"
            style={{ fontSize: '20px', fontWeight: 400 }}
          >
            Follow
          </h6>
          <div className="flex items-center gap-3">
            <a aria-label="Instagram" href="https://www.instagram.com/lightwarp3d" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#6250da] transition-colors">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a aria-label="TikTok" href="https://www.tiktok.com/@lightwarp3d" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#6250da] transition-colors">
              <TikTokIcon size={20} />
            </a>
            <a aria-label="YouTube" href="https://www.youtube.com/@lightwarpstudios" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#6250da] transition-colors">
              <Youtube size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Meet with us */}
        <div>
          <h6
            className="text-white leading-[30px] mb-[20px]"
            style={{ fontSize: '20px', fontWeight: 400 }}
          >
            Meet with us
          </h6>
          <a
            href="https://calendar.app.google/zYHnxEYxui76S9tR6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#6250da] transition-colors"
            style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
          >
            Schedule a meeting
          </a>
        </div>
        </div>
      </div>

      {/* Copyright — mobile only, at the very bottom */}
      <p
        className="lg:hidden text-white lw-container pb-[32px]"
        style={{ fontSize: '14px', fontWeight: 300, lineHeight: '24px' }}
      >
        &copy;2026. Lightwarp LLC. All rights reserved.
      </p>

      {/* Bottom border line */}
      <div className="border-t border-white/10" />
    </footer>
  );
}
