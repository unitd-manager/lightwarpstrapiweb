import { Route, Routes } from "react-router-dom";

import Home from "./routes";
import Portfolio from "./routes/portfolio";
import About from "./routes/about";
import Contact from "./routes/contact";
import Projects from "./routes/projects";
import ShellYouBeMine from "./routes/projects/shell-you-be-mine";
import OurCapabilities from "./routes/projects/our-capabilities";
import Stuffed from "./routes/projects/stuffed";
import TheJab from "./routes/projects/the-jab";
import SamsungS7Ad from "./routes/projects/samsung-s7-ad";
import CaughtOffGuard from "./routes/projects/caught-off-guard";
import Cyberia2084 from "./routes/projects/cyberia-2084";
import StrayVistaStudios from "./routes/projects/stray-vista-studios";
import Services from "./routes/services";
import Privacy from "./routes/privacy";
import { PageTransitionOverlay } from "./components/page-transition-overlay";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
    <PageTransitionOverlay />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio /> } />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/shell-you-be-mine" element={<ShellYouBeMine />} />
      <Route path="/projects/our-capabilities" element={<OurCapabilities />} />
      <Route path="/projects/stuffed" element={<Stuffed />} />
      <Route path="/projects/the-jab" element={<TheJab />} />
      <Route path="/projects/samsung-s7-ad" element={<SamsungS7Ad />} />
      <Route path="/projects/caught-off-guard" element={<CaughtOffGuard />} />
      <Route path="/projects/cyberia-2084" element={<Cyberia2084 />} />
      <Route path="/projects/stray-vista-studios" element={<StrayVistaStudios />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}
