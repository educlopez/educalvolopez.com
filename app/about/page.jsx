import Balancer from 'react-wrap-balancer'

import { Phototab } from '@/components/sections/PhotoTab'
import { Reviews } from '@/components/sections/Reviews'
import { Container } from '@/components/ui/Container'
import { SocialText } from '@/components/ui/SocialLinks'

export const metadata = {
  title: 'About',
  description: 'Diseñador web y Frontend con sede en Madrid',
  keywords: [
    'Diseñador web, frontend, maquetador, creatividad, habilidades de comunicación visual, resolución de problemas, interfaces de usuario, diseños responsive, clientes , empresas',
  ],
}

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
            <h1 className="title-primary">
              <Balancer>
                Soy Edu Calvo, vivo en Madrid en donde diseño y creo webs.
              </Balancer>
            </h1>
            <div className="mt-6 text-base space-y-7 body-secondary">
              <p>
                Soy <b> diseñador web y frontend</b> desde mi primer año de
                estudios de diseño gráfico en la universidad UDIT (ESNE). He
                trabajado en muchos tipos de proyectos diferentes, como
                <b> ecommerce, paneles de usuario y páginas de aterrizaje</b>.
              </p>
              <p>
                Me encanta lo que hago porque me permite utilizar mi creatividad
                y mis habilidades en la comunicación visual, así como en la
                <b> resolución de problemas</b>.
              </p>
              <p>
                Tengo un gran conocimiento de lo que se necesita para crear
                grandes interfaces de usuario y diseños que funcionen bien en
                cualquier dispositivo. He trabajado con clientes de todo el
                mundo en proyectos que van desde pequeñas empresas hasta grandes
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
