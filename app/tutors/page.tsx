import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import SectionHeading from '@/components/SectionHeading'
import Badge from '@/components/Badge'

const tutors = [
  {
    name: 'Chioma Okafor',
    role: 'Mathematics Specialist',
    rating: 4.9,
    reviews: 128,
    topRated: true,
    specialties: ['Primary Math', 'Algebra', 'Geometry'],
    experience: '8 years',
    grades: 'Grade 1-9',
    accent: 'border-primary',
    avatar: 'CO',
    online: true,
  },
  {
    name: 'Emeka Obi',
    role: 'Science & STEM Tutor',
    rating: 4.8,
    reviews: 94,
    topRated: true,
    specialties: ['General Science', 'Basic Tech', 'Biology'],
    experience: '6 years',
    grades: 'Grade 4-9',
    accent: 'border-secondary',
    avatar: 'EO',
    online: true,
  },
  {
    name: 'Folake Adeyemi',
    role: 'English & Literacy Coach',
    rating: 4.7,
    reviews: 76,
    topRated: true,
    specialties: ['Creative Writing', 'Reading', 'Grammar'],
    experience: '5 years',
    grades: 'Pre-School - Grade 6',
    accent: 'border-tertiary',
    avatar: 'FA',
    online: false,
  },
  {
    name: 'Yusuf Bello',
    role: 'Exam Prep Specialist',
    rating: 4.9,
    reviews: 112,
    topRated: true,
    specialties: ['Common Entrance', 'Junior WAEC', 'Scholarship Prep'],
    experience: '10 years',
    grades: 'Grade 4-9',
    accent: 'border-primary',
    avatar: 'YB',
    online: true,
  },
  {
    name: 'Ngozi Eze',
    role: 'Early Years Educator',
    rating: 4.9,
    reviews: 88,
    topRated: true,
    specialties: ['Early Literacy', 'Numeracy', 'Phonics'],
    experience: '7 years',
    grades: 'Pre-School - Grade 3',
    accent: 'border-secondary',
    avatar: 'NE',
    online: true,
  },
  {
    name: 'Tunde Bakare',
    role: 'Social Studies & Civic',
    rating: 4.6,
    reviews: 53,
    topRated: true,
    specialties: ['Nigerian History', 'Geography', 'Civic Ed'],
    experience: '4 years',
    grades: 'Grade 4-9',
    accent: 'border-tertiary',
    avatar: 'TB',
    online: false,
  },
]

export default function TutorsPage() {
  return (
    <>
      <Navbar active="Tutors" />

      <main className="flex-1">
        {/* Hero & Filter */}
        <section className="bg-gradient-to-b from-surface to-surface-container-low pb-12 pt-16 md:pt-20">
          <div className="mx-auto max-w-7xl px-5 text-center md:px-12">
            <span className="mb-4 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
              Expert Tutors
            </span>
            <h1 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl font-heading">
              Find Your Perfect Mentor
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-on-surface-variant">
              Connect with Abuja&apos;s most qualified tutors who are passionate
              about helping your child succeed.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-7xl px-5 md:px-12">
            <div className="grid gap-4 rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm md:grid-cols-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                  Subject
                </label>
                <select className="w-full rounded-full border border-outline-variant bg-surface px-4 py-2.5 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10">
                  <option>All Subjects</option>
                  <option>Early Literacy</option>
                  <option>Primary Math</option>
                  <option>Creative Arts</option>
                  <option>Science Discovery</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-on-surface-variant">
                  Grade Level
                </label>
                <select className="w-full rounded-full border border-outline-variant bg-surface px-4 py-2.5 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10">
                  <option>All Grades</option>
                  <option>Pre-School</option>
                  <option>Kindergarten</option>
                  <option>Grade 1-3</option>
                  <option>Grade 4-6</option>
                </select>
              </div>
              <div className="flex items-end">
                <label className="relative inline-flex cursor-pointer items-center gap-3">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="h-6 w-11 rounded-full bg-outline-variant after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-primary peer-checked:after:translate-x-full" />
                  <span className="text-sm font-semibold text-on-surface">
                    Available Now
                  </span>
                </label>
              </div>
              <div className="flex items-end">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tutor Grid */}
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tutors.map((t) => (
                <div
                  key={t.name}
                  className={`group rounded-2xl border-t-4 ${t.accent} bg-surface-container-lowest p-6 shadow-ambient-sm transition-all hover:-translate-y-1 hover:shadow-ambient-md`}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-fixed text-lg font-bold text-primary">
                        {t.avatar}
                      </div>
                      {t.online && (
                        <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-secondary" />
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-on-surface">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      {t.rating}
                      <span className="text-on-surface-variant">
                        ({t.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-lg font-bold text-on-surface font-heading">
                      {t.name}
                    </h3>
                    {t.topRated && (
                      <Badge variant="tertiary">Top Rated</Badge>
                    )}
                  </div>
                  <p className="text-sm text-on-surface-variant">{t.role}</p>

                  <div className="my-4 flex flex-wrap gap-1.5">
                    {t.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-surface-container px-3 py-1 text-xs font-medium text-on-surface-variant"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4 flex items-center gap-4 text-xs text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {t.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                      {t.grades}
                    </span>
                  </div>

                  <div className="pt-4">
                    <a
                      href="/get-started"
                      className="block w-full rounded-full bg-secondary px-5 py-2.5 text-center text-xs font-semibold text-on-secondary transition-all hover:opacity-90 active:scale-[0.98]"
                    >
                      Book a Session
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Bento */}
        <section className="bg-surface-container-low py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl bg-primary-container p-8 md:col-span-2">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-on-primary-container font-heading">
                    Scholarship Programs 2025
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-on-primary-container/80">
                    Merit-based scholarships for outstanding students in Abuja.
                    Apply now for the upcoming academic session.
                  </p>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-on-primary-container px-6 py-2.5 text-sm font-semibold text-primary-container transition-all hover:opacity-90 active:scale-[0.98]"
                  >
                    Learn More
                  </a>
                </div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-xl" />
              </div>
              <div className="rounded-2xl bg-tertiary-fixed p-8">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6d5000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 className="mt-4 text-xl font-bold text-on-tertiary-fixed font-heading">
                  Verified Experts Only
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-tertiary-fixed/80">
                  Every tutor undergoes rigorous background checks and
                  qualification verification.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav active="Tutors" />
    </>
  )
}
