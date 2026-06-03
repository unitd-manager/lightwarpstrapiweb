import { Instagram, Youtube } from "lucide-react";
import lightwarpLogo from "../assets/images/lightwarp_logo_icon.png";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[60px] gap-x-[40px] p-[32px] md:p-[60px] lg:p-[100px]">

        {/* Logo */}
        <div className="flex items-start">
          <a href="/">
            <img
              src={lightwarpLogo}
              alt="Lightwarp"
              className="h-auto w-full max-w-[68px] lg:max-w-full object-contain"
            />
          </a>
        </div>

        {/* Contact for Inquiries */}
        <div>
          <h6
            className="uppercase text-white leading-[30px] mb-[20px]"
            style={{ fontSize: '20px', fontWeight: 400 }}
          >
            Contact for Inquiries
          </h6>
          <ul className="space-y-[8px]">
            <li>
              <a
                href="mailto:info@lightwarp3d.com?subject=Consultation/Information Request"
                className="text-white hover:text-white/80 transition-colors"
                style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
              >
                Email: info@lightwarp3d.com
              </a>
            </li>
            <li>
              <a
                href="tel:615-571-9395"
                className="text-white hover:text-white/80 transition-colors"
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
            className="uppercase text-white leading-[30px] mb-[20px]"
            style={{ fontSize: '20px', fontWeight: 400 }}
          >
            Follow
          </h6>
          <div className="flex items-center gap-3">
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/lightwarp3d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              aria-label="TikTok"
              href="https://www.tiktok.com/@lightwarp3d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
            >
              <TikTokIcon size={20} />
            </a>
            <a
              aria-label="YouTube"
              href="https://www.youtube.com/@lightwarpstudios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
            >
              <Youtube size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Meet with us */}
        <div>
          <h6
            className="uppercase text-white leading-[30px] mb-[20px]"
            style={{ fontSize: '20px', fontWeight: 400 }}
          >
            Meet With Us
          </h6>
          <a
            href="https://calendar.app.google/zYHnxEYxui76S9tR6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors"
            style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
          >
            Schedule a meeting
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 px-[32px] md:px-[60px] lg:px-[100px] py-5">
        <p
          className="text-white"
          style={{ fontSize: '16px', fontWeight: 300, lineHeight: '24px' }}
        >
          &copy;2026.&nbsp;Lightwarp LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
