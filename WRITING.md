# Writing rules for this site

Every word a visitor can read is covered by this file. Copy lives in
`lib/projects.ts`, `lib/site.ts`, `lib/releases.ts` and the page components.

Sources: Rory's voice guide at `~/.claude/anti-ai-writing-style.md`, and
Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).
That guide is the voice. This file is the edit pass: how to catch slop already
on the page and what to do about it.

---

## The 60-second audit

Run these against any block of copy before it ships. Any hit is a rewrite.

1. **Grep for `—`.** Should return nothing.
2. **Read every sentence that contains "not", "isn't", "rather than", "instead of".** Most will be reframe constructions. See below.
3. **Count items in every list.** Threes and fours everywhere means the rhythm is machine-made.
4. **Find sentences that end by restating their own point.** "...which is exactly the problem this solves." Cut the clause.
5. **Read it out loud.** Anywhere you wouldn't say it to someone in a pub, rewrite it.

---

## 1. Reframe constructions (fatal)

The single most reliable tell. If one survives, the copy failed.

**The shape:** negate a framing, then assert the corrected one.

Banned, including the disguises:

- "It isn't X. It's Y."
- "Not just X, but Y."
- "Anyone can say X. This is Y."
- "X gets the attention, but Y is what matters."
- "Sure, X works. But Y is where..."
- "Less X, more Y."
- "The question isn't X, it's Y."
- "It doesn't. It comes from..." (setup-then-reverse, same skeleton)

**The fix:** delete everything before the positive claim.

> ❌ The catalogue isn't a third-party API called at runtime. A species enters
> Postgres the first time someone searches for it.
>
> ✅ A species enters Postgres the first time someone searches for it.

**One exception.** A genuine factual contrast that carries information the
reader needs is fine: "Warnings come from a published reference, not from the
model." The test is whether the negated half is *information* or *set dressing*.
If deleting it loses nothing, it was set dressing.

---

## 2. The tidy-up clause

AI can't resist closing a loop. It ends a paragraph by explaining why the
paragraph mattered.

> ❌ ...which is the exact failure the feature exists to prevent.
> ❌ ...and unexplained reminders are the thing I was trying to fix.
> ❌ ...the one failure in this app that actually matters.

These read as smug and they're all the same move. State the fact and stop. The
reader connects it themselves.

**Rule: a paragraph may not refer back to its own thesis.**

---

## 3. Faux-poetic abstractions

Reaching for a lyrical phrase where a plain one exists.

> ❌ the app people touch
> ❌ the background jobs that keep it honest
> ❌ the jobs that run while nobody's watching

Say the actual thing: "the screens", "the nightly jobs", "the cron jobs".
Concrete beats evocative every time on a technical site.

---

## 4. List rhythm

AI lists in threes, then fours, forever. Real writing is lumpy.

- Break up any run of three-item lists. Use 2. Use 5. Use one sentence.
- Four-part "the X, the Y, the Z, and the W" constructions are the worst
  offender. One per site, maximum.
- If the same list structure appears on two pages, one of them goes.

---

## 5. Dead vocabulary

Never: delve, leverage, harness, unlock, crucial, pivotal, seamless, robust,
elevate, streamline, showcase, foster, vibrant, tapestry, realm, testament,
underscore, highlight (verb), emphasize, boast, align, enhance, garner,
intricate, landscape (abstract), meticulous, interplay, enduring, valuable,
game-changer, supercharge, groundbreaking, transformative.

**Copula avoidance is the sneakier version.** Never "serves as", "stands as",
"represents", "marks a", "functions as", "boasts", "features", "offers" when
what you mean is **is** or **has**. Just write "is".

---

## 6. Dead phrases and transitions

"It's worth noting", "In today's...", "Let's dive in", "At the end of the day",
"In order to" (write "to"), "Furthermore", "Moreover", "Additionally", "That
said", "With that in mind", "On top of that".

Also: "Two details matter." / "Here's the thing." / "What makes this
interesting is..." — all meta-announcements. Say the thing instead of
announcing that you're about to.

---

## 7. Puffery and significance inflation

Don't tell the reader something is important. Show the fact; they'll judge.

> ❌ the most useful thing I can show you about how I work
> ❌ a pivotal moment
> ❌ the one thing that actually matters

Superlatives need evidence or they need deleting.

---

## 8. Participle padding

`-ing` clauses bolted on to fake depth: "highlighting its importance",
"reflecting broader trends", "ensuring reliability", "contributing to".

Delete the clause. If the point deserves saying, give it its own sentence with
a real claim.

---

## 9. Repetition and tics

Track words that recur across pages. On this site the offenders have been
**flex/flexes** (weather reminders), **lands** (job ordering), and the
four-part stack list. A word used well once becomes a tic by the third use.

The opposite failure, **elegant variation**, is just as bad: don't rename the
same thing three ways to avoid repeating it. Use the name again.

---

## 10. Formatting

- Sentence case headers. Never Title Case.
- Numbers as digits: 15 releases, 33 migrations, 3 years.
- Contractions always: don't, isn't, I'm, it's.
- Bold sparingly, 1-2 moments per section.
- No em dashes. Commas, colons, semicolons, full stops, brackets.

---

## 11. Claims and promises

Don't write a commitment on Rory's behalf that he hasn't made. "I reply the
same day" is a promise to a stranger. "Solo. Product, design, backend and
release" is a verifiable fact. Prefer facts.

Every technical claim must be true of the code. Check `package.json` before
listing a dependency. Check the migration before describing a schedule.

---

## 12. Voice targets

- **BLUF.** Lead with the highest-impact sentence, then dig in.
- **Short paragraphs.** 1-3 sentences.
- **Vary sentence length.** Short. Then one that earns its length by carrying a
  real clause of detail. Then a fragment.
- **First person, active.** "I built", not "was built".
- **Specifics over adjectives.** "33 migrations" beats "extensive backend work".
- **Commit.** No "may", "could be considered", "often regarded as".
- Hedge only where Rory is genuinely unsure, and say so plainly.

**The test:** does this sound like Rory typing, or like a model doing an
impression of Rory?
