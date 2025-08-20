import Link from 'next/link'
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg border-t border-line/50">
      <div className="container">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-600 rounded-lg flex items-center justify-center">
                  <span className="text-bg font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-fg font-heading">
                  {SITE_CONFIG.name}
                </span>
              </Link>
              
              <p className="text-fg-muted mb-6 max-w-md leading-relaxed">
                Автоматизируем продажи и управление клиентами с помощью современных CRM-решений. 
                Повышаем эффективность вашего бизнеса через технологии.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={SITE_CONFIG.social.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={SITE_CONFIG.social.telegram} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Telegram
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-fg mb-4 font-heading">Навигация</h3>
              <ul className="space-y-3">
                {SITE_CONFIG.navigation.slice(1, 5).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-fg-muted hover:text-accent transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-fg mb-4 font-heading">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`}
                      className="text-fg hover:text-accent transition-colors duration-200"
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-fg hover:text-accent transition-colors duration-200"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-fg-muted">
                      {SITE_CONFIG.contact.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-line/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-fg-muted">
              © {currentYear} {SITE_CONFIG.name}. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-fg-muted hover:text-accent transition-colors duration-200"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/terms"
                className="text-sm text-fg-muted hover:text-accent transition-colors duration-200"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}