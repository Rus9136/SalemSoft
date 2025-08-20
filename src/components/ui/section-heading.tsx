import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="text-display-2 font-heading font-bold text-fg mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lead text-fg-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}