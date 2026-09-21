export type Release = {
  version: string;
  /** ISO date. */
  date: string;
  /** The title as it shipped to users, from the app's own changelog. */
  title: string;
};

/**
 * MyGarden's real release history, mirrored from the app's lib/changelog.ts.
 * Newest first. This is the site's central piece of evidence, so it stays
 * verbatim: these are the words users actually saw in the What's New screen.
 */
export const releases: Release[] = [
  { version: "0.8.0", date: "2026-07-30", title: "Filter the catalogue, and see what’s in season" },
  { version: "0.7.0", date: "2026-07-18", title: "Meet your garden’s wildlife" },
  { version: "0.6.0", date: "2026-07-12", title: "A growing calendar for your climate" },
  { version: "0.5.2", date: "2026-07-01", title: "Find the exact type you want" },
  { version: "0.5.1", date: "2026-07-01", title: "A simpler start when you search" },
  { version: "0.5.0", date: "2026-06-18", title: "Identify, confirm, and add in one step" },
  { version: "0.4.6", date: "2026-06-12", title: "Steadier when things get busy" },
  { version: "0.4.4", date: "2026-06-02", title: "Faster, smoother, and a fix for first run" },
  { version: "0.4.3", date: "2026-05-29", title: "Know when to prune and deadhead" },
  { version: "0.4.2", date: "2026-05-29", title: "When plants flower, and care info on tap" },
  { version: "0.4.1", date: "2026-05-27", title: "A clearer way back" },
  { version: "0.4.0", date: "2026-05-27", title: "A camera that knows its plants" },
  { version: "0.3.0", date: "2026-05-27", title: "A smarter plant database" },
  { version: "0.2.1", date: "2026-05-24", title: "A clearer split between today and your garden" },
  { version: "0.2.0", date: "2026-05-24", title: "Photos, weekends, and a friendlier first run" },
];

const formatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
});

export function formatReleaseDate(iso: string) {
  return formatter.format(new Date(`${iso}T00:00:00Z`));
}

/** Weeks between the first and last release, for the ledger's footer line. */
export function releaseSpanWeeks() {
  const dates = releases.map((r) => new Date(`${r.date}T00:00:00Z`).getTime());
  const days = (Math.max(...dates) - Math.min(...dates)) / 86_400_000;
  return Math.round(days / 7);
}
