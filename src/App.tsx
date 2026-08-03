import { useLayoutEffect, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DynamicPage from "./routes/dynamic-page";
import Home from "./routes";
import About from "./routes/about";
import Contact from "./routes/contact";
import Projects from "./routes/projects";
import Capabilities from "./routes/capabilities";
import Services from "./routes/services";
import Privacy from "./routes/privacy";
import { TransitionProvider } from "./components/page-transition-overlay";
import CaseStudyPage from "./routes/projects/CaseStudyPage";
import { logNotFound } from "./lib/logNotFound";

function NotFound() {
  const location = useLocation();

  useEffect(() => {
    logNotFound(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <TransitionProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/projects/:slug" element={<CaseStudyPage />} />
        <Route path="/:slug" element={<DynamicPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TransitionProvider>
  );
}