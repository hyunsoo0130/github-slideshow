import type { MetadataRoute } from "next";
import { CATEGORIES, getAllPrompts } from "@/lib/data";
import { ASCII_CATEGORIES } from "@/lib/ascii-data";

const BASE_URL = "https://saju-todayfortune.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/ascii`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.filter(
    (c) => c.slug !== "ascii-art"
  ).map((cat) => ({
    url: `${BASE_URL}/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const promptPages: MetadataRoute.Sitemap = getAllPrompts().map((p) => ({
    url: `${BASE_URL}/prompt/${p.slug}`,
    lastModified: new Date(p.date || now),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const asciiPages: MetadataRoute.Sitemap = ASCII_CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/ascii/${cat.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...promptPages, ...asciiPages];
}
