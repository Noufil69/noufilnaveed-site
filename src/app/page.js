import ThemeToggle from "@/components/ThemeToggle";

// Public contact address (lands in the same inbox as noufil@vantrixsoftware.com).
const EMAIL = "info@vantrixsoftware.com";
const GITHUB = "https://github.com/Noufil69";
const VANTRIX = "https://vantrixsoftware.com";

const projects = [
  {
    title: "URL Shortener",
    description: "A bit.ly-style link shortener with click tracking.",
    stack: ["Express", "PostgreSQL"],
    githubUrl: "https://github.com/Noufil69/url-shortener",
    liveUrl: "https://urlshortener.noufilnaveed.com",
  },
  {
    title: "F1 Telemetry Replay",
    description:
      "Real Formula 1 telemetry, replayed at adjustable speed: any race, any driver, since 2023, with a live track map driven by real car position data.",
    stack: ["Node.js", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com/Noufil69/f1-telemetry",
    liveUrl: "https://f1.noufilnaveed.com",
  },
  {
    title: "Phishing Link Checker",
    description:
      "Paste a link and get a risk score with the reasons behind it: look-alike names, domain age, certificate and Google Safe Browsing checks, without ever opening the page.",
    stack: ["Java", "Spring Boot", "Docker"],
    note: "Runs on a free server, so the first load can take a minute or more to wake up.",
    githubUrl: "https://github.com/Noufil69/phishing-detector",
    liveUrl: "https://phishing-detector-ey8u.onrender.com",
  },
];

const skills = [
  "JavaScript", "Node.js", "Express", "PostgreSQL", "Java", "Spring Boot",
  "Docker", "Git", "Postman", "Next.js", "Tailwind CSS", "REST APIs", "JWT Auth",
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Noufil Naveed",
  url: "https://noufilnaveed.com",
  jobTitle: "Backend Developer",
  email: `mailto:${EMAIL}`,
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  worksFor: { "@type": "Organization", name: "Vantrix Software", url: VANTRIX },
  knowsAbout: skills,
  sameAs: [GITHUB, VANTRIX],
};

function ArrowOut() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" className="opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
      <path d="M5 3h8v8M13 3 3 13" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ExtLink({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="group inline-flex min-h-11 items-center gap-1.5 text-fg underline decoration-line-strong hover:decoration-accent">
      {children}
      <ArrowOut />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-semibold tracking-tight">Noufil Naveed</a>
        <ThemeToggle />
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto flex min-h-[calc(100svh-84px)] max-w-5xl flex-col justify-center px-6 pb-20">
          <div className="rise">
            <h1 className="text-[clamp(3rem,10vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em]">
              Noufil Naveed
            </h1>
            <p className="mt-6 max-w-xl text-xl text-muted md:text-2xl">
              Backend developer building APIs that actually work. Founder of{" "}
              <a href={VANTRIX} className="text-fg underline decoration-line-strong hover:decoration-accent">
                Vantrix Software
              </a>
              .
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex min-h-12 items-center rounded-full bg-fg px-6 font-medium text-bg transition-opacity hover:opacity-85">
                View projects
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex min-h-12 items-center rounded-full border border-line-strong px-6 font-medium transition-colors hover:border-fg">
                Email me
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section aria-labelledby="about" className="border-t border-line">
          <div className="mx-auto grid max-w-5xl gap-6 px-6 py-24 md:grid-cols-[200px_1fr]">
            <h2 id="about" className="text-2xl font-bold tracking-tight">About</h2>
            <div className="max-w-[65ch] space-y-4 text-lg leading-relaxed text-muted">
              <p>
                I&apos;m a BSCS student in Karachi and the founder of Vantrix Software, where I
                build websites, apps and automation for small businesses.
              </p>
              <p>
                The backend is where I&apos;m most at home: APIs, databases and the parts that have
                to keep working. I&apos;ve shipped three live projects, from a link shortener with
                click tracking to a Spring Boot phishing checker, and I&apos;m building toward
                backend roles abroad.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" aria-labelledby="projects-heading" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <h2 id="projects-heading" className="text-2xl font-bold tracking-tight">Projects</h2>
            <ul className="mt-10 border-t border-line">
              {projects.map((p) => (
                <li key={p.title} className="grid gap-4 border-b border-line py-8 md:grid-cols-[200px_1fr_auto] md:gap-8">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="max-w-[60ch]">
                    <p className="leading-relaxed text-muted">{p.description}</p>
                    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[13px] text-faint" aria-label="Built with">
                      {p.stack.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                    {p.note && <p className="mt-3 text-sm text-accent">{p.note}</p>}
                  </div>
                  <div className="flex gap-5 text-sm md:flex-col md:items-end md:gap-1">
                    {p.liveUrl && <ExtLink href={p.liveUrl} label={`${p.title}: live demo`}>Live demo</ExtLink>}
                    {p.githubUrl && <ExtLink href={p.githubUrl} label={`${p.title}: source code on GitHub`}>Source</ExtLink>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills" className="border-t border-line">
          <div className="mx-auto grid max-w-5xl gap-6 px-6 py-24 md:grid-cols-[200px_1fr]">
            <h2 id="skills" className="text-2xl font-bold tracking-tight">Skills</h2>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li key={s} className="rounded-full border border-line px-4 py-2 text-sm text-muted">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <h2 id="contact" className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
              Let&apos;s talk.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Open to backend and API developer roles. For a website, app or automation for your
              business, see{" "}
              <a href={VANTRIX} className="text-fg underline decoration-line-strong hover:decoration-accent">
                Vantrix Software
              </a>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className="inline-flex min-h-12 items-center rounded-full bg-fg px-6 font-medium text-bg transition-opacity hover:opacity-85">
                Email me
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-line-strong px-6 font-medium transition-colors hover:border-fg">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-6 py-8 text-sm text-faint">
          <p>&copy; {new Date().getFullYear()} Noufil Naveed</p>
          <p>Karachi, Pakistan</p>
        </div>
      </footer>
    </>
  );
}
