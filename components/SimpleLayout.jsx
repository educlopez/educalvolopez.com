import Balancer from 'react-wrap-balancer'

import { Container } from '@/components/ui/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-full">
        <h1 className="title-primary">
          <Balancer>{title}</Balancer>
        </h1>
        <p className="mt-6 text-base body-secondary">
          <Balancer>{intro}</Balancer>
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
