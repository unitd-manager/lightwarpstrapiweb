import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import lightwarpLogo from "../assets/images/lightwarp_transparent.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black">
      {/* ── Fixed 100px header row ── */}
      <div className="w-full px-4 sm:px-6 h-[100px] flex items-center">

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
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src={lightwarpLogo}
              alt="Lightwarp"
              className="h-14 w-auto object-contain"
              decoding="async"
              draggable={false}
            />
          </Link>

          {/* Right spacer – same width as hamburger to keep logo centered */}
          <div className="w-9 h-9 flex-shrink-0" />
        </div>

        {/* ── Desktop nav row: logo | links | contact ── */}
        <nav className="hidden md:flex mx-auto max-w-full w-full items-center justify-between relative">

          {/* Logo */}
          <Link to="/" className="z-10 flex-shrink-0">
            <img
              src={lightwarpLogo}
              alt="Lightwarp"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Center nav links */}
          <ul className="flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`text-[18px] font-semibold tracking-[-0.2px] transition-colors ${
                      active
                        ? "text-[#6250DA]"
                        : "text-white/70 hover:text-[#6250DA]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#6250DA] px-6 py-2.5 text-base font-semibold text-white hover:bg-[#7361e8] transition-all duration-300"
          >
            Contact Now
          </Link>
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
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to} className="w-full text-center">
                  <Link
                    to={l.to}
                    className={`block py-3 text-lg font-semibold transition-colors ${
                      active ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="px-6 pb-6">
            <Link
              to="/contact"
              className="block w-full text-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Contact Now
            </Link>
          </div>
        </motion.div>
      )}

    </header>
  );
}