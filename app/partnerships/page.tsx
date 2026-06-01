'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'

const partnershipTypes = [
  'School Partnership', 'Corporate Sponsorship', 'Community Organization',
  'Educational Resource Provider', 'After-School Program', 'Other',
]

export default function PartnershipsPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-gradient-to-b from-surface to-surface-container-low px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
              Partner With Us
            </span>
            <h1 className="text-3xl font-bold text-on-surface font-heading md:text-4xl">
              Partnership Inquiry
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-on-surface-variant">
              Let&apos;s work together to shape the future of education in Abuja.
              Fill out the form below and our partnerships team will reach out.
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
                Inquiry Sent!
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                Thank you for your interest in partnering with Learn Edmore.
                Our partnerships team will contact you within 2-3 business days.
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
                      Organization Name <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="School or organization name"
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
                      placeholder="you@organization.com"
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
                    Partnership Type <span className="text-error">*</span>
                  </label>
                  <select className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10">
                    <option value="">Select partnership type</option>
                    {partnershipTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                    Organization Location
                  </label>
                  <input
                    type="text"
                    placeholder="Area / District, Abuja"
                    className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-on-surface">
                    Tell Us About Your Partnership Idea
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe how you envision working with Learn Edmore..."
                    className="w-full rounded-xl border border-outline-variant bg-surface px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none"
                  />
                </div>

                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Submit Inquiry
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
