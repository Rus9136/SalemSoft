import { ArrowRight, MessageSquare, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SITE_CONFIG } from '@/lib/config'

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-accent/10 via-bg to-accent-600/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-background opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display-2 lg:text-5xl font-heading font-bold text-fg mb-6">
            Готовы наладить учёт{' '}
            <span className="gradient-text">и отчётность в 1С?</span>
          </h2>
          
          <p className="text-lead text-fg-muted mb-12 max-w-2xl mx-auto">
            Оставьте заявку на бесплатную консультацию. Мы проанализируем процессы 
            и подскажем, какая конфигурация 1С вам нужна.
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input 
              type="email" 
              placeholder="Ваш email" 
              className="flex-1"
            />
            <Button size="lg" className="group">
              Отправить
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-fg-muted mb-12">
            <span>Или свяжитесь сейчас: {SITE_CONFIG.contact.phone}</span>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href={SITE_CONFIG.social.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              
              <Button variant="outline" size="sm" asChild>
                <a href={SITE_CONFIG.social.telegram} target="_blank" rel="noopener noreferrer">
                  <Send className="w-4 h-4 mr-2" />
                  Telegram
                </a>
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { value: '100+', label: 'Проектов по внедрению 1С' },
              { value: '10+', label: 'Лет опыта работы с 1С' },
              { value: '24/7', label: 'Поддержка пользователей' },
              { value: '99%', label: 'Успешных запусков' }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-fg-muted font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}