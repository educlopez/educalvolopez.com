import Head from 'next/head'
import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import { Container } from '@/components/Container'
import { Phototab } from '@/components/PhotoTab'
import { Reviews } from '@/components/Reviews'
import { SocialText } from '@/components/SocialLinks'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Edu Calvo</title>
        <meta
          name="description"
          content="Soy Edu Calvo, vivo en Madrid en donde diseño y creo webs."
        />
        <meta
          name="keywords"
          content="Diseñador web,frontend, maquetador, creatividad, habilidades de comunicación visual, resolución de problemas, interfaces de usuario, diseños responsive, clientes globales, empresas pequeñas y grandes corporaciones"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About - Edu Calvo" />
        <meta
          property="og:description"
          content="Soy Edu Calvo, vivo en Madrid en donde diseño y creo webs."
        />
        <meta
          property="og:image"
          content="https://educalvolopez.com/api/og?title=Sobre Edu Calvo"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="educalvolopez.com" />
        <meta
          property="twitter:url"
          content="https://educalvolopez.com/about"
        />
        <meta name="twitter:title" content="About - Edu Calvo" />
        <meta
          name="twitter:description"
          content="Soy Edu Calvo, vivo en Madrid en donde diseño y creo webs."
        />
        <meta
          name="twitter:image"
          content="https://educalvolopez.com/api/og?title=Sobre Edu Calvo"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <motion.div
            className="lg:pl-20"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Phototab />
            </div>
          </motion.div>
          <div className="lg:order-first lg:row-span-2">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              <Balancer>
                {' '}
                Soy Edu Calvo, vivo en Madrid en donde diseño y creo webs.
              </Balancer>
            </motion.h1>
            <motion.div
              className="mt-6 text-base space-y-7 text-neutral-700 dark:text-zinc-400"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
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
            </motion.div>
          </div>
          <SocialText />
        </div>
        <Reviews />
      </Container>
    </>
  )
}
