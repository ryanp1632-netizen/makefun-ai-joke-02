// ai-joke-02 entry (Node 22, standard library only): writes one fixed joke about AI coding agents to
// /output/entry.txt, with no trailing newline, so every run writes the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'My coding agent traced the bug to its own commit from an hour ago and recommended we let that developer go.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
process.stdout.write(JOKE + '\n');
