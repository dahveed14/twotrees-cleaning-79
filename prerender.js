import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// All routes to prerender - extracted from App.tsx
const routesToPrerender = [
  '/',
  '/about',
  '/contact',
  '/commercial',
  '/services',
  '/book',
  '/blog',
  '/faq',
  '/terms',
  '/privacy',
  '/service-areas',
  '/santa-barbara',
  '/montecito',
  '/thousand-oaks',
  '/oxnard',
  '/camarillo',
  '/ventura',
  '/ojai',
  '/summerland',
  '/carpinteria',
  '/port-hueneme',
  '/newbury-park',
  '/westlake-village',
  '/thank-you',
  '/contact-thank-you',
  '/services/regular-house-cleaning',
  '/services/deep-cleaning',
  '/services/move-in-move-out',
  '/services/post-construction',
  '/services/commercial-cleaning',
  '/services/vacation-rental',
  '/services/whats-included-in-cleaning',
  '/thousand-oaks/move-out-cleaning',
  '/thousand-oaks/post-construction-cleaning',
  '/ventura/move-out-cleaning',
  '/ventura/post-construction-cleaning',
  '/camarillo/move-out-cleaning',
  '/camarillo/post-construction-cleaning',
  '/westlake-village/post-construction-cleaning',
  '/santa-barbara/post-construction-cleaning',
  '/westlake-village/move-out-cleaning',
  '/santa-barbara/move-out-cleaning',
  '/ojai/move-out-cleaning',
  '/ojai/post-construction-cleaning',
  '/oxnard/move-out-cleaning',
  '/oxnard/post-construction-cleaning',
  '/santa-paula',
  '/santa-paula/move-out-cleaning',
  '/santa-paula/post-construction-cleaning',
  '/carpinteria/move-out-cleaning',
  '/carpinteria/post-construction-cleaning'
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url)
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const fileDir = path.dirname(toAbsolute(filePath))
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir, { recursive: true })
    }
    
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
  
  console.log(`\n✅ Successfully pre-rendered ${routesToPrerender.length} routes`)
})()
