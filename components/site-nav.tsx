"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-rule">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-baseline justify-between gap-6">
        <Link
          href="/"
          className="display text-base text-ink hover:text-signal transition-colors"
        >
          {site.name}
        </Link>

        <nav aria-label="Main">
          <ul className="flex gap-5 text-sm">
            {nav
              .filter((item) => item.href !== "/")
              .map(({ href, label }) => {
                const active = pathname.startsWith(href);

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={
                        active
                          ? "text-ink border-b border-signal pb-0.5"
                          : "text-muted hover:text-ink transition-colors"
                      }
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
