import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Logora.design - Professional Design Tools for Creative Minds',
  description: 'Create stunning visuals, build meaningful brands, and leave a lasting impression with Logora.design. Professional design tools trusted by 50k+ designers worldwide.',
  keywords: 'design tools, graphic design, branding, visual design, creative software, design platform, professional design, digital design',
  authors: [{ name: 'Logora.design Team' }],
  creator: 'Logora.design',
  publisher: 'Logora.design',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://logora.design'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://logora.design',
    title: 'Logora.design - Professional Design Tools for Creative Minds',
    description: 'Create stunning visuals, build meaningful brands, and leave a lasting impression with Logora.design. Professional design tools trusted by 50k+ designers worldwide.',
    siteName: 'Logora.design',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Logora.design - Professional Design Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logora.design - Professional Design Tools for Creative Minds',
    description: 'Create stunning visuals, build meaningful brands, and leave a lasting impression with Logora.design. Professional design tools trusted by 50k+ designers worldwide.',
    images: ['/og-image.jpg'],
    creator: '@logoradesign',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#ea580c',
    'color-scheme': 'light',
    'viewport': 'width=device-width, initial-scale=1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}