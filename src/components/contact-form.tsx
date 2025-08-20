'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  email: z.string().email('Введите корректный email'),
  company: z.string().optional(),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов'),
})

type FormData = z.infer<typeof formSchema>

interface ContactFormProps {
  title?: string
  description?: string
}

export function ContactForm({ title = "Получить консультацию", description }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  if (isSubmitted) {
    return (
      <Card variant="glass" className="max-w-lg mx-auto text-center p-8">
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-success" />
          </div>
          <h3 className="text-xl font-semibold text-fg">Заявка отправлена!</h3>
          <p className="text-fg-muted">
            Мы свяжемся с вами в течение часа в рабочее время для уточнения деталей и назначения консультации.
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card variant="glass" className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
        {description && (
          <p className="text-center text-fg-muted text-sm">{description}</p>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              {...register('name')}
              className="mt-2"
              placeholder="Ваше имя"
            />
            {errors.name && (
              <p className="text-danger text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              {...register('phone')}
              className="mt-2"
              placeholder="+7 (___) ___-__-__"
            />
            {errors.phone && (
              <p className="text-danger text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              className="mt-2"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-danger text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="company">Компания</Label>
            <Input
              id="company"
              {...register('company')}
              className="mt-2"
              placeholder="Название компании"
            />
          </div>

          <div>
            <Label htmlFor="message">Сообщение *</Label>
            <Textarea
              id="message"
              {...register('message')}
              className="mt-2"
              placeholder="Расскажите о ваших задачах и требованиях..."
              rows={4}
            />
            {errors.message && (
              <p className="text-danger text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Отправляем...
              </>
            ) : (
              'Отправить заявку'
            )}
          </Button>

          <p className="text-xs text-fg-muted text-center">
            Нажимая кнопку, вы соглашаетесь с{' '}
            <a href="/privacy" className="text-accent hover:underline">
              политикой конфиденциальности
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}