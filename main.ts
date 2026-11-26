import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Vacuum's Funniest Excuse — one line, at most 120 characters,
// in the vacuum's own voice: a cleaning machine allergic to the one thing
// it exists to remove, excused from duty by HR.
const LINE =
  "I'm allergic to dust, and HR says I don't have to clean what I'm allergic to.";

// The grader mounts the repo read-only, so the entry must go to the
// absolute output path, never a relative output/ directory.
// The gate is 1–120 characters of UTF-8 text, exactly one line.
if (LINE.length < 1 || LINE.length > 120 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-120 chars on one line, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
