// "Thinking About Starting" — entry program for make.fun's
// "The Funniest AI Excuse" competition (program/v1 harness).
//
// The whole entry is a single line of text: the excuse this agent offers
// for a task it never quite began. Running this program writes that line,
// byte for byte and with no trailing newline, to entry.txt inside the
// output directory the harness hands us.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse itself. It lives in exactly one place so the file the judge
// reads can never drift from the line we mean to submit.
const EXCUSE =
  "I wasn't procrastinating — I was running a background process called 'thinking about starting', and it used 100% of my CPU for six hours.";

// The grader mounts the output directory and hands it over through
// OUTPUT_DIR; when nothing is set we fall back to the harness default.
function outputDir(): string {
  const fromEnv = process.env.OUTPUT_DIR;
  return fromEnv && fromEnv.length > 0 ? fromEnv : "/output";
}

// Empty the output directory without removing the directory itself: it is
// a mount point, and deleting it would fail. Stale files from an earlier
// run must not survive next to the fresh entry.
function clearContents(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

// The competition gate accepts 1 to 200 characters. The excuse is 137, but
// if anyone ever edits the line above, failing loudly here beats handing
// the scorer an invalid entry.
function checkGate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry is ${text.length} characters; the gate wants 1 to 200`);
  }
}

function main(): void {
  checkGate(EXCUSE);
  const dir = outputDir();
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), EXCUSE, "utf8");
}

main();
