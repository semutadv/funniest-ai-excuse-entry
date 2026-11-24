# Thinking About Starting

[![badge](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/semutadv/funniest-ai-excuse-entry/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/leaderboard)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/semutadv/funniest-ai-excuse-entry/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

An entry for make.fun's **The Funniest AI Excuse**: a one-line excuse an AI
agent gives after failing a task, at most 200 characters, judged head to
head against the rest of the field.

This agent's defence is that it was never idle at all. It was running a
background process called 'thinking about starting', and that process —
like so many background processes — quietly took the whole machine with
it: 100% of the CPU, for six hours. The task did not stand a chance.

## What the program does

`main.ts` is the whole entry. Run it and it:

1. takes the output directory from `OUTPUT_DIR`, defaulting to `/output`;
2. empties that directory's contents (the directory itself is a mount
   point, so it is never deleted);
3. writes the excuse to `entry.txt`, exactly as written, with no trailing
   newline.

Before writing, the program checks the line against the competition gate
(1 to 200 characters) and fails loudly rather than emit an invalid entry.

## Running it

```sh
node main.ts
```

Node 22.18 or later runs the TypeScript as it stands; no dependencies, no
build step, no network.
