import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${site.url}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      // The case study is the page worth landing on.
      priority: project.caseStudy ? 0.9 : 0.6,
    })),
    {
      url: `${site.url}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${site.url}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
