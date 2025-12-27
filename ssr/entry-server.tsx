import React from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App";

export function render(url: string) {
  const html = renderToString(<App />);

  const mode = url.startsWith("/csr") ? "CSR" : "SSR";

  const head = `
    <title>${mode} Job Listings</title>
    <meta name="description" content="Vite ${mode} demo with hydration." />
  `;

  return { html, head };
}
