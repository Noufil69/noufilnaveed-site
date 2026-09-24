const projects = [
  {
    title: "URL Shortener",
    description: "A bit.ly-style link shortener with click tracking, built with Express and PostgreSQL.",
    status: "Live",
    githubUrl: "https://github.com/Noufil69/url-shortener",
    liveUrl: "https://urlshortener.noufilnaveed.com",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-pulse">
            Noufil Naveed
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8">
            Backend Developer — building APIs that actually work
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition">
              View Projects
            </a>
            <a href="mailto:naveednoufil@gmail.com" className="px-6 py-3 border border-zinc-700 rounded-full font-medium hover:border-white transition">
              Contact Me
            </a>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="bg-black text-white px-6 py-24 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            I'm a BSCS student and backend developer focused on building real,
            working APIs — not tutorials. Currently learning Node.js, Express,
            PostgreSQL, and everything it takes to ship production-grade backend
            systems. Based in Karachi, building toward opportunities abroad.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-black text-white px-6 py-24 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4 flex-grow">{project.description}</p>
                {project.githubUrl || project.liveUrl ? (
                  <div className="flex gap-4 text-sm">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-zinc-300 underline">
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-zinc-300 underline">
                        Live Demo
                      </a>
                    )}
                  </div>
                ) : (
                  <span className="text-sm text-zinc-500">{project.status}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-black text-white px-6 py-24 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "JavaScript",
              "Node.js",
              "Express",
              "PostgreSQL",
              "Git",
              "Postman",
              "Next.js",
              "Tailwind CSS",
              "REST APIs",
              "JWT Auth",
            ].map((skill) => (
              <span key={skill} className="px-4 py-2 border border-zinc-700 rounded-full text-sm text-zinc-300 hover:border-white hover:text-white transition">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white px-6 py-24 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-zinc-400 mb-8">
            Open to backend and API developer roles. Based in Karachi, targeting Ireland & Australia.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:naveednoufil@gmail.com" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition">
              Email Me
            </a>
            <a href="https://github.com/Noufil69" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-zinc-700 rounded-full font-medium hover:border-white transition">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}