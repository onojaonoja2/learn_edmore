'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'

const subjects = [
  'Mathematics', 'English Language', 'General Science', 'Social Studies',
  'Creative Arts', 'Early Literacy', 'Yoruba', 'Igbo', 'Hausa', 'French',
]

const qualifications = [
  'NCE', 'B.Ed', 'B.Sc / B.A', 'M.Ed / M.Sc', 'PGDE', 'PhD', 'Other',
]

const experienceLevels = [
  'Less than 1 year', '1-2 years', '3-5 years', '6-10 years', '10+ years',
]

export default function BecomeATutorPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-gradient-to-b from-surface to-surface-container-low px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
              Join Our Team
            </span>
            <h1 className="text-3xl font-bold text-on-surface font-heading md:text-4xl">
              Become a Tutor
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-on-surface-variant">
              Passionate about teaching? Join Abuja&apos;s most trusted tutoring
              academy and inspire the next generation of learners.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl bg-surface-container-lowest p-10 text-center shadow-ambient-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-fixed/30">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-on-surface font-heading">
                Application Received!
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                Thank you for your interest. Our team will review your
                application and get back to you within 3-5 business days.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-ambient-md md:p-10">
              <div className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                      Full Name <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                      Phone Number <span className="text-error">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="080 XXXX XXXX"
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="tutor@example.com"
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                      Highest Qualification <span className="text-error">*</span>
                    </label>
                    <select className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10">
                      <option value="">Select qualification</option>
                      {qualifications.map((q) => (
                        <option key={q} value={q}>{q}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                    Teaching Experience
                  </label>
                  <select className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10">
                    <option value="">Select experience level</option>
                    {experienceLevels.map((e) => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-on-surface">
                    Subjects You Can Teach <span className="text-error">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((s) => (
                      <label
                        key={s}
                        className="flex cursor-pointer items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-sm font-medium text-on-surface-variant transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-fixed has-[:checked]:text-primary"
                      >
                        <input type="checkbox" className="sr-only" />
                        {s}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                    Why do you want to join Learn Edmore?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your teaching philosophy and what makes you a great tutor..."
                    className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none"
                  />
                </div>

                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </>
  )
}
