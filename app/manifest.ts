import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Learn Edmore — Tutoring Academy Abuja",
    short_name: "Learn Edmore",
    description:
      "An Abuja-based online and on-site tutoring academy with a global online reach. Expert-led lessons in Mathematics, English Language, Igbo Language, Science, Adult Literacy, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f9ff",
    theme_color: "#004ac6",
    icons: [
      { src: "/brand-mark.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
