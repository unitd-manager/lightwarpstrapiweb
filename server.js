import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createReadStream, promises as fs, readFileSync } from "node:fs";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadDotEnv() {
  try {
    const envPath = path.join(__dirname, ".env");
    const raw = readFileSync(envPath, "utf8");
    const lines = raw.split(/\r?\n/);

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      const idx = trimmed.indexOf("=");
      if (idx <= 0) continue;

      let key = trimmed.slice(0, idx).trim();
      let value = trimmed.slice(idx + 1).trim();

      if (key.startsWith("export ")) key = key.slice("export ".length).trim();
      if (!key) continue;

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      if (process.env[key] === undefined) process.env[key] = value;
    }
  } catch {
  }
}

loadDotEnv();

const PORT = Number(process.env.PORT || 3000);
const DIST_DIR = path.join(__dirname, "dist");

const CONTACT_ADMIN_EMAIL =
  process.env.CONTACT_ADMIN_EMAIL || "jasmine@unitdtechnologies.com";

const STRAPI_URL = process.env.VITE_STRAPI_URL || process.env.STRAPI_URL || "http://localhost:1337";
const REDIRECTS_REFRESH_MS = Number(process.env.REDIRECTS_REFRESH_MS || 5 * 60 * 1000); // 5 min
const SEO_CACHE_TTL_MS = Number(process.env.SEO_CACHE_TTL_MS || 5 * 60 * 1000); // 5 min

// In-memory redirect cache: normalized source path -> { destination, statusCode }
let redirectMap = new Map();

// In-memory SEO cache: "contentType:slug" -> { data: {title, description, image}, expiresAt }
const seoCache = new Map();

// Cache the index.html template once at boot (contains %%SEO_*%% placeholder tokens)
const indexHtmlPath = path.join(DIST_DIR, "index.html");
let indexHtmlTemplate = "";
try {
  indexHtmlTemplate = readFileSync(indexHtmlPath, "utf8");
} catch (err) {
  console.error("[seo] failed to read index.html template:", err?.message || err);
}

const SEO_DEFAULTS = {
  title: "Lightwarp — 3D Animation & Cinematic Visual Studio",
  description:
    "Lightwarp is a premium 3D animation studio illuminating brands through CGI, VFX, motion graphics, and immersive visual experiences.",
  image: "",
};

function normalizePath(p) {
  if (!p) return "/";
  // Strapi's "source" field may be stored as a full URL
  // (https://example.com/about1) or a relative path (/about1) — pull out
  // just the pathname either way so lookups match regardless of which was used.
  let out;
  try {
    out = new URL(p, "http://placeholder.local").pathname;
  } catch {
    out = p.split("?")[0].split("#")[0];
  }
  if (!out.startsWith("/")) out = "/" + out;
  if (out.length > 1 && out.endsWith("/")) out = out.slice(0, -1);
  return out.toLowerCase();
}

async function refreshRedirects() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/redirects/active`);
    if (!res.ok) throw new Error(`Strapi responded ${res.status}`);
    const json = await res.json();
    const rows = Array.isArray(json?.data) ? json.data : [];

    const next = new Map();
    for (const row of rows) {
      const source = row?.source;
      const destination = row?.destination;
      if (!source || !destination) continue;
      const statusCode = row?.statusCode === "302" ? 302 : 301;
      next.set(normalizePath(source), { destination, statusCode });
    }

    redirectMap = next;
  } catch (err) {
    // Strapi being down/unreachable should never take the site down —
    // keep serving with whatever redirect list we last had.
    console.error("[redirects] refresh failed:", err?.message || err);
  }
}

// Maps App.tsx routing to Strapi content types:
// "/projects/:slug" -> api::case-study.case-study
// everything else (incl. "/") -> api::page.page
function resolveContentType(urlPath) {
  const clean = normalizePath(urlPath).replace(/^\/+/, "");
  const segments = clean.split("/").filter(Boolean);

  if (segments[0] === "projects" && segments[1]) {
    return { contentType: "case-studies", slug: segments[1] };
  }

  const slug = segments.length === 0 ? "home" : segments[0];
  return { contentType: "pages", slug };
}

async function fetchSeoForRoute(urlPath) {
  const { contentType, slug } = resolveContentType(urlPath);
  const cacheKey = `${contentType}:${slug}`;

  const cached = seoCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.data;
  }

  try {
    const res = await fetch(
      `${STRAPI_URL}/api/${contentType}?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=seo`
    );
    if (!res.ok) throw new Error(`Strapi responded ${res.status}`);
    const json = await res.json();
    const entry = json?.data?.[0];
    const seo = entry?.attributes?.seo || entry?.seo;

    const data = seo
      ? {
          title: seo.metaTitle || SEO_DEFAULTS.title,
          description: seo.metaDescription || SEO_DEFAULTS.description,
          image: seo.ogImage?.url || seo.ogImage || SEO_DEFAULTS.image,
        }
      : SEO_DEFAULTS;

    seoCache.set(cacheKey, { data, expiresAt: Date.now() + SEO_CACHE_TTL_MS });
    return data;
  } catch (err) {
    console.error(`[seo] fetch failed for "${urlPath}" (${contentType}/${slug}):`, err?.message || err);
    // Serve stale cache if we have it, otherwise fall back to defaults —
    // Strapi being down should never break the page.
    return cached?.data || SEO_DEFAULTS;
  }
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectSeo(html, seo) {
  return html
    .replaceAll("%%SEO_TITLE%%", escapeHtml(seo.title))
    .replaceAll("%%SEO_DESCRIPTION%%", escapeHtml(seo.description))
    .replaceAll("%%SEO_IMAGE%%", escapeHtml(seo.image));
}

// Prime the caches at boot, then refresh redirects on an interval.
refreshRedirects();
setInterval(refreshRedirects, REDIRECTS_REFRESH_MS);

const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_SECURE = String(process.env.SMTP_SECURE || "true") === "true";
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const SMTP_TLS_REJECT_UNAUTHORIZED =
  process.env.SMTP_TLS_REJECT_UNAUTHORIZED === undefined
    ? true
    : String(process.env.SMTP_TLS_REJECT_UNAUTHORIZED) !== "false";

const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || SMTP_USER || "notification@unitdtechnologies.com";

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket.remoteAddress || "unknown";
}

const rateBuckets = new Map();
function rateLimitOk(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const limit = 10;

  const existing = rateBuckets.get(ip);
  if (!existing || existing.resetAt <= now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (existing.count >= limit) return false;
  existing.count += 1;
  return true;
}

let cachedTransporter;
function getTransporter() {
  if (cachedTransporter) return cachedTransporter;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;

  cachedTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: { rejectUnauthorized: SMTP_TLS_REJECT_UNAUTHORIZED },
  });

  return cachedTransporter;
}

function missingSmtpConfig() {
  const missing = [];
  if (!SMTP_HOST) missing.push("SMTP_HOST");
  if (!SMTP_USER) missing.push("SMTP_USER");
  if (!SMTP_PASS) missing.push("SMTP_PASS");
  return missing;
}

function json(res, statusCode, body) {
  const payload = JSON.stringify(body);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(payload),
  });
  res.end(payload);
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");

  const contentType = String(req.headers["content-type"] || "");
  if (contentType.includes("application/json")) {
    try {
      return raw ? JSON.parse(raw) : {};
    } catch {
      return { __invalidJson: true };
    }
  }
  if (contentType.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams(raw);
    return Object.fromEntries(params.entries());
  }

  return null;
}

function contentTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".js":
      return "application/javascript; charset=utf-8";
    case ".mjs":
      return "application/javascript; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".svg":
      return "image/svg+xml";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    case ".ico":
      return "image/x-icon";
    case ".txt":
      return "text/plain; charset=utf-8";
    default:
      return "application/octet-stream";
  }
}

// Serves index.html WITH per-route SEO tags injected (used for the SPA shell).
async function serveIndexWithSeo(req, res, urlPath) {
  const seo = await fetchSeoForRoute(urlPath);
  const html = indexHtmlTemplate ? injectSeo(indexHtmlTemplate, seo) : "";

  if (!html) {
    res.writeHead(500);
    res.end("Server error");
    return;
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
}

async function serveStatic(req, res, urlPath) {
  const safePath = urlPath.replace(/\0/g, "");
  const isAssetPath = safePath.includes(".") && !safePath.endsWith(".");

  if (!isAssetPath) {
    // Any non-asset request (SPA route) gets index.html with real per-page
    // meta tags injected — this is what shows up in "View Page Source".
    await serveIndexWithSeo(req, res, urlPath);
    return;
  }

  const filePath = path.join(DIST_DIR, safePath);

  try {
    const stat = await fs.stat(filePath);
    if (!stat.isFile()) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, { "Content-Type": contentTypeFor(filePath) });
    createReadStream(filePath).pipe(res);
  } catch {
    // Asset not found — fall back to the SPA shell rather than a bare 404,
    // matching the previous behavior.
    await serveIndexWithSeo(req, res, urlPath);
  }
}

async function handleContact(req, res) {
  const ip = getClientIp(req);
  if (!rateLimitOk(ip)) {
    json(res, 429, { ok: false, error: "Too many requests." });
    return;
  }

  const body = await readBody(req);
  if (!body) {
    json(res, 415, { ok: false, error: "Unsupported content type." });
    return;
  }
  if (body.__invalidJson) {
    json(res, 400, { ok: false, error: "Invalid JSON." });
    return;
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const subject = String(body.subject || "").trim();
  const message = String(body.message || "").trim();
  const website = String(body.website || "").trim();

  if (website) {
    json(res, 200, { ok: true });
    return;
  }

  if (!email || !message) {
    json(res, 400, { ok: false, error: "Email and message are required." });
    return;
  }

  const transporter = getTransporter();
  if (!transporter) {
    json(res, 500, {
      ok: false,
      error: "Email service is not configured.",
      missing: missingSmtpConfig(),
    });
    return;
  }

  const mailSubject = subject ? `Contact Form: ${subject}` : "Contact Form Submission";
  const text = [
    `Name: ${name || "-"}`,
    `Email: ${email}`,
    subject ? `Subject: ${subject}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_ADMIN_EMAIL,
      replyTo: email,
      subject: mailSubject,
      text,
    });
  } catch (err) {
    const code = err && typeof err === "object" && "code" in err ? String(err.code) : undefined;
    json(res, 502, { ok: false, error: "Failed to send email.", code });
    return;
  }

  json(res, 200, { ok: true });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

    if (url.pathname === "/api/contact" && req.method === "POST") {
      await handleContact(req, res);
      return;
    }

    // Lets you force an immediate cache refresh from Strapi after adding/editing
    // a redirect, instead of waiting for the interval (protect this in prod if needed).
    if (url.pathname === "/api/redirects/refresh" && req.method === "POST") {
      await refreshRedirects();
      json(res, 200, { ok: true, count: redirectMap.size });
      return;
    }

    // Same idea for SEO — clear the cache after editing SEO fields in Strapi
    // instead of waiting for SEO_CACHE_TTL_MS to expire.
    if (url.pathname === "/api/seo/refresh" && req.method === "POST") {
      seoCache.clear();
      json(res, 200, { ok: true });
      return;
    }

    if (url.pathname.startsWith("/api/")) {
      json(res, 404, { ok: false, error: "Not found." });
      return;
    }

    if (req.method !== "GET" && req.method !== "HEAD") {
      res.writeHead(405);
      res.end("Method not allowed");
      return;
    }

    const redirect = redirectMap.get(normalizePath(url.pathname));
    if (redirect) {
      res.writeHead(redirect.statusCode, { Location: redirect.destination });
      res.end();
      return;
    }

    const pathname = url.pathname === "/" ? "/" : url.pathname;
    await serveStatic(req, res, pathname);
  } catch {
    try {
      const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
      if (url.pathname.startsWith("/api/")) {
        json(res, 500, { ok: false, error: "Server error." });
        return;
      }
    } catch {
    }
    res.writeHead(500);
    res.end("Server error");
  }
});

server.listen(PORT, () => {
});