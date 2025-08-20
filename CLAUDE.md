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
📁 Корневая структура:
├── package.json            # Зависимости проекта
├── tsconfig.json          # TypeScript конфигурация
├── tailwind.config.ts     # Дизайн система Tailwind
├── next.config.js         # Next.js конфигурация (статический экспорт)
├── postcss.config.js      # PostCSS настройки
├── .eslintrc.json         # ESLint правила
├── .gitignore             # Git игнорирование
├── CLAUDE.md              # Документация проекта
├── README.md              # Инструкции по установке
└── SESSION_LOG_*.md       # Логи разработки

📁 Исходный код (src/):
├── app/                   # Next.js App Router (страницы)
│   ├── page.tsx          # Главная страница
│   ├── layout.tsx        # Общий layout с шрифтами
│   ├── globals.css       # Глобальные стили
│   ├── solutions/page.tsx # Готовые решения  
│   ├── cases/page.tsx    # Кейсы внедрения
│   ├── reviews/page.tsx  # Отзывы клиентов
│   ├── pricing/page.tsx  # Тарифы и цены
│   ├── about/page.tsx    # О компании
│   └── contacts/page.tsx # Контакты

├── components/            # React компоненты
│   ├── ui/               # Базовые UI компоненты (shadcn/ui)
│   │   ├── button.tsx    # Кнопки (5 вариантов)
│   │   ├── card.tsx      # Карточки (4 варианта)
│   │   ├── input.tsx     # Поля ввода
│   │   ├── textarea.tsx  # Текстовые области
│   │   ├── label.tsx     # Лейблы
│   │   ├── tabs.tsx      # Табы
│   │   ├── accordion.tsx # Аккордеоны
│   │   ├── badge.tsx     # Бейджи
│   │   ├── section-heading.tsx # Заголовки секций
│   │   ├── icon-badge.tsx     # Иконки с фоном
│   │   ├── metrics.tsx        # Анимированные метрики
│   │   ├── before-after-list.tsx # Списки до/после
│   │   ├── logo-cloud.tsx     # Облако логотипов
│   │   └── testimonial.tsx    # Карточки отзывов
│   │
│   ├── header.tsx        # Sticky навигация + мобильное меню
│   ├── footer.tsx        # Подвал с контактами
│   ├── contact-form.tsx  # Форма обратной связи
│   │
│   └── sections/         # Секции главной страницы
│       ├── hero-section.tsx        # Hero с анимацией
│       ├── features-section.tsx    # 6 карточек возможностей
│       ├── benefits-section.tsx    # 4 принципа работы
│       ├── before-after-section.tsx # Сравнение до/после
│       ├── testimonials-section.tsx # Отзывы + кейсы с табами
│       └── cta-section.tsx         # CTA форма + контакты

├── lib/                  # Утилиты и конфигурация
│   ├── utils.ts         # Вспомогательные функции (cn helper)
│   └── config.ts        # Конфигурация сайта (SITE_CONFIG)

└── styles/              # Дополнительные стили
    └── globals.css      # Глобальные CSS переменные

📁 Сборка и деплой:
├── out/                 # Статическая сборка (после npm run build)
│   ├── index.html      # Главная страница
│   ├── about.html      # О компании
│   ├── solutions.html  # Решения
│   ├── cases.html      # Кейсы
│   ├── reviews.html    # Отзывы
│   ├── pricing.html    # Тарифы
│   ├── contacts.html   # Контакты
│   ├── 404.html        # Страница ошибки
│   └── _next/          # JavaScript и CSS файлы

📁 Node.js:
├── node_modules/        # Зависимости
└── .next/              # Next.js кеш и метаданные
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
- **Статический сайт** - API endpoints удалены для статического экспорта
- **Формы** - обрабатываются через `contact-form.tsx` (готов к подключению внешнего API)
- **Альтернативы**: EmailJS, Formspree, Netlify Forms для обработки форм

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
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev      # http://localhost:3000

