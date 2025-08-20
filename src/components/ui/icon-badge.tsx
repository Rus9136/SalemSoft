import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface IconBadgeProps {
  icon: LucideIcon
  variant?: 'default' | 'accent' | 'success' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function IconBadge({ 
  icon: Icon, 
  variant = 'default', 
  size = 'md',
  className 
}: IconBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-xl border',
        {
          'h-10 w-10': size === 'sm',
          'h-12 w-12': size === 'md',
          'h-16 w-16': size === 'lg',
        },
        {
          'bg-surface border-line': variant === 'default',
          'bg-accent/10 border-accent/20 text-accent': variant === 'accent',
          'bg-success/10 border-success/20 text-success': variant === 'success',
          'bg-danger/10 border-danger/20 text-danger': variant === 'danger',
        },
        className
      )}
    >
      <Icon 
        className={cn({
          'h-4 w-4': size === 'sm',
          'h-5 w-5': size === 'md',
          'h-7 w-7': size === 'lg',
        })} 
      />
    </div>
  )
}