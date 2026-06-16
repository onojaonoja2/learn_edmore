'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Subjects', href: '/subjects' },
  { label: 'Exam Prep', href: '/exam-prep' },
  { label: 'Tutors', href: '/tutors' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => setSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-1px 0px 0px 0px' }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <div ref={sentinelRef} className="h-0" />

      <header
        className={`w-full backdrop-blur-lg transition-all duration-300 z-50 ${
          sticky
            ? 'fixed top-0 left-0 right-0 bg-surface/95 shadow-ambient-sm'
            : 'relative bg-surface/80'
        } ${menuOpen ? 'shadow-ambient-md' : ''}`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-12">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <div className="h-10 w-10 overflow-hidden shrink-0">
              <Image
                src="/learn_edmore_logo.png"
                alt="Learn Edmore"
                width={200}
                height={200}
                className="h-full w-full scale-[3.2] object-cover brightness-150 contrast-150 drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>
            <span className="text-2xl font-black text-on-surface font-heading tracking-tight drop-shadow-sm">
              Learn Edmore
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  active === link.label
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-full border border-outline-variant px-5 py-2 text-sm font-semibold text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
            >
              Login
            </Link>
            <Link
              href="/get-started"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex touch-manipulation flex-col items-center justify-center gap-1.5 p-2 -mr-2 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 rounded-full bg-on-surface transition-all duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-on-surface transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-on-surface transition-all duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 border-t border-outline-variant bg-surface px-5 pb-4 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                  active === link.label
                    ? 'bg-primary-fixed text-primary'
                    : 'text-on-surface hover:bg-surface-container'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3 border-t border-outline-variant bg-surface px-5 py-4">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="w-full rounded-full border border-outline-variant px-5 py-3 text-center text-sm font-semibold text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
            >
              Login
            </Link>
            <Link
              href="/get-started"
              onClick={() => setMenuOpen(false)}
              className="w-full rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