# Разработка
npm run build    # Статическая сборка в папку out/
npm run start    # Запуск локального сервера
npm run lint     # ESLint проверка (отключен в сборке)
```

### Деплой в продакшн

#### Автоматический деплой (рекомендуется)
```bash
# Создать скрипт deploy.sh
#!/bin/bash
cd /home/rus/projects/SalemSoft
git pull origin main
npm install
npm run build
sudo cp -r out/* /var/www/pro.salemsoft/
sudo chown -R www-data:www-data /var/www/pro.salemsoft
sudo nginx -t && sudo systemctl reload nginx
echo "✅ Деплой завершен: https://pro.salemsoft.kz"
```

#### Ручной деплой (текущий)
```bash
# В папке проекта
npm install                                    # Установка зависимостей
npm run build                                  # Сборка статических файлов

# Деплой на сервер
sudo cp -r out/* /var/www/pro.salemsoft/      # Копирование файлов
sudo chown -R www-data:www-data /var/www/pro.salemsoft  # Права доступа
sudo nginx -t && sudo systemctl reload nginx  # Перезагрузка Nginx
```

#### Альтернативные варианты деплоя
```bash
# Vercel (одним кликом)
vercel

# Netlify (drag & drop папки out/)
npm run build && zip -r build.zip out/*

# GitHub Pages (статический хостинг)
npm run build && gh-pages -d out
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
- **Формы** → CRM система (через contact-form.tsx)
- **Аналитика** → Google Analytics (добавить в layout.tsx)
- **Метрики** → Yandex.Metrica (добавить в layout.tsx)
- **Email** → EmailJS, Formspree, SendGrid
- **Чат-боты** → WhatsApp/Telegram (кнопки готовы в Header/CTA)

## Будущее развитие

### Возможные улучшения
1. **Анимации**: подключить Framer Motion для продвинутых анимаций
2. **CMS**: интеграция с Contentful/Strapi для управления контентом
3. **Analytics**: подключение реальных метрик
4. **AB тестирование**: для оптимизации конверсий
5. **Многоязычность**: i18n поддержка
6. **PWA**: превращение в Progressive Web App

### Готовые к подключению
- **Framer Motion** - зависимость установлена, анимации готовы к активации
- **Форм обработчики** - EmailJS/Formspree интеграция (1-2 строки кода)
- **Изображения** - next/image компоненты готовы (заменить SVG заглушки)
- **Дополнительные страницы** - структура расширяема (добавить в app/)
- **CMS** - готов к подключению Contentful/Strapi

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

## Продакшн информация

### Текущий деплой
- **URL**: https://pro.salemsoft.kz
- **Сервер**: /var/www/pro.salemsoft/
- **Веб-сервер**: Nginx
- **Тип деплоя**: Статические файлы (HTML/CSS/JS)
- **Последний деплой**: 20 августа 2025, 09:08 UTC

### Статус проекта
- ✅ **Разработка**: Завершена
- ✅ **Тестирование**: Пройдено  
- ✅ **Сборка**: Успешная (87.2 kB)
- ✅ **Деплой**: Активен в продакшене
- ✅ **Мониторинг**: Nginx логи доступны

### Производительность (фактическая)
- **Bundle Size**: 87.2 kB (shared JS)
- **Статический контент**: HTML + CSS + минимальный JS
- **Загрузка**: < 1 секунда на быстром соединении
- **SEO**: Полностью индексируемый контент

### Мониторинг и поддержка
```bash
# Логи Nginx
sudo tail -f /var/log/nginx/access.log | grep pro.salemsoft

# Проверка статуса сайта
curl -I https://pro.salemsoft.kz

# Проверка файлов
ls -la /var/www/pro.salemsoft/

# Перезагрузка Nginx (при необходимости)
sudo nginx -t && sudo systemctl reload nginx
```

### Быстрые исправления
```bash
# Откат к предыдущей версии
git checkout HEAD~1
npm run build
sudo cp -r out/* /var/www/pro.salemsoft/

# Очистка кеша сборки
rm -rf .next out node_modules
npm install && npm run build

# Проверка конфигурации Next.js
cat next.config.js  # output: 'export', images: unoptimized
```

---

**Последнее обновление**: 20 августа 2025  
**Версия**: 1.0.0  
**Статус**: 🚀 В продакшене ✅