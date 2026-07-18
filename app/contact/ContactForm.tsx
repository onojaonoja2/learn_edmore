'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contact_message', ...formData }),
      })
      setSubmitted(true)
    } catch {
      alert('Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-gradient-to-b from-surface to-surface-container-low px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
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
            <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-ambient-md lg:col-span-3">
              <h2 className="mb-6 text-xl font-bold text-on-surface font-heading">
                Send Us a Message
              </h2>
              {submitted ? (
                <div className="rounded-2xl bg-surface-container-lowest p-10 text-center shadow-ambient-md">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-fixed/30">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface font-heading">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                        Your Name <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        required
                        className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                        Email Address <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="080 XXXX XXXX"
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                    >
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
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      required
                      className="w-full resize-none rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl bg-[#25D366] p-8 text-white shadow-ambient-md">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
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
                  href="https://wa.me/2347045292029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#25D366] transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  <span>0704 529 2029 (WhatsApp only)</span>
                </a>
              </div>

              <div className="rounded-2xl bg-[#1877F2] p-8 text-white shadow-ambient-md">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-heading">
                  Follow Us on Facebook
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Stay updated with news, events, and learning tips.
                </p>
                <a
                  href="https://www.facebook.com/profile.php?id=61591689107228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1877F2] transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  <span>Like & Follow</span>
                </a>
              </div>

              <div className="rounded-2xl bg-[#0A66C2] p-8 text-white shadow-ambient-md">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-heading">
                  Connect on LinkedIn
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Follow our company page for updates and career opportunities.
                </p>
                <a
                  href="https://www.linkedin.com/company/learn-edmore/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A66C2] transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  <span>Follow Page</span>
                </a>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-fixed text-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-on-surface">
                        Call Us
                      </h4>
                      <p className="mt-0.5 text-sm text-on-surface-variant">
                        +234 806 424 7525
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary-fixed/30 text-secondary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 7l-10 7L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-on-surface">
                        Email Us
                      </h4>
                      <p className="mt-0.5 text-sm text-on-surface-variant">
                        learnedmoreconsult@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tertiary-fixed text-tertiary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
