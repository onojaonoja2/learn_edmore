import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'

const sections = [
  {
    title: 'Information We Collect',
    content:
      'We collect information you provide directly to us, including your name, email address, phone number, and child\'s academic details when you enrol or contact us. We also automatically collect certain technical data such as IP address, browser type, and usage patterns to improve our service.',
  },
  {
    title: 'How We Use Your Information',
    content:
      'Your information is used to deliver and improve our tutoring services, process enrolments, communicate with you about lessons and updates, and provide customer support. We may also use anonymised data for analytics and service enhancement.',
  },
  {
    title: 'Information Sharing',
    content:
      'We do not sell your personal information. We may share data with trusted third-party service providers who assist us in operating our platform (e.g., payment processing, email delivery), provided they agree to keep your information confidential and use it solely for the purposes we specify.',
  },
  {
    title: 'Data Security',
    content:
      'We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information from unauthorised access, alteration, disclosure, or destruction.',
  },
  {
    title: 'Data Retention',
    content:
      'We retain your personal information for as long as your account is active or as needed to provide you services. We may retain and use your information to comply with legal obligations, resolve disputes, and enforce our agreements.',
  },
  {
    title: 'Your Rights',
    content:
      'You have the right to access, update, or delete your personal information at any time. You may also opt out of marketing communications by contacting us. To exercise any of these rights, please reach out to our support team.',
  },
  {
    title: 'Cookies',
    content:
      'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyse site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings.',
  },
  {
    title: 'Changes to This Policy',
    content:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.',
  },
  {
    title: 'Contact Us',
    content:
      'If you have any questions about this Privacy Policy or how we handle your data, please contact us at hello@learnedmore.com or visit our Contact page.',
  },
]

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-on-surface-variant">
              Last updated: June 2026
            </p>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-3xl px-5 md:px-12">
            <p className="mb-10 text-sm leading-relaxed text-on-surface-variant">
              At Learn Edmore Tutoring Academy, we take your privacy seriously.
              This policy describes how we collect, use, and protect your
              personal information when you use our website and services.
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
