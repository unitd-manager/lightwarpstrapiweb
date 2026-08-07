import { useEffect } from "react";

export function usePageTitle(seoTitle?: string, fallback = "Lightwarp — 3D Animation & Cinematic Visual Studio") {
  useEffect(() => {
    document.title = seoTitle || fallback;
  }, [seoTitle, fallback]);
}