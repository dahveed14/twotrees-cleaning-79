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
  "/services/regular-house-cleaning",
  "/services/deep-cleaning",
  "/services/move-in-move-out",
  "/services/post-construction",
  "/services/commercial-cleaning",
  "/services/vacation-rental",
  "/services/whats-included-in-cleaning",
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
];

let ok = 0;
for (const url of routesToPrerender) {
  try {
    const appHtml = render(url);
    const html = template.replace("<!--app-html-->", appHtml);
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
