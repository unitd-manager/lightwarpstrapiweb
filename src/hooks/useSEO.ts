import { useEffect } from "react";

interface SEOData {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  focusKeyword?: string;
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSEO(seo?: SEOData, fallbackTitle = "Lightwarp — 3D Animation & Cinematic Visual Studio") {
  useEffect(() => {
    const title = seo?.metaTitle || fallbackTitle;
    document.title = title;

    setMetaTag("name", "description", seo?.metaDescription || "");
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", seo?.metaDescription || "");
    if (seo?.ogImage) setMetaTag("property", "og:image", seo.ogImage);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", seo?.metaDescription || "");

    // Tell the prerender plugin (headless Chrome) that meta tags are
    // now in the DOM and it's safe to snapshot this route.
    document.dispatchEvent(new Event("app-rendered"));
  }, [seo, fallbackTitle]);
}