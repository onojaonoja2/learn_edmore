'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import Badge from '@/components/Badge'

const goals = [
  {
    title: 'Complete Algebra Practice Set',
    desc: '10 questions on quadratic equations',
    xp: 50,
    done: true,
  },
  {
    title: 'Read Chapter 5: Photosynthesis',
    desc: 'Biology textbook pages 78-92',
    xp: 30,
    done: false,
  },
  {
    title: 'Write 250-word Essay',
    desc: 'Topic: My Hero in Nigerian History',
    xp: 20,
    done: false,
  },
]

const subjects = ['Math', 'Science', 'English', 'Yoruba', 'Igbo', 'Hausa', 'French']

export default function ExamPrepPage() {
  const [checked, setChecked] = useState([true, false, false])

  const toggleGoal = (i: number) => {
    setChecked((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  return (
    <>
      <Navbar active="Exam Prep" />

      <main className="flex-1">
        {/* Welcome */}
        <section className="bg-gradient-to-b from-surface to-surface-container-low pb-8 pt-16 md:pt-20">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-lg font-bold text-primary">
                A
              </div>
              <div>
                <h1 className="text-2xl font-bold text-on-surface font-heading md:text-3xl">
                  Welcome back, Alex! 👋
                </h1>
                <p className="text-sm text-on-surface-variant">
                  You&apos;ve completed 75% of your weekly goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Bento */}
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="grid gap-6 lg:grid-cols-12">
              {/* Main Content */}
              <div className="space-y-6 lg:col-span-8">
                {/* Progress Row */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {subjects.map((subject, i) => {
                    const pcts = [82, 65, 45]
                    const colors = ['#2563EB', '#10B981', '#FBBF24']
                    const pct = pcts[i]
                    const conic = `conic-gradient(${colors[i]} ${pct * 3.6}deg, #e6eeff ${pct * 3.6}deg)`
                    return (
                      <div
                        key={subject}
                        className="rounded-2xl bg-surface-container-lowest p-5 text-center shadow-ambient-sm"
                      >
                        <div
                          className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full"
                          style={{ background: conic }}
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-sm font-bold text-on-surface">
                            {pct}%
                          </div>
                        </div>
                        <div className="text-sm font-bold text-on-surface">
                          {subject}
                        </div>
                        <div className="text-xs text-on-surface-variant">
                          {pct > 70 ? '6' : pct > 50 ? '4' : '3'}/8 Topics
                          Done
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Daily Study Goals */}
                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-on-surface font-heading">
                      Daily Study Goals
                    </h2>
                    <span className="rounded-full bg-primary-fixed px-3 py-1 text-xs font-semibold text-primary">
                      Today: May 22
                    </span>
                  </div>
                  <div className="space-y-4">
                    {goals.map((g, i) => (
                      <div
                        key={g.title}
                        className="flex items-start gap-3 rounded-xl border border-outline-variant p-4 transition-colors hover:border-primary"
                      >
                        <button
                          onClick={() => toggleGoal(i)}
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            checked[i]
                              ? 'border-secondary bg-secondary text-white'
                              : 'border-outline'
                          }`}
                        >
                          {checked[i] && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </button>
                        <div className="flex-1">
                          <div
                            className={`text-sm font-semibold ${
                              checked[i]
                                ? 'text-on-surface-variant line-through'
                                : 'text-on-surface'
                            }`}
                          >
                            {g.title}
                          </div>
                          <div className="text-xs text-on-surface-variant">
                            {g.desc}
                          </div>
                        </div>
                        <span className="shrink-0 rounded-full bg-secondary-fixed/30 px-2.5 py-1 text-xs font-semibold text-secondary">
                          +{g.xp} XP
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-outline-variant px-4 py-3 text-sm font-semibold text-on-surface-variant transition-colors hover:border-primary hover:text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Add a Personal Goal
                  </button>
                </div>

                {/* Recommended Practice Sets */}
                <div>
                  <h2 className="mb-4 text-lg font-bold text-on-surface font-heading">
                    Recommended for Grade 10
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: 'Calculus Fundamentals',
                        subject: 'Math',
                        accent: 'border-primary',
                        headerBg: 'bg-primary-fixed',
                        badge: 'Mathematics',
                        badgeVariant: 'primary' as const,
                        desc: 'Limits, derivatives, and basic integration techniques.',
                        difficulty: 'Intermediate',
                      },
                      {
                        title: 'Organic Chemistry',
                        subject: 'Science',
                        accent: 'border-secondary',
                        headerBg: 'bg-secondary-fixed/30',
                        badge: 'Science',
                        badgeVariant: 'secondary' as const,
                        desc: 'Hydrocarbons, functional groups, and reaction mechanisms.',
                        difficulty: 'Advanced',
                      },
                    ].map((set) => (
                      <div
                        key={set.title}
                        className={`rounded-2xl border-t-4 ${set.accent} bg-surface-container-lowest shadow-ambient-sm transition-all hover:-translate-y-1 hover:shadow-ambient-md`}
                      >
                        <div
                          className={`flex items-center justify-between rounded-t-xl ${set.headerBg} px-5 py-3`}
                        >
                          <Badge variant={set.badgeVariant}>
                            {set.badge}
                          </Badge>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-on-surface-variant">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                          </svg>
                        </div>
                        <div className="p-5">
                          <h3 className="font-bold text-on-surface font-heading">
                            {set.title}
                          </h3>
                          <p className="mt-1 text-xs text-on-surface-variant">
                            {set.desc}
                          </p>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="rounded-full bg-surface-container px-3 py-1 text-xs text-on-surface-variant">
                              {set.difficulty}
                            </span>
                            <a
                              href="/subjects"
                              className="text-xs font-semibold text-primary hover:underline"
                            >
                              Start &rarr;
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6 lg:col-span-4">
                {/* Upcoming Tests */}
                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm">
                  <h3 className="mb-4 text-base font-bold text-on-surface font-heading">
                    Upcoming Tests
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        title: 'Mid-Term Mock: Math',
                        date: 'May 26',
                        urgent: true,
                      },
                      {
                        title: 'Biology Lab Quiz',
                        date: 'May 29',
                        urgent: false,
                      },
                    ].map((test) => (
                      <div
                        key={test.title}
                        className="flex items-center gap-3 rounded-xl border border-outline-variant p-3"
                      >
                        <span
                          className={`shrink-0 rounded-lg px-2 py-1 text-xs font-bold ${
                            test.urgent
                              ? 'bg-error-container text-on-error-container'
                              : 'bg-surface-container text-on-surface-variant'
                          }`}
                        >
                          {test.date}
                        </span>
                        <div className="min-w-0 text-sm font-semibold text-on-surface">
                          {test.title}
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/"
                    className="mt-4 block text-center text-xs font-semibold text-primary hover:underline"
                  >
                    View Full Calendar
                  </a>
                </div>

                {/* Achievement Badges */}
                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm">
                  <h3 className="mb-4 text-base font-bold text-on-surface font-heading">
                    Achievement Badges
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: '7-Day Streak', color: 'bg-tertiary-fixed', icon: '🔥' },
                      { label: 'Quiz Master', color: 'bg-primary-fixed', icon: '🏆' },
                      { label: 'Flashcard Pro', color: '', icon: '🔒', locked: true },
                    ].map((b) => (
                      <div
                        key={b.label}
                        className={`flex flex-col items-center gap-1.5 rounded-xl p-3 text-center transition-transform hover:scale-110 ${
                          b.locked ? 'opacity-40 grayscale' : b.color
                        }`}
                      >
                        <span className="text-xl">{b.icon}</span>
                        <span className="text-[10px] font-semibold leading-tight text-on-surface">
                          {b.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Help */}
                <div className="relative overflow-hidden rounded-2xl bg-primary p-6 text-on-primary">
                  <div className="relative z-10">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <h3 className="mt-4 text-lg font-bold font-heading">
                      Stuck on a topic?
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      Get instant help from a tutor.
                    </p>
                    <a
                      href="/tutors"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-primary transition-all hover:opacity-90 active:scale-[0.98]"
                    >
                      Get Help Now
                    </a>
                  </div>
                  <div className="absolute -bottom-8 -right-8 text-8xl opacity-10">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav active="Practice" />
    </>
  )
}
