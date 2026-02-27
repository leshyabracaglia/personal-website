import Navigation from "../components/Navigation";

const PROJECTS = [
  {
    title: "Cookie Refuser",
    description:
      "A cross-platform browser extension that automatically denies all cookie consent banners. Supports Chrome, Firefox, Edge, and Safari (including iOS/iPadOS). Uses a three-tier detection strategy — known platform selectors, banner container scanning, and a broad fallback — along with MutationObserver for late-loading popups. Covers major consent platforms (OneTrust, Cookiebot, Quantcast, Didomi, and more) across 9 languages. Built with Manifest V3.",
    technologies: ["JavaScript", "Manifest V3", "Safari Web Extension", "SwiftUI", "Xcode"],
    github: "https://github.com/leshyabracaglia/Cookie-refuser",
  },
  {
    title: "Little Alchemy Companion",
    description:
      "A React Native mobile app serving as a complete reference guide for Little Alchemy 2 — featuring a searchable catalog of 720+ elements, crafting recipe lookup, and reverse ingredient search. Includes an automated web scraper that pulls element data and icons directly from the game's wiki to keep the database current.",
    technologies: ["React Native", "Expo", "TypeScript", "Expo Router", "Claude", "Cursor"],
    github: "https://github.com/leshyabracaglia/little-alchemy-companion",
  },
  {
    title: "1000 Rejections",
    description:
      "A mobile app that gamifies rejection exposure therapy — users log rejections with titles, descriptions, dates, and photos while tracking progress toward 1,000 total rejections. Built with Supabase for auth and data, comprehensive unit and E2E testing via Maestro, and a CI/CD pipeline via EAS Build. Reframes failure as forward momentum.",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "Maestro", "EAS", "Claude", "Cursor"],
    github: "https://github.com/leshyabracaglia/1000Rejections",
  },
];

function ProjectCard({
  title,
  description,
  technologies,
  github,
}: {
  title: string;
  description: string;
  technologies: string[];
  github: string;
}) {
  return (
    <div className="border border-green-900 rounded-lg p-6 hover:border-green-600 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <h2 className="text-2xl font-semibold text-black">{title}</h2>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-800 hover:text-green-600 text-sm underline underline-offset-2 ml-4 shrink-0"
        >
          GitHub →
        </a>
      </div>
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
              github={project.github}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
