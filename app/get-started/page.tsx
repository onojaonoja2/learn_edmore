'use client'

import { useState, useEffect } from 'react'
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
  'Yoruba',
  'Igbo',
  'Hausa',
  'French',
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
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    parent_name: '',
    parent_phone: '',
    parent_email: '',
    address: '',
    learner_name: '',
    learner_age: '',
    school: '',
    special_needs: '',
    subjects: [] as string[],
    grade: '',
    exam_types: [] as string[],
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const subject = params.get('subject')
    if (subject && subjects.includes(subject)) {
      setFormData((prev) => ({
        ...prev,
        subjects: [subject],
      }))
      setStep(3)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleSubject = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }))
  }

  const toggleExamType = (exam: string) => {
    setFormData((prev) => ({
      ...prev,
      exam_types: prev.exam_types.includes(exam)
        ? prev.exam_types.filter((e) => e !== exam)
        : [...prev.exam_types, exam],
    }))
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'student_registration', ...formData }),
      })
      setSubmitted(true)
    } catch {
      alert('Failed to submit. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-gradient-to-b from-surface to-surface-container-low px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          {/* Steps Indicator */}
          <div className="mb-10 flex items-center justify-center gap-1 sm:gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-1 sm:gap-2">
                <div
                  className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-xs sm:text-sm font-bold transition-colors ${
                    s <= step
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  {s < step ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    s
                  )}
                </div>
                {s < 3 && (
                  <div
                    className={`h-0.5 w-6 sm:w-12 transition-colors ${
                      s < step ? 'bg-primary' : 'bg-outline-variant'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="rounded-2xl bg-surface-container-lowest p-10 text-center shadow-ambient-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-fixed/30">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-on-surface font-heading">
                Registration Submitted!
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                Thank you for registering. Our team will review your details and
                contact you within 1-2 business days to finalise enrolment.
              </p>
            </div>
          ) : (
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
                        name="parent_name"
                        value={formData.parent_name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                        Phone Number <span className="text-error">*</span>
                      </label>
                      <input
                        type="tel"
                        name="parent_phone"
                        value={formData.parent_phone}
                        onChange={handleChange}
                        placeholder="080 XXXX XXXX"
                        required
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
                      name="parent_email"
                      value={formData.parent_email}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      required
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                      Residential Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
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
                        name="learner_name"
                        value={formData.learner_name}
                        onChange={handleChange}
                        placeholder="Child's full name"
                        required
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
                        name="learner_age"
                        value={formData.learner_age}
                        onChange={handleChange}
                        min={2}
                        max={18}
                        placeholder="Age"
                        required
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
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
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
                      name="special_needs"
                      value={formData.special_needs}
                      onChange={handleChange}
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
                            checked={formData.subjects.includes(s)}
                            onChange={() => toggleSubject(s)}
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
                            checked={formData.grade === g}
                            onChange={() => setFormData((prev) => ({ ...prev, grade: g }))}
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
                            checked={formData.exam_types.includes(e)}
                            onChange={() => toggleExamType(e)}
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
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-on-secondary transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
                  >
                    {submitting ? 'Submitting...' : 'Submit Registration'}
                  </button>
                </div>
              </div>
            )}
          </div>
          )}

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
