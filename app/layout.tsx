import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://celaristech.com'),
  title: {
    default: 'Celaris Tech - AWS Cloud, Data & DevOps Solutions',
    template: '%s | Celaris Tech'
  },
  description: 'AWS cloud solutions: migrations, data warehousing, DevOps automation, and Amazon Connect contact centers. We help businesses build and scale on AWS.',
  keywords: ['AWS Consulting', 'Cloud Migration', 'Data Warehouse', 'AWS Redshift', 'DevOps', 'Amazon Connect', 'ETL Pipelines', 'Infrastructure as Code', 'Terraform', 'AWS Architecture', 'Cloud Solutions', 'Data Analytics AWS'],
  authors: [{ name: 'Celaris Tech', url: 'https://celaristech.com' }],
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
    icon: '/dark-mode-logo.png',
    shortcut: '/dark-mode-logo.png',
    apple: '/dark-mode-logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: 'https://celaristech.com',
    siteName: 'Celaris Tech',
    title: 'Celaris Tech - AWS Cloud, Data & DevOps Solutions',
    description: 'AWS cloud solutions: migrations, data warehousing, DevOps automation, and Amazon Connect contact centers.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Celaris Tech - AWS Cloud Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celaris Tech - AWS Cloud, Data & DevOps Solutions',
    description: 'AWS migrations, data warehousing, DevOps, and contact centers',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://celaristech.com',
    languages: {
      'en': 'https://celaristech.com/en',
      'es': 'https://celaristech.com/es',
    },
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
