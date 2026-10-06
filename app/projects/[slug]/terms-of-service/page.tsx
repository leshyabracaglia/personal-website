import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "../../../components/Navigation";
import LegalDocument from "../../../components/LegalDocument";
import { PROJECTS, getProject } from "../../../lib/projects";
import { SITE_URL } from "../../../lib/site";

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

  const url = `${SITE_URL}/projects/${project.slug}/terms-of-service`;
  const title = `${project.title} Terms of Service`;

  return {
    title,
    description: `Terms of service for ${project.title}.`,
    alternates: { canonical: url },
    openGraph: { title, url, type: "website" },
    twitter: { card: "summary", title },
  };
}

export default async function ProjectTermsOfService({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="flex justify-center min-h-screen bg-[#0d0d0d] font-ibm-plex-mono">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start gap-8 py-6 sm:py-8 px-4 sm:px-16 text-terminal">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-x-2">
            <span className="text-terminal/60 break-all">
              <span className="hidden sm:inline">leshya@macbook:</span>~/pages/projects/{project.slug}$
            </span>
            <span>cat terms-of-service.txt</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold pl-4 break-words">
            {project.title} — Terms of Service
          </h1>
        </div>

        <Navigation />

        <LegalDocument document={project.termsOfService} />

        <div className="flex gap-4 flex-wrap">
          <Link
            href={`/projects/${project.slug}`}
            className="text-terminal/50 hover:text-terminal text-sm transition-colors"
          >
            [← back to {project.title}]
          </Link>
          <Link
            href={`/projects/${project.slug}/privacy-policy`}
            className="text-terminal/50 hover:text-terminal text-sm transition-colors"
          >
            [privacy policy →]
          </Link>
        </div>

        <span className="cursor text-terminal">█</span>
      </main>
    </div>
  );
}
