import { Metadata } from 'next'
import { ArrowUpRight, TrendingUp, Users, Clock, Target, ShoppingCart, Building, UserCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/ui/section-heading'
import { IconBadge } from '@/components/ui/icon-badge'

export const metadata: Metadata = {
  title: 'Кейсы внедрения 1С',
  description: 'Реальные истории успеха наших клиентов. Посмотрите, какие результаты дает внедрение систем 1С.',
}

const cases = [
  {
    id: 1,
    title: 'Розничная сеть: +25% к скорости учёта',
    company: 'FashionStore Kazakhstan',
    industry: 'Розничная торговля',
    icon: ShoppingCart,
    description: 'Сеть магазинов одежды с проблемами автоматизации учёта товаров и продаж',
    challenge: 'Ручной учёт товаров, долгая инвентаризация, отсутствие контроля над остатками, ошибки в ценниках',
    solution: 'Настроили 1С:Розница с интеграцией онлайн-касс. Упростили учёт товаров, ускорили инвентаризацию и автоматизировали загрузку ценников',
    timeline: '2 месяца',
    metrics: [
      { icon: TrendingUp, label: 'Скорость учёта', value: '+25%', color: 'text-success' },
      { icon: Users, label: 'Точность данных', value: '+90%', color: 'text-accent' },
      { icon: Clock, label: 'Время инвентаризации', value: '-60%', color: 'text-amber-400' },
      { icon: Target, label: 'Сокращение недостач', value: '-30%', color: 'text-success' }
    ],
    features: [
      'Интеграция с онлайн-кассами',
      'Автоматическая загрузка ценников',
      'Контроль остатков в реальном времени',
      'Мобильная инвентаризация',
      'Программы лояльности клиентов'
    ],
    results: 'В результате внедрения 1С:Розница клиент увеличил скорость учёта на 25%, сократил время инвентаризации с 3 дней до 1 дня, снизил недостачи на 30%.'
  },
  {
    id: 2,
    title: 'Производство: сокращение срока закрытия месяца на 50%',
    company: 'ManufacturePro LLP',
    industry: 'Производство',
    icon: Building,
    description: 'Производственная компания с проблемами учёта себестоимости и планирования',
    challenge: 'Долгое закрытие месяца, неточная калькуляция себестоимости, ручное планирование материалов, отсутствие управленческих отчётов',
    solution: 'Внедрили 1С:УПП, настроили калькуляцию себестоимости и планирование. Отчётность формируется за пару часов вместо нескольких дней',
    timeline: '3 месяца',
    metrics: [
      { icon: TrendingUp, label: 'Закрытие месяца', value: '-50%', color: 'text-success' },
      { icon: Users, label: 'Точность расчётов', value: '+95%', color: 'text-accent' },
      { icon: Clock, label: 'Время отчётности', value: '-70%', color: 'text-amber-400' },
      { icon: Target, label: 'Планирование', value: '+80%', color: 'text-success' }
    ],
    features: [
      'Калькуляция себестоимости продукции',
      'Планирование материальных потребностей',
      'Управленческие отчёты в реальном времени',
      'Интеграция с производственным оборудованием',
      'Бюджетирование и план-факт анализ'
    ],
    results: 'Компания сократила срок закрытия месяца с 10 до 5 дней, увеличила точность калькуляции себестоимости до 95%, автоматизировала 80% планирования.'
  }
]

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 via-bg to-bg">
        <div className="container">
          <SectionHeading
            eyebrow="Кейсы"
            title="Истории успеха наших клиентов"
            description="Реальные результаты внедрения систем 1С. Посмотрите, как мы помогаем бизнесу достигать новых высот."
            centered
            className="mb-16"
          />
        </div>
      </section>

      {/* Cases */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-16">
            {cases.map((caseItem, index) => (
              <Card key={caseItem.id} variant="glass" className="overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <IconBadge 
                          icon={caseItem.icon} 
                          variant="accent" 
                          size="lg" 
                        />
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {caseItem.industry}
                          </Badge>
                          <h2 className="text-2xl font-bold text-fg font-heading">
                            {caseItem.title}
                          </h2>
                          <p className="text-accent font-medium">{caseItem.company}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="group">
                        Подробнее
                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </div>

                    <p className="text-fg-muted mb-6 leading-relaxed">
                      {caseItem.description}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold text-fg mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-danger"></div>
                          Проблема
                        </h4>
                        <p className="text-sm text-fg-muted pl-4">{caseItem.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-fg mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-success"></div>
                          Решение
                        </h4>
                        <p className="text-sm text-fg-muted pl-4">{caseItem.solution}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-fg mb-3">Ключевые возможности:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {caseItem.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-fg-muted">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="p-4 bg-success/5 border border-success/20 rounded-lg">
                      <h4 className="font-semibold text-success mb-2">Результат</h4>
                      <p className="text-sm text-fg-muted leading-relaxed">{caseItem.results}</p>
                    </div>
                  </div>

                  {/* Metrics Sidebar */}
                  <div className="p-8 bg-bg-soft/50">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-fg mb-4">Ключевые метрики</h4>
                        <div className="space-y-4">
                          {caseItem.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center gap-3">
                              <IconBadge 
                                icon={metric.icon} 
                                variant="accent" 
                                size="sm" 
                              />
                              <div>
                                <div className={`text-lg font-bold ${metric.color}`}>
                                  {metric.value}
                                </div>
                                <div className="text-xs text-fg-muted">
                                  {metric.label}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-line">
                        <h4 className="font-semibold text-fg mb-2">Срок внедрения</h4>
                        <p className="text-accent font-bold">{caseItem.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-soft">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-3 font-heading font-bold text-fg mb-4">
              Готовы стать следующей историей успеха?
            </h2>
            <p className="text-fg-muted mb-8 leading-relaxed">
              Расскажите о ваших задачах, и мы покажем, как 1С поможет достичь аналогичных результатов в вашей отрасли.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Обсудить проект
              </Button>
              <Button variant="outline" size="lg">
                Скачать подробные кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}