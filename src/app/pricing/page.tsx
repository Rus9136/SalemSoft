import { Metadata } from 'next'
import { Check, X, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/ui/section-heading'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const metadata: Metadata = {
  title: 'Цены на 1С системы',
  description: 'Тарифы на внедрение и сопровождение 1С систем. Калькулятор стоимости для вашего проекта.',
}

const pricingPlans = [
  {
    name: 'Start',
    price: '150 000',
    period: 'за внедрение + 50 000 ₸/мес',
    description: 'Идеально для малого бизнеса и стартапов',
    badge: null,
    features: [
      { name: 'До 5 пользователей', included: true },
      { name: 'Базовая 1С функциональность', included: true },
      { name: '2 интеграции (WhatsApp, Email)', included: true },
      { name: 'Мобильное приложение', included: true },
      { name: 'Техподдержка 8/5', included: true },
      { name: 'Базовая аналитика', included: true },
      { name: 'Автоматизация процессов', included: false },
      { name: 'Продвинутая аналитика', included: false },
      { name: 'API интеграции', included: false },
      { name: 'Индивидуальные отчеты', included: false }
    ],
    cta: 'Начать с Start',
    popular: false
  },
  {
    name: 'Growth',
    price: '350 000',
    period: 'за внедрение + 120 000 ₸/мес',
    description: 'Для растущих компаний с активными продажами',
    badge: 'Популярный',
    features: [
      { name: 'До 20 пользователей', included: true },
      { name: 'Полная 1С функциональность', included: true },
      { name: '5 интеграций', included: true },
      { name: 'Мобильное приложение', included: true },
      { name: 'Техподдержка 24/7', included: true },
      { name: 'Продвинутая аналитика', included: true },
      { name: 'Автоматизация процессов', included: true },
      { name: 'API интеграции', included: true },
      { name: 'Индивидуальные отчеты', included: true },
      { name: 'Интеграция с 1С', included: false }
    ],
    cta: 'Выбрать Growth',
    popular: true
  },
  {
    name: 'Scale',
    price: 'От 600 000',
    period: 'за внедрение + индивидуально',
    description: 'Для крупных компаний и холдингов',
    badge: 'Корпоративный',
    features: [
      { name: 'Неограниченные пользователи', included: true },
      { name: 'Корпоративная 1С', included: true },
      { name: 'Неограниченные интеграции', included: true },
      { name: 'Мобильное приложение', included: true },
      { name: 'Персональный менеджер', included: true },
      { name: 'AI аналитика и прогнозы', included: true },
      { name: 'Сложная автоматизация', included: true },
      { name: 'Индивидуальная разработка', included: true },
      { name: 'Интеграция с любыми системами', included: true },
      { name: 'SLA 99.9% uptime', included: true }
    ],
    cta: 'Обсудить проект',
    popular: false
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 via-bg to-bg">
        <div className="container">
          <SectionHeading
            eyebrow="Ценообразование"
            title="Прозрачные цены на 1С решения"
            description="Выберите тариф, который подходит вашему бизнесу. Без скрытых платежей, с гарантией результата."
            centered
            className="mb-16"
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                variant={plan.popular ? "feature" : "default"}
                className={`relative ${plan.popular ? 'lg:scale-105 border-accent/50' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant={plan.popular ? "default" : "secondary"}>
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-accent">
                      {plan.price} ₸
                    </div>
                    <div className="text-sm text-fg-muted">
                      {plan.period}
                    </div>
                  </div>
                  <p className="text-sm text-fg-muted mt-4">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-fg-muted mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-fg' : 'text-fg-muted'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg" 
                    className="w-full group"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-bg-soft">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              title="Калькулятор стоимости"
              description="Получите предварительную оценку стоимости вашего проекта"
              centered
              className="mb-12"
            />

            <Card variant="glass" className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="users">Количество пользователей</Label>
                    <Input 
                      id="users" 
                      type="number" 
                      placeholder="10" 
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="integrations">Количество интеграций</Label>
                    <Input 
                      id="integrations" 
                      type="number" 
                      placeholder="5" 
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="features">Дополнительные возможности</Label>
                  <div className="mt-3 space-y-3">
                    {[
                      'Мобильное приложение',
                      'Интеграция с 1С',
                      'Продвинутая аналитика',
                      'Автоматизация процессов',
                      'API разработка'
                    ].map((feature, index) => (
                      <label key={index} className="flex items-center gap-3">
                        <input type="checkbox" className="rounded border-line" />
                        <span className="text-sm text-fg">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-line">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-fg">
                      Примерная стоимость:
                    </span>
                    <span className="text-2xl font-bold text-accent">
                      250 000 ₸
                    </span>
                  </div>
                  <p className="text-sm text-fg-muted mb-6">
                    * Финальная стоимость определяется после детального анализа требований
                  </p>
                  <Button size="lg" className="w-full">
                    Получить точную оценку
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Часто задаваемые вопросы"
              centered
              className="mb-12"
            />

            <div className="space-y-6">
              {[
                {
                  question: 'Что входит в стоимость внедрения?',
                  answer: 'Анализ бизнес-процессов, настройка 1С под ваши задачи, интеграции, обучение команды, техническая документация и 3 месяца поддержки.'
                },
                {
                  question: 'Можно ли изменить тариф в процессе использования?',
                  answer: 'Да, вы можете повысить или понизить тариф в любой момент. При повышении доплачиваете разницу, при понижении изменения вступают в силу с следующего месяца.'
                },
                {
                  question: 'Предоставляете ли техническую поддержку?',
                  answer: 'Все тарифы включают техническую поддержку. Start - 8/5, Growth и Scale - 24/7. Также предоставляем обучающие материалы и документацию.'
                },
                {
                  question: 'Есть ли гарантия на результат?',
                  answer: 'Да, мы гарантируем увеличение эффективности продаж минимум на 25% в течение 6 месяцев или возвращаем 50% стоимости внедрения.'
                }
              ].map((faq, index) => (
                <Card key={index} variant="default">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-fg-muted leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}