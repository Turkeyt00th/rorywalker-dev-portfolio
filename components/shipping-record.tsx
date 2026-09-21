import Link from "next/link";
import { formatReleaseDate, releases, releaseSpanWeeks } from "@/lib/releases";

/**
 * MyGarden's release history, ruled like a log. Data comes from lib/releases.ts,
 * which mirrors the app's own changelog.
 */
export function ShippingRecord() {
  const weeks = releaseSpanWeeks();

  return (
    <section aria-labelledby="record">
      <div className="flex items-baseline gap-4">
        <h2 id="record" className="eyebrow">
          Shipping record
        </h2>
        <span className="h-px flex-1 bg-rule" aria-hidden="true" />
      </div>

      <ol className="mt-6">
        {releases.map((release, i) => (
          <li
            key={release.version}
            className="settle group grid grid-cols-[4.5rem_3.5rem_1fr] items-baseline gap-x-4 border-b border-rule/60 py-2.5 last:border-b-0"
            style={{ animationDelay: `${Math.min(i * 28, 420)}ms` }}
          >
            <span className="tabular text-sm text-signal">
              {release.version}
            </span>
            <span className="tabular text-xs text-faint">
              {formatReleaseDate(release.date)}
            </span>
            <span className="text-sm text-muted">{release.title}</span>
          </li>
        ))}
      </ol>

      <p className="mt-5 text-sm text-faint">
        <span className="tabular text-ink">{releases.length} releases</span> of{" "}
        <Link
          href="/work/mygarden"
          className="text-signal underline underline-offset-4 decoration-rule hover:decoration-signal transition-colors"
        >
          MyGarden
        </Link>{" "}
        in <span className="tabular text-ink">{weeks} weeks</span>. The titles
        are copied straight from the app&rsquo;s What&rsquo;s New screen.
      </p>
    </section>
  );
}
