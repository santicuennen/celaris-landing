import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });
const locales = ['en', 'es'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Celaris Tech',
              url: 'https://celaristech.com',
              logo: 'https://celaristech.com/logo.png',
              description: 'AWS cloud solutions: migrations, data warehousing, DevOps automation, and Amazon Connect contact centers.',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                availableLanguage: ['English', 'Spanish']
              },
              areaServed: 'Worldwide',
              serviceType: [
                'AWS Cloud Migration',
                'Data Warehouse Solutions',
                'DevOps Automation',
                'Amazon Connect Contact Centers'
              ],
              knowsAbout: [
                'Amazon Web Services',
                'AWS Redshift',
                'Terraform',
                'Docker',
                'CI/CD',
                'Data Engineering'
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
