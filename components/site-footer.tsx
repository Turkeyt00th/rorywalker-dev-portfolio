import { site } from "@/lib/site";

export function SiteFooter() {
  const links = [
    { label: "Email", href: `mailto:${site.email}` },
    { label: "GitHub", href: site.github },
    ...(site.linkedin ? [{ label: "LinkedIn", href: site.linkedin }] : []),
  ];

  return (
    <footer className="mt-auto border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
        <span className="eyebrow">{site.name}</span>
        <ul className="flex flex-wrap gap-6 text-sm">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-muted hover:text-signal transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
