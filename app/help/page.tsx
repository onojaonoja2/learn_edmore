import type { Metadata } from "next"
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Find answers to frequently asked questions about Learn Edmore's tutoring services, enrolment, schedules, curricula, and more.",
  openGraph: {
    title: "Help Center — Learn Edmore",
    description:
      "FAQs about Learn Edmore Tutoring Academy's online and on-site tutoring services in Abuja.",
    url: "https://learnedmore.com/help",
  },
}

const faqs = [
  {
    q: 'What subjects do you offer?',
    a: 'We offer Mathematics, English Language, Igbo Language, Science, Adult Literacy, and more. All subjects are available both online and on-site.',
  },
  {
    q: 'Do you offer online classes?',
    a: 'Yes! All our subjects are available online with flexible scheduling from 8am to 10pm. Our virtual classroom platform makes learning from anywhere easy and interactive.',
  },
  {
    q: 'Where are you located for on-site lessons?',
    a: 'We are based in Abuja, Nigeria. On-site lessons run Monday through Saturday from 8am to 6pm.',
  },
  {
    q: 'What curricula do you follow?',
    a: 'We cover both the Nigerian national curriculum and the Cambridge curriculum, preparing students for Common Entrance, Junior WAEC, Senior WAEC, Checkpoint, and Cambridge exams.',
  },
  {
    q: 'How do I enrol my child?',
    a: 'Simply visit our Get Started page, fill out the registration form with your details and your child\'s learning preferences, and our team will reach out to finalise enrolment.',
  },
  {
    q: 'Do you offer exam preparation classes?',
    a: 'Absolutely. We have dedicated exam prep programs for Common Entrance, Junior WAEC, Senior WAEC, Checkpoint, and Cambridge examinations.',
  },
  {
    q: 'What age groups do you teach?',
    a: 'We cater to early learners, grade school students, and adults seeking literacy and numeracy skills through our Adult Literacy program.',
  },
  {
    q: 'Can I change my schedule after enrolling?',
    a: 'Yes, we offer flexible rescheduling. Contact our support team and we will adjust your lesson timetable to suit your needs.',
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
}

export default function HelpPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Navbar />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-surface to-surface-container-low py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-12">
            <span className="mb-4 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
              Help Center
            </span>
            <h1 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl font-heading">
              How Can We Help You?
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-on-surface-variant">
              Find answers to common questions or reach out to our support team
              for personalised assistance.
            </p>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-3xl px-5 md:px-12">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm transition-all open:shadow-ambient-md"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-on-surface transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-on-surface-variant transition-transform group-open:rotate-180"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-primary-fixed p-8 text-center">
              <h2 className="text-xl font-bold text-on-surface font-heading">
                Still Have Questions?
              </h2>
              <p className="mt-2 text-sm text-on-surface-variant">
                Our support team is ready to help you.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Contact Us
                </Link>
                <a
                  href="https://wa.me/2347045292029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-7 py-3 text-sm font-semibold text-on-surface-variant transition-colors hover:border-primary hover:text-primary active:scale-[0.98]"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </>
  )
}
