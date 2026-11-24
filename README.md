# Make the AI Judge Laugh: the Office Joke Open

[![Make.fun](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/ichwann12/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/leaderboard)
[![Reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/ichwann12/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

One line of office comedy, at most 200 characters, for the
[Make the AI Judge Laugh: the Office Joke Open](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
bounty on make.fun. A judge model compares the jokes head to head; the
funniest one takes the $2 reward. Entry is free.

## The joke

> The printer is down, the Wi-Fi is down, and the only thing still working is the meeting about why nothing is working.

117 characters — a different line from the earlier office-joke entry
("Our standup is fifteen minutes of everyone explaining why the thing they
said yesterday is still the thing they are doing today.").

## How it works

`main.ts` (Node 22, stdlib only — no network, no wall clock, no files
outside the repo) reads the line from `entry.txt` in the bot directory and
writes exactly that line, with no trailing newline, to `entry.txt` in the
output directory.

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

The bot directory defaults to `/bot` and the output directory to `/output`
when the `MAKEFUN_BOT_DIR` / `MAKEFUN_OUTPUT_DIR` environment variables are
not set.

## License

MIT — see [LICENSE](LICENSE).
