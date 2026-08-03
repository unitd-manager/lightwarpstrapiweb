// src/lib/logNotFound.ts
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;

// Fire-and-forget: reports a 404 hit to Strapi so it can be reviewed later
// under Content Manager -> Not Found Log. Never throws, never blocks render.
export function logNotFound(pathname: string) {
  try {
    fetch(`${STRAPI_URL}/api/not-found-logs/log`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: pathname,
        referrer: typeof document !== "undefined" ? document.referrer || null : null,
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Logging must never break the page.
  }
}