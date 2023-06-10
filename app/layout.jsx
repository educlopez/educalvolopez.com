import './globals.css'
import 'focus-visible'
import { Inter } from 'next/font/google'

import { Analytics } from '@/components/Analytics'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Edu Calvo - Diseñador Web & Frontend',
    template: '%s | Edu Calvo',
  },
  description: 'Diseñador web y Frontend con sede en Madrid',
  openGraph: {
    title: 'Edu Calvo',
    description: 'Diseñador web y Frontend con sede en Madrid',
    url: 'https://educalvolopez.com',
    siteName: 'Edu Calvo',
    images: [
      {
        url: 'https://educalvolopez.com/og.jpg',
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
        className={`flex flex-col h-full antialiased bg-top bg-no-repeat bg-zinc-50 bg-lights-sun dark:bg-zinc-900 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
