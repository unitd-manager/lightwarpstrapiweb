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
    <header
      className="
        fixed top-0 left-0 right-0
        z-[9999]
        h-[80px]
        bg-black/80
        backdrop-blur-md
        border-b border-white/10
      "
    >
      <div className="h-full px-4 sm:px-6 flex items-center">
        <nav className="mx-auto w-full flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={lightwarpLogo}
              alt="Lightwarp"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`text-[18px] font-semibold transition ${
                    pathname === l.to
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-10 ml-auto">
            <Link
              to="/contact"
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-white font-semibold hover:shadow-lg transition"
            >
              Contact Now
            </Link>

            <button
              className="md:hidden h-9 w-9 text-white"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    open
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            md:hidden
            absolute top-[80px]
            left-0 right-0
            bg-black/95
            backdrop-blur-md
            border-b border-white/10
            p-4
          "
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
            >
              {l.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}