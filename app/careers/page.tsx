import type { Metadata } from "next"
import CareersForm from "./CareersForm"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Learn Edmore team in Abuja. Explore tutoring and education career opportunities at Abuja's most trusted tutoring academy.",
  openGraph: {
    title: "Careers — Learn Edmore",
    description:
      "Shape the future with Learn Edmore. Explore career opportunities at our Abuja tutoring academy.",
    url: "https://learnedmore.com/careers",
  },
}

export default function CareersPage() {
  return <CareersForm />
}
