import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'

const sections = [
  {
    title: 'Acceptance of Terms',
    content:
      'By accessing or using the Learn Edmore Tutoring Academy website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.',
  },
  {
    title: 'Services Description',
    content:
      'Learn Edmore provides online and on-site tutoring services in Mathematics, English Language, Igbo Language, Science, Adult Literacy, and other subjects. We follow both the Nigerian national curriculum and the Cambridge curriculum, preparing students for Common Entrance, Junior WAEC, Senior WAEC, Checkpoint, and Cambridge examinations.',
  },
  {
    title: 'User Accounts',
    content:
      'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate, current, and complete information during registration and keep your account information updated.',
  },
  {
    title: 'Enrolment and Payment',
    content:
      'Enrolment is confirmed upon completion of registration and receipt of applicable fees. Payment terms, refund policies, and cancellation procedures will be provided at the time of enrolment and are incorporated into these terms by reference.',
  },
  {
    title: 'Intellectual Property',
    content:
      'All curriculum materials, lesson plans, study guides, and content provided through our services are the intellectual property of Learn Edmore Tutoring Academy. You may not reproduce, distribute, or create derivative works without our express written consent.',
  },
  {
    title: 'Code of Conduct',
    content:
      'All students and parents are expected to conduct themselves respectfully toward tutors and staff. Disruptive behaviour, harassment, or any violation of our learning environment policies may result in suspension or termination of services without refund.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'Learn Edmore Tutoring Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.',
  },
  {
    title: 'Modification of Terms',
    content:
      'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after any modifications indicates your acceptance of the updated terms.',
  },
  {
    title: 'Termination',
    content:
      'We may terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.',
  },
  {
    title: 'Governing Law',
    content:
      'These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Abuja, Nigeria.',
  },
  {
    title: 'Contact Information',
    content:
      'For questions about these Terms of Service, please contact us at hello@learnedmore.com, call +234 806 424 7525, or visit our Contact page.',
  },
]

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-surface to-surface-container-low py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-12">
            <span className="mb-4 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
              Legal
            </span>
            <h1 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl font-heading">
              Terms of Service
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-on-surface-variant">
              Last updated: June 2026
            </p>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-3xl px-5 md:px-12">
            <p className="mb-10 text-sm leading-relaxed text-on-surface-variant">
              These Terms of Service govern your use of the Learn Edmore
              Tutoring Academy website and tutoring services. Please read them
              carefully.
            </p>

            <div className="space-y-10">
              {sections.map((s, i) => (
                <div key={i}>
                  <h2 className="mb-3 text-lg font-bold text-on-surface font-heading">
                    {i + 1}. {s.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {s.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </>
  )
}
