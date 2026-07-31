import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      output: {
        // Split vendor deps from app code so the vendor chunk (which
        // changes far less often than app code) stays cached across
        // deploys for visitors who navigate multiple pages in a session.
        // This is a static-import-only split (no dynamic import()/React.lazy) —
        // the site prerenders every route via ReactDOMServer.renderToString,
        // which doesn't support Suspense-based lazy loading, so per-route
        // code splitting isn't safe here without a larger SSR rewrite.
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (/[\\/](react|react-dom|react-router-dom|scheduler)[\\/]/.test(id)) {
            return "react-vendor";
          }
          if (/[\\/](@radix-ui|lucide-react|class-variance-authority|tailwind-merge|clsx)[\\/]/.test(id)) {
            return "ui-vendor";
          }
          return "vendor";
        },
      }
    }
  },
  ssr: {
    // SSR entry point for prerendering
    noExternal: ['react-helmet-async'],
  },
  assetsInclude: ['**/*.xml'],
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
