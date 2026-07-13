import type { Metadata } from "next"
import GetStartedForm from "./GetStartedForm"

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Enrol your child at Learn Edmore Tutoring Academy in Abuja. Register for expert-led online or on-site tutoring in Mathematics, English, Science, Languages, and more.",
  openGraph: {
    title: "Get Started — Learn Edmore",
    description:
      "Register for expert-led tutoring at Learn Edmore in Abuja. Online and on-site programs available.",
    url: "https://learnedmore.com/get-started",
  },
}

export default function GetStartedPage() {
  return <GetStartedForm />
}
