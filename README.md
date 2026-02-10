# Celaris Tech - Enterprise DevOps & Cloud Solutions

A modern, responsive website built with Next.js 15, React 19, and Tailwind CSS, featuring internationalization (English/Spanish), dark/light theme switching, and EmailJS integration.

## 🚀 Features

- **Modern Stack**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Internationalization**: English/Spanish with next-intl
- **Theme System**: Dark/Light mode with system preference detection
- **Contact Form**: EmailJS integration with validation
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized images, lazy loading, code splitting
- **Accessibility**: Semantic HTML, ARIA labels, focus management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Internationalization**: next-intl
- **Email**: @emailjs/browser
- **Icons**: lucide-react
- **Forms**: react-hook-form
- **Animations**: tailwindcss-animate
- **TypeScript**: Full type safety

## 🎨 Design System

### Color Palette
- **Primary**: `#1e5a96` (Professional Dark Blue)
- **Secondary**: `#00bcd4` (Cyan/Teal)
- **Neutral 1**: `#f5f7fa` (Light Gray)
- **Neutral 2**: `#1a1f2e` (Dark Gray)
- **Neutral 3**: `#64748b` (Gray)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 700 weight
- **Body**: 400-500 weight

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd celaris-tech
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Configuration

The contact form uses EmailJS for sending emails. The configuration is already set up in `constants/company.ts`:

```typescript
emailjs: {
  serviceId: "service_f0k0p22",
  templateId: "template_km80ez6", 
  publicKey: "zksgSZ2gKtHhPLBtt"
}
```

### EmailJS Template Variables
Make sure your EmailJS template includes these variables:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{company}}` - User's company
- `{{service}}` - Selected service
- `{{message}}` - User's message
- `{{to_name}}` - Recipient name

## 🌐 Internationalization

The site supports English and Spanish:

- **English**: `/en` (default)
- **Spanish**: `/es`

### Adding New Translations

1. Add keys to `locales/en.json` and `locales/es.json`
2. Use in components with `useTranslations()`:
   ```tsx
   const t = useTranslations();
   return <h1>{t('hero.title')}</h1>;
   ```

## 🎨 Theme System

The site supports dark and light themes:

- **Auto-detection**: Respects system preference
- **Manual toggle**: Header theme button
- **Persistence**: Saves preference in localStorage

### Using Theme in Components
```tsx
import { useTheme } from '@/contexts/ThemeContext';

const { theme, toggleTheme } = useTheme();
```

## 📱 Responsive Design

Breakpoints (Tailwind CSS):
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

## 🏗️ Project Structure

```
re-build/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Header.tsx         # Navigation
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services grid
│   ├── Values.tsx         # Value propositions
│   ├── ContactForm.tsx    # Contact form
│   └── Footer.tsx         # Footer
├── constants/             # App constants
│   └── company.ts         # Company data
├── contexts/              # React contexts
│   └── ThemeContext.tsx   # Theme provider
├── locales/               # Translation files
│   ├── en.json           # English
│   └── es.json           # Spanish
└── public/               # Static assets
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload `out/` folder to Netlify

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized with code splitting
- **Images**: Optimized with Next.js Image component

## 🔧 Customization

### Adding New Services
1. Update `constants/company.ts`
2. Add translations to locale files
3. Services will appear automatically

### Changing Colors
1. Update CSS variables in `app/globals.css`
2. Update Tailwind config in `tailwind.config.js`

### Adding New Sections
1. Create component in `components/`
2. Add to main page in `app/[locale]/page.tsx`
3. Add translations if needed

## 📝 License

© 2025 Celaris Tech. All rights reserved.

## 🤝 Support

For support, email s.cuennen@outlook.com or create an issue in the repository.