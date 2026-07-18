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
                src="/Learn_edmore_logo.jpeg"
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
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61591689107228"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-fixed text-primary transition-all hover:bg-primary hover:text-on-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/learn-edmore/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-fixed text-primary transition-all hover:bg-primary hover:text-on-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
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
