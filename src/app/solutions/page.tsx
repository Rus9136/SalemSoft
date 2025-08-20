import { Metadata } from 'next'
import {
  ShoppingCart,
  Users,
  Building,
  Briefcase,
  GraduationCap,
  Heart,
  Truck,
  Utensils,
  MessageSquare,
  Globe,
  CreditCard,
  BarChart3
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { IconBadge } from '@/components/ui/icon-badge'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Готовые решения 1С',
  description: 'Готовые решения 1С для различных отраслей. 1С:Розница, 1С:УПП, 1С:УНФ и другие конфигурации.',
}

const solutions = [
  {
    title: '1С:Розница + E-Commerce',
    description: 'Комплексное решение для магазинов и интернет-торговли: учёт товаров, интеграция с онлайн-кассами, сайтами и маркетплейсами, автоматическая выгрузка цен и остатков',
    icon: ShoppingCart,
    category: 'Розничная торговля',
    integrations: ['Kaspi.kz', 'Wildberries', 'Онлайн-кассы', 'Банки КЗ'],
    features: [
      'Управление товарными остатками',
      'Интеграция с интернет-магазинами',
      'Автоматическая выгрузка на маркетплейсы',
      'Учёт продаж и возвратов',
      'Программы лояльности клиентов'
    ],
    price: 'от 120 000 ₸/мес'
  },
  {
    title: '1С:УНФ для малого бизнеса',
    description: 'Универсальный продукт для управления продажами, закупками и складом. Быстрый старт и возможность расширения функциональности по мере роста компании',
    icon: Building,
    category: 'Малый бизнес',
    integrations: ['Банки КЗ', 'ЭДО', 'Онлайн-кассы', 'Email'],
    features: [
      'Ведение продаж и закупок',
      'Складской учёт товаров',
      'Расчёты с контрагентами',
      'Денежные средства',
      'Простые отчёты для руководителя'
    ],
    price: 'от 80 000 ₸/мес'
  },
  {
    title: '1С:УПП для производства и B2B',
    description: 'Система управления производственными процессами и проектами: калькуляция себестоимости, планирование закупок и автоматизация расчётов с контрагентами',
    icon: Users,
    category: 'Производство',
    integrations: ['ЭДО', 'Банки КЗ', 'Налоговая КЗ', 'Весовое оборудование'],
    features: [
      'Управление производственными заказами',
      'Планирование материальных потребностей',
      'Калькуляция себестоимости продукции',
      'Бюджетирование и управленческий учёт',
      'Интеграция с оборудованием'
    ],
    price: 'от 200 000 ₸/мес'
  },
  {
    title: '1С:CRM для управления клиентами',
    description: 'Решение для выстраивания отношений с клиентами: единая база, история взаимодействий, интеграция с 1С:Предприятием',
    icon: Briefcase,
    category: 'Продажи',
    integrations: ['1С:Бухгалтерия', 'WhatsApp', 'Email', 'Телефония'],
    features: [
      'Управление клиентской базой',
      'Планирование и контроль продаж',
      'История взаимодействий с клиентами',
      'Интеграция с учётными системами',
      'Мобильное приложение для менеджеров'
    ],
    price: 'от 150 000 ₸/мес'
  }
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 via-bg to-bg">
        <div className="container">
          <SectionHeading
            eyebrow="Готовые решения"
            title="Готовые решения 1С для вашей отрасли"
            description="Выберите готовый продукт 1С, адаптированный под специфику вашего бизнеса. Быстрый запуск, проверенная эффективность."
            centered
            className="mb-16"
          />
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} variant="feature" className="group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <IconBadge
                      icon={solution.icon}
                      variant="accent"
                      size="lg"
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge variant="outline" className="text-xs">
                      {solution.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">
                    {solution.title}
                  </CardTitle>
                  
                  <p className="text-fg-muted text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-fg mb-3 text-sm">Возможности:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-fg-muted">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Integrations */}
                  <div>
                    <h4 className="font-semibold text-fg mb-3 text-sm">Интеграции:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.integrations.map((integration, integrationIndex) => (
                        <Badge key={integrationIndex} variant="secondary" className="text-xs">
                          {integration}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-line">
                    <div>
                      <span className="text-lg font-bold text-accent">{solution.price}</span>
                    </div>
                    <Button size="sm" variant="outline" className="group-hover:bg-accent group-hover:text-bg transition-colors">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bg-soft">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-3 font-heading font-bold text-fg mb-4">
              Не нашли подходящее решение?
            </h2>
            <p className="text-fg-muted mb-8 leading-relaxed">
              Создадим индивидуальное решение на базе 1С под ваши уникальные бизнес-процессы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Заказать индивидуальное решение
              </Button>
              <Button variant="outline" size="lg">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}