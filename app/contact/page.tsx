export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold tracking-tight mb-6">Contact</h1>
        <p className="text-gray-300 leading-relaxed">
          You can reach me at{" "}
          <a
            href="mailto:hello@rorywalker.dev"
            className="underline underline-offset-4"
          >
            hello@rorywalker.dev
          </a>
          .
        </p>
      </div>
    </main>
  );
}