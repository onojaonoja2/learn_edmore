import type { Metadata } from "next"
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import SectionHeading from '@/components/SectionHeading'
import Badge from '@/components/Badge'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: "Subjects We Teach",
  description:
    "Explore Learn Edmore's comprehensive subject offerings: Mathematics, English, Science, Igbo, Yoruba, Hausa, French, Creative Arts, Social Studies, and Adult Literacy. Online and on-site in Abuja.",
  openGraph: {
    title: "Subjects We Teach — Learn Edmore",
    description:
      "Nigerian and Cambridge curriculum subjects taught by expert tutors. Available online and on-site in Abuja.",
    url: "https://learnedmore.com/subjects",
  },
}

const subjects = [
  {
    title: 'Mathematics',
    description:
      'From basic numeracy to advanced problem-solving, our Maths program builds confidence through interactive exercises and real-world applications.',
    accent: 'border-primary',
    badge: 'Primary & Middle',
    badgeVariant: 'primary' as const,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M6 4l3 3M18 4l-3 3M4 14h4M16 14h4M12 18v-4M8 22l4-4 4 4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: 'English Language',
    description:
      'Develop strong reading comprehension, creative writing, grammar, and oral communication skills through engaging literary activities.',
    accent: 'border-secondary',
    badge: 'Early Years & Primary',
    badgeVariant: 'secondary' as const,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 12h6M8 8h8M8 16h4" />
      </svg>
    ),
  },
  {
    title: 'Science',
    description:
      'Spark curiosity with hands-on experiments and explorations covering biology, physics, chemistry, and environmental science.',
    accent: 'border-tertiary',
    badge: 'Middle School',
    badgeVariant: 'tertiary' as const,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v6a4 4 0 0 1-4 4H2" />
        <path d="M14 2v6a4 4 0 0 0 4 4h4" />
        <path d="M12 16V2" />
        <path d="M8 22h8" />
        <path d="M12 16v6" />
      </svg>
    ),
  },
  {
    title: 'Social Studies',
    description:
      'Explore Nigerian history, geography, civic education, and cultural heritage to build informed and responsible future citizens.',
    accent: 'border-primary',
    badge: 'All Levels',
    badgeVariant: 'primary' as const,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Creative Arts',
    description:
      'Nurture creativity through drawing, painting, music, and drama — building self-expression and fine motor skills.',
    accent: 'border-secondary',
    badge: 'Early Years',
    badgeVariant: 'secondary' as const,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <path d="M17 20L9 8l-5 8 3 4 7-4 3 4z" />
        <path d="M17 20V8" />
      </svg>
    ),
  },
  {
    title: 'Yoruba',
    description:
      'Learn to read, write, and speak Yoruba with lessons on vocabulary, grammar, and cultural traditions across Nigeria.',
    accent: 'border-primary',
    badge: 'All Levels',
    badgeVariant: 'primary' as const,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Igbo',
    description:
      'Master Igbo language skills through immersive lessons in speaking, reading, writing, and cultural appreciation.',
    accent: 'border-secondary',
    badge: 'All Levels',
    badgeVariant: 'secondary' as const,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Hausa',
    description:
      'Explore the Hausa language with structured lessons on conversation, writing, and Northern Nigerian culture.',
    accent: 'border-tertiary',
    badge: 'All Levels',
    badgeVariant: 'tertiary' as const,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'French',
    description:
      'Build French language proficiency with lessons in vocabulary, grammar, conversation, and Francophone culture.',
    accent: 'border-primary',
    badge: 'All Levels',
    badgeVariant: 'primary' as const,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Adult Literacy',
    description:
      'Empower adults with foundational literacy and numeracy skills for personal and professional growth.',
    accent: 'border-secondary',
    badge: 'All Levels',
    badgeVariant: 'secondary' as const,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
]

const subjectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Subjects We Teach",
  description: "Comprehensive curriculum subjects offered by Learn Edmore Tutoring Academy.",
  itemListElement: [
    "Mathematics", "English Language", "Science", "Social Studies",
    "Creative Arts", "Yoruba", "Igbo", "Hausa", "French", "Adult Literacy",
  ].map((name, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Course",
      name,
      provider: { "@type": "Organization", name: "Learn Edmore" },
    },
  })),
}

export default function SubjectsPage() {
  return (
    <>
      <JsonLd data={subjectsSchema} />
      <Navbar active="Subjects" />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-surface to-surface-container-low py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 text-center md:px-12">
            <span className="mb-4 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
              Our Curriculum
            </span>
            <h1 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl font-heading">
              Discover Your Next Lesson
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-on-surface-variant">
              Nigerian and Cambridge curriculum resources designed to inspire a
              love for learning. Available online and on-site for learners at
              every level.
            </p>
          </div>
        </section>

        {/* Subject Grid */}
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {subjects.map((s) => (
                <div
                  key={s.title}
                  className={`group rounded-2xl border-t-4 ${s.accent} bg-surface-container-lowest p-6 shadow-ambient-sm transition-all hover:-translate-y-1 hover:shadow-ambient-md`}
                >
                  <div
                    className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${
                      s.accent === 'border-primary'
                        ? 'bg-primary-fixed text-primary group-hover:bg-primary group-hover:text-on-primary'
                        : s.accent === 'border-secondary'
                          ? 'bg-secondary-fixed/30 text-secondary group-hover:bg-secondary group-hover:text-on-secondary'
                          : 'bg-tertiary-fixed text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary'
                    }`}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-on-surface font-heading">
                        {s.title}
                      </h3>
                      <Badge variant={s.badgeVariant}>{s.badge}</Badge>
                      <Badge variant="primary">Online</Badge>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
                      {s.description}
                    </p>
                    <Link
                      href={`/get-started?subject=${encodeURIComponent(s.title)}`}
                      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-semibold transition-colors ${
                        s.accent === 'border-primary'
                          ? 'border-primary text-primary hover:bg-primary hover:text-on-primary'
                          : s.accent === 'border-secondary'
                            ? 'border-secondary text-secondary hover:bg-secondary hover:text-on-secondary'
                            : 'border-tertiary text-tertiary hover:bg-tertiary hover:text-on-tertiary'
                      }`}
                    >
                      Get Started &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlight */}
        <section className="bg-primary-fixed py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative">
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-ambient-sm transition-all duration-500 hover:shadow-ambient-lg">
                  <Image
                    src="/curriculum_image.png"
                    alt="Expertly crafted curriculum study guides"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-2xl bg-secondary-fixed/40 p-4 shadow-ambient-md backdrop-blur-sm">
                  <div className="text-lg font-bold text-secondary">500+</div>
                  <div className="text-xs text-secondary">New Study Guides</div>
                </div>
              </div>
              <div>
                <span className="mb-3 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-on-primary">
                  Expertly Crafted
                </span>
                <h2 className="text-3xl font-bold leading-tight text-on-surface md:text-4xl font-heading">
                  Expertly Crafted Curriculum
                </h2>
                <ul className="mt-6 space-y-4">
                  {[
                    'Aligned with Nigerian national educational standards',
                    'Interactive quizzes with instant feedback',
                    'Downloadable resources for offline practice',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-on-surface">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/get-started"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  View All Study Guides
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav active="Learn" />
    </>
  )
}
