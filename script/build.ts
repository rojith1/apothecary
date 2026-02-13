import { execSync } from "child_process";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");

execSync("npx vite build", {
  cwd: root,
  stdio: "inherit",
});
