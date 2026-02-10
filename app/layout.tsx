import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://celaris.tech'),
  title: {
    default: 'Celaris Tech - Enterprise DevOps & Cloud Solutions',
    template: '%s | Celaris Tech'
  },
  description: 'Transforming infrastructure, securing your future. Specializing in AWS infrastructure, DevOps automation, security compliance, and Amazon Connect contact center solutions.',
  keywords: ['DevOps Solutions', 'Cloud Infrastructure', 'AWS Consulting', 'Security Compliance', 'Amazon Connect', 'Enterprise Solutions', 'CI/CD Pipeline', 'Infrastructure as Code', 'Cloud Migration', 'DevOps Automation'],
  authors: [{ name: 'Celaris Tech', url: 'https://celaris.tech' }],
  creator: 'Celaris Tech',
  publisher: 'Celaris Tech',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: 'https://celaris.tech',
    siteName: 'Celaris Tech',
    title: 'Celaris Tech - Enterprise DevOps & Cloud Solutions',
    description: 'Transforming infrastructure, securing your future. Expert AWS consulting, DevOps automation, and cloud security solutions.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Celaris Tech - Enterprise Cloud Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celaris Tech - Enterprise DevOps & Cloud Solutions',
    description: 'Transforming infrastructure, securing your future',
    images: ['/logo.png'],
    creator: '@celaristech',
  },
  alternates: {
    canonical: 'https://celaris.tech',
    languages: {
      'en': 'https://celaris.tech/en',
      'es': 'https://celaris.tech/es',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Celaris Tech',
              url: 'https://celaris.tech',
              logo: 'https://celaris.tech/logo.png',
              description: 'Enterprise DevOps & Cloud Solutions specializing in AWS infrastructure, DevOps automation, security compliance, and Amazon Connect contact center solutions.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                email: 's.cuennen@outlook.com',
                availableLanguage: ['English', 'Spanish']
              },
              sameAs: [
                'https://github.com/BlueCoreTechnologies'
              ],
              areaServed: 'Worldwide',
              serviceType: [
                'DevOps Solutions',
                'Cloud Infrastructure',
                'Security & Compliance',
                'Amazon Connect Contact Centers'
              ],
              offers: {
                '@type': 'AggregateOffer',
                offerCount: 4,
                offers: [
                  {
                    '@type': 'Offer',
                    name: 'DevOps Solutions',
                    description: 'CI/CD Pipeline Automation, Infrastructure as Code, Container Orchestration'
                  },
                  {
                    '@type': 'Offer',
                    name: 'Cloud Infrastructure',
                    description: 'AWS Architecture Design, Migration Planning, Cost Optimization'
                  },
                  {
                    '@type': 'Offer',
                    name: 'Security & Compliance',
                    description: 'Security Audits, Compliance Assessment, Vulnerability Scanning'
                  },
                  {
                    '@type': 'Offer',
                    name: 'Amazon Connect Contact Centers',
                    description: 'Contact Center Setup, IVR Configuration, Analytics & Reporting'
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}