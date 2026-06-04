import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { MouseLight } from "./mouse-light";

export function PageShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="relative min-h-screen">
      <MouseLight />
      <Navbar />
    
          <div className="pt-[90px]">{children}</div>
          <Footer />
     
    </div>
  );
}
