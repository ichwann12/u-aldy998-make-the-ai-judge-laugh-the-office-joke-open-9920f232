// Make the AI Judge Laugh: the Office Joke Open
// Writes the single-line office joke from entry.txt to /output/entry.txt.
// Node 22, stdlib only: no network, no wall clock, no files outside the repo.

import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate requires 1-200 UTF-8 characters, not only whitespace. The file
// written to the output dir is exactly the line, with no trailing newline,
// so its byte count equals its character count.
const line = readFileSync(join(botDir, "entry.txt"), "utf8").trimEnd();

if (line.length === 0 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
