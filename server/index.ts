import { createServer } from "vite";
import path from "path";

async function start() {
  const root = path.resolve(import.meta.dirname, "..");

  const server = await createServer({
    configFile: path.resolve(root, "vite.config.ts"),
    server: {
      host: "0.0.0.0",
      port: parseInt(process.env.PORT || "5000", 10),
      allowedHosts: true,
    },
  });

  await server.listen();
  server.printUrls();
}

start();
