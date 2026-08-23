import type { MetadataRoute } from "next";
import { PROJECTS } from "./lib/projects";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.flatMap((project) => [
    {
      url: `${SITE_URL}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/projects/${project.slug}/privacy-policy`,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/projects/${project.slug}/terms-of-service`,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
  ]);

  return [...staticRoutes, ...projectRoutes];
}
