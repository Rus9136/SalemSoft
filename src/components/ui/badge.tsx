import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-accent text-bg hover:bg-accent-600',
        secondary:
          'border-transparent bg-surface text-fg hover:bg-bg-soft',
        destructive:
          'border-transparent bg-danger text-fg hover:bg-danger/90',
        outline: 'text-fg border-line hover:bg-surface',
        success: 'border-transparent bg-success/10 text-success border-success/20',
        warning: 'border-transparent bg-amber-500/10 text-amber-600 border-amber-500/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }