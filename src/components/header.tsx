'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/config'
import { cn } from '@/lib/utils'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-bg/95 backdrop-blur-lg border-b border-line/50 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-600 rounded-lg flex items-center justify-center">
              <span className="text-bg font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-fg font-heading">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {SITE_CONFIG.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 hover:text-accent',
                  pathname === item.href
                    ? 'text-accent'
                    : 'text-fg-muted'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href={SITE_CONFIG.social.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`}>
                <Phone className="w-4 h-4 mr-2" />
                Позвонить
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-line/50 bg-bg/95 backdrop-blur-lg">
            <div className="py-6 space-y-4">
              {SITE_CONFIG.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-4 py-2 text-base font-medium transition-colors duration-200',
                    pathname === item.href
                      ? 'text-accent bg-accent/10 rounded-lg'
                      : 'text-fg-muted hover:text-accent'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex flex-col space-y-3 px-4 pt-4 border-t border-line/50">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={SITE_CONFIG.social.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button size="sm" asChild className="w-full">
                  <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Позвонить
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}