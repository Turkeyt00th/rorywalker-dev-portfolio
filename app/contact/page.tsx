import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with Rory Walker at ${site.email}.`,
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Best way to reach me.",
  },
  {
    label: "GitHub",
    value: "Turkeyt00th",
    href: site.github,
    note: "Where the public code lives.",
  },
];

export default function ContactPage() {
  return (
    <main id="main" className="px-6">
      <div className="mx-auto max-w-5xl py-20">
        <h1 className="display text-4xl md:text-5xl text-ink">Contact</h1>

        <p className="measure mt-6 text-lg text-muted leading-relaxed">
          I&rsquo;m looking for a development role, but happy to talk about
          anything you&rsquo;re building.
        </p>

        <dl className="mt-14">
          {channels.map(({ label, value, href, note }) => (
            <div
              key={label}
              className="border-t border-rule py-6 md:grid md:grid-cols-[14rem_1fr] md:gap-8"
            >
              <dt className="eyebrow md:pt-2">{label}</dt>
              <dd className="mt-2 md:mt-0">
                <a
                  href={href}
                  className="display text-xl text-ink hover:text-signal transition-colors"
                >
                  {value}
                </a>
                <p className="measure mt-1 text-sm text-muted">{note}</p>
              </dd>
            </div>
          ))}
        </dl>

        {/* TODO (Rory): add LinkedIn to lib/site.ts and a CV link once there's a PDF. */}
      </div>
    </main>
  );
}
