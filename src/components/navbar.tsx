import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { TransitionLink } from "./page-transition-overlay";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;

interface NavLink {
  Label: string;
  URL: string;
  Publish?: boolean;
}

interface StrapiMedia {
  url: string;
  alternativeText?: string;
}

export interface NavbarData {
  Publish?: boolean;
  Logo?: StrapiMedia;
  LogoLink?: string;
  NavLinks?: NavLink[];
  CTALabel?: string;
  CTAURL?: string;
}

export function Navbar({ data }: { data?: NavbarData }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Whole header hidden if its own publish flag is explicitly false.
  if (data?.Publish === false) {
    return null;
  }

  const {
    Logo,
    LogoLink = "/",
    NavLinks = [],
    CTALabel = "Contact Now",
    CTAURL = "/contact",
  } = data ?? {};

  // Only show nav links that are explicitly published (or don't have the flag yet).
  const visibleNavLinks = NavLinks.filter((l) => l.Publish !== false);

  const logoSrc = Logo?.url
    ? Logo.url.startsWith("http")
      ? Logo.url
      : `${STRAPI_URL}${Logo.url}`
    : undefined;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black border-b border-white/10">
      {/* ── Fixed 100px header row ── */}
      <div className="lw-container h-[75px] flex items-center">

        {/* ── Mobile nav row: hamburger | logo | spacer ── */}
        <div className="md:hidden relative flex items-center justify-between w-full">
          {/* Hamburger / Close – LEFT, orange to match brand */}
          <button
            aria-label="Toggle menu"
            className="h-9 w-9 inline-flex items-center justify-center flex-shrink-0"
            style={{ color: "#FF4500" }}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Logo – CENTER */}
          <TransitionLink to={LogoLink} className="absolute left-1/2 -translate-x-1/2">
            {logoSrc && (
              <img
                data-logo-beacon
                src={logoSrc}
                alt={Logo?.alternativeText ?? "Logo"}
                className="h-14 w-auto object-contain"
                decoding="async"
                draggable={false}
              />
            )}
          </TransitionLink>

          {/* Right spacer – same width as hamburger to keep logo centered */}
          <div className="w-9 h-9 flex-shrink-0" />
        </div>

        {/* ── Desktop nav row: logo | links | contact ── */}
        <nav className="hidden md:flex w-full items-center justify-between relative">

          {/* Logo */}
          <TransitionLink to={LogoLink} className="z-10 flex-shrink-0">
            {logoSrc && (
              <img
                data-logo-beacon
                src={logoSrc}
                alt={Logo?.alternativeText ?? "Logo"}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            )}
          </TransitionLink>

          {/* Center nav links */}
          <ul className="flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {visibleNavLinks.map((l) => {
              const active = pathname === l.URL;
              return (
                <li key={l.URL}>
                  <TransitionLink
                    to={l.URL}
                    className={`text-[18px] font-semibold tracking-[-0.2px] transition-all underline-offset-8 decoration-[#6250DA] hover:underline hover:text-[#6250DA] ${
                      active ? "text-white" : "text-white/70"
                    }`}
                  >
                    {l.Label}
                  </TransitionLink>
                </li>
              );
            })}
          </ul>

          {/* Contact button */}
          <TransitionLink
            to={CTAURL}
            className="inline-flex items-center gap-2 rounded-full bg-[#6250DA] px-6 py-2.5 text-base font-semibold text-white hover:bg-[#7361e8] transition-all duration-300"
          >
            {CTALabel}
          </TransitionLink>
        </nav>

      </div>

      {/* ── Mobile dropdown – outside the 100px row so it's never clipped ── */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden w-full bg-black border-t border-white/10"
        >
          <ul className="flex flex-col items-center py-4 gap-1">
            {visibleNavLinks.map((l) => {
              const active = pathname === l.URL;
              return (
                <li key={l.URL} className="w-full text-center">
                  <TransitionLink
                    to={l.URL}
                    className={`block py-3 text-lg font-semibold transition-colors ${
                      active ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {l.Label}
                  </TransitionLink>
                </li>
              );
            })}
          </ul>
          <div className="px-6 pb-6">
            <TransitionLink
              to={CTAURL}
              className="block w-full text-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              {CTALabel}
            </TransitionLink>
          </div>
        </motion.div>
      )}

    </header>
  );
}