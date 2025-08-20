import {
  Settings,
  Handshake,
  Rocket,
  Target
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IconBadge } from '@/components/ui/icon-badge'
import { SectionHeading } from '@/components/ui/section-heading'
import { SITE_CONFIG } from '@/lib/config'

const iconMap = {
  Settings,
  Handshake,
  Rocket,
  Target
} as const

export function BenefitsSection() {
  return (
    <section className="section-padding bg-bg-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Почему мы"
          title="Подход, который работает"
          description="Мы не просто внедряем CRM — мы трансформируем ваш бизнес"
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SITE_CONFIG.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
            
            return (
              <Card 
                key={index}
                variant="glass" 
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <CardHeader>
                  <IconBadge 
                    icon={IconComponent}
                    variant="accent"
                    size="lg"
                    className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <CardTitle className="text-lg">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-fg-muted text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}