// prerender.js (ESM, works because package.json has "type": "module")
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const toAbs = (p) => path.resolve(__dirname, p);

function log(...a) { console.log("[prerender]", ...a); }
function fail(msg, err) {
  console.error("[prerender] ERROR:", msg);
  if (err) console.error(err);
  process.exit(1);
}

// Verify artifacts
const templatePath = toAbs("dist/index.html");
if (!fs.existsSync(templatePath)) fail("dist/index.html not found. Did client build run?");
const serverEntryRel = "./dist/server/entry-server.js";
const serverEntryPath = toAbs(serverEntryRel);
if (!fs.existsSync(serverEntryPath)) fail("dist/server/entry-server.js not found. Did server build run?");

const template = fs.readFileSync(templatePath, "utf-8");
const { render } = await import(serverEntryRel);
if (typeof render !== "function") fail("Named export `render` not found in SSR bundle");

// Routes extracted from App.tsx - keep in sync with routing configuration
const routesToPrerender = [
  "/",
  "/about",
  "/contact",
  "/commercial",
  "/services",
  "/book",
  "/blog",
  "/faq",
  "/terms",
  "/privacy",
  "/service-areas",
  "/santa-barbara",
  "/montecito",
  "/thousand-oaks",
  "/oxnard",
  "/camarillo",
  "/ventura",
  "/ojai",
  "/summerland",
  "/carpinteria",
  "/port-hueneme",
  "/newbury-park",
  "/westlake-village",
  "/thank-you",
  "/contact-thank-you",
  "/van",
  // Service Routes
  "/services/essential-clean",
  "/services/signature-clean",
  "/services/total-deep-clean",
  "/services/move-in-move-out",
  "/services/post-construction",
  "/services/commercial-cleaning",
  "/services/whats-included-in-cleaning",
  // 301 redirect routes (still worth a static page for crawlers/bookmarks)
  "/services/regular-house-cleaning",
  "/services/deep-cleaning",
  "/services/vacation-rental",
  // Location-specific service routes
  "/thousand-oaks/move-out-cleaning",
  "/thousand-oaks/post-construction-cleaning",
  "/ventura/move-out-cleaning",
  "/ventura/post-construction-cleaning",
  "/camarillo/move-out-cleaning",
  "/camarillo/post-construction-cleaning",
  "/westlake-village/post-construction-cleaning",
  "/santa-barbara/post-construction-cleaning",
  "/westlake-village/move-out-cleaning",
  "/santa-barbara/move-out-cleaning",
  "/ojai/move-out-cleaning",
  "/ojai/post-construction-cleaning",
  "/oxnard/move-out-cleaning",
  "/oxnard/post-construction-cleaning",
  "/santa-paula",
  "/santa-paula/move-out-cleaning",
  "/santa-paula/post-construction-cleaning",
  "/carpinteria/move-out-cleaning",
  "/carpinteria/post-construction-cleaning",
  "/crm-test",
  "/move-service-agreement",
];

const SITE_BASE_URL = "https://twotreescleaning.com";

function applyHeadTags(html, helmet, url) {
  if (!helmet) return html;

  const title = helmet.title ? helmet.title.toString() : "";
  const metaHtml = helmet.meta ? helmet.meta.toString() : "";
  const linkHtml = helmet.link ? helmet.link.toString() : "";
  const scriptHtml = helmet.script ? helmet.script.toString() : "";

  let result = html;

  // helmet.title.toString() always returns a `<title>` tag wrapper once
  // HelmetProvider has rendered, even when no page ever set one — only
  // replace the static default when there's real text inside the tag.
  const titleMatch = title.match(/<title[^>]*>([^<]*)<\/title>/);
  if (titleMatch && titleMatch[1].trim().length > 0) {
    result = result.replace(/<title>[\s\S]*?<\/title>/, title);
  }

  // Strip any static default <meta> tag whose name/property is also being
  // set by this page's Helmet, so the two don't end up duplicated (e.g. a
  // page-specific og:title/twitter:description alongside the generic ones
  // hardcoded in index.html).
  const overriddenKeys = new Set();
  const metaKeyRe = /<meta[^>]*\s(?:name|property)="([^"]+)"/g;
  let keyMatch;
  while ((keyMatch = metaKeyRe.exec(metaHtml))) {
    overriddenKeys.add(keyMatch[1]);
  }
  overriddenKeys.forEach((key) => {
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const staticTagRe = new RegExp(
      `<meta[^>]*\\s(?:name|property)="${escapedKey}"[^>]*>\\s*`,
      "g"
    );
    result = result.replace(staticTagRe, "");
  });

  const canonicalHtml = linkHtml.includes('rel="canonical"')
    ? ""
    : `<link rel="canonical" href="${SITE_BASE_URL}${url === "/" ? "" : url}">`;

  result = result.replace(
    "</head>",
    `${metaHtml}${linkHtml}${canonicalHtml}${scriptHtml}</head>`
  );

  return result;
}

let ok = 0;
for (const url of routesToPrerender) {
  try {
    const { appHtml, helmet } = render(url);
    let html = template.replace("<!--app-html-->", appHtml);
    html = applyHeadTags(html, helmet, url);
    const outPath = `dist${url === "/" ? "/index" : url}.html`;
    fs.mkdirSync(path.dirname(toAbs(outPath)), { recursive: true });
    fs.writeFileSync(toAbs(outPath), html);
    log("pre-rendered:", outPath);
    ok++;
  } catch (err) {
    fail(`Rendering failed for route "${url}"`, err);
  }
}

log(`Prerender finished OK: ${ok}/${routesToPrerender.length} routes.`);
