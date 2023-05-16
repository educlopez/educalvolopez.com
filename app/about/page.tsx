import Balancer from 'react-wrap-balancer'

import { Container } from '@/components/Container'
import { Phototab } from '@/components/PhotoTab'
import { Reviews } from '@/components/Reviews'
import { SocialText } from '@/components/SocialLinks'

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Phototab />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              <Balancer>
                Soy Edu Calvo, vivo en Madrid en donde diseño y creo webs.
              </Balancer>
            </h1>
            <div className="mt-6 text-base space-y-7 text-neutral-700 dark:text-zinc-400">
              <p>
                Soy diseñador web y frontend desde mi primer año de estudios de
                diseño gráfico en la universidad ESNE. En los últimos nueve
                años, he trabajado en muchos tipos de proyectos diferentes, como
                ecommerce, paneles de usuario y páginas de aterrizaje.
              </p>
              <p>
                Me encanta lo que hago porque me permite utilizar mi creatividad
                y mis habilidades en la comunicación visual, así como en la
                resolución de problemas. Ha sido un viaje increíble que me ha
                llevado a donde estoy hoy.
              </p>
              <p>
                Tengo un gran conocimiento de lo que se necesita para crear
                grandes interfaces de usuario y diseños que funcionen bien en
                cualquier dispositivo, desde ordenadores de sobremesa hasta
                teléfonos móviles. He trabajado con clientes de todo el mundo en
                proyectos que van desde pequeñas empresas hasta grandes
                corporaciones.
              </p>
            </div>
          </div>
          <SocialText />
        </div>
        <Reviews />
      </Container>
    </>
  )
}
