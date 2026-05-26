'use client'

import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? 'shadow-ambient-sm' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-12">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand-mark.svg"
            alt="Learn Edmore"
            width={32}
            height={32}
            className="shrink-0"
          />
          <span className="hidden text-lg font-bold text-on-surface sm:block font-heading">
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
      </div>
    </header>
  )
}
