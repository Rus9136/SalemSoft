import {
  TrendingUp,
  BarChart3,
  MessageSquare,
  FileText,
  CreditCard,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IconBadge } from '@/components/ui/icon-badge'
import { SectionHeading } from '@/components/ui/section-heading'
import { SITE_CONFIG } from '@/lib/config'

const iconMap = {
  TrendingUp,
  BarChart3,
  MessageSquare,
  FileText,
  CreditCard,
  Zap
} as const

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-bg">
      <div className="container">
        <SectionHeading
          eyebrow="Услуги"
          title="Всё для эффективного учёта и управления"
          description="Комплексные услуги официального франчайзи 1С для автоматизации учёта и оптимизации бизнес-процессов"
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
            
            return (
              <Card 
                key={index} 
                variant="feature"
                className="group"
              >
                <CardHeader className="pb-4">
                  <IconBadge 
                    icon={IconComponent}
                    variant="accent"
                    size="lg"
                    className="mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <CardTitle className="text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-fg-muted leading-relaxed">
                    {feature.description}
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