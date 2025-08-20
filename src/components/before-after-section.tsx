import { SectionHeading } from '@/components/ui/section-heading'
import { BeforeAfterList } from '@/components/ui/before-after-list'

const beforeAfterItems = [
  {
    before: 'Данные хранятся в разных таблицах и блокнотах, часто теряются',
    after: 'Единая база данных в 1С с полной историей операций'
  },
  {
    before: 'Отчётность готовится вручную, много ошибок',
    after: 'Автоматическое формирование бухгалтерской, налоговой и управленческой отчётности'
  },
  {
    before: 'Нет полного контроля над складом и остатками',
    after: 'Учёт остатков в режиме реального времени, планирование закупок'
  },
  {
    before: 'Сложно вовремя сдавать налоговые декларации',
    after: 'Электронная сдача отчётности через встроенные сервисы'
  },
  {
    before: 'Процессы согласования документов затянуты и не прозрачны',
    after: 'Цифровые процессы: электронные договоры, обмен с ЭЦП, уведомления и напоминания'
  },
  {
    before: 'Ручная сверка с банками и поставщиками отнимает много времени',
    after: 'Автоматическая загрузка выписок и электронный документооборот с контрагентами'
  }
]

export function BeforeAfterSection() {
  return (
    <section className="section-padding bg-bg">
      <div className="container">
        <SectionHeading
          eyebrow="Результат"
          title="Как меняется учёт после внедрения 1С"
          description="Сравните эффективность работы до и после внедрения системы 1С:Предприятие"
          centered
          className="mb-16"
        />

        <BeforeAfterList items={beforeAfterItems} />
      </div>
    </section>
  )
}