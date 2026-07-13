import type { Metadata } from "next"
import ContactForm from "./ContactForm"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Learn Edmore Tutoring Academy in Abuja. Call, email, WhatsApp, or visit us for inquiries about tutoring programs and enrolment.",
  openGraph: {
    title: "Contact Us — Learn Edmore",
    description:
      "Reach out to Learn Edmore Tutoring Academy in Abuja. We'd love to hear from you.",
    url: "https://learnedmore.com/contact",
  },
}

export default function ContactPage() {
  return <ContactForm />
}
