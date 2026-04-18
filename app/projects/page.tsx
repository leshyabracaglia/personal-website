import Image from "next/image";
import Navigation from "../components/Navigation";

const PROJECTS = [
  {
    title: "Personal Website",
    description:
      "You are here 😊 A personal site to showcase my work and projects. Built with React and TypeScript, deployed on Vercel with analytics and automatic deployments on every push to main.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/leshyabracaglia/personal-website",
    links: [],
    images: [],
  },
  {
    title: "Cookie Refuser",
    description:
      "Inspired by the annoyance of continuing to dismiss cookie banners, Cookie Refuser is a cross-platform browser extension that automatically denies all cookie consent banners. Supports Chrome, Firefox, and Safari. Uses a three-tier detection strategy — known platform selectors, banner container scanning, and a broad fallback — along with MutationObserver for late-loading popups. Covers major consent platforms (OneTrust, Cookiebot, Quantcast, Didomi, and more) across 9 languages. Built with Manifest V3. Published on the Chrome Web Store, Firefox Add-ons, and the App Store.",
    technologies: ["JavaScript", "Manifest V3", "Xcode"],
    github: "https://github.com/leshyabracaglia/Cookie-refuser",
    links: [
      {
        label: "Chrome Extension",
        url: "https://chromewebstore.google.com/detail/cookie-refuser/mcglfjkmfeliffphgmihihlgehcfbkmi",
      },
      {
        label: "Firefox Extension",
        url: "https://addons.mozilla.org/en-US/firefox/addon/cookies-refuser/",
      },
      {
        label: "Safari Extension",
        url: "https://apps.apple.com/us/app/cookie-refuser/id6760318624?mt=12",
      },
    ],
    images: ["/projects/cookie-refuser-promotional-image.png"],
  },
  {
    title: "1000 Rejections",
    description:
      "A mobile app that gamifies rejection exposure therapy — users log rejections with titles, descriptions, dates, and photos while tracking progress toward 1,000 total rejections. Built with Supabase for auth and data, comprehensive unit and E2E testing via Maestro, and a CI/CD pipeline via EAS Build. Reframes failure as forward momentum.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Maestro",
      "EAS",
      "Claude",
      "Cursor",
    ],
    github: "https://github.com/leshyabracaglia/1000Rejections",
    links: [],
    images: [],
  },
  {
    title: "Little Alchemy Companion",
    description:
      "A React Native mobile app serving as a complete reference guide for Little Alchemy 2 — featuring a searchable catalog of 720+ elements, crafting recipe lookup, and reverse ingredient search. Includes an automated web scraper that pulls element data and icons directly from the game's wiki to keep the database current.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Claude",
      "Cursor",
    ],
    github: "https://github.com/leshyabracaglia/little-alchemy-companion",
    links: [],
    images: [],
  },
];

function ProjectCard({
  title,
  description,
  technologies,
  github,
  links,
  images,
}: {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  links: { label: string; url: string }[];
  images: string[];
}) {
  return (
    <div className="border border-[#1a4a1a] p-6 hover:border-terminal/50 transition-colors">
      <div className="border-b border-[#1a4a1a] pb-2 mb-4 flex items-center justify-between">
        <span className="text-terminal font-semibold">┌─[ {title} ]</span>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal/50 hover:text-terminal text-sm transition-colors"
        >
          [github →]
        </a>
      </div>

      {links.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-4">
          {links.map(({ label, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal text-sm border border-terminal/40 px-2 py-1 hover:bg-terminal/10 transition-colors"
            >
              [{label} →]
            </a>
          ))}
        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="text-terminal/60 text-xs border border-[#1a4a1a] px-2 py-0.5"
          >
            [{technology}]
          </span>
        ))}
      </div>

      {images.length > 0 && (
        <div className="flex gap-3 overflow-x-auto mb-4 pb-1 mt-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-48 h-32 border border-[#1a4a1a] overflow-hidden"
            >
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <p className="text-terminal/80 my-4 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex justify-center min-h-screen bg-[#0d0d0d] font-ibm-plex-mono">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start gap-8 py-8 px-8 sm:px-16 text-terminal">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-terminal/60">leshya@macbook:~$</span>
            <span>cd projects/</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-terminal/60">leshya@macbook:~/projects$</span>
            <span>ls -la</span>
          </div>
          <h1 className="text-4xl font-bold pl-4">Projects</h1>
        </div>

        <Navigation />

        <div className="flex flex-col gap-6 w-full">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              links={project.links}
              images={project.images}
            />
          ))}
        </div>
        <span className="cursor text-terminal">█</span>
      </main>
    </div>
  );
}
