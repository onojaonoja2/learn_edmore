import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-gradient-to-b from-surface to-surface-container-low px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
              Get in Touch
            </span>
            <h1 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl font-heading">
              We&apos;d Love to Hear from You
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-on-surface-variant">
              Whether you have questions about our programs, want to enrol your
              child, or just want to say hello — reach out to us.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-ambient-md lg:col-span-3">
              <h2 className="mb-6 text-xl font-bold text-on-surface font-heading">
                Send Us a Message
              </h2>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                      Your Name <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="080 XXXX XXXX"
                    className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                    Subject
                  </label>
                  <select className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10">
                    <option>General Inquiry</option>
                    <option>Enrolment & Registration</option>
                    <option>Exam Prep Programs</option>
                    <option>Tutoring Schedule</option>
                    <option>Become a Tutor</option>
                    <option>Partnership & Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                    Message <span className="text-error">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full resize-none rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 lg:col-span-2">
              {/* WhatsApp Card */}
              <div className="rounded-2xl bg-[#25D366] p-8 text-white shadow-ambient-md">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.12 1.62 5.88L0 24l6.35-1.59C8.08 23.39 10.03 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm0 22c-1.9 0-3.72-.53-5.28-1.52l-.38-.23-3.77.99 1.01-3.67-.25-.4A9.96 9.96 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.46-7.22c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.6-.48-.5-.66-.5-.17 0-.37-.02-.57-.02-.2 0-.52.08-.8.38-.28.3-1.05 1.03-1.05 2.52s1.07 2.92 1.22 3.12c.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-heading">
                  Chat on WhatsApp
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Quickest way to reach us. Tap to start a conversation.
                </p>
                <a
                  href="https://wa.me/2347045292021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#25D366] transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.12 1.62 5.88L0 24l6.35-1.59C8.08 23.39 10.03 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm5.46 16.78c-.3.6-1.15 1.1-1.9 1.22-.5.08-1.18.12-1.9-.12-.44-.14-1-.33-1.72-.64-3.01-1.3-4.98-4.32-5.13-4.53-.15-.2-1.22-1.6-1.22-3.12 0-1.5.77-2.23 1.05-2.52.28-.3.6-.38.8-.38h.57c.2 0 .42.02.66.02.2 0 .42 0 .58.36.14.36.67 1.62.92 2.22.07.15.12.32.02.52-.1.2-.23.33-.38.5-.15.17-.32.34-.45.52-.15.17-.17.32-.02.5.18.3.78 1.28 1.68 2.08 1.15 1.03 2.12 1.35 2.42 1.5.3.15.48.13.66-.07.18-.2.76-.87.96-1.17.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.23.57.35.07.12.07.72-.18 1.42z" />
                  </svg>
                  <span>0704 529 2021</span>
                </a>
              </div>

              {/* Other Contact Info */}
              <div className="space-y-4">
                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-fixed text-primary">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-on-surface">
                        Call Us
                      </h4>
                      <p className="mt-0.5 text-sm text-on-surface-variant">
                        +234 704 529 2021
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary-fixed/30 text-secondary">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 7l-10 7L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-on-surface">
                        Email Us
                      </h4>
                      <p className="mt-0.5 text-sm text-on-surface-variant">
                        hello@learnedmore.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tertiary-fixed text-tertiary">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-on-surface">
                        Visit Us
                      </h4>
                      <p className="mt-0.5 text-sm text-on-surface-variant">
                        Abuja, Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-fixed text-primary">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-on-surface">
                        Working Hours
                      </h4>
                      <p className="mt-0.5 text-sm text-on-surface-variant">
                        Mon – Sat: 8:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </>
  )
}
