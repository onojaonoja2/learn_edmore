import type { Metadata } from "next"
import { quicksand, inter } from "./fonts"
import WhatsAppButton from "@/components/WhatsAppButton"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    template: "%s | Learn Edmore",
    default: "Learn Edmore — Tutoring Academy Abuja",
  },
  description:
    "An Abuja-based online and on-site tutoring academy with a global online reach. Expert-led lessons in Mathematics, English Language, Igbo Language, Science, Adult Literacy, and more.",
  icons: {
    icon: "/brand-mark.svg",
  },
  openGraph: {
    title: "Learn Edmore Tutoring Academy",
    description:
      "An Abuja-based online and on-site tutoring academy with a global online reach. Expert-led lessons in Mathematics, English Language, Igbo Language, Science, Adult Literacy, and more.",
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
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
