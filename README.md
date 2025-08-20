# SalemSOFT CRM Website

Современный корпоративный сайт для SalemSOFT, выполненный в стиле sieracrm.ru/crm с использованием Next.js 14, TypeScript, Tailwind CSS и shadcn/ui.

## 🚀 Быстрый старт

```bash
# Установка зависимостей
pnpm install

# Запуск в режиме разработки
pnpm dev

# Сборка для продакшена
pnpm build

# Проверка типов
pnpm type-check

# Линтинг кода
pnpm lint
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📋 Технологический стек

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Fonts**: Manrope (заголовки) + Inter (текст)

## 🎨 Дизайн система

### Цветовая палитра

```css
/* Основные цвета */
--bg: #0E1116          /* Основной темный фон */
--bg-soft: #121722     /* Мягкий темный фон */
--surface: #161B26     /* Поверхности карточек */

/* Акцентные цвета */
--accent: #628BFF      /* Основной акцент (синий неон) */
--accent-600: #7B91FF  /* Светлее акцент */
--accent-300: #AEBBFF  /* Еще светлее акцент */

/* Текст */
--fg: #E7ECF3          /* Основной текст */
--muted: #A5B0C2       /* Приглушенный текст */

/* Дополнительные */
--line: #253047        /* Границы и разделители */
--success: #49D29E     /* Успех */
--danger: #FF6B6B      /* Ошибка */
```

### Типографика

```css
/* Заголовки (Manrope) */
.text-display-1  /* 64px, 900 weight */
.text-display-2  /* 48px, 800 weight */  
.text-display-3  /* 32px, 700 weight */

/* Основной текст (Inter) */
.text-lead       /* 20px, 400 weight */
.text-base       /* 16px, 400 weight */
```

### Компоненты

- **Button**: Варианты default, outline, secondary, ghost, gradient
- **Card**: Варианты default, glass, gradient, feature
- **IconBadge**: Круглые иконки с цветными фонами
- **SectionHeading**: Заголовки секций с eyebrow, title, description

## 📄 Структура страниц

### Главная страница (/)
- **Hero**: Крупный заголовок, CTA кнопки, интерактивная визуализация
- **Features**: 6 карточек возможностей CRM
- **Benefits**: 4 карточки "Почему мы"
- **Before/After**: Сравнение до и после внедрения
- **Testimonials**: Отзывы и кейсы с табами
- **CTA**: Форма подписки и контакты

### Решения (/solutions)
- Готовые CRM решения по отраслям
- Карточки с описанием, интеграциями, ценами

### Кейсы (/cases)
- Детальные истории успеха клиентов
- Метрики, проблемы, решения, результаты

### Отзывы (/reviews)
- Сетка отзывов клиентов
- Рейтинги и метрики доверия

### Цены (/pricing)
- 3 тарифных плана
- Калькулятор стоимости
- FAQ по ценообразованию

### О нас (/about)
- Команда, принципы, миссия
- Метрики компании
- FAQ

### Контакты (/contacts)
- Контактная форма с валидацией
- Информация о компании
- Быстрые ссылки на мессенджеры

## 🧩 Ключевые компоненты

### UI Components (`src/components/ui/`)

```typescript
// Базовые компоненты
<Button variant="default" size="lg">Text</Button>
<Card variant="feature">Content</Card>
<Input placeholder="Email" />
<Textarea rows={4} />

// Специальные компоненты  
<SectionHeading 
  eyebrow="Раздел"
  title="Заголовок" 
  description="Описание"
  centered 
/>

<IconBadge 
  icon={TrendingUp} 
  variant="accent" 
  size="lg" 
/>

<Metrics metrics={[
  { value: '50+', label: 'Проектов' }
]} />

<BeforeAfterList items={[
  { before: 'Было плохо', after: 'Стало хорошо' }
]} />

<Testimonial 
  name="Имя"
  role="Роль"
  company="Компания"
  content="Отзыв"
  rating={5}
/>
```

### Layout Components

```typescript
// Навигация
<Header /> // Sticky header с меню и CTA

// Подвал
<Footer /> // Ссылки, контакты, соцсети

// Формы
<ContactForm 
  title="Заголовок"
  description="Описание" 
/>
```

## ⚙️ Конфигурация

### Настройки сайта (`src/lib/config.ts`)

```typescript
export const SITE_CONFIG = {
  name: 'SalemSOFT',
  description: 'CRM и автоматизация под ключ',
  url: 'https://pro.salemsoft.kz',
  
  contact: {
    phone: '+7 708 975 2414',
    email: 'info@salemsoft.kz',
    whatsapp: '77089752414',
    telegram: '+77089752414',
  },
  
  // ... остальные настройки
}
```

### API Endpoints

- `POST /api/contact` - Обработка контактных форм

## 🎭 Анимации и UX

- **Scroll animations**: fade-in, slide-in эффекты
- **Hover effects**: подсветка карточек, трансформации
- **Interactive elements**: кнопки с иконками, прогресс-бары
- **Loading states**: спиннеры в формах
- **Success states**: подтверждения отправки форм

## 📱 Адаптивность

```css
/* Breakpoints */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */  
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

- Mobile-first подход
- Гибкие сетки и контейнеры
- Адаптивная типографика
- Мобильное меню в хедере

## ♿ Accessibility

- Семантическая HTML разметка
- ARIA атрибуты для интерактивных элементов
- Keyboard navigation support
- Focus indicators
- Alt тексты для изображений
- Правильная структура заголовков (h1-h6)

## 🔍 SEO

- Next.js Metadata API для всех страниц
- Open Graph теги
- Twitter Card метаданные  
- Structured data готовность
- Оптимизированные URL
- Быстрая загрузка страниц

## 📊 Performance

- Next.js 14 оптимизации
- Image optimization с next/image
- Lazy loading компонентов
- CSS-in-JS с нулевым runtime (Tailwind)
- Минимальный JavaScript bundle

## 🚀 Deployment

### Development

```bash
pnpm dev
```

### Production Build

```bash
pnpm build
pnpm start
```

### Vercel (рекомендуется)

```bash
# Установите Vercel CLI
npm i -g vercel

# Деплой
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📁 Структура проекта

```
salemsoft-crm/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (pages)/           # Группированные роуты
│   │   ├── api/               # API endpoints
│   │   ├── globals.css        # Глобальные стили
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React компоненты
│   │   ├── ui/                # UI компоненты
│   │   ├── header.tsx         # Навигация
│   │   ├── footer.tsx         # Подвал
│   │   └── sections/          # Секции страниц
│   ├── lib/                   # Утилиты
│   │   ├── utils.ts           # Общие функции
│   │   └── config.ts          # Конфигурация сайта
│   └── styles/                # Дополнительные стили
├── public/                    # Статичные файлы
├── tailwind.config.ts         # Настройки Tailwind
├── tsconfig.json             # TypeScript конфиг
├── next.config.js            # Next.js конфиг
└── package.json              # Зависимости
```

## 🛠 Кастомизация

### Изменение цветовой схемы

Отредактируйте переменные в `src/styles/globals.css`:

```css
:root {
  --accent: 98 139 255;  /* Новый акцентный цвет */
  --bg: 14 17 22;        /* Новый цвет фона */
}
```

### Добавление новой страницы

1. Создайте файл `src/app/новая-страница/page.tsx`
2. Добавьте роут в `SITE_CONFIG.navigation`
3. Создайте metadata для SEO

### Добавление нового компонента

```typescript
// src/components/ui/new-component.tsx
export function NewComponent({ ...props }) {
  return <div>...</div>
}
```

## 🐛 Troubleshooting

### Часто встречающиеся проблемы

1. **Ошибки TypeScript**: Проверьте типы в `tsconfig.json`
2. **Стили не применяются**: Убедитесь что Tailwind классы корректны
3. **Формы не отправляются**: Проверьте API endpoint `/api/contact`
4. **Медленная загрузка**: Оптимизируйте изображения

### Debug команды

```bash
# Проверка типов
pnpm type-check

# Анализ bundle
pnpm build && npx @next/bundle-analyzer

# Линтинг
pnpm lint --fix
```

## 📞 Поддержка

Если у вас есть вопросы по проекту:

- **Email**: info@salemsoft.kz
- **Телефон**: +7 708 975 2414
- **GitHub**: Создайте issue в репозитории

## 📄 License

© 2024 SalemSOFT. Все права защищены.

---

**Дата создания**: Август 2024  
**Версия**: 1.0.0  
**Статус**: ✅ Production Ready