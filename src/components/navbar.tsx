import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import lightwarpLogo from "../assets/images/lightwarp_transparent.png";

const links = [
  { to: "/",          label: "Home"      },
  { to: "/services",  label: "Services"  },
  { to: "/projects",  label: "Projects"  },
  { to: "/about",     label: "About"     },
] as const;

const socialNav = [
  { label: "Instagram", href: "https://www.instagram.com/lightwarp3d",     Icon: Instagram },
  { label: "YouTube",   href: "https://www.youtube.com/@lightwarpstudios", Icon: Youtube   },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/lightwarp", Icon: Linkedin  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { pathname }            = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black border-b border-white/[0.06]">
      <div className="w-full px-4 sm:px-6 py-4">
        <nav className="mx-auto max-w-full flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="z-10 flex-shrink-0">
            <img
              src={lightwarpLogo}
              alt="Lightwarp"
              className="h-14 w-auto object-contain"
              decoding="async"
              draggable={false}
            />
          </Link>

          {/* Center nav links - desktop only */}
          <ul className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`text-[18px] font-semibold tracking-[-0.2px] transition-colors ${
                      active ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side: social icons + Contact */}
          <div className="flex items-center gap-3 md:gap-5 ml-auto">
            
            {/* Social icons - desktop only 
            <div className="hidden md:flex items-center gap-3">
              {socialNav.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>*/}

            {/* Contact button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Contact Now
            </Link>

            {/* Hamburger - mobile only */}
            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-white"
              onClick={() => setOpen((v) => !v)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-black rounded-2xl p-4 border border-white/10"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-base font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-4 px-4">
              {socialNav.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
 
