import { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/section-heading'
import { Testimonial } from '@/components/ui/testimonial'
import { Metrics } from '@/components/ui/metrics'

export const metadata: Metadata = {
  title: 'Отзывы клиентов о CRM',
  description: 'Отзывы реальных клиентов о качестве наших CRM решений и сервиса. Рейтинги и рекомендации.',
}

const testimonials = [
  {
    name: 'Алексей Смирнов',
    role: 'Коммерческий директор',
    company: 'TechSolutions KZ',
    content: 'После внедрения CRM от SalemSOFT наша конверсия лидов выросла на 40%. Теперь мы видим полную картину продаж и можем принимать решения на основе данных. Команда работает профессионально, всё сделали в срок.',
    rating: 5
  },
  {
    name: 'Мария Казакова',
    role: 'CEO',
    company: 'Digital Marketing Agency',
    content: 'Автоматизация освободила наших менеджеров от рутины. Время на обработку заявки сократилось с 30 минут до 5. Клиенты довольны быстрой реакцией. ROI проекта окупился за 4 месяца. Рекомендую всем, кто хочет масштабироваться.',
    rating: 5
  },
  {
    name: 'Дмитрий Волков',
    role: 'Руководитель отдела продаж',
    company: 'Manufacturing Inc',
    content: 'Интеграция с нашими существующими системами прошла безболезненно. Команда SalemSOFT работала как часть нашей команды, учитывая все нюансы производственных процессов. Система работает стабильно уже полтора года.',
    rating: 5
  },
  {
    name: 'Елена Иванова',
    role: 'Владелец',
    company: 'Beauty Studio Chain',
    content: 'CRM помогла нам организовать запись клиентов, отслеживать историю посещений и настроить программу лояльности. Количество постоянных клиентов увеличилось на 60%. Очень довольны результатом и поддержкой.',
    rating: 5
  },
  {
    name: 'Сергей Петров',
    role: 'Директор',
    company: 'Construction Group',
    content: 'Сложные B2B продажи в строительстве требовали особого подхода. SalemSOFT создали систему, которая учитывает все этапы согласований и множество участников сделки. Потеря сделок на поздних стадиях сократилась в 3 раза.',
    rating: 5
  },
  {
    name: 'Анна Сидорова',
    role: 'Маркетинг-директор',
    company: 'E-commerce Fashion',
    content: 'Интеграция с WhatsApp и персонализированные рассылки дали невероятный эффект. Повторные покупки выросли на 85%, средний чек увеличился на 40%. Аналитика помогает понимать поведение каждого клиента.',
    rating: 5
  },
  {
    name: 'Игорь Морозов',
    role: 'Управляющий партнер',
    company: 'Legal Services',
    content: 'В юридической сфере важна конфиденциальность и точность. CRM полностью соответствует нашим требованиям по безопасности. Автоматизация договорной работы сэкономила нам десятки часов в неделю.',
    rating: 5
  },
  {
    name: 'Ольга Козлова',
    role: 'Главный врач',
    company: 'Medical Center',
    content: 'Запись пациентов, напоминания о приёмах, ведение медицинских карт — всё в одной системе. Пациенты довольны удобством, врачи экономят время на документооборот. Окупилось за 3 месяца.',
    rating: 5
  },
  {
    name: 'Максим Новиков',
    role: 'Основатель',
    company: 'Food Delivery',
    content: 'CRM для доставки еды — это особая специфика. Нужна интеграция с картами, курьерами, ресторанами. SalemSOFT справились на отлично. Время доставки сократилось, количество довольных клиентов выросло.',
    rating: 5
  },
  {
    name: 'Татьяна Белова',
    role: 'Руководитель',
    company: 'Real Estate Agency',
    content: 'База объектов недвижимости, управление показами, интеграция с порталами — всё работает как часы. Агенты тратят больше времени на продажи, а не на административную работу. Очень довольны сотрудничеством.',
    rating: 5
  },
  {
    name: 'Владимир Зайцев',
    role: 'Директор по развитию',
    company: 'Educational Center',
    content: 'Управление учениками, расписание занятий, онлайн-оплата — CRM закрыла все наши потребности. Автоматические напоминания о занятиях снизили количество пропусков на 50%. Рекомендуем другим образовательным центрам.',
    rating: 5
  },
  {
    name: 'Наталья Федорова',
    role: 'Владелец сети',
    company: 'Fitness Clubs',
    content: 'CRM помогла объединить все наши фитнес-клубы в единую систему. Клиенты могут посещать любой клуб сети, мы видим полную аналитику по всем точкам. Выручка выросла на 30% благодаря cross-selling услуг.',
    rating: 5
  }
]

const metrics = [
  { value: '4.9/5', label: 'Средний рейтинг' },
  { value: '98%', label: 'Довольных клиентов' },
  { value: '50+', label: 'Проектов' },
  { value: '0', label: 'Негативных отзывов', suffix: '' }
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 via-bg to-bg">
        <div className="container">
          <SectionHeading
            eyebrow="Отзывы"
            title="Что говорят наши клиенты"
            description="Честные отзывы о качестве наших решений и уровне сервиса от реальных клиентов разных отраслей"
            centered
            className="mb-16"
          />

          <Metrics metrics={metrics} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index} 
                {...testimonial}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-bg-soft">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Наши гарантии качества"
              centered
              className="mb-12"
            />

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="font-semibold text-fg mb-2">100% выполнение обязательств</h3>
                <p className="text-sm text-fg-muted">Все проекты сданы в срок и в полном объёме</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="font-semibold text-fg mb-2">Гарантия результата</h3>
                <p className="text-sm text-fg-muted">Увеличение эффективности минимум на 25% или возврат 50% стоимости</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="font-semibold text-fg mb-2">Долгосрочная поддержка</h3>
                <p className="text-sm text-fg-muted">Техническая поддержка и развитие системы после внедрения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-3 font-heading font-bold text-fg mb-4">
              Станьте нашим следующим довольным клиентом
            </h2>
            <p className="text-fg-muted mb-8 leading-relaxed">
              Присоединяйтесь к компаниям, которые уже увеличили свои продажи с помощью наших CRM решений
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg">
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}