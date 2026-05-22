import type { Metadata } from "next"
import { quicksand, inter } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    template: "%s | Learn Edmore",
    default: "Learn Edmore — Tutoring Academy Abuja",
  },
  description:
    "Abuja's trusted tutoring academy for early learners to grade school. Unlock your child's potential with expert-led lessons in Maths, English, Science, and more.",
  icons: {
    icon: "/brand-mark.svg",
  },
  openGraph: {
    title: "Learn Edmore Tutoring Academy",
    description:
      "Abuja's trusted tutoring academy. Expert-led lessons in Maths, English, Science, and more for early learners to grade school.",
    url: "https://learnedmore.com",
    siteName: "Learn Edmore",
    locale: "en_NG",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
