import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/mitgliedschaft", priority: 0.9, changeFrequency: "monthly" },
  { path: "/leistungen", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ueber-uns", priority: 0.8, changeFrequency: "monthly" },
  { path: "/aktuelles", priority: 0.7, changeFrequency: "weekly" },
  { path: "/kontakt", priority: 0.7, changeFrequency: "yearly" },
  { path: "/downloads", priority: 0.6, changeFrequency: "monthly" },
  { path: "/satzung", priority: 0.4, changeFrequency: "yearly" },
  { path: "/impressum", priority: 0.2, changeFrequency: "yearly" },
  { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
