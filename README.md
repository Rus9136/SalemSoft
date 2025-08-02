# SalemSOFT - Современный Tech-сайт 🌟

Ультрасовременный tech-сайт для компании SalemSOFT с анимированными фонами, glassmorphism эффектами и интерактивными анимациями.

## ✨ Особенности

- 🎨 **Современный tech-дизайн** - Glassmorphism, neon-эффекты, анимированные градиенты
- ⚡ **Scroll анимации** - Fade-in, slide-in эффекты при прокрутке
- 🌌 **Анимированные фоны** - Движущиеся градиенты и tech-сетка
- 📱 **Полностью адаптивный** - Mobile-first responsive дизайн
- 🎯 **SEO-оптимизированный** - Semantic HTML5 и meta теги
- 🚀 **Интерактивность** - Parallax, hover эффекты, particle animations
- 📞 **Интеграция мессенджеров** - WhatsApp и Telegram

## 📋 Структура проекта

```
salemsoft-website/
├── index.html              # Главная страница
├── about.html              # О компании  
├── services.html           # Услуги и продукты
├── clients.html            # Клиенты и партнеры
├── contacts.html           # Контакты
├── css/
│   ├── style.css          # Основные стили
│   ├── responsive.css     # Адаптивные стили
│   └── components.css     # Специальные компоненты
├── js/
│   ├── main.js           # Основная логика
│   └── forms.js          # Работа с формами
├── images/               # Изображения и иконки
├── fonts/                # Шрифты (если нужны)
├── PLAN.md               # План разработки
└── README.md             # Инструкция (этот файл)
```

## 🛠 Технологии

- **HTML5** - Семантическая разметка с accessibility
- **CSS3** - Glassmorphism, backdrop-filter, keyframe анимации
- **JavaScript ES6+** - Intersection Observer, современные веб-API
- **Tech Design** - Inspired by cloud.ru, stripe.com, softline.com
- **Zero Dependencies** - Чистый код без фреймворков

## 🎨 Дизайн система

