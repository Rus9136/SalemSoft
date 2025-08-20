import { Check, X } from 'lucide-react'
import { Card, CardContent } from './card'

interface BeforeAfterItem {
  before: string
  after: string
}

interface BeforeAfterListProps {
  items: BeforeAfterItem[]
  className?: string
}

export function BeforeAfterList({ items, className = '' }: BeforeAfterListProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 ${className}`}>
      {/* Before Column */}
      <Card variant="default" className="p-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-danger/10 border border-danger/20">
              <X className="h-5 w-5 text-danger" />
            </div>
            <h3 className="text-xl font-bold text-fg font-heading">Было</h3>
          </div>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-danger mt-2" />
                <p className="text-fg-muted text-sm leading-relaxed">
                  {item.before}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* After Column */}
      <Card variant="default" className="p-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-success/10 border border-success/20">
              <Check className="h-5 w-5 text-success" />
            </div>
            <h3 className="text-xl font-bold text-fg font-heading">Стало</h3>
          </div>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-success mt-2" />
                <p className="text-fg-muted text-sm leading-relaxed">
                  {item.after}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}