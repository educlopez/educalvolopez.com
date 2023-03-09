import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-full">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>{title}</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>{intro}</Balancer>
        </motion.p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
