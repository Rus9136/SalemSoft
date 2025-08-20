import { Metadata } from 'next'
import { Award, Users, Target, TrendingUp, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { IconBadge } from '@/components/ui/icon-badge'
import { Metrics } from '@/components/ui/metrics'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'О компании SalemSOFT',
  description: 'Команда экспертов по внедрению 1С систем. 10+ лет опыта, 50+ успешных проектов.',
}

const team = [
  {
    name: 'Алексей Иванов',
    role: 'Технический директор',
    experience: '12 лет в IT',
    specialization: 'Архитектура систем, интеграции'
  },
  {
    name: 'Марина Казакова',
    role: 'Руководитель проектов',
    experience: '8 лет в 1С',
    specialization: 'Управление проектами, аналитика'
  },
  {
    name: 'Дмитрий Волков',
    role: 'Ведущий разработчик',
    experience: '10 лет разработки',
    specialization: 'Full-stack, API интеграции'
  },
  {
    name: 'Анна Смирнова',
    role: 'UX/UI дизайнер',
    experience: '6 лет в дизайне',
    specialization: 'Пользовательский опыт, интерфейсы'
  }
]

const principles = [
  {
    icon: Target,
    title: 'Результат превыше всего',
    description: 'Мы работаем на конечный результат клиента, а не просто выполняем техническое задание'
  },
  {
    icon: Users,
    title: 'Партнерский подход',
    description: 'Становимся частью вашей команды и думаем о развитии вашего бизнеса как о своем'
  },
  {
    icon: Award,
    title: 'Качество и надежность',
    description: 'Используем проверенные технологии и следуем лучшим практикам разработки'
  },
  {
    icon: TrendingUp,
    title: 'Постоянное развитие',
    description: 'Изучаем новые технологии и методики, чтобы предлагать самые современные решения'
  }
]

const metrics = [
  { value: '50+', label: 'Проектов реализовано' },
  { value: '10+', label: 'Лет на рынке' },
  { value: '98%', label: 'Довольных клиентов' },
  { value: '24/7', label: 'Техподдержка' }
]

const faq = [
  {
    question: 'Какой у вас опыт работы с 1С системами?',
    answer: 'Наша команда имеет более 10 лет опыта в разработке и внедрении 1С систем. Мы реализовали более 50 проектов в различных отраслях: от e-commerce до производства.'
  },
  {
    question: 'Работаете ли вы с международными клиентами?',
    answer: 'Да, мы работаем с клиентами из России, Казахстана, стран СНГ. Имеем опыт интеграции с международными платежными системами и сервисами.'
  },
  {
    question: 'Предоставляете ли обучение сотрудников?',
    answer: 'Обязательно! В стоимость внедрения входит полное обучение команды клиента. Предоставляем видеоуроки, документацию и проводим индивидуальные тренинги.'
  },
  {
    question: 'Как вы гарантируете качество разработки?',
    answer: 'Используем современные методологии разработки, проводим тестирование на каждом этапе, предоставляем гарантию на все работы и 3 месяца бесплатной технической поддержки.'
  },
  {
    question: 'Можете ли интегрироваться с нашими существующими системами?',
    answer: 'Да, у нас большой опыт интеграций с различными системами: 1C, банковские API, платежные системы, мессенджеры, телефония и многое другое.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 via-bg to-bg">
        <div className="container">
          <SectionHeading
            eyebrow="О компании"
            title="Эксперты по автоматизации продаж"
            description="Команда профессионалов с 10+ летним опытом в разработке и внедрении 1С систем. Помогаем бизнесу расти через технологии."
            centered
            className="mb-16"
          />

          <Metrics metrics={metrics} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-display-3 font-heading font-bold text-fg mb-6">
                Наша миссия
              </h2>
              <p className="text-lead text-fg-muted mb-6 leading-relaxed">
                Мы создаем технологии, которые освобождают предпринимателей от рутины 
                и помогают им сосредоточиться на развитии бизнеса.
              </p>
              <p className="text-fg-muted leading-relaxed">
                Каждый проект для нас — это возможность внести вклад в успех наших клиентов. 
                Мы не просто разрабатываем 1С системы, мы создаем инструменты для роста бизнеса.
              </p>
            </div>
            
            <Card variant="gradient" className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <IconBadge icon={CheckCircle2} variant="success" size="lg" />
                  <div>
                    <h3 className="font-semibold text-fg">Индивидуальный подход</h3>
                    <p className="text-sm text-fg-muted">Каждое решение под ваши процессы</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <IconBadge icon={CheckCircle2} variant="success" size="lg" />
                  <div>
                    <h3 className="font-semibold text-fg">Прозрачность</h3>
                    <p className="text-sm text-fg-muted">Честные цены и сроки</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <IconBadge icon={CheckCircle2} variant="success" size="lg" />
                  <div>
                    <h3 className="font-semibold text-fg">Долгосрочные отношения</h3>
                    <p className="text-sm text-fg-muted">Поддержка и развитие системы</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-bg-soft">
        <div className="container">
          <SectionHeading
            title="Наши принципы работы"
            description="Ценности, которые определяют наш подход к каждому проекту"
            centered
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} variant="glass" className="group">
                <CardHeader>
                  <IconBadge 
                    icon={principle.icon} 
                    variant="accent" 
                    size="lg" 
                    className="mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-fg-muted leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title="Команда экспертов"
            description="Профессионалы с глубокой экспертизой в своих областях"
            centered
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} variant="feature" className="text-center group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-bg font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-accent font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-fg-muted mb-2">{member.experience}</p>
                  <p className="text-xs text-fg-muted">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-bg-soft">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Часто задаваемые вопросы"
              centered
              className="mb-12"
            />

            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <Card variant="default">
                    <AccordionTrigger className="px-6 py-4 text-left">
                      <span className="font-medium text-fg">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-fg-muted leading-relaxed">{item.answer}</p>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}