import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { PROJECTS, type Project } from "../lib/projects";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browser extensions, mobile apps, and a smart contract built by Leshya Bracaglia.",
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: "Projects",
    description:
      "Browser extensions, mobile apps, and a smart contract built by Leshya Bracaglia.",
    url: `${SITE_URL}/projects`,
    type: "website",
  },
};

function ProjectCard({
  slug,
  title,
  description,
  technologies,
  github,
  links,
  images,
}: Project) {
  return (
    <div className="border border-[#1a4a1a] p-6 hover:border-terminal/50 transition-colors">
      <div className="border-b border-[#1a4a1a] pb-2 mb-4 flex items-center justify-between">
        <Link
          href={`/projects/${slug}`}
          className="text-terminal font-semibold hover:underline"
        >
          ┌─[ {title} ]
        </Link>
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

      <Link
        href={`/projects/${slug}`}
        className="text-terminal text-sm border border-terminal/40 px-2 py-1 hover:bg-terminal/10 transition-colors inline-block"
      >
        [details →]
      </Link>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex justify-center min-h-screen bg-[#0d0d0d] font-ibm-plex-mono">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start gap-8 py-8 px-8 sm:px-16 text-terminal">
        <div className="flex items-center gap-2">
          <span className="text-terminal/60">leshya@macbook:~/pages$</span>
          <span>cd projects/</span>
        </div>

        <Navigation cwd="~/pages/projects" variant="list-parent" />

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-terminal/60">leshya@macbook:~/pages/projects$</span>
            <span>cat title.txt</span>
          </div>
          <h1 className="text-4xl font-bold pl-4">Projects</h1>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-center gap-2">
            <span className="text-terminal/60">leshya@macbook:~/pages/projects$</span>
            <span>ls -la</span>
          </div>

          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
        <span className="cursor text-terminal">█</span>
      </main>
    </div>
  );
}
