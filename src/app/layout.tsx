import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SITE_CONFIG } from '@/lib/config'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — CRM и автоматизация под ключ`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'CRM система',
    'автоматизация продаж',
    'управление клиентами',
    'CRM внедрение',
    'бизнес процессы',
    'автоматизация бизнеса',
    'SalemSOFT',
    'Алматы',
    'Казахстан'
  ],
  authors: [{ name: 'SalemSOFT' }],
  creator: 'SalemSOFT',
  publisher: 'SalemSOFT',
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} — CRM и автоматизация под ключ`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — CRM и автоматизация под ключ`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bg text-fg font-body antialiased">
        <Header />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}