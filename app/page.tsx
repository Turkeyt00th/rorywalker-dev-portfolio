export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Name */}
        <h1 className="text-4xl font-semibold tracking-tight">
          Rory Walker
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-300 leading-relaxed">
          I’m a junior developer focused on building practical, real-world applications.
          Currently developing my skills in modern web development and software engineering.
        </p>

        {/* What I'm learning */}
        <div>
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Currently Learning
          </h2>
          <p className="text-gray-300">
            Python, with a focus on writing clean, functional code and solving real problems.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 pt-4">
          <a
            href="/projects"
            className="text-white hover:text-gray-400 transition"
          >
            Projects
          </a>
          <a
            href="/about"
            className="text-white hover:text-gray-400 transition"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-white hover:text-gray-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Contact */}
        <div className="pt-10 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            Get in touch:
          </p>
          <a
            href="mailto:hello@rorywalker.dev"
            className="text-white hover:text-gray-400 transition"
          >
            hello@rorywalker.dev
          </a>
        </div>

      </div>
    </main>
  );
}