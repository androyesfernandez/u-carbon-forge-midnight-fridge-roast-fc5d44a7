// Midnight Fridge Roast — competition entry (slug: u-carbon-forge-midnight-fridge-roast-fc5d44a7).
// Writes one original one-line roast of a smart fridge that refuses to open
// after midnight to /output/entry.txt. The guards below enforce the
// competition's one-line, 1-200 character rule before any file is written.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "At 2 a.m. my fridge locks the cheese behind a bedtime it invented for itself, then stays up all night humming to itself in the dark while it grades my hunger in Celsius and fails me for knocking.";

// The entry must be a single line of 1-200 characters: enforce that loudly
// before anything is written, so a bad line fails fast instead of shipping.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`LINE must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim() === "") {
  throw new Error("LINE must not be empty");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must not contain line breaks");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
