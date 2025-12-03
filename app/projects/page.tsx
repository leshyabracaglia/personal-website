import Navigation from "../components/Navigation";

const PROJECTS = [
  {
    title: "Project One",
    description:
      "A description of your first project. Add details about what technologies you used and what problems it solves.",
    technologies: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Project Two",
    description:
      "A description of your second project. Highlight the key features and your role in building it.",
    technologies: ["Node.js", "MongoDB"],
  },
  {
    title: "Project Three",
    description:
      "A description of your third project. Mention any challenges you overcame or interesting learnings.",
    technologies: ["Python", "FastAPI"],
  },
];

function ProjectCard({
  title,
  description,
  technologies,
}: {
  title: string;
  description: string;
  technologies: string[];
}) {
  return (
    <div className="border border-green-900 rounded-lg p-6 hover:border-green-600 transition-colors">
      <h2 className="text-2xl font-semibold text-black mb-2">{title}</h2>
      <p className="text-black mb-3">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="px-3 py-1 bg-green-950 text-white rounded-full text-sm"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex min-h-screen items-center justify-center font-ibm-plex-mono">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start gap-8 py-32 px-16">
        <h1 className="text-4xl font-bold text-black">Projects</h1>

        <Navigation />

        <div className="flex flex-col gap-6 w-full">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
