import { promises as fs } from "node:fs";
import * as path from "node:path";

const src = "./dist/client/pagefind";
const dest = "./.vercel/output/static/pagefind";

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

await copyDir(src, dest);
console.log("Pagefind files copied to Vercel output.");
