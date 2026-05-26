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
                src="/brand-mark.svg"
                alt="Learn Edmore"
                width={28}
                height={28}
              />
              <span className="text-lg font-bold text-on-surface font-heading">
                Learn Edmore
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
              Abuja&apos;s trusted tutoring academy, empowering young learners
              with expert-led education from early years to grade school.
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
              <li><Link href="/" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-on-surface">
              Opportunities
            </h4>
            <ul className="space-y-2.5 text-sm text-on-surface-variant">
              <li><Link href="/" className="hover:text-primary transition-colors">Become a Tutor</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Scholarships</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Partnerships</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-on-surface">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm text-on-surface-variant">
              <li><Link href="/" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Terms of Service</Link></li>
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
