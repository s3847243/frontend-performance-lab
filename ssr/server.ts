import fs from "node:fs";
import path from "node:path";
import express from "express";

const isProd = process.env.NODE_ENV === "production";
const port = Number(process.env.PORT) || 5174;

async function createServer() {
  const app = express();

  if (!isProd) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      root: path.resolve(__dirname),
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use(vite.middlewares);

   app.use(async (req, res) => {
      try {
        const url = req.originalUrl;

        let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);

        const mod = await vite.ssrLoadModule("/entry-server.tsx");

        const { html, head } = mod.render(url);

        const isCsr = url.startsWith("/csr");

        const out = template
          .replace("<!--app-head-->", head)
          .replace("<!--app-html-->", isCsr ? "" : html);


        res.status(200).set({ "Content-Type": "text/html" }).end(out);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        console.error(e);
        res.status(500).end(e?.message);
      }
    });

  } else {
    const clientDir = path.resolve(__dirname, "../dist-ssr/client");
    const serverEntry = path.resolve(__dirname, "../dist-ssr/server/entry-server.js");

    app.use(express.static(clientDir, { index: false }));

    app.use( async (req, res) => {
      const url = req.originalUrl;
      const template = fs.readFileSync(path.join(clientDir, "index.html"), "utf-8");

      const mod = await import(serverEntry);
      const { html, head } = mod.render(url);

      const out = template
        .replace("<!--app-head-->", head)
        .replace("<!--app-html-->", html);

      res.status(200).set({ "Content-Type": "text/html" }).end(out);
    });
  }

  app.listen(port, () => {
    console.log(`SSR server running at http://localhost:${port}`);
  });
}

createServer();
