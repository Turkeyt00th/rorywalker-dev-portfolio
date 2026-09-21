import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Rory Walker works, and what he builds with.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "I ship",
    body: "15 releases of MyGarden since May 2026, out to real users on TestFlight. I write the release notes in plain English because people actually read them.",
  },
  {
    title: "I write down what bit me",
    body: "Every project has a short doc of the things that have caught me out. Which two cron jobs must never run on the same tick. Which generated file is half hand-written and will be wiped if you regenerate it. The notes are for whoever picks it up next, which is usually me in three months.",
  },
  {
    title: "I know where not to put an LLM",
    body: "MyGarden uses Claude for photo identification, plant diagnosis, care guides and search. Toxicity warnings come out of a published reference book, because getting one of those wrong hurts someone.",
  },
  {
    title: "I care about the unglamorous parts",
    body: "Row-level security, migrations that run forwards cleanly, and errors typed specifically enough that a rate limit reaches the user as “we’re busy, try again”.",
  },
];

const tools = [
  "TypeScript",
  "React",
  "React Native / Expo",
  "Next.js",
  "Node",
  "Postgres",
  "Supabase",
  "Tailwind CSS",
];

export default function AboutPage() {
  return (
    <main id="main" className="px-6">
      <div className="mx-auto max-w-5xl py-20">
        <h1 className="display text-4xl md:text-5xl text-ink">About</h1>

        <p className="measure mt-6 text-lg text-muted leading-relaxed">
          I&rsquo;m Rory. I&rsquo;ve been building software on my own for a
          while, mostly mobile and web apps with a Postgres backend behind them.
          MyGarden is the biggest thing I&rsquo;ve made and the one I&rsquo;ve
          learned most from.
        </p>

        {/*
          TODO (Rory): add a short paragraph here on your background, what you
          did before, what pulled you into building software. I've deliberately
          left this out rather than invent it.
        */}

        <section className="mt-16" aria-labelledby="how-i-work">
          <div className="flex items-baseline gap-4">
            <h2 id="how-i-work" className="eyebrow">
              How I work
            </h2>
            <span className="h-px flex-1 bg-rule" aria-hidden="true" />
          </div>

          <div className="mt-8">
            {principles.map(({ title, body }) => (
              <div
                key={title}
                className="border-b border-rule/60 py-6 md:grid md:grid-cols-[14rem_1fr] md:gap-8"
              >
                <h3 className="display text-lg text-ink">{title}</h3>
                <p className="measure mt-2 md:mt-0 text-muted leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="tools">
          <div className="flex items-baseline gap-4">
            <h2 id="tools" className="eyebrow">
              What I use
            </h2>
            <span className="h-px flex-1 bg-rule" aria-hidden="true" />
          </div>
          <p className="tabular mt-6 text-sm text-muted">
            {tools.join("  ·  ")}
          </p>
        </section>

        <section className="mt-16 border-t border-rule pt-8">
          <p className="measure text-muted">
            Hiring, or want to talk about something you&rsquo;re building?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-signal underline underline-offset-4 decoration-rule hover:decoration-signal transition-colors"
            >
              {site.email}
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
