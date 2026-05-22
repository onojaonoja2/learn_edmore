import { type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'error'

const variants: Record<Variant, string> = {
  primary: 'bg-primary-fixed text-on-primary-fixed',
  secondary: 'bg-secondary-fixed/30 text-secondary',
  tertiary: 'bg-tertiary-fixed text-on-tertiary-fixed',
  neutral: 'bg-surface-container text-on-surface-variant',
  error: 'bg-error-container text-on-error-container',
}

export default function Badge({
  children,
  variant = 'neutral',
}: {
  children: ReactNode
  variant?: Variant
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold leading-none tracking-wide ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
