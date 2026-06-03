import type { AstroIntegration } from "astro";
import { promises as fs } from "node:fs";
import * as path from "node:path";

export function pagefindCopier(): AstroIntegration {
  return {
    name: "pagefind-copier",
    hooks: {
      "astro:build:done": async () => {
        const pagefindSourceDir = path.join("./dist", "pagefind");
        const pagefindDestDir = path.join("./.vercel/output/static", "pagefind");

        await fs.mkdir(pagefindDestDir, { recursive: true });

        async function copyDir(src: string, dest: string) {
          const entries = await fs.readdir(src, { withFileTypes: true });
          for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);
            if (entry.isDirectory()) {
              await fs.mkdir(destPath, { recursive: true });
              await copyDir(srcPath, destPath);
            } else {
              await fs.copyFile(srcPath, destPath);
            }
          }
        }

        await copyDir(pagefindSourceDir, pagefindDestDir);
      },
    },
  };
}
