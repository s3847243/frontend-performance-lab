import React from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App";

export function render(url: string) {
  const html = renderToString(<App />);

  // “SEO” meta tags (SSR output)
  const head = `
    <title>SSR Job Listings</title>
    <meta name="description" content="A tiny Vite SSR demo with hydration and meta tags." />
    <meta property="og:title" content="SSR Job Listings" />
    <meta property="og:description" content="Server-rendered HTML + client hydration with Vite." />
  `;

  return { html, head };
}
