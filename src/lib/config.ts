export const SITE_CONFIG = {
  name: 'SalemSOFT',
  description: 'CRM и автоматизация под ключ. Повышайте эффективность продаж и управления клиентами с нашими решениями.',
  url: 'https://pro.salemsoft.kz',
  
  contact: {
    phone: '+7 708 975 2414',
    email: 'info@salemsoft.kz',
    whatsapp: '77089752414',
    telegram: '+77089752414',
    address: 'Алматы, Казахстан'
  },

  social: {
    whatsapp: `https://wa.me/77089752414`,
    telegram: `https://t.me/+77089752414`,
  },

  navigation: [
    { name: 'Главная', href: '/' },
    { name: 'Решения', href: '/solutions' },
    { name: 'Кейсы', href: '/cases' },
    { name: 'Отзывы', href: '/reviews' },
    { name: 'Цены', href: '/pricing' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ],

  features: [
    {
      title: 'Продажи',
      description: 'Управление воронкой продаж, автоматизация процессов, отслеживание конверсий',
      icon: 'TrendingUp'
    },
    {
      title: 'Аналитика',
      description: 'AI-инсайты, дашборды в реальном времени, прогнозирование продаж',
      icon: 'BarChart3'
    },
    {
      title: 'Коммуникации',
      description: 'Единая лента общения, автоответчики, интеграция с мессенджерами',
      icon: 'MessageSquare'
    },
    {
      title: 'Формы и заявки',
      description: 'Конструктор форм, автообработка заявок, интеграция с сайтом',
      icon: 'FileText'
    },
    {
      title: 'Платежи',
      description: 'Интеграция с платёжными системами, автоматическая сверка, отчёты',
      icon: 'CreditCard'
    },
    {
      title: 'Автоматизация',
      description: 'Триггеры, роботы, workflow-процессы для экономии времени',
      icon: 'Zap'
    }
  ],

  benefits: [
    {
      title: 'Адаптация под бизнес',
      description: 'Настраиваем CRM под ваши процессы, а не наоборот',
      icon: 'Settings'
    },
    {
      title: 'Партнёрский подход',
      description: 'Сопровождаем проект от идеи до результата',
      icon: 'Handshake'
    },
    {
      title: 'Простота внедрения',
      description: 'Быстрый старт без остановки текущих процессов',
      icon: 'Rocket'
    },
    {
      title: 'Стратегическое мышление',
      description: 'Не просто ставим систему, а помогаем расти бизнесу',
      icon: 'Target'
    }
  ]
} as const

export type SiteConfig = typeof SITE_CONFIG