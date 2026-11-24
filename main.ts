// The Vacuum's Alibi — round 2 iteration entry.
// One line, at most 200 characters: a robot vacuum's deadpan excuse
// for missing a spot. Fresh premise: the dust unionised.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I did not miss that spot — the dust unionised, filed a grievance, and my contract forbids me from crossing a picket line.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (ENTRY.length > 200 || ENTRY.length < 1) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
