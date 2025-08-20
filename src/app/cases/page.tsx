import { Metadata } from 'next'
import { ArrowUpRight, TrendingUp, Users, Clock, Target, ShoppingCart, Building, UserCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/ui/section-heading'
import { IconBadge } from '@/components/ui/icon-badge'

export const metadata: Metadata = {
  title: 'Кейсы внедрения CRM',
  description: 'Реальные истории успеха наших клиентов. Посмотрите, какие результаты дает внедрение CRM систем.',
}

const cases = [
  {
    id: 1,
    title: 'E-commerce: рост выручки на 180%',
    company: 'TechStore Kazakhstan',
    industry: 'Электроника',
    icon: ShoppingCart,
    description: 'Крупный интернет-магазин электроники с проблемами автоматизации продаж',
    challenge: 'Потеря клиентов из-за медленной обработки заказов, отсутствие персонализации, низкая конверсия',
    solution: 'Внедрили омниканальную CRM с интеграцией всех каналов продаж, автоматизацией маркетинга и персонализированными рекомендациями',
    timeline: '3 месяца',
    metrics: [
      { icon: TrendingUp, label: 'Рост выручки', value: '+180%', color: 'text-success' },
      { icon: Users, label: 'Конверсия', value: '+65%', color: 'text-accent' },
      { icon: Clock, label: 'Время обработки', value: '-75%', color: 'text-amber-400' },
      { icon: Target, label: 'ROI', value: '420%', color: 'text-success' }
    ],
    features: [
      'Интеграция с WhatsApp и Telegram',
      'Автоматические персонализированные рассылки',
      'Система лояльности и cashback',
      'Аналитика по каналам привлечения',
      'Автоматическое управление складом'
    ],
    results: 'В результате внедрения CRM клиент увеличил выручку на 180%, сократил время обработки заказов с 2 часов до 30 минут, увеличил повторные покупки на 90%.'
  },
  {
    id: 2,
    title: 'B2B: автоматизация сложных продаж',
    company: 'Industrial Solutions',
    industry: 'Промышленное оборудование',
    icon: Building,
    description: 'Поставщик промышленного оборудования с длинными циклами продаж',
    challenge: 'Сложно отслеживать многоэтапные сделки, потеря клиентов на этапах согласований, отсутствие прогнозирования',
    solution: 'Создали CRM с управлением сложными B2B процессами, этапами согласований, интеграцией с 1С и системой прогнозирования',
    timeline: '4 месяца',
    metrics: [
      { icon: TrendingUp, label: 'ROI проекта', value: '340%', color: 'text-success' },
      { icon: Users, label: 'Удержание клиентов', value: '+45%', color: 'text-accent' },
      { icon: Clock, label: 'Время сделки', value: '-50%', color: 'text-amber-400' },
      { icon: Target, label: 'Точность прогнозов', value: '87%', color: 'text-success' }
    ],
    features: [
      'Управление многоэтапными сделками',
      'Автоматические напоминания и эскалации',
      'Интеграция с 1С и документооборотом',
      'Прогнозирование продаж с AI',
      'Командная работа над крупными сделками'
    ],
    results: 'Компания сократила средний цикл сделки с 6 до 3 месяцев, увеличила точность прогнозов до 87%, повысила средний чек на 35%.'
  },
  {
    id: 3,
    title: 'Услуги: оптимизация сервиса',
    company: 'Home Service Pro',
    industry: 'Бытовые услуги',
    icon: UserCheck,
    description: 'Сеть компаний по ремонту и обслуживанию бытовой техники',
    challenge: 'Неэффективное планирование мастеров, потеря заявок, низкая удовлетворенность клиентов',
    solution: 'Внедрили сервисную CRM с мобильным приложением для мастеров, автоматическим планированием и контролем качества',
    timeline: '2 месяца',
    metrics: [
      { icon: TrendingUp, label: 'Рост заявок', value: '+95%', color: 'text-success' },
      { icon: Users, label: 'Удовлетворенность', value: '4.8/5', color: 'text-accent' },
      { icon: Clock, label: 'Время реакции', value: '-80%', color: 'text-amber-400' },
      { icon: Target, label: 'Эффективность', value: '+60%', color: 'text-success' }
    ],
    features: [
      'Мобильное приложение для мастеров',
      'Автоматическое планирование маршрутов',
      'Система рейтингов и отзывов',
      'Интеграция с картами и навигацией',
      'Контроль качества услуг'
    ],
    results: 'Увеличили количество обслуживаемых заявок на 95%, сократили время реакции с 4 часов до 45 минут, повысили рейтинг удовлетворенности до 4.8/5.'
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
            description="Реальные результаты внедрения CRM систем. Посмотрите, как мы помогаем бизнесу достигать новых высот."
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
              Расскажите о ваших задачах, и мы покажем, как CRM поможет достичь аналогичных результатов в вашей отрасли.
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