import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { MouseLight } from "./mouse-light";

export function PageShell({
  children,
  copyrightText,
}: {
  children: ReactNode;
  copyrightText?: string;
}) {
  const { pathname } = useLocation();
  return (
    <div className="relative min-h-screen">
      <MouseLight />
      <Navbar />
    
          <div className="pt-[75px]">{children}</div>
          <Footer copyrightText={copyrightText} />
     
    </div>
  );
}