import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, HelmetServerState } from "react-helmet-async";
import App from "./App";

export function render(url: string): { appHtml: string; helmet: HelmetServerState } {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const appHtml = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  return { appHtml, helmet: helmetContext.helmet! };
}
