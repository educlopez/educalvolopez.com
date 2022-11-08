import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Estás suscrito - Eduardo Calvo</title>
        <meta
          name="description"
          content="Gracias por suscribirte a mi boletín."
        />
      </Head>
      <SimpleLayout
        title="Gracias por suscribirte a mi boletín."
        intro="Te enviaré un correo electrónico cada vez que publique una nueva publicación en el blog, lance un nuevo proyecto o tenga algo interesante que compartir que creo que te gustaría escuchar. Puede darse de baja en cualquier momento, sin resentimientos."
      />
    </>
  )
}
