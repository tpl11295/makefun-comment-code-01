import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Comment Above the Code entry: one line, at most 200 characters, as
// if it were the comment a developer left above fragile production code.
// Judge brief (criteria in order): (1) funny comment about fragile legacy
// code a real dev is afraid to touch (veto); (2) the honesty stings —
// names a real, recognisable failure, not a generic programmer joke;
// (3) economical, punchline lands on the last few words; (4) fresh angle —
// NOT off-by-one / who-wrote-this / no-comments cliches; (5) reads like a
// comment actually left in a codebase, working dev voice, not a caption.
// Chosen line: filename archaeology + survival escalation. The name
// "temp_fix_final_v2_REAL (2019)" is the artefact; "processes every
// payment" is the stakes; "no tests" is the named failure; "outlived
// three rewrites and two CTOs" is the punchline, landing last.
// The line is 123 characters, inside the 200-character gate.
const line =
  "// temp_fix_final_v2_REAL (2019). It processes every payment. It has no tests. It has outlived three rewrites and two CTOs.";

const MAX_CHARS = 200;

if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${line.length}`);
}

if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

if (line !== line.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("entry.txt does not match the comment line");
}
console.log(`wrote ${line.length} characters to /output/entry.txt`);
