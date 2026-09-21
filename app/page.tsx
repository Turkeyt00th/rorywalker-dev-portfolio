import Link from "next/link";
import { ShippingRecord } from "@/components/shipping-record";
import { projects, type Project } from "@/lib/projects";
import { site } from "@/lib/site";

/** The full stack runs to 15 items for MyGarden. Cards get the headline few. */
function shortStack(project: Project) {
  return project.stack.flatMap((group) => group.items.slice(0, 2)).slice(0, 5);
}

export default function Home() {
  return (
    <main id="main" className="px-6">
      <div className="mx-auto max-w-5xl">
        <section className="pt-16 pb-12 md:pt-20 md:pb-14">
          <h1 className="display text-5xl md:text-6xl text-ink">{site.name}</h1>

          <p className="measure mt-6 text-xl text-muted leading-relaxed">
            I work mostly in TypeScript. On MyGarden that meant the React Native
            app, the Postgres schema under it, ten Deno functions and the App
            Store paperwork. Nobody else is on it, so anything that breaks is
            mine.
          </p>
        </section>

        <div className="pb-16">
          <ShippingRecord />
        </div>

        <section className="border-t border-rule py-16" aria-labelledby="work">
          <div className="flex items-baseline gap-4">
            <h2 id="work" className="eyebrow">
              Selected work
            </h2>
            <span className="h-px flex-1 bg-rule" aria-hidden="true" />
          </div>

          <ul className="mt-8">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block py-5 md:grid md:grid-cols-[14rem_1fr] md:gap-8 border-b border-rule/60"
                >
                  <div>
                    <h3 className="display text-lg text-ink group-hover:text-signal transition-colors">
                      {project.name}
                    </h3>
                    <p className="tabular mt-1 text-xs text-faint">
                      {project.status} · {project.period}
                    </p>
                  </div>

                  <div className="mt-2 md:mt-0">
                    <p className="measure text-muted leading-relaxed">
                      {project.tagline}
                    </p>
                    <p className="tabular mt-2 text-xs text-faint">
                      {shortStack(project).join("  ·  ")}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-rule py-16" aria-labelledby="hire">
          <h2 id="hire" className="eyebrow">
            Get in touch
          </h2>
          <p className="measure mt-4 text-lg text-muted leading-relaxed">
            I&rsquo;m looking for a development role. Email is the best way to
            get hold of me.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="display mt-4 inline-block text-2xl text-ink hover:text-signal transition-colors"
          >
            {site.email}
          </a>
        </section>
      </div>
    </main>
  );
}
