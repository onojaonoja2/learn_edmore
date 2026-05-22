import { type ReactNode } from 'react'

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
}: {
  badge?: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={`mb-12 max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-semibold text-primary">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight text-on-surface md:text-4xl font-heading">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-on-surface-variant md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
