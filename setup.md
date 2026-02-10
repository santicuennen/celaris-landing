# Celaris Tech - Setup Instructions

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd re-build
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: http://localhost:3000

## 🔧 Configuration

### EmailJS Setup (Already Configured)
The contact form is pre-configured with these credentials:
- **Service ID**: service_f0k0p22
- **Template ID**: template_km80ez6
- **Public Key**: zksgSZ2gKtHhPLBtt

### Theme System
- Automatic dark/light mode detection
- Manual toggle in header
- Persists user preference

### Languages
- English (default): `/en`
- Spanish: `/es`
- Auto-detection based on browser language

## 📱 Features Included

✅ **Responsive Design** - Mobile-first approach
✅ **Dark/Light Theme** - System preference + manual toggle
✅ **Bilingual** - English/Spanish with next-intl
✅ **Contact Form** - EmailJS integration with validation
✅ **Modern Stack** - Next.js 15 + React 19 + TypeScript
✅ **Performance** - Optimized images, lazy loading
✅ **SEO** - Meta tags, sitemap, structured data
✅ **Accessibility** - ARIA labels, focus management

## 🎨 Design System

### Colors
- Primary: #1e5a96 (Professional Blue)
- Secondary: #00bcd4 (Cyan)
- Backgrounds: #f5f7fa (light) / #1a1f2e (dark)

### Typography
- Font: Inter (Google Fonts)
- Headings: 700 weight
- Body: 400-500 weight

## 📦 Build & Deploy

### Production Build
```bash
npm run build
npm run start
```

### Deploy to Vercel
1. Push to GitHub
2. Connect to Vercel
3. Auto-deploy on push

### Deploy to Netlify
1. Run `npm run build`
2. Upload `out/` folder

## 🔄 Customization

### Add New Service
1. Edit `constants/company.ts`
2. Add translations to `locales/*.json`
3. Service appears automatically

### Change Colors
1. Update CSS variables in `app/globals.css`
2. Update `tailwind.config.js`

### Add New Section
1. Create component in `components/`
2. Add to `app/[locale]/page.tsx`
3. Add translations if needed

## 📧 Contact Form

The form sends emails with these fields:
- Name (required)
- Email (required)
- Company (optional)
- Service of Interest (dropdown)
- Message (optional)

Form validation includes:
- Required field checking
- Email format validation
- Real-time error messages
- Loading states
- Success/error feedback

## 🌐 Internationalization

### Current Languages
- English (`en`) - Default
- Spanish (`es`)

### Adding New Language
1. Create `locales/[lang].json`
2. Add to `middleware.ts` locales array
3. Update `i18n.ts` configuration

## 🎯 Performance

- Lighthouse Score: 95+
- Core Web Vitals optimized
- Code splitting enabled
- Image optimization
- Lazy loading

## 📞 Support

For questions or issues:
- Email: s.cuennen@outlook.com
- Check README.md for detailed documentation