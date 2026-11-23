import { mkdirSync, writeFileSync } from "node:fs";

// The Vacuum's Alibi: one line, 200 characters or fewer.
// A deadpan robot-vacuum excuse for missing a spot.
const ENTRY =
  "My wheels spun, my brush spun, the dirt stayed. I have logged it as a load-bearing crumb and moved on.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
