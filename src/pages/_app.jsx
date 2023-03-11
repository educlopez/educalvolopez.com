import { useEffect, useRef } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { motion } from 'framer-motion'
import { ThemeProvider } from 'next-themes'

import CommandMenu from '@/components/CommandBar'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <ThemeProvider attribute="class">
        <div className="relative">
          <Header />
          <main>
            <CommandMenu />
            <motion.div
              initial="hidden"
              whileInView="show"
              animate="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <Component previousPathname={previousPathname} {...pageProps} />
            </motion.div>
            <Analytics />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}
