import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-accent text-bg hover:bg-accent-600 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5',
        destructive:
          'bg-danger text-fg hover:bg-danger/90',
        outline:
          'border border-line bg-transparent hover:bg-surface hover:border-accent',
        secondary:
          'bg-surface text-fg hover:bg-bg-soft border border-line hover:border-accent',
        ghost: 'hover:bg-surface hover:text-accent',
        link: 'text-accent underline-offset-4 hover:underline',
        gradient: 'bg-gradient-to-r from-accent to-accent-600 text-bg hover:from-accent-600 hover:to-accent hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-9 rounded-lg px-4',
        lg: 'h-14 rounded-xl px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }