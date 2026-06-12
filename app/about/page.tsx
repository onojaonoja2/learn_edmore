import Image from 'next/image'
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'

const stats = [
  { label: 'Students Taught', value: '500+' },
  { label: 'Expert Tutors', value: '30+' },
  { label: 'Subjects Offered', value: '10+' },
  { label: 'Success Rate', value: '98%' },
]

const values = [
  {
    title: 'Excellence',
    desc: 'We hold every student to high academic standards, preparing them for Nigerian and Cambridge examinations with rigour and care.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Accessibility',
    desc: 'With both online and on-site classes, we make quality education accessible to learners in Abuja and across the globe.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Personalised Learning',
    desc: 'Every learner is unique. We tailor our teaching methods to match each student\'s pace, strengths, and goals.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    desc: 'We build trust through transparency in our teaching, communication with parents, and commitment to every learner\'s success.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-surface to-surface-container-low py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
                  About Us
                </span>
                <h1 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl font-heading">
                  Shaping the Future of{" "}
                  <span className="text-primary">Education</span>
                </h1>
                <p className="mt-5 text-base leading-relaxed text-on-surface-variant">
                  Learn Edmore is an Abuja-based online and on-site tutoring
                  academy with a global online reach. We empower learners from
                  early years through adult literacy with expert-led lessons in
                  Mathematics, English Language, Igbo Language, Science, and
                  more.
                </p>
                <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
                  We follow both the Nigerian national curriculum and the
                  Cambridge curriculum, preparing students for Common Entrance,
                  Junior WAEC, Senior WAEC, Checkpoint, and Cambridge
                  examinations.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/get-started"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98]"
                  >
                    Start Learning Today
                  </a>
                  <a
                    href="/subjects"
                    className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-7 py-3 text-sm font-semibold text-on-surface-variant transition-colors hover:border-primary hover:text-primary active:scale-[0.98]"
                  >
                    Explore Subjects
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-ambient-sm transition-all duration-500 hover:shadow-ambient-lg">
                  <Image
                    src="/curriculum_image.png"
                    alt="Learn Edmore tutoring academy"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-surface-container-low py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-primary md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-on-surface-variant">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-3 inline-block rounded-full bg-secondary-fixed/30 px-4 py-1.5 text-xs font-semibold text-secondary">
                  Our Story
                </span>
                <h2 className="text-3xl font-bold leading-tight text-on-surface md:text-4xl font-heading">
                  Building Confident Learners for Over a Decade
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-on-surface-variant">
                  What started as a small tutoring initiative in Abuja has grown
                  into a trusted academy serving hundreds of families. Our
                  founders recognised a gap in personalised, high-quality
                  education that bridges the Nigerian curriculum with global
                  standards.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                  Today, we offer both in-person and online classes, making it
                  possible for students anywhere in the world to access
                  expert-led instruction in core subjects. Our tutors are
                  passionate educators who bring years of classroom and
                  one-on-one teaching experience.
                </p>
              </div>
              <div className="rounded-2xl bg-primary-fixed p-8 md:p-12">
                <blockquote className="text-lg font-semibold leading-relaxed text-on-surface md:text-xl">
                  &ldquo;Every child deserves an education that meets them where
                  they are and takes them where they need to go. That&apos;s the
                  promise we make to every family.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary">
                    EO
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-on-surface">
                      Edmore O.
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      Founder, Learn Edmore Tutoring Academy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-surface-container-low py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
                Our Values
              </span>
              <h2 className="text-3xl font-bold text-on-surface md:text-4xl font-heading">
                What Drives Us
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-surface-container-lowest p-6 text-center shadow-ambient-sm transition-all hover:-translate-y-1 hover:shadow-ambient-md"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-fixed text-primary">
                    {v.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-on-surface font-heading">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {v.desc}
                  </p>
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
                  Ready to Get Started?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/80">
                  Join hundreds of learners who trust Learn Edmore for their
                  education. Whether online or on-site, we are here to help you
                  succeed.
                </p>
                <a
                  href="/get-started"
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
      <MobileNav />
    </>
  )
}