### Цветовая палитра
- **Primary:** Deep Blue (#0066ff), Dark Gray (#1a1d29)
- **Accents:** Neon Green (#00d4aa), Purple (#6c5ce7), Cyan (#74b9ff)
- **Effects:** Glow shadows, gradient overlays, animated backgrounds

### Анимации
- **Scroll:** Fade-in, slide-in-left, slide-in-right
- **Hover:** Neon glow, transform effects
- **Background:** Moving gradients, tech grid patterns
- **Interactive:** Parallax, particle effects, ripple animations

## 📱 Страницы сайта

### Главная страница (`index.html`)
- Hero-секция со слоганом
- Краткое описание компании
- Блок преимуществ (6 карточек)
- Обзор услуг
- Призыв к действию

### О компании (`about.html`)
- История и миссия
- Статистика и достижения
- Опыт работы с госсектором
- Команда и экспертиза
- Сертификаты и партнерства

### Услуги (`services.html`)
- Подробное описание всех услуг:
  - Внедрение 1С
  - Сопровождение 1С:ИТС
  - Веб-кассы и ОФД
  - Облачные решения
  - BI-аналитика
  - IT-консалтинг

### Клиенты (`clients.html`)
- Категории клиентов
- Логотипы компаний
- Успешные кейсы
- Отзывы клиентов
- Возможности партнерства

### Контакты (`contacts.html`)
- Контактная информация
- Расширенная форма обратной связи
- Режим работы
- Карта местоположения (заглушка)
- Быстрые ссылки на мессенджеры

## 🚀 Развертывание

### Локальное развертывание

1. **Клонируйте или скачайте проект**
   ```bash
   # Если у вас есть Git репозиторий
   git clone [repository-url]
   
   # Или просто скачайте ZIP и распакуйте
   ```

2. **Откройте проект**
   ```bash
   cd salemsoft-website
   ```

3. **Запустите локальный сервер**
   
   **Вариант 1: Python (рекомендуется)**
   ```bash
   # Python 3
   python3 -m http.server 8080
   
   # Открыть в браузере
   open http://localhost:8080
   ```
   
   **Вариант 2: Node.js (если установлен)**
   ```bash
   npx http-server -p 8000
   ```
   
   **Вариант 3: Live Server (VS Code)**
   - Установите расширение "Live Server"
   - Правый клик на `index.html` → "Open with Live Server"

4. **Откройте в браузере**
   ```
   http://localhost:8000
   ```

### Развертывание на хостинге

#### Production сервер (актуальный деплой)

**🌐 Сайт развернут на: https://pro.salemsoft.kz**

Для обновления сайта на production сервере:
```bash
# 1. Подключитесь к серверу по SSH
# 2. Перейдите в директорию проекта
cd /home/rus/projects/SalemSoft

# 3. Внесите изменения в файлы проекта

# 4. Скопируйте обновленные файлы на production
sudo cp -r * /var/www/pro.salemsoft/
sudo chown -R www-data:www-data /var/www/pro.salemsoft

# 5. Проверьте изменения
curl -I https://pro.salemsoft.kz
```

**Подробная документация деплоя:** `/home/rus/infrastructure/DEPLOYMENT_PRO_SALEMSOFT.md`

#### Статический хостинг (альтернативные варианты)

**GitHub Pages:**
1. Загрузите код в GitHub репозиторий
2. Перейдите в Settings → Pages
3. Выберите Source: Deploy from branch → main
4. Сайт будет доступен по адресу: `https://username.github.io/repository-name`

**Netlify:**
1. Зарегистрируйтесь на [netlify.com](https://netlify.com)
2. Перетащите папку проекта в Netlify Dashboard
3. Сайт автоматически развернется с уникальным URL

**Vercel:**
1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Подключите GitHub репозиторий или загрузите файлы
3. Автоматическое развертывание

#### Обычный веб-хостинг

1. **Загрузите файлы** через FTP/SFTP в корневую папку сайта
2. **Убедитесь** что `index.html` находится в корне
3. **Проверьте права доступа** на файлы (обычно 644 для файлов, 755 для папок)

## ⚙️ Настройка

### Контактная информация

Для изменения контактных данных отредактируйте:

**В HTML файлах:**
- Телефон: `+7 708 975 2414`
- Email: `info@salemsoft.kz`
- WhatsApp: ссылки `https://wa.me/77089752414`
- Telegram: ссылки `https://t.me/+77089752414`

**В JavaScript:**
```javascript
// js/main.js - строки 13-17
config: {
    phoneNumber: '+77089752414',
    whatsappNumber: '77089752414',
    telegramUsername: '+77089752414'
}
```

### Настройка форм обратной связи

#### Простая настройка (текущая)
Формы настроены на демо-режим с сохранением в localStorage.

#### Продвинутая настройка

**1. Email отправка через API:**
```javascript
// js/forms.js - строка 19
config: {
    emailAPI: 'https://your-email-service.com/api/send'
}
```

**2. Telegram уведомления:**
```javascript
// js/forms.js - строки 20-21
config: {
    telegramBotToken: 'YOUR_BOT_TOKEN',
    telegramChatId: 'YOUR_CHAT_ID'
}
```

**3. Популярные email сервисы:**
- [EmailJS](https://emailjs.com) - бесплатный
- [Formspree](https://formspree.io) - простой в настройке
- [Netlify Forms](https://netlify.com/products/forms) - если хостинг на Netlify

### Google Analytics

1. **Получите ID отслеживания** в Google Analytics
2. **Замените в HTML файлах** (перед закрывающим `</head>`)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Изменение дизайна

**Tech цвета (css/style.css):**
```css
/* Modern Tech Palette */
--primary-color: #0066ff;           /* Deep Blue */
--secondary-color: #1a1d29;         /* Dark Gray */
--accent-color: #00d4aa;            /* Neon Green */
--accent-purple: #6c5ce7;           /* Purple */
--accent-cyan: #74b9ff;             /* Cyan */
--neon-blue: #74b9ff;               /* Neon Blue */
--background-primary: #0f1117;       /* Dark Background */
```

**Typography:**
```css
/* Modern Inter Font */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Gradient text effects */
background: linear-gradient(135deg, #0066ff 0%, #6c5ce7 50%, #00d4aa 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## 📝 Редактирование контента

### Изменение текстов

**Главная страница:**
- Слоган: строка 45 в `index.html`
- Описание: строки 46-50
- Преимущества: строки 75-150
- Услуги: строки 175-250

**О компании:**
- Редактируйте соответствующие секции в `about.html`

**Услуги:**
- Подробные описания в `services.html`, секции `service-detail`

### Добавление новых услуг

1. **Скопируйте блок** `service-card` в `index.html`
2. **Измените** иконку, заголовок и описание
3. **Добавьте подробное описание** в `services.html`
4. **Обновите навигацию** если нужно

### Добавление клиентов

1. **Логотипы:** добавьте в секцию `logos-grid` в `clients.html`
2. **Кейсы:** скопируйте блок `case-card`
3. **Отзывы:** добавьте в `testimonials-grid`

## 🔧 Кастомизация

### Добавление новых страниц

1. **Создайте HTML файл** по примеру существующих
2. **Скопируйте структуру** с header и footer
3. **Обновите навигацию** во всех файлах
4. **Добавьте стили** если нужны специальные

### Интеграция с CMS

Если в будущем потребуется CMS:
- Структура подходит для WordPress, Drupal
- JSON файлы можно использовать как источник данных
- API endpoints легко интегрируются

## 🐛 Решение проблем

### Формы не работают
1. Проверьте консоль браузера на ошибки
2. Убедитесь что JavaScript файлы загружаются
3. Проверьте настройки API в `js/forms.js`

### Сайт не адаптивный
1. Убедитесь что подключен `css/responsive.css`
2. Проверьте viewport meta tag в `<head>`

### Медленная загрузка
1. Оптимизируйте изображения
2. Проверьте размеры файлов CSS/JS
3. Используйте CDN для статических файлов

## 📊 SEO оптимизация

### Уже реализовано
- ✅ Семантическая HTML разметка
- ✅ Meta теги для всех страниц
- ✅ Правильная структура заголовков (H1-H6)
- ✅ Alt атрибуты для изображений
- ✅ Быстрая загрузка
- ✅ Адаптивная верстка (Mobile-First)

### Дополнительные настройки

**1. Robots.txt** (поместите в корень сайта):
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

**2. Sitemap.xml** (создайте автоматически или вручную)

**3. Google Search Console:**
- Добавьте сайт в GSC
- Загрузите sitemap
- Настройте отслеживание

## 🔒 Безопасность

### Production сервер (pro.salemsoft.kz)
- ✅ **HTTPS включен** - SSL сертификат от Let's Encrypt
- ✅ **Автоматическое обновление SSL** - через certbot.timer
- ✅ **Заголовки безопасности настроены:**
  - HSTS (Strict-Transport-Security)
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection
  - Referrer-Policy
  - Permissions-Policy
- ✅ **Срок действия SSL:** до 30 октября 2025

### Рекомендации
- Регулярно обновляйте хостинг
- Используйте HTTPS сертификат
- Настройте защиту от спама для форм
- Регулярно делайте резервные копии

## 📞 Поддержка

### Техническая поддержка
- Документация в этом файле
- Комментарии в коде
- Структурированный CSS/JS

### Обновления
- Следите за безопасностью браузеров
- Тестируйте на новых устройствах
- Обновляйте контент регулярно

---

**Разработано для SalemSOFT**  
Современный корпоративный сайт с адаптивным дизайном и профессиональным функционалом.

**🌐 Production:** https://pro.salemsoft.kz

*Дата создания: 2024*  
*Дата деплоя: 1 августа 2025*  
*Версия: 1.1*