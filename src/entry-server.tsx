// src/entry-server.tsx
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

// Comprehensive global mocks for SSR
if (typeof window === 'undefined') {
  global.window = {
    location: { href: '', pathname: '/', search: '', hash: '' },
    matchMedia: () => ({ matches: false, addListener: () => {}, removeListener: () => {} }),
    addEventListener: () => {},
    removeEventListener: () => {},
    scrollTo: () => {},
    getComputedStyle: () => ({}),
    innerWidth: 1024,
    innerHeight: 768,
    navigator: { userAgent: 'SSR' },
    document: {},
    localStorage: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {}
    },
    sessionStorage: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {}
    }
  } as any;

  global.document = {
    createElement: () => ({ setAttribute: () => {}, appendChild: () => {} }),
    createElementNS: () => ({ setAttribute: () => {}, appendChild: () => {} }),
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    head: { appendChild: () => {}, removeChild: () => {} },
    body: { appendChild: () => {}, removeChild: () => {} },
    title: '',
    addEventListener: () => {},
    removeEventListener: () => {}
  } as any;

  global.navigator = {
    userAgent: 'SSR'
  } as any;

  global.localStorage = global.window.localStorage as any;
  global.sessionStorage = global.window.sessionStorage as any;
}

export function render(url: string) {
  try {
    return ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
    );
  } catch (error) {
    console.error('SSR render error:', error);
    throw error;
  }
}
