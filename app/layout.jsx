import './globals.css'
import 'focus-visible'
import { Inter } from 'next/font/google'

import { Analytics } from '@/components/Analytics'
import { ThemeProvider } from '@/components/ThemeProvider'
import { FloatNav } from '@/components/nav/FloatNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://educalvolopez-com.vercel.app'),
  title: {
    default: 'Edu Calvo - Diseñador Web & Frontend',
    template: '%s | Edu Calvo',
  },
  description: 'Diseñador web y Frontend con sede en Madrid',
  keywords: [
    'diseñador web, frontend, maquetador, Madrid, Cinetic Digital, Freelance, portfolio, edu, calvo',
  ],
  openGraph: {
    title: 'Edu Calvo',
    description: 'Diseñador web y Frontend con sede en Madrid',
    url: 'https://educalvolopez-com.vercel.app',
    siteName: 'Edu Calvo',
    images: [
      {
        url: 'https://educalvolopez-com.vercel.app/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'es-ES',
    type: 'website',
  },
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
  twitter: {
    title: 'Edu Calvo',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`flex flex-col h-full antialiased bg-top bg-no-repeat bg-neutral-50 bg-lights-sun  dark:bg-neutral-900 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative mb-16 sm:mb-32">
            <main>{children}</main>
            <FloatNav />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
