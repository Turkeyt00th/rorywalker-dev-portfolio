import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="px-6">
      <div className="mx-auto max-w-5xl py-20">
        <p className="tabular text-sm text-signal">404</p>
        <h1 className="display mt-3 text-4xl text-ink">
          That page isn&rsquo;t here
        </h1>
        <p className="measure mt-4 text-muted leading-relaxed">
          The link might be old, or I might have moved something.
        </p>
        <p className="mt-6">
          <Link
            href="/"
            className="text-signal underline underline-offset-4 decoration-rule hover:decoration-signal transition-colors"
          >
            Back to the homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
