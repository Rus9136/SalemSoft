import { Star } from 'lucide-react'
import { Card, CardContent } from './card'

interface TestimonialProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
  className?: string
}

export function Testimonial({
  name,
  role,
  company,
  content,
  rating,
  avatar,
  className = ''
}: TestimonialProps) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <Card variant="default" className={`p-0 ${className}`}>
      <CardContent className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? 'text-amber-400 fill-current'
                  : 'text-line'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-fg-muted leading-relaxed mb-6">
          "{content}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-sm font-semibold text-accent">
                  {initials}
                </span>
              </div>
            )}
          </div>
          <div>
            <div className="font-semibold text-fg text-sm">{name}</div>
            <div className="text-xs text-fg-muted">
              {role} • {company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}