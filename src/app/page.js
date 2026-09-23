export default function Home() {
  return (
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
  );
}