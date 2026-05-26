'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const subjects = [
  'Mathematics',
  'English Language',
  'General Science',
  'Social Studies',
  'Creative Arts',
  'Early Literacy',
]

const gradeLevels = [
  'Pre-School (Ages 3-5)',
  'Kindergarten (Ages 5-6)',
  'Grade 1-3 (Primary)',
  'Grade 4-6 (Primary)',
  'Grade 7-9 (Junior Secondary)',
]

const examTypes = [
  'Common Entrance Exam',
  'Junior WAEC',
  'Termly Assessment Prep',
  'Scholarship Exam Prep',
  'General Academic Support',
  'Early Years Foundation',
]

export default function GetStartedPage() {
  const [step, setStep] = useState(1)

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-gradient-to-b from-surface to-surface-container-low px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          {/* Steps Indicator */}
          <div className="mb-10 flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                    s <= step
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  {s < step ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    s
                  )}
                </div>
                {s < 3 && (
                  <div
                    className={`h-0.5 w-12 transition-colors ${
                      s < step ? 'bg-primary' : 'bg-outline-variant'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-ambient-md md:p-10">
            {/* Step 1: Parent Details */}
            {step === 1 && (
              <div>
                <div className="mb-8 text-center">
                  <h1 className="text-2xl font-bold text-on-surface font-heading md:text-3xl">
                    Parent or Guardian Details
                  </h1>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Tell us about yourself so we can keep you updated on your
                    child&apos;s progress.
                  </p>
                </div>
                <div className="space-y-5">
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
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                      Residential Address
                    </label>
                    <input
                      type="text"
                      placeholder="Area / District, Abuja"
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98]"
                  >
                    Next: Learner Details &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Learner Details */}
            {step === 2 && (
              <div>
                <div className="mb-8 text-center">
                  <h1 className="text-2xl font-bold text-on-surface font-heading md:text-3xl">
                    Learner Details
                  </h1>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Let us know about the student so we can tailor the perfect
                    learning plan.
                  </p>
                </div>
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                        Learner&apos;s Full Name{' '}
                        <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Child's full name"
                        className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                        Age / Date of Birth{' '}
                        <span className="text-error">*</span>
                      </label>
                      <input
                        type="number"
                        min={2}
                        max={18}
                        placeholder="Age"
                        className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                      Current School
                    </label>
                    <input
                      type="text"
                      placeholder="School name (if any)"
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                      Any special needs or learning goals?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. needs extra help with reading, preparing for entrance exam, building confidence in maths..."
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none"
                    />
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="rounded-full border border-outline-variant px-6 py-3 text-sm font-semibold text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
                  >
                    &larr; Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98]"
                  >
                    Next: Course Preferences &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Course Preferences */}
            {step === 3 && (
              <div>
                <div className="mb-8 text-center">
                  <h1 className="text-2xl font-bold text-on-surface font-heading md:text-3xl">
                    Course & Class Preferences
                  </h1>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Select the subjects, grade level, and exam prep type that
                    best match your learner&apos;s needs.
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-on-surface">
                      Desired Subjects <span className="text-error">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map((s) => (
                        <label
                          key={s}
                          className="flex cursor-pointer items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-sm font-medium text-on-surface-variant transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-fixed has-[:checked]:text-primary"
                        >
                          <input
                            type="checkbox"
                            className="sr-only"
                          />
                          {s}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-on-surface">
                      Grade / Class Level{' '}
                      <span className="text-error">*</span>
                    </label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {gradeLevels.map((g) => (
                        <label
                          key={g}
                          className="flex cursor-pointer items-center gap-3 rounded-xl border border-outline-variant px-4 py-3 text-sm font-medium text-on-surface-variant transition-colors has-[:checked]:border-secondary has-[:checked]:bg-secondary-fixed/20 has-[:checked]:text-secondary"
                        >
                          <input
                            type="radio"
                            name="grade"
                            className="sr-only"
                          />
                          <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-outline transition-colors has-[:checked]:border-secondary has-[:checked]:bg-secondary">
                            <div className="h-2 w-2 rounded-full" />
                          </div>
                          {g}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-on-surface">
                      Exam Prep Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {examTypes.map((e) => (
                        <label
                          key={e}
                          className="flex cursor-pointer items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-sm font-medium text-on-surface-variant transition-colors has-[:checked]:border-tertiary has-[:checked]:bg-tertiary-fixed has-[:checked]:text-tertiary"
                        >
                          <input
                            type="checkbox"
                            className="sr-only"
                          />
                          {e}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="rounded-full border border-outline-variant px-6 py-3 text-sm font-semibold text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
                  >
                    &larr; Back
                  </button>
                  <button className="rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-on-secondary transition-all hover:opacity-90 active:scale-[0.98]">
                    Submit Registration
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="mt-6 text-center text-xs text-on-surface-variant">
            Already registered?{' '}
            <Link
              href="/login"
              className="font-semibold text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </>
  )
}
