## Problem

`index.html` currently sets:

```
<meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
<meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
```

That's why link previews in iMessage, Facebook, LinkedIn, Slack, etc. show a Lovable-branded card instead of Two Trees Cleaning.

## Fix

1. Generate a 1200×630 branded social preview image (Two Trees green `#0d483f` + gold `#d4af37`, "Two Trees Cleaning — Professional House Cleaning in Ventura County", clean, no Lovable branding) and save it to `public/og-image.jpg` so it's served at `https://twotreescleaning.com/og-image.jpg`.
2. Update `index.html`:
   - Point `og:image` and `twitter:image` at `https://twotreescleaning.com/og-image.jpg`.
   - Add `og:image:width` (1200), `og:image:height` (630), and `og:image:alt`.
3. Confirm `og:title`, `og:description`, `og:url`, and `canonical` all say Two Trees Cleaning and point to `https://twotreescleaning.com/` (they already do — just verify).
4. Leave `src/utils/metaTags.ts` alone for social crawlers — iMessage/Facebook don't run JS, so they only read the static `index.html` head, which is what we're fixing.

## Important caveat to tell the user

iMessage, Facebook, LinkedIn, and Slack **cache** link previews aggressively. Even after we publish the fix, previously-shared links will keep showing the old Lovable image until the cache expires or is manually refreshed:

- Facebook/Instagram: https://developers.facebook.com/tools/debug/ → paste URL → "Scrape Again"
- LinkedIn: https://www.linkedin.com/post-inspector/ → paste URL → "Inspect"
- Twitter/X: repost the link from a fresh URL (Twitter no longer offers a public debugger)
- iMessage: previews are cached per-conversation for days; sending from a new thread or a slightly different URL (e.g. add `?v=2`) will force a refresh

## After the fix

You'll need to click **Publish → Update** for the new metadata to go live at twotreescleaning.com.