import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export function render(url: string) {
  try {
    return ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    );
  } catch (error) {
    console.error(`[SSR] Failed to render ${url}:`, error);
    // Return a basic fallback HTML that will hydrate on client
    return `<div id="root"></div>`;
  }
}
