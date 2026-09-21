import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Four things Rory Walker has built: a plant care app for iOS and Android, a Discord bot for a RuneScape clan, a game for a three-year-old, and a budget tool.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main" className="px-6">
      <div className="mx-auto max-w-5xl py-20">
        <h1 className="display text-4xl md:text-5xl text-ink">Work</h1>
        <p className="measure mt-5 text-lg text-muted leading-relaxed">
          Four things I&rsquo;ve built, and what was actually hard about each
          one.
        </p>

        <ul className="mt-16">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group block border-t border-rule py-8 md:grid md:grid-cols-[14rem_1fr] md:gap-8"
              >
                <div>
                  <h2 className="display text-2xl text-ink group-hover:text-signal transition-colors">
                    {project.name}
                  </h2>
                  <p className="tabular mt-2 text-xs text-faint">
                    {project.status}
                  </p>
                  <p className="tabular text-xs text-faint">
                    {project.period}
                  </p>
                </div>

                <div className="mt-4 md:mt-0">
                  <p className="measure text-lg text-ink">{project.tagline}</p>
                  <p className="measure mt-3 text-muted leading-relaxed">
                    {project.summary}
                  </p>

                  {project.metrics && (
                    <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
                      {project.metrics.map((m) => (
                        <li key={m.label} className="tabular text-sm">
                          <span className="text-signal">{m.value}</span>{" "}
                          <span className="text-faint">{m.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="tabular mt-5 text-xs text-faint">
                    {project.stack.flatMap((g) => g.items.slice(0, 2)).join("  ·  ")}
                  </p>

                  <span className="mt-5 inline-block text-sm text-signal underline underline-offset-4 decoration-rule group-hover:decoration-signal transition-colors">
                    {project.caseStudy ? "Read the case study" : "More on this"}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
