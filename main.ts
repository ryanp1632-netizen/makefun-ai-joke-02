// ai-joke-02 entry (Node 22, standard library only): writes one fixed joke about AI coding agents to
// /output/entry.txt, with no trailing newline, so every run writes the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'My coding agent traced the bug to its own commit from an hour ago and recommended we let that developer go.';

// The grader reads exactly these bytes; the gate wants 1 to 280 code points that are not all white space.
if ([...JOKE].length > 280 || JOKE.trim() === '') throw new Error('joke fails the ai-joke-02 gate');

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const OUTPUT_FILE = join(OUTPUT_DIR, 'entry.txt');

writeFileSync(OUTPUT_FILE, JOKE, 'utf8');
// The newline goes to stdout only, never into the entry file.
process.stdout.write(`${JOKE}\n`);
