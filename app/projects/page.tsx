import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold tracking-tight mb-6">Projects</h1>
        <p className="text-gray-300 leading-relaxed mb-10">
          Projects I’ve built and what I’m currently working on.
        </p>

        <div className="space-y-10">
          {projects.map((project) => (
            <div key={project.name}>
              <h2 className="text-xl font-medium text-white mb-2">
                {project.name}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs text-gray-300 border border-gray-800 rounded-full px-3 py-1"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
