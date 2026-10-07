import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "../../components/ImageGallery";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import UserCount from "../../components/UserCount";
import { PROJECTS, getProject } from "../../lib/projects";
import { SITE_URL } from "../../lib/site";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const url = `${SITE_URL}/projects/${project.slug}`;
  const image = project.images[0];

  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.tagline,
      url,
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: project.title,
      description: project.tagline,
      images: image ? [image] : undefined,
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const url = `${SITE_URL}/projects/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    url,
    codeRepository: project.github,
    applicationCategory: "Application",
    author: {
      "@type": "Person",
      name: "Leshya Bracaglia",
      url: SITE_URL,
    },
    ...(project.technologies.length > 0
      ? { keywords: project.technologies.join(", ") }
      : {}),
  };

  return (
    <div className="flex justify-center min-h-screen bg-[#0d0d0d] font-ibm-plex-mono">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start gap-8 py-6 sm:py-8 px-4 sm:px-16 text-terminal">
        <div className="flex flex-wrap items-center gap-x-2">
          <span className="text-terminal/60 break-all"><span className="hidden sm:inline">leshya@macbook:</span>~/pages/projects$</span>
          <span>cd {project.slug}/</span>
        </div>

        <Navigation
          cwd={`~/pages/projects/${project.slug}`}
          variant="list-parent"
          upLevels={2}
        />

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-x-2">
            <span className="text-terminal/60 break-all">
              <span className="hidden sm:inline">leshya@macbook:</span>~/pages/projects/{project.slug}$
            </span>
            <span>cat title.txt</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold pl-4 break-words">{project.title}</h1>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-wrap items-center gap-x-2">
            <span className="text-terminal/60 break-all">
              <span className="hidden sm:inline">leshya@macbook:</span>~/pages/projects/{project.slug}$
            </span>
            <span>ls</span>
          </div>

          <div className="border border-[#1a4a1a] p-6 w-full">
          <div className="border-b border-[#1a4a1a] pb-2 mb-4 flex items-center justify-between flex-wrap gap-2">
            <span className="text-terminal font-semibold">
              ┌─[ {project.title} ]
            </span>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal/50 hover:text-terminal text-sm transition-colors"
            >
              [github →]
            </a>
          </div>

          {project.links.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-4">
              {project.links.map(({ label, url: linkUrl }) => (
                <a
                  key={linkUrl}
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal text-sm border border-terminal/40 px-2 py-1 hover:bg-terminal/10 transition-colors"
                >
                  [{label} →]
                </a>
              ))}
            </div>
          )}

          <UserCount links={project.links} />

          <div className="flex gap-2 flex-wrap">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="text-terminal/60 text-xs border border-[#1a4a1a] px-2 py-0.5"
              >
                [{technology}]
              </span>
            ))}
          </div>

          {project.images.length > 0 && (
            <ImageGallery
              images={project.images}
              title={project.title}
              sizes="(max-width: 640px) 100vw, 640px"
              imageClassName="h-48 sm:h-72 w-auto max-w-full object-contain border border-[#1a4a1a]"
            />
          )}

          <p className="text-terminal/80 my-4 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="border-t border-[#1a4a1a] pt-4 flex gap-2 flex-wrap">
            <Link
              href={`/projects/${project.slug}/privacy-policy`}
              className="text-terminal/70 text-sm border border-terminal/40 px-2 py-1 hover:bg-terminal/10 transition-colors"
            >
              [privacy policy →]
            </Link>
            <Link
              href={`/projects/${project.slug}/terms-of-service`}
              className="text-terminal/70 text-sm border border-terminal/40 px-2 py-1 hover:bg-terminal/10 transition-colors"
            >
              [terms of service →]
            </Link>
          </div>
          </div>
        </div>

        <Link
          href="/projects"
          className="text-terminal/50 hover:text-terminal text-sm transition-colors"
        >
          [← back to projects]
        </Link>

        <span className="cursor text-terminal">█</span>
      </main>
    </div>
  );
}
