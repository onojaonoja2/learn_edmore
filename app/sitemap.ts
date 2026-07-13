import type { MetadataRoute } from "next"

const baseUrl = "https://learnedmore.com"

const routes: { url: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { url: "", priority: 1.0, changeFrequency: "weekly" },
  { url: "/about", priority: 0.8, changeFrequency: "monthly" },
  { url: "/subjects", priority: 0.9, changeFrequency: "monthly" },
  { url: "/tutors", priority: 0.8, changeFrequency: "monthly" },
  { url: "/exam-prep", priority: 0.9, changeFrequency: "weekly" },
  { url: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { url: "/help", priority: 0.6, changeFrequency: "monthly" },
  { url: "/get-started", priority: 0.9, changeFrequency: "monthly" },
  { url: "/login", priority: 0.3, changeFrequency: "yearly" },
  { url: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { url: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { url: "/become-a-tutor", priority: 0.6, changeFrequency: "monthly" },
  { url: "/partnerships", priority: 0.5, changeFrequency: "monthly" },
  { url: "/careers", priority: 0.6, changeFrequency: "weekly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
