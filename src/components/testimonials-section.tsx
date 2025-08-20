'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SectionHeading } from '@/components/ui/section-heading'
import { Testimonial } from '@/components/ui/testimonial'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, TrendingUp, Users, Clock } from 'lucide-react'
import { IconBadge } from '@/components/ui/icon-badge'

const testimonials = [
  {
    name: 'Алексей Смирнов',
    role: 'Коммерческий директор',
    company: 'TechSolutions',
    content: 'После внедрения CRM от SalemSOFT наша конверсия лидов выросла на 40%. Теперь мы видим полную картину продаж и можем принимать решения на основе данных.',
    rating: 5
  },
  {
    name: 'Мария Казакова', 
    role: 'CEO',
    company: 'Digital Agency',
    content: 'Автоматизация освободила наших менеджеров от рутины. Время на обработку заявки сократилось с 30 минут до 5. Рекомендую всем, кто хочет масштабироваться.',
    rating: 5
  },
  {
    name: 'Дмитрий Волков',
    role: 'Руководитель отдела продаж',
    company: 'Manufacturing Inc',
    content: 'Интеграция с нашими существующими системами прошла безболезненно. Команда SalemSOFT работала профессионально и в срок.',
    rating: 5
  }
]

const cases = [
  {
    title: 'E-commerce: +180% к выручке',
    description: 'Интернет-магазин электроники',
    metrics: [
      { icon: TrendingUp, label: 'Рост выручки', value: '+180%' },
      { icon: Users, label: 'Конверсия', value: '+65%' },
      { icon: Clock, label: 'Время обработки', value: '-75%' }
    ],
    results: 'Внедрили омниканальную CRM с интеграцией WhatsApp, Telegram и email. Автоматизировали воронку продаж и настроили персонализированные рассылки.'
  },
  {
    title: 'B2B услуги: автоматизация сделок',
    description: 'Консалтинговая компания',
    metrics: [
      { icon: TrendingUp, label: 'ROI', value: '340%' },
      { icon: Users, label: 'Удержание', value: '+45%' },
      { icon: Clock, label: 'Время сделки', value: '-50%' }
    ],
    results: 'Создали систему управления долгими B2B-сделками с этапами согласований, автоматическими напоминаниями и интеграцией с 1С.'
  }
]

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-bg-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Отзывы и кейсы"
          title="Истории успеха наших клиентов"
          description="Реальные результаты внедрения CRM-систем в различных отраслях"
          centered
          className="mb-16"
        />

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            <TabsTrigger value="cases">Кейсы</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-12">
            {/* Reviews Grid */}
            <div>
              <h3 className="text-2xl font-bold text-fg mb-8 text-center">Отзывы клиентов</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {testimonials.map((testimonial, index) => (
                  <Testimonial key={index} {...testimonial} />
                ))}
              </div>
            </div>

            {/* Cases Grid */}
            <div>
              <h3 className="text-2xl font-bold text-fg mb-8 text-center">Кейсы внедрения</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {cases.map((caseItem, index) => (
                  <Card key={index} variant="feature" className="group">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        {caseItem.title}
                        <ArrowUpRight className="h-4 w-4 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </CardTitle>
                      <p className="text-sm text-fg-muted">{caseItem.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-3 gap-4">
                        {caseItem.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <IconBadge 
                              icon={metric.icon} 
                              variant="accent" 
                              size="sm" 
                              className="mx-auto mb-2" 
                            />
                            <div className="text-lg font-bold text-accent">{metric.value}</div>
                            <div className="text-xs text-fg-muted">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-fg-muted leading-relaxed">
                        {caseItem.results}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cases">
            <div className="grid lg:grid-cols-2 gap-8">
              {cases.map((caseItem, index) => (
                <Card key={index} variant="feature" className="group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      {caseItem.title}
                      <ArrowUpRight className="h-4 w-4 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </CardTitle>
                    <p className="text-sm text-fg-muted">{caseItem.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      {caseItem.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <IconBadge 
                            icon={metric.icon} 
                            variant="accent" 
                            size="sm" 
                            className="mx-auto mb-2" 
                          />
                          <div className="text-lg font-bold text-accent">{metric.value}</div>
                          <div className="text-xs text-fg-muted">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-fg-muted leading-relaxed">
                      {caseItem.results}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Посмотреть все кейсы
          </Button>
        </div>
      </div>
    </section>
  )
}