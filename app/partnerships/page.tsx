import type { Metadata } from "next"
import PartnershipForm from "./PartnershipForm"

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with Learn Edmore Tutoring Academy in Abuja. Explore school partnerships, corporate sponsorships, and community collaborations.",
  openGraph: {
    title: "Partnerships — Learn Edmore",
    description:
      "Partner with Learn Edmore to shape the future of education in Abuja.",
    url: "https://learnedmore.com/partnerships",
  },
}

export default function PartnershipsPage() {
  return <PartnershipForm />
}
