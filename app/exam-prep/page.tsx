import type { Metadata } from "next"
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import Footer from '@/components/Footer'
import Badge from '@/components/Badge'
import Link from 'next/link'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: "Exam Preparation",
  description:
    "Prepare for Common Entrance, Junior WAEC, Senior WAEC, Checkpoint, and Cambridge exams with Learn Edmore's expert-led exam prep programs in Abuja. Online and on-site.",
  openGraph: {
    title: "Exam Preparation — Learn Edmore",
    description:
      "Targeted exam prep programs for Common Entrance, WAEC, Checkpoint, and Cambridge exams. Proven success rate with expert tutors in Abuja.",
    url: "https://learnedmore.com/exam-prep",
  },
}

const examPrograms = [
  "Common Entrance Exam",
  "Junior WAEC (BECE)",
  "Senior WAEC (SSCE)",
  "Checkpoint",
  "Cambridge IGCSE",
]

const examSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Exam Prep Programs",
  description: "Exam preparation programs offered by Learn Edmore Tutoring Academy.",
  itemListElement: examPrograms.map((name, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Course",
      name,
      provider: { "@type": "Organization", name: "Learn Edmore" },
    },
  })),
}

const exams = [
  {
    title: 'Common Entrance Exam',
    badge: 'Primary 6',
    badgeVariant: 'primary' as const,
    description:
      'Targeted preparation for students sitting Nigeria\'s Common Entrance Examination into Federal Government Colleges and top private secondary schools across the country.',
    subjects: ['Mathematics', 'English Language', 'General Science', 'Social Studies'],
    features: [
      'Past questions with detailed solutions',
      'Timed mock exams with instant scoring',
      'Study schedules tailored to exam date',
      'Performance tracking across all subjects',
    ],
    color: 'from-primary to-primary-container',
    textColor: 'text-on-primary',
  },
  {
    title: 'Junior WAEC (BECE)',
    badge: 'Grade 7-9',
    badgeVariant: 'secondary' as const,
    description:
      'Comprehensive revision programs for the Basic Education Certificate Examination (BECE), covering all core subjects required by the Nigerian curriculum.',
    subjects: ['Mathematics', 'English Language', 'Basic Science', 'Social Studies', 'Creative Arts'],
    features: [
      'Syllabus-aligned lesson summaries',
      'Practice questions by topic',
      'Section-by-section revision guides',
      'Exam technique and time management tips',
    ],
    color: 'from-secondary to-secondary-container',
    textColor: 'text-on-secondary',
  },
  {
    title: 'Senior WAEC (SSCE)',
    badge: 'Grade 10-12',
    badgeVariant: 'tertiary' as const,
    description:
      'Intensive coaching for the Senior School Certificate Examination (SSCE). Master key concepts and boost your confidence across all WAEC subjects.',
    subjects: ['Mathematics', 'English Language', 'Biology', 'Chemistry', 'Physics', 'Economics'],
    features: [
      'Comprehensive theory and objective drills',
      'Past paper walkthroughs with expert tutors',
      'Weak-spot analysis and focused revision',
      'Full-length mock examinations',
    ],
    color: 'from-tertiary to-tertiary-container',
    textColor: 'text-on-tertiary',
  },
  {
    title: 'Checkpoint',
    badge: 'Cambridge',
    badgeVariant: 'primary' as const,
    description:
      'Cambridge Checkpoint preparation for Primary and Lower Secondary students. Build a strong foundation in English, Mathematics, and Science.',
    subjects: ['English', 'Mathematics', 'Science'],
    features: [
      'Cambridge-aligned curriculum resources',
      'Progressive assessment tests',
      'Skills-based practice exercises',
      'Progress reports with Cambridge benchmarks',
    ],
    color: 'from-primary to-primary-container',
    textColor: 'text-on-primary',
  },
  {
    title: 'Cambridge IGCSE',
    badge: 'Cambridge',
    badgeVariant: 'secondary' as const,
    description:
      'Expert-led preparation for Cambridge IGCSE examinations across multiple subjects. Achieve top grades with structured learning and personalised support.',
    subjects: ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'Accounting'],
    features: [
      'Complete syllabus coverage',
      'Exam-style question practice',
      'One-on-one tutoring for challenging topics',
      'Grade-boosting revision strategies',
    ],
    color: 'from-secondary to-secondary-container',
    textColor: 'text-on-secondary',
  },
]

const steps = [
  {
    step: '01',
    title: 'Assess Your Level',
    desc: 'Take a diagnostic test to identify your strengths and areas that need the most improvement.',
  },
  {
    step: '02',
    title: 'Get a Personalised Plan',
    desc: 'We create a study schedule tailored to your exam date, target grade, and learning pace.',
  },
  {
    step: '03',
    title: 'Learn & Practice',
    desc: 'Work through lessons, practice questions, and past papers with expert tutor guidance.',
  },
  {
    step: '04',
    title: 'Sit Your Exam With Confidence',
    desc: 'Walk into your exam fully prepared, having mastered the content and the techniques to succeed.',
  },
]

