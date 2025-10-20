// @ts-nocheck
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

// Mock minimal browser globals for SSR
if (typeof window === 'undefined') {
  global.window = {
    location: { search: '', href: '', pathname: '/' },
    matchMedia: () => ({ matches: false, addEventListener: () => {}, removeEventListener: () => {} }),
    addEventListener: () => {},
    removeEventListener: () => {},
    scrollTo: () => {},
    open: () => null,
    innerWidth: 1024,
    dataLayer: []
  };
  global.document = {
    createElement: () => ({ setAttribute: () => {}, addEventListener: () => {} }),
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    head: { appendChild: () => {}, contains: () => false, removeChild: () => {} },
    body: { appendChild: () => {} },
    cookie: ''
  };
}

export function render(url: string) {
  try {
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    );
    return html;
  } catch (error) {
    console.error('SSR Error for', url, ':', error);
    return '<div>Error rendering page</div>';
  }
}
