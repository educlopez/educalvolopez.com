import Balancer from 'react-wrap-balancer'

import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-full">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          <Balancer>{title}</Balancer>
        </h1>
        <p className="mt-6 text-base text-neutral-700 dark:text-zinc-400">
          <Balancer>{intro}</Balancer>
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
