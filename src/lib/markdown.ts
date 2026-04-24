import fs from "fs";
import path from "path";
import { marked } from "marked";

export function getMarkdownContent(filename: string): string {
  const filePath = path.join(process.cwd(), "src", "content", `${filename}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  return marked(raw) as string;
}
