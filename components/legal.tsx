import type { ReactNode } from "react";
import { mygardenLegal } from "@/lib/mygarden-legal";

// Layout pieces for the MyGarden legal pages. The copy lives in the pages;
// these only keep the two documents looking like one set.

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <main id="main" className="px-6">
      <article className="mx-auto max-w-5xl py-20">
        <p className="eyebrow">{mygardenLegal.app}</p>
        <h1 className="display mt-3 text-4xl md:text-5xl text-ink">{title}</h1>
        <p className="tabular mt-4 text-sm text-faint">
          Last updated {updated}
        </p>
        <div className="measure mt-8 space-y-4 text-lg text-muted leading-relaxed">
          {intro}
        </div>
        <div className="mt-8">{children}</div>
      </article>
    </main>
  );
}

export function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-rule py-10 md:grid md:grid-cols-[14rem_1fr] md:gap-8"
    >
      <h2 id={`${id}-title`} className="display text-lg text-ink">
        <span className="tabular mr-3 text-sm text-faint">
          {String(number).padStart(2, "0")}
        </span>
        {title}
      </h2>
      <div className="measure mt-4 md:mt-0 space-y-4 text-muted leading-relaxed [&_strong]:text-ink [&_strong]:font-medium">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-faint">{children}</ul>
  );
}

// A term followed by its explanation. Stacks rather than using a table, so it
// reads at phone width.
export function LegalItems({
  items,
}: {
  items: { term: string; body: ReactNode }[];
}) {
  return (
    <dl className="space-y-5">
      {items.map(({ term, body }) => (
        <div key={term}>
          <dt className="font-medium text-ink">{term}</dt>
          <dd className="mt-1">{body}</dd>
        </div>
      ))}
    </dl>
  );
}

export function LegalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-signal underline underline-offset-4 decoration-rule hover:decoration-signal transition-colors"
    >
      {children}
    </a>
  );
}

export function SupportEmail() {
  return (
    <LegalLink href={`mailto:${mygardenLegal.email}`}>
      {mygardenLegal.email}
    </LegalLink>
  );
}

export function CompanyDetails() {
  return (
    <p>
      {mygardenLegal.company}, a company registered in England and Wales
      (company number {mygardenLegal.companyNumber}). Registered office:{" "}
      {mygardenLegal.address}. Email: <SupportEmail />.
    </p>
  );
}
