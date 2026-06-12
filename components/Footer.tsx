import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/learn_edmore_logo.png"
                alt="Learn Edmore"
                width={120}
                height={34}
                className="h-7 w-auto shrink-0"
              />
              <span className="text-lg font-bold text-on-surface font-heading">
                Learn Edmore
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
              An Abuja-based online and on-site tutoring academy with a global
              online reach, empowering learners with expert-led education from
              early years to adult literacy.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-on-surface">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-on-surface-variant">
              <li><Link href="/subjects" className="hover:text-primary transition-colors">Subjects</Link></li>
              <li><Link href="/exam-prep" className="hover:text-primary transition-colors">Exam Prep</Link></li>
              <li><Link href="/tutors" className="hover:text-primary transition-colors">Find a Tutor</Link></li>
              <li><Link href="/login" className="hover:text-primary transition-colors">Login</Link></li>
              <li><Link href="/get-started" className="hover:text-primary transition-colors">Get Started</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-on-surface">
              Opportunities
            </h4>
            <ul className="space-y-2.5 text-sm text-on-surface-variant">
              <li><Link href="/become-a-tutor" className="hover:text-primary transition-colors">Become a Tutor</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Scholarships</Link></li>
              <li><Link href="/partnerships" className="hover:text-primary transition-colors">Partnerships</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-on-surface">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm text-on-surface-variant">
              <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-on-surface">
              Working Hours
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>On-site: 8am &ndash; 6pm</li>
              <li>Online: 8am &ndash; 10pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-outline-variant pt-6 text-center text-xs text-on-surface-variant">
          &copy; {new Date().getFullYear()} Learn Edmore Tutoring Academy. All
          rights reserved. Abuja, Nigeria.
        </div>
      </div>
    </footer>
  )
}
