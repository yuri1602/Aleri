# 📋 Quick Start Guide - Aleri Group Website

## 🚀 Публикуване на Vercel (ПРЕПОРЪЧАНО)

### Стъпка 1: Инсталирай Vercel CLI
```bash
npm install -g vercel
```

### Стъпка 2: Влез в Vercel
```bash
vercel login
```

### Стъпка 3: Deploy сайта
```bash
cd /Users/yuri.metodiev/Documents/Aleri-Group/Aleri
vercel
```

Следвай указанията и сайтът ще бъде live в минути! 🎉

---

## 📝 Что Трябва Да Промениш

### 1. **Лого** (ВАЖНО!)
- Замени `/public/placeholder-logo1.png` със твоя лого
- Препоръчан размер: 200x200px или по-голямо

### 2. **Контактна Информация**
- Редактирай в `components/contact-form.tsx`:
  - `contact@alerigroup.com` → твоя email
  - `+1 (555) 123-4567` → твой телефон
  - `Sofia, Bulgaria` → твоя локация

### 3. **Съдържание на Сайта**
- Редактирай в `app/page.tsx`:
  - Главното съобщение (Hero текст)
  - Описание на услуги
  - Информация за компанията (About секция)

### 4. **Имейл Система** (ЗАДЪЛЖИТЕЛНО)
За контактната форма да работи, трябва да:

**Опция A: Resend (препоръчано)**
```bash
npm install resend
```

Редактирай `/app/api/send-email/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// В POST функцията:
const result = await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'contact@alerigroup.com',
  subject: data.subject,
  html: `<p>From: ${data.name} (${data.email})</p><p>${data.message}</p>`
});
```

Добавь в `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

**Опция B: SendGrid**
```bash
npm install @sendgrid/mail
```

**Опция C: Nodemailer** (за личен SMTP сървър)
```bash
npm install nodemailer
```

---

## 🌐 Публикуване на Други Платформи

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Railway
1. Регистрирай се на railway.app
2. Свържи GitHub repo
3. Deploy автоматично

### DigitalOcean
1. Създай ново приложение
2. Свържи Git repo
3. Настрой environment variables
4. Deploy

---

## ⚙️ Environment Variables

Създай файл `.env.local` в root папката:
```env
# За Resend
RESEND_API_KEY=your_api_key_here

# За SendGrid
SENDGRID_API_KEY=your_api_key_here

# За Nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

---

## 🔍 Проверка Преди Публикуване

```bash
# 1. Тестирай локално
npm run dev

# 2. Проверка за errors
npm run lint

# 3. Production build
npm run build

# 4. Тестирай production версия
npm run start
```

---

## 📱 Responsive Design Проверка

Отвори сайта в браузъра на:
- ✅ Desktop (1920x1080)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

Всичко трябва да изглежда добре!

---

## 🎨 CSS Customization

Всички цветове са в Tailwind классове:
- `from-blue-600` → Син цвят
- `from-purple-600` → Пурпурен цвят

За промяна на цветова схема, редактирай в компонентите.

---

## 🔐 Security Checklist

- [ ] Добави rate limiting за контактната форма
- [ ] Включи HTTPS (Vercel го дава по default)
- [ ] Защита от SPAM в имейл форма
- [ ] CORS headers за API
- [ ] Валидация на input в backend

---

## 📊 Analytics (Опционално)

### Google Analytics
```bash
npm install next-gtag
```

Добавь в `layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Plausible (Private Analytics)
Препоръчано за приватност на посетителите.

---

## 🐛 Обичайни Проблеми & Решения

### Проблем: "Module not found"
```bash
npm install
# или
rm -rf node_modules package-lock.json && npm install
```

### Проблем: Лого не се вижда
- Провери дали файлът существува в `/public/`
- Правилното име в `site-header.tsx`

### Проблем: Email не работи
- Провери API ключ в `.env.local`
- Тестирай в dev mode преди production

### Проблем: Dark mode не работи
- Очисти cookies в браузъра
-硬refresh (Ctrl+F5)

---

## 📞 Поддържка

За технически въпроси:
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
- Vercel: https://vercel.com/docs

---

## ✨ Финални Съвети

1. **Тестирай всичко локално** преди публикуване
2. **Резервна копия** от работещия код (Git)
3. **Мониторинг** на грешки в production
4. **Редовни актуализации** на зависимости
5. **Backup на базата данни** ако има

---

**Готово! Твоят сайт е на път да devient live! 🎉**

Въпроси? Вижте IMPROVEMENTS.md за още детайли.
