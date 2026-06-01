import { Instagram, Youtube } from "lucide-react";
import lightwarpLogo from "../assets/images/lightwarp_transparent.png";

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">

      {/* Main grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-4">

        {/* Logo */}
        <div className="flex items-start">
          <a href="/">
            <img
              src={lightwarpLogo}
              alt="Lightwarp"
              className="h-20 w-auto object-contain"
            />
          </a>
        </div>

        {/* Contact for Inquiries */}
        <div>
          <h6 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Contact for Inquiries
          </h6>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="mailto:info@lightwarp3d.com?subject=Consultation/Information Request"
                className="hover:text-white transition-colors"
              >
                Email: info@lightwarp3d.com
              </a>
            </li>
            <li>
              <a href="tel:615-571-9395" className="hover:text-white transition-colors">
                Phone: (615) 571-9395
              </a>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h6 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Follow
          </h6>
          <div className="flex items-center gap-3">
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/lightwarp3d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              aria-label="TikTok"
              href="https://www.tiktok.com/@lightwarp3d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <TikTokIcon size={20} />
            </a>
            <a
              aria-label="YouTube"
              href="https://www.youtube.com/@lightwarpstudios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Youtube size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Meet with us */}
        <div>
          <h6 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Meet with us
          </h6>
          <a
            href="https://calendar.app.google/zYHnxEYxui76S9tR6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white hover:underline"
          >
            Schedule a meeting
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/5 py-5 px-6">
        <p className="text-center text-xs text-muted-foreground">
          &copy;2026.&nbsp;Lightwarp LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
