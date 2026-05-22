import Image from 'next/image'
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import SectionHeading from '@/components/SectionHeading'
import Badge from '@/components/Badge'

const subjects = [
  {
    title: 'Mathematics',
    description:
      'Build strong numeracy skills with interactive lessons covering arithmetic, geometry, and problem-solving.',
    accent: 'border-primary',
    iconBg: 'bg-primary-fixed text-primary',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M6 4l3 3M18 4l-3 3M4 14h4M16 14h4M12 18v-4M8 22l4-4 4 4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: 'English & Literacy',
    description:
      'Develop reading comprehension, creative writing, and communication skills through engaging activities.',
    accent: 'border-secondary',
    iconBg: 'bg-secondary-fixed/30 text-secondary',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 12h6M8 8h8M8 16h4" />
      </svg>
    ),
  },
  {
    title: 'General Science',
    description:
      'Spark curiosity with hands-on exploration of biology, physics, and the natural world.',
    accent: 'border-tertiary',
    iconBg: 'bg-tertiary-fixed text-tertiary',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v6a4 4 0 0 1-4 4H2" />
        <path d="M14 2v6a4 4 0 0 0 4 4h4" />
        <path d="M12 16V2" />
        <path d="M8 22h8" />
        <path d="M12 16v6" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote:
      'Since joining Learn Edmore, my daughter\'s confidence in Maths has grown tremendously. The tutors are patient and truly care about her progress.',
    name: 'Mrs. Adekunle',
    desc: 'Parent of Primary 4 Student',
  },
  {
    quote:
      'The exam prep program is outstanding. My son scored his best ever in the Common Entrance exam. Highly recommended for Abuja parents.',
    name: 'Mr. Okonkwo',
    desc: 'Parent of Grade 6 Student',
  },
  {
    quote:
      'I love the interactive lessons! Science is now my favourite subject. The experiments we do are so much fun!',
    name: 'Zara B.',
    desc: 'Grade 5 Student',
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar active="Home" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-surface to-surface-container-low pb-20 pt-16 md:pb-28 md:pt-20">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
                  Empowering Young Learners
                </span>
                <h1 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl font-heading">
                  Unlock Your{" "}
                  <span className="text-primary">Child&apos;s Potential</span>
                </h1>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-on-surface-variant md:text-lg">
                  Abuja&apos;s premier tutoring academy offering expert-led
                  lessons in Mathematics, English, Science, and more for early
                  learners to grade school students.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/subjects"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98]"
                  >
                    Start Learning Today
                  </a>
                  <a
                    href="/tutors"
                    className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-7 py-3 text-sm font-semibold text-on-surface-variant transition-colors hover:border-primary hover:text-primary active:scale-[0.98]"
                  >
                    Explore Subjects
                  </a>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative h-72 w-72 md:h-96 md:w-96">
                  <div className="absolute -top-4 right-8 h-full w-full rounded-[2rem] bg-primary-container/40" />
                  <div className="relative flex h-full w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary-fixed to-surface-container-high">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#004ac6" strokeWidth="1" className="opacity-50">
                      <circle cx="12" cy="8" r="5" />
                      <path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2" />
                    </svg>
                  </div>
                </div>
                <span className="absolute -left-2 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-fixed text-lg animate-bounce">
                  💡
                </span>
                <span className="absolute -bottom-2 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed/50 text-lg">
                  ✨
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects We Cover */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <SectionHeading
              badge="Our Programs"
              title="Subjects We Cover"
              description="Comprehensive curriculum designed to build confidence and academic excellence across all core subjects."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {subjects.map((s) => (
                <div
                  key={s.title}
                  className={`group rounded-2xl border-t-4 ${s.accent} bg-surface-container-lowest p-6 shadow-ambient-sm transition-all hover:-translate-y-1 hover:shadow-ambient-md`}
                >
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-colors ${s.iconBg} group-hover:bg-primary group-hover:text-on-primary`}
                  >
                    {s.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-on-surface font-heading">
                    {s.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
                    {s.description}
                  </p>
                  <a
                    href="/subjects"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    Explore &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exam Success Bento */}
        <section className="bg-surface-container-low py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <SectionHeading
              badge="Exam Success"
              title="Built for Academic Excellence"
              description="Targeted preparation for Nigeria's key examinations including Common Entrance, Junior WAEC, and termly assessments."
            />
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-container p-8 text-on-primary lg:col-span-7">
                <div className="relative z-10">
                  <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                    GRADES 1-6
                  </span>
                  <h3 className="text-2xl font-bold font-heading">
                    Grade School Readiness
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
                    Structured programs aligned with the Nigerian curriculum to
                    ensure your child excels at every stage.
                  </p>
                </div>
                <div className="absolute -bottom-8 -right-8 text-[120px] opacity-10">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:col-span-5">
                <div className="rounded-2xl bg-primary-container p-6 text-on-primary-container">
                  <h3 className="mb-1 text-lg font-bold font-heading">
                    Preschool Prep
                  </h3>
                  <p className="text-sm leading-relaxed opacity-80">
                    Early literacy, numeracy, and social skills for ages 3-5.
                  </p>
                </div>
                <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-ambient-sm">
                  <div className="mb-2 text-2xl font-bold text-secondary">
                    98%
                  </div>
                  <p className="text-sm font-semibold text-on-surface">
                    Success Rate
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    of our students meet or exceed grade-level expectations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <SectionHeading
              badge="Testimonials"
              title="Happy Parents & Students"
              description="Hear from families in Abuja who trust Learn Edmore for their children's education."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl bg-surface-container p-8 shadow-ambient-sm"
                >
                  <div className="mb-3 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#10B981"
                        stroke="#10B981"
                        strokeWidth="1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-5 text-sm leading-relaxed italic text-on-surface-variant">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-fixed text-xs font-bold text-primary">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-on-surface">
                        {t.name}
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        {t.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 text-center text-on-primary md:px-16 md:py-20">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-white/5" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold font-heading md:text-4xl">
                  Ready to See Your Child Soar?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/80">
                  Join hundreds of Abuja families who have discovered the
                  Learn Edmore difference. Start your free trial today.
                </p>
                <a
                  href="/subjects"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Create Your Free Account
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav active="Home" />
    </>
  )
}
