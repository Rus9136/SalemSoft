import { Metadata } from 'next'
import {
  ShoppingCart,
  Users,
  Building,
  Briefcase,
  GraduationCap,
  Hospital,
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
  title: 'Готовые CRM решения',
  description: 'Готовые решения для автоматизации продаж в различных отраслях. E-commerce, B2B, услуги, производство.',
}

const solutions = [
  {
    title: 'E-commerce CRM',
    description: 'Комплексное решение для интернет-магазинов с интеграцией платежных систем и маркетинговой автоматизации',
    icon: ShoppingCart,
    category: 'Розничная торговля',
    integrations: ['WhatsApp', 'Telegram', 'Kaspi', 'Halyk Bank'],
    features: [
      'Управление заказами и клиентами',
      'Интеграция с платежными системами',
      'Автоматические уведомления покупателям',
      'Аналитика продаж и конверсий',
      'Программы лояльности'
    ],
    price: 'от 150 000 ₸/мес'
  },
  {
    title: 'B2B Sales CRM',
    description: 'CRM для управления длинными циклами продаж в B2B сегменте с этапами согласований',
    icon: Building,
    category: 'Корпоративные продажи',
    integrations: ['1C', 'Email', 'Zoom', 'Документооборот'],
    features: [
      'Управление сложными сделками',
      'Этапы согласований и одобрений',
      'Интеграция с корпоративными системами',
      'Прогнозирование продаж',
      'Командная работа над сделками'
    ],
    price: 'от 200 000 ₸/мес'
  },
  {
    title: 'Service CRM',
    description: 'Решение для сервисных компаний с управлением заявками, планированием и контролем качества',
    icon: Users,
    category: 'Услуги',
    integrations: ['WhatsApp', 'Telegram', 'Google Calendar', 'Яндекс.Карты'],
    features: [
      'Управление заявками и задачами',
      'Планирование работы сотрудников',
      'Контроль качества услуг',
      'Мобильное приложение для мастеров',
      'Интеграция с картами и навигацией'
    ],
    price: 'от 120 000 ₸/мес'
  },
  {
    title: 'Real Estate CRM',
    description: 'CRM для агентств недвижимости с базой объектов и автоматизацией показов',
    icon: Briefcase,
    category: 'Недвижимость',
    integrations: ['Krisha.kz', 'OLX', 'WhatsApp', 'Google Maps'],
    features: [
      'База объектов недвижимости',
      'Управление показами и встречами',
      'Интеграция с порталами недвижимости',
      'CRM для агентов',
      'Аналитика рынка и цен'
    ],
    price: 'от 180 000 ₸/мес'
  },
  {
    title: 'Education CRM',
    description: 'Решение для образовательных учреждений и онлайн-школ',
    icon: GraduationCap,
    category: 'Образование',
    integrations: ['Zoom', 'Google Classroom', 'Payment', 'Email'],
    features: [
      'Управление учениками и курсами',
      'Планирование занятий',
      'Онлайн-оплата и рассрочка',
      'Интеграция с платформами обучения',
      'Аналитика успеваемости'
    ],
    price: 'от 100 000 ₸/мес'
  },
  {
    title: 'Healthcare CRM',
    description: 'CRM для медицинских клиник и центров с записью на прием',
    icon: Hospital,
    category: 'Медицина',
    integrations: ['WhatsApp', 'SMS', 'Google Calendar', 'Платежи'],
    features: [
      'Запись на прием к врачам',
      'Управление медицинскими картами',
      'Напоминания о визитах',
      'Интеграция с оборудованием',
      'Отчетность и аналитика'
    ],
    price: 'от 160 000 ₸/мес'
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
            title="CRM под ключ для вашей отрасли"
            description="Выберите готовое решение, адаптированное под специфику вашего бизнеса. Быстрое внедрение, проверенная эффективность."
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
              Создадим индивидуальную CRM-систему под ваши уникальные бизнес-процессы.
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