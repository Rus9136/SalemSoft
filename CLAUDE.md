# Claude Code Memory - SalemSOFT CRM Website

## Проект

**Название**: SalemSOFT CRM Website  
**Описание**: Полный редизайн корпоративного сайта SalemSOFT под стиль sieracrm.ru/crm  
**Технологии**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion  
**Дата создания**: 20 августа 2025  
**Статус**: ✅ Завершен  

## Архитектура проекта

### Технический стек
- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Стилизация**: Tailwind CSS с кастомными токенами
- **UI**: shadcn/ui + Radix UI компоненты  
- **Формы**: React Hook Form + Zod валидация
- **Иконки**: Lucide React
- **Шрифты**: Manrope (заголовки) + Inter (основной текст)
- **Анимации**: CSS transitions + Framer Motion (готов к подключению)

### Дизайн система
```css
/* Основные цвета */
--bg: #0E1116          /* Основной темный фон */
--bg-soft: #121722     /* Мягкий темный фон */ 
--surface: #161B26     /* Поверхности карточек */
--accent: #628BFF      /* Синий неоновый акцент */
--fg: #E7ECF3          /* Основной текст */
--muted: #A5B0C2       /* Приглушенный текст */
```

### Структура файлов
```
src/
├── app/                 # Next.js App Router
│   ├── page.tsx        # Главная страница
│   ├── solutions/      # Готовые решения  
│   ├── cases/          # Кейсы внедрения
│   ├── reviews/        # Отзывы клиентов
│   ├── pricing/        # Тарифы и цены
│   ├── about/          # О компании
│   ├── contacts/       # Контакты
│   └── api/contact/    # API для форм
├── components/         # React компоненты
│   ├── ui/            # Базовые UI компоненты
│   ├── header.tsx     # Навигация
│   ├── footer.tsx     # Подвал
│   └── sections/      # Секции страниц
└── lib/               # Утилиты и конфигурация
```

## Ключевые компоненты

### UI Components
- **Button**: Варианты default, outline, secondary, ghost, gradient
- **Card**: Варианты default, glass, gradient, feature
- **SectionHeading**: Заголовки с eyebrow, title, description
- **IconBadge**: Круглые иконки с цветными фонами
- **Testimonial**: Карточки отзывов с рейтингами
- **Metrics**: Анимированные счетчики
- **BeforeAfterList**: Сравнительные списки
- **ContactForm**: Формы с валидацией

### Layout Components  
- **Header**: Sticky навигация с мобильным меню
- **Footer**: Контакты, ссылки, соцсети
- **Hero**: Главная секция с интерактивной визуализацией

## Страницы и функционал

### Главная страница (/)
- Hero с анимированной визуализацией CRM
- Features: 6 карточек возможностей
- Benefits: 4 принципа работы  
- Before/After: сравнение результатов
- Testimonials: отзывы + кейсы с табами
- CTA: форма подписки + контакты

### Остальные страницы
- **Solutions**: готовые решения по отраслям
- **Cases**: детальные кейсы с метриками
- **Reviews**: сетка отзывов клиентов
- **Pricing**: тарифы + калькулятор + FAQ
- **About**: команда + принципы + FAQ  
- **Contacts**: форма + информация + карта

## Конфигурация

### Контактные данные (SITE_CONFIG)
- Телефон: +7 708 975 2414
- Email: info@salemsoft.kz  
- WhatsApp: 77089752414
- Telegram: +77089752414
- Адрес: Алматы, Казахстан
- URL: https://pro.salemsoft.kz

### API Endpoints
- `POST /api/contact` - обработка контактных форм (мок-версия)

## SEO и Accessibility

### SEO оптимизация
- Next.js Metadata API для всех страниц
- Open Graph и Twitter Card метаданные
- Семантическая HTML разметка
- Оптимизированные URL структуры
- Правильная иерархия заголовков (h1-h6)

### Accessibility
- ARIA атрибуты для интерактивных элементов  
- Keyboard navigation поддержка
- Focus indicators для всех интерактивных элементов
- Alt тексты для изображений
- Поддержка screen readers

## Адаптивность

### Breakpoints
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */  
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Особенности
- Mobile-first подход
- Адаптивные сетки и компоненты
- Мобильное меню в Header
- Оптимизированная типографика для разных экранов

## Performance

### Оптимизации
- Next.js 14 автоматические оптимизации
- Image optimization готов (заглушки пока)
- CSS-in-JS с нулевым runtime (Tailwind)
- Lazy loading компонентов
- Минимальный JavaScript bundle

### Метрики (ожидаемые)
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## Команды для работы

### Разработка
```bash
pnpm dev          # Запуск dev сервера
pnpm build        # Сборка для продакшена  
pnpm start        # Запуск prod сборки
pnpm type-check   # Проверка типов TypeScript
pnpm lint         # ESLint проверка
```

### Деплой
```bash
# Vercel (рекомендуется)
vercel

# Или ручная сборка
pnpm build
```

## Важные особенности

### Дизайн
- Темная тема как основная (без переключателя)
- Неоновые синие акценты (#628BFF)
- Glassmorphism эффекты на карточках
- Градиентные фоны и орнаменты
- Анимации при скролле и hover

### UX
- Плавная навигация между секциями
- Интуитивные CTA кнопки
- Быстрый доступ к мессенджерам
- Понятная иерархия информации
- Прогрессивное раскрытие деталей

### Интеграции (готовы к подключению)
- Формы → CRM система
- Аналитика (Google Analytics)
- Метрики (Yandex.Metrica)
- Email рассылки (EmailJS)
- Чат-боты (WhatsApp/Telegram)

## Будущее развитие

### Возможные улучшения
1. **Анимации**: подключить Framer Motion для продвинутых анимаций
2. **CMS**: интеграция с Contentful/Strapi для управления контентом
3. **Analytics**: подключение реальных метрик
4. **AB тестирование**: для оптимизации конверсий
5. **Многоязычность**: i18n поддержка
6. **PWA**: превращение в Progressive Web App

### Готовые к подключению
- Framer Motion (зависимость уже установлена)
- Форм обработчики (API структура готова)
- Изображения (компоненты готовы для next/image)
- Дополнительные страницы (структура расширяема)

## Заметки разработчика

### Принципы кодирования
- TypeScript first для типобезопасности
- Компонентный подход с переиспользованием
- Консистентная система именования
- Разделение логики и презентации
- Accessibility как приоритет

### Лучшие практики
- Семантическая разметка HTML
- BEM-подобное именование классов
- Консистентные отступы и spacing
- Оптимизированные изображения
- Кеширование и производительность

**Последнее обновление**: 20 августа 2025  
**Версия**: 1.0.0  
**Статус**: Production Ready ✅