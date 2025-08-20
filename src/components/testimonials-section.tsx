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
    name: 'Александр Иванов',
    role: 'Финансовый директор',
    company: 'TechTrade',
    content: 'После перехода на 1С:Бухгалтерию с нашей старой системы скорость подготовки налоговой отчётности сократилась вдвое. Теперь мы уверены в корректности данных.',
    rating: 5
  },
  {
    name: 'Мария Казакова', 
    role: 'Владелец сети магазинов',
    company: 'FashionStore',
    content: 'С внедрением 1С:Розница мы увидели остатки по каждому магазину в режиме онлайн и снизили недостачу на 30%. Команда SalemSOFT всегда на связи.',
    rating: 5
  },
  {
    name: 'Дмитрий Волков',
    role: 'Директор по продажам',
    company: 'ManufacturePro',
    content: 'Команда SalemSOFT интегрировала 1С с сайтом и CRM; заказы автоматически поступают в учёт, ошибки исключены. Работали профессионально и в срок.',
    rating: 5
  }
]

const cases = [
  {
    title: 'Розничная сеть: +25% к скорости учёта',
    description: 'Сеть магазинов одежды',
    metrics: [
      { icon: TrendingUp, label: 'Скорость учёта', value: '+25%' },
      { icon: Users, label: 'Точность данных', value: '+90%' },
      { icon: Clock, label: 'Время инвентаризации', value: '-60%' }
    ],
    results: 'Настроили 1С:Розница с интеграцией онлайн-касс. Упростили учёт товаров, ускорили инвентаризацию и автоматизировали загрузку ценников.'
  },
  {
    title: 'Производство: сокращение срока закрытия месяца на 50%',
    description: 'Производственная компания',
    metrics: [
      { icon: TrendingUp, label: 'Закрытие месяца', value: '-50%' },
      { icon: Users, label: 'Точность расчётов', value: '+95%' },
      { icon: Clock, label: 'Время отчётности', value: '-70%' }
    ],
    results: 'Внедрили 1С:УПП, настроили калькуляцию себестоимости и планирование. Отчётность формируется за пару часов вместо нескольких дней.'
  }
]

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-bg-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Отзывы и кейсы"
          title="Истории успеха наших клиентов"
          description="Реальные результаты внедрения системы 1С:Предприятие в различных отраслях"
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