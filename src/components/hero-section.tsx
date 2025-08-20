'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/config'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-background opacity-20" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated Dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-accent rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent mb-6">
              ✨ CRM под ключ
            </div>
            
            <h1 className="text-display-1 lg:text-6xl xl:text-7xl font-heading font-black text-fg mb-6 leading-tight">
              Автоматизация{' '}
              <span className="gradient-text">продаж</span>{' '}
              и управления клиентами
            </h1>
            
            <p className="text-lead text-fg-muted mb-8 max-w-lg leading-relaxed">
              Повышаем эффективность вашего бизнеса через внедрение современных CRM-систем. 
              Увеличиваем конверсию, автоматизируем процессы, растим прибыль.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="group">
                Узнать стоимость
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Посмотреть демо
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
              <span className="text-fg-muted">Срочно нужна консультация?</span>
              <div className="flex gap-4">
                <Button variant="link" size="sm" asChild className="p-0 h-auto font-semibold">
                  <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`}>
                    {SITE_CONFIG.contact.phone}
                  </a>
                </Button>
                <Button variant="link" size="sm" asChild className="p-0 h-auto">
                  <a href={SITE_CONFIG.social.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="relative glass-effect rounded-3xl p-8 glow-effect">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-fg">Панель CRM</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-success"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-danger"></div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">+47%</div>
                      <div className="text-xs text-fg-muted">Конверсия</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">2.3x</div>
                      <div className="text-xs text-fg-muted">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fg">-60%</div>
                      <div className="text-xs text-fg-muted">Время</div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    {[
                      { label: 'Воронка продаж', progress: 85, color: 'bg-accent' },
                      { label: 'Автоматизация', progress: 92, color: 'bg-success' },
                      { label: 'Аналитика', progress: 78, color: 'bg-amber-400' },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-fg-muted">{item.label}</span>
                          <span className="text-fg font-medium">{item.progress}%</span>
                        </div>
                        <div className="h-2 bg-line rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${item.color} rounded-full transition-all duration-1000 delay-1000`}
                            style={{ width: isVisible ? `${item.progress}%` : '0%' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 glass-effect rounded-xl p-4 animate-glow">
                <div className="text-center">
                  <div className="text-lg font-bold text-success">↗ +127%</div>
                  <div className="text-xs text-fg-muted">Выручка</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-effect rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                  <span className="text-xs text-fg-muted">Система активна</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}