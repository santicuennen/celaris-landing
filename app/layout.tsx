import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Celaris Tech - Enterprise DevOps & Cloud Solutions',
  description: 'Transforming infrastructure, securing your future. Specializing in AWS infrastructure, DevOps automation, security compliance, and Amazon Connect contact center solutions.',
  keywords: 'DevOps, Cloud Infrastructure, AWS, Security, Compliance, Amazon Connect, Enterprise Solutions',
  authors: [{ name: 'Celaris Tech' }],
  robots: 'index, follow',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Celaris Tech - Enterprise DevOps & Cloud Solutions',
    description: 'Transforming infrastructure, securing your future',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celaris Tech - Enterprise DevOps & Cloud Solutions',
    description: 'Transforming infrastructure, securing your future',
    images: ['/logo.png'],
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}