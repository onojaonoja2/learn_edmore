import type { Metadata } from "next"
import BecomeTutorForm from "./BecomeTutorForm"

export const metadata: Metadata = {
  title: "Become a Tutor",
  description:
    "Join Learn Edmore Tutoring Academy in Abuja. Apply to become a tutor and inspire the next generation of learners with expert-led education.",
  openGraph: {
    title: "Become a Tutor — Learn Edmore",
    description:
      "Join Abuja's most trusted tutoring academy. Apply to teach at Learn Edmore.",
    url: "https://learnedmore.com/become-a-tutor",
  },
}

export default function BecomeATutorPage() {
  return <BecomeTutorForm />
}
