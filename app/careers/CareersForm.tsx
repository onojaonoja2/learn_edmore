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

const perks = [
  {
    title: 'Competitive Compensation',
    desc: 'Earn top-tier hourly rates with performance bonuses and regular reviews.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Flexible Schedule',
    desc: 'Set your own hours — teach when it works for you, from anywhere in Abuja.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Modern Resources',
    desc: 'Access our digital lesson library, interactive tools, and AI-powered teaching aids.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Professional Growth',
    desc: 'Ongoing training, mentorship programs, and a clear path to senior roles.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
  },
]

export default function CareersForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    qualification: '',
    experience: '',
    subjects: [] as string[],
    reason: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'job_application', ...formData }),
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

      <main className="flex-1">
        <section className="bg-gradient-to-b from-surface to-surface-container-low py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 text-center md:px-12">
            <span className="mb-4 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
              Careers
            </span>
            <h1 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl font-heading">
              Shape the Future With Us
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-on-surface-variant">
              Join a team of passionate educators building Abuja&apos;s most
              innovative learning experience.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-on-surface font-heading">
                  Why <span className="text-primary">Learn Edmore</span>?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                  We&apos;re redefining tutoring for the modern age. At Learn
                  Edmore, we combine the rigor of the Nigerian curriculum with
                  cutting-edge digital tools, personalized lesson plans, and a
                  supportive community that puts both tutors and students first.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                  Our tutors aren&apos;t just teachers — they&apos;re mentors,
                  role models, and co-creators of a curriculum that celebrates
                  Nigerian culture while preparing students for a global future.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {perks.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl bg-surface-container-lowest p-5 shadow-ambient-sm"
                  >
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed text-primary">
                      {p.icon}
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-on-surface font-heading">
                      {p.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-on-surface-variant">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low pb-20 pt-16 md:pb-28 md:pt-20">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-on-surface font-heading">
                Open Roles
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-on-surface-variant">
                We&apos;re always looking for talented tutors and education
                professionals. Apply below to join our growing team.
              </p>
            </div>

            <div className="mx-auto max-w-2xl">
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
                    Thank you for applying. Our team will review your application
                    and get back to you within 3-5 business days.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-ambient-md md:p-10">
                  <h3 className="mb-6 text-xl font-bold text-on-surface font-heading">
                    Tutor Application
                  </h3>
                  <div className="space-y-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                          Full Name <span className="text-error">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={formData.full_name}
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
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="080 XXXX XXXX"
                          required
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
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tutor@example.com"
                          required
                          className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                          Highest Qualification <span className="text-error">*</span>
                        </label>
                        <select
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                        >
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
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                      >
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
                      <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                        Why do you want to join Learn Edmore?
                      </label>
                      <textarea
                        rows={4}
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder="Tell us about your teaching philosophy and what makes you a great tutor..."
                        className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
                    >
                      {submitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </>
  )
}