export default function ExamPrepPage() {
  return (
    <>
      <JsonLd data={examSchema} />
      <Navbar active="Exam Prep" />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-surface to-surface-container-low py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
                  Exam Preparation
                </span>
                <h1 className="text-4xl font-bold leading-tight text-on-surface md:text-5xl font-heading">
                  Built for{" "}
                  <span className="text-primary">Academic Excellence</span>
                </h1>
                <p className="mt-5 text-base leading-relaxed text-on-surface-variant">
                  Targeted preparation for Nigeria&apos;s key examinations
                  including Common Entrance, Junior WAEC, Senior WAEC,
                  Checkpoint, and Cambridge exams. Master the curriculum, build
                  confidence, and achieve your best results.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-on-primary transition-all hover:opacity-90 active:scale-[0.98]"
                  >
                    Start Your Preparation
                  </Link>
                  <Link
                    href="/subjects"
                    className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-7 py-3 text-sm font-semibold text-on-surface-variant transition-colors hover:border-primary hover:text-primary active:scale-[0.98]"
                  >
                    View Subjects
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-ambient-sm transition-all duration-500 hover:shadow-ambient-lg">
                  <Image
                    src="/curriculum_image.png"
                    alt="Exam preparation study materials"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-2xl bg-secondary-fixed/40 p-4 shadow-ambient-md backdrop-blur-sm">
                  <div className="text-lg font-bold text-secondary">98%</div>
                  <div className="text-xs text-secondary">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
                How It Works
              </span>
              <h2 className="text-3xl font-bold text-on-surface md:text-4xl font-heading">
                Your Path to Exam Success
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-on-surface-variant">
                A structured approach that takes you from assessment to
                exam-day confidence.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {steps.map((s) => (
                <div key={s.step} className="relative text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-fixed text-xl font-black text-primary">
                    {s.step}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-on-surface font-heading">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exam Programs */}
        <section className="bg-surface-container-low py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
                Our Programs
              </span>
              <h2 className="text-3xl font-bold text-on-surface md:text-4xl font-heading">
                Choose Your Exam Prep Program
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-on-surface-variant">
                Nigerian and Cambridge curriculum exam preparation tailored to
                every level.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {exams.map((exam) => (
                <div
                  key={exam.title}
                  className="group flex flex-col rounded-2xl bg-surface-container-lowest shadow-ambient-sm transition-all hover:-translate-y-1 hover:shadow-ambient-md"
                >
                  <div
                    className={`rounded-t-2xl bg-gradient-to-br ${exam.color} p-6 ${exam.textColor}`}
                  >
                    <Badge variant={exam.badgeVariant}>{exam.badge}</Badge>
                    <h3 className="mt-4 text-xl font-bold font-heading">
                      {exam.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">
                      {exam.description}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                        Subjects Covered
                      </span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {exam.subjects.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-surface-container px-3 py-1 text-xs font-medium text-on-surface-variant"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="mb-6 space-y-2">
                      {exam.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-xs text-on-surface-variant"
                        >
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Link
                        href="/get-started"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary px-5 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-on-primary"
                      >
                        Enrol Now &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-3 inline-block rounded-full bg-secondary-fixed/30 px-4 py-1.5 text-xs font-semibold text-secondary">
                  Why Learn Edmore
                </span>
                <h2 className="text-3xl font-bold leading-tight text-on-surface md:text-4xl font-heading">
                  Exam Prep That Delivers Results
                </h2>
                <ul className="mt-6 space-y-5">
                  {[
                    {
                      title: 'Expert Tutors',
                      desc: 'Learn from qualified educators who know the exam syllabuses inside out.',
                    },
                    {
                      title: 'Proven Track Record',
                      desc: '98% of our students meet or exceed their target grades in national and international exams.',
                    },
                    {
                      title: 'Flexible Learning',
                      desc: 'Choose between online and on-site classes that fit your schedule — 8am to 6pm on-site, 8am to 10pm online.',
                    },
                    {
                      title: 'Dual Curriculum',
                      desc: 'Master both the Nigerian national curriculum and the Cambridge curriculum under one roof.',
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-xs font-bold text-primary">
                        ✓
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-on-surface">
                          {item.title}
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-primary-fixed p-8 md:p-12">
                <blockquote className="text-lg font-semibold leading-relaxed text-on-surface md:text-xl">
                  &ldquo;The exam prep program transformed my daughter&apos;s
                  confidence. She went from dreading tests to walking into her
                  Common Entrance exam calm and prepared. She scored in the top
                  5%.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary">
                    MO
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-on-surface">
                      Mrs. Okonkwo
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      Parent of Grade 6 Student
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-5 md:px-12">
            <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 text-center text-on-primary md:px-16 md:py-20">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-white/5" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold font-heading md:text-4xl">
                  Ready to Ace Your Exams?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/80">
                  Join hundreds of students who trust Learn Edmore for their
                  exam preparation. Start today and walk into your exam with
                  confidence.
                </p>
                <Link
                  href="/get-started"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Get Started Now
                </Link>
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
