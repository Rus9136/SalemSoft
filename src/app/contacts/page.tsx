import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/contact-form'
import { SITE_CONFIG } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Свяжитесь с нами для консультации по внедрению 1С систем. Телефон, email, мессенджеры.',
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Телефон',
    content: SITE_CONFIG.contact.phone,
    href: `tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`,
    description: 'Звоните в рабочее время'
  },
  {
    icon: Mail,
    title: 'Email',
    content: SITE_CONFIG.contact.email,
    href: `mailto:${SITE_CONFIG.contact.email}`,
    description: 'Ответим в течение часа'
  },
  {
    icon: MapPin,
    title: 'Адрес',
    content: SITE_CONFIG.contact.address,
    href: '#',
    description: 'Офис в центре города'
  },
  {
    icon: Clock,
    title: 'Режим работы',
    content: 'Пн-Пт: 9:00-18:00',
    href: '#',
    description: 'Поддержка 24/7 для клиентов'
  }
]

const messengers = [
  {
    name: 'WhatsApp',
    icon: MessageSquare,
    href: SITE_CONFIG.social.whatsapp,
    color: 'text-green-400'
  },
  {
    name: 'Telegram',
    icon: Send,
    href: SITE_CONFIG.social.telegram,
    color: 'text-blue-400'
  }
]

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 via-bg to-bg">
        <div className="container">
          <SectionHeading
            eyebrow="Контакты"
            title="Готовы обсудить ваш проект?"
            description="Свяжитесь с нами любым удобным способом. Консультация бесплатная, анализ ваших процессов — в подарок."
            centered
            className="mb-16"
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} variant="feature" className="text-center group">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <contact.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {contact.href.startsWith('#') ? (
                    <div className="font-semibold text-fg mb-2">{contact.content}</div>
                  ) : (
                    <a 
                      href={contact.href} 
                      className="font-semibold text-fg hover:text-accent transition-colors mb-2 block"
                    >
                      {contact.content}
                    </a>
                  )}
                  <p className="text-sm text-fg-muted">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm
                title="Отправить заявку"
                description="Опишите ваши задачи, и мы подберем оптимальное решение"
              />
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-accent" />
                    Быстрая связь
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-fg-muted text-sm">
                    Нужен быстрый ответ? Напишите в мессенджер — отвечаем моментально в рабочее время.
                  </p>
                  <div className="flex gap-3">
                    {messengers.map((messenger, index) => (
                      <Button key={index} variant="outline" size="sm" asChild>
                        <a 
                          href={messenger.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <messenger.icon className={`w-4 h-4 ${messenger.color}`} />
                          {messenger.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Process Info */}
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Как проходит консультация?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-fg mb-1">Анализ потребностей</h4>
                        <p className="text-sm text-fg-muted">Изучаем ваши бизнес-процессы и задачи</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-fg mb-1">Подбор решения</h4>
                        <p className="text-sm text-fg-muted">Предлагаем оптимальный вариант 1С</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-fg mb-1">Расчет стоимости</h4>
                        <p className="text-sm text-fg-muted">Прозрачное ценообразование без скрытых платежей</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card variant="default">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-bg-soft to-surface rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="font-semibold text-fg mb-2">Наш офис</h3>
                      <p className="text-sm text-fg-muted">{SITE_CONFIG.contact.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}