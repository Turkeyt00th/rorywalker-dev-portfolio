import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MyGardenArchitecture } from "@/components/mygarden-architecture";
import { getProject, projects } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.name} · ${project.tagline}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.name} · ${project.tagline}`,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  };
}

function Rule({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-4">
      <h2 id={id} className="eyebrow">
        {children}
      </h2>
      <span className="h-px flex-1 bg-rule" aria-hidden="true" />
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { caseStudy } = project;

  return (
    <main id="main" className="px-6">
      <article className="mx-auto max-w-5xl py-16">
        <Link
          href="/work"
          className="tabular text-xs text-faint hover:text-signal transition-colors"
        >
          &larr; All work
        </Link>

        <header className="mt-10">
          <h1 className="display text-4xl md:text-5xl text-ink">
            {project.name}
          </h1>
          <p className="measure mt-3 display text-2xl text-signal">
            {project.tagline}
          </p>

          <p className="tabular mt-6 text-xs text-faint">
            {project.status} · {project.period} ·{" "}
            {project.platforms.join(" · ")}
          </p>
        </header>

        <p className="measure mt-10 text-lg text-muted leading-relaxed">
          {caseStudy?.intro ?? project.summary}
        </p>

        <div className="mt-12 md:grid md:grid-cols-[14rem_1fr] md:gap-8">
          <p className="eyebrow">My role</p>
          <p className="mt-2 md:mt-0 text-muted">{project.role}</p>
        </div>

        {project.metrics && (
          <section className="mt-16" aria-labelledby="numbers">
            <Rule id="numbers">So far</Rule>
            <dl className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-y-6">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dd className="tabular text-4xl text-ink">{m.value}</dd>
                  <dt className="eyebrow mt-2">{m.label}</dt>
                </div>
              ))}
            </dl>
          </section>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mt-16" aria-labelledby="screens">
            <Rule id="screens">The screens</Rule>
            <div className="mt-8 space-y-12">
              {project.screenshots.map((shot) => (
                <figure key={shot.src} className="md:grid md:grid-cols-[14rem_1fr] md:gap-8">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(max-width: 768px) 60vw, 224px"
                    className="w-full max-w-[224px] rounded-lg border border-rule"
                  />
                  <figcaption className="measure mt-4 md:mt-0 text-muted leading-relaxed">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16" aria-labelledby="built">
          <Rule id="built">How it&rsquo;s built</Rule>

          <ul className="mt-6">
            {project.stack.map((group) => (
              <li
                key={group.group}
                className="md:grid md:grid-cols-[14rem_1fr] md:gap-8 border-b border-rule/60 py-3"
              >
                <span className="eyebrow">{group.group}</span>
                <span className="tabular mt-1 md:mt-0 block text-sm text-muted">
                  {group.items.join("  ·  ")}
                </span>
              </li>
            ))}
          </ul>

          {slug === "mygarden" && <MyGardenArchitecture />}
        </section>

        {caseStudy ? (
          <section className="mt-20" aria-labelledby="decisions">
            <Rule id="decisions">The hard parts</Rule>

            <div className="mt-10 space-y-16">
              {caseStudy.decisions.map((decision) => (
                <section key={decision.title}>
                  <h3 className="display text-2xl text-ink">
                    {decision.title}
                  </h3>

                  <dl className="mt-6 space-y-6 md:space-y-5">
                    {(
                      [
                        ["The problem", decision.problem],
                        ["What I did", decision.approach],
                        ["What it cost", decision.tradeoff],
                      ] as const
                    ).map(([label, body]) => (
                      <div
                        key={label}
                        className="md:grid md:grid-cols-[14rem_1fr] md:gap-8"
                      >
                        <dt className="eyebrow md:pt-1">{label}</dt>
                        <dd className="measure mt-2 md:mt-0 text-muted leading-relaxed">
                          {body}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>
          </section>
        ) : project.highlights?.length ? (
          <section className="mt-16" aria-labelledby="worth-knowing">
            <Rule id="worth-knowing">Notes</Rule>
            <ul className="mt-6 space-y-5">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="measure text-muted leading-relaxed"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {caseStudy && caseStudy.next.length > 0 && (
          <section className="mt-20" aria-labelledby="next">
            <Rule id="next">What&rsquo;s next</Rule>
            <ul className="mt-6">
              {caseStudy.next.map((item) => (
                <li
                  key={item}
                  className="measure border-b border-rule/60 py-4 text-muted leading-relaxed last:border-b-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.links.length > 0 && (
          <section className="mt-16 border-t border-rule pt-8">
            <ul className="flex flex-wrap gap-6 text-sm">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-signal underline underline-offset-4 decoration-rule hover:decoration-signal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
}
