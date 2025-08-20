import { SectionHeading } from '@/components/ui/section-heading'
import { BeforeAfterList } from '@/components/ui/before-after-list'

const beforeAfterItems = [
  {
    before: 'Клиенты теряются между менеджерами, заявки дублируются или забываются',
    after: 'Единая база клиентов с полной историей взаимодействий и автоматическим распределением'
  },
  {
    before: 'Менеджеры тратят время на рутинные задачи вместо продаж',
    after: 'Автоматизация рутины: уведомления, отчёты, планирование встреч и звонков'
  },
  {
    before: 'Нет понимания эффективности воронки продаж и точек роста',
    after: 'Детальная аналитика с AI-инсайтами: конверсии, прогнозы, рекомендации'
  },
  {
    before: 'Сложно отследить ROI от маркетинга и источников лидов',
    after: 'Прозрачная аналитика по каналам с расчётом стоимости привлечения клиента'
  },
  {
    before: 'Коммуникация с клиентами разбросана по разным каналам',
    after: 'Омниканальность: email, чаты, WhatsApp, Telegram в одном интерфейсе'
  },
  {
    before: 'Долгие согласования и ручная обработка документооборота',
    after: 'Цифровые процессы: электронные договоры, автоматические уведомления'
  }
]

export function BeforeAfterSection() {
  return (
    <section className="section-padding bg-bg">
      <div className="container">
        <SectionHeading
          eyebrow="Результат"
          title="Как меняется работа после внедрения"
          description="Сравните эффективность до и после автоматизации бизнес-процессов"
          centered
          className="mb-16"
        />

        <BeforeAfterList items={beforeAfterItems} />
      </div>
    </section>
  )
}