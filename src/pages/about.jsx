import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Reviews } from '@/components/Reviews'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-slate-800 hover:text-amber-500 dark:text-slate-200 dark:hover:text-amber-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-amber-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Eduardo Calvo</title>
        <meta
          name="description"
          content="Soy Eduardo Calvo, vivo en Madrid en donde diseño y creo webs."
        />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="About - Eduardo Calvo"/>
        <meta property="og:description" content="Soy Eduardo Calvo, vivo en Madrid en donde diseño y creo webs."/>
        <meta property="og:image" content="https://educalvolopez.com/api/og?title=About - Eduardo Calvo"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="educalvolopez.com"/>
        <meta property="twitter:url" content="https://educalvolopez.com/about"/>
        <meta name="twitter:title" content="About - Eduardo Calvo"/>
        <meta name="twitter:description" content="Soy Eduardo Calvo, vivo en Madrid en donde diseño y creo webs."/>
        <meta name="twitter:image" content="https://educalvolopez.com/api/og?title=About - Eduardo Calvo"/>
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
              Soy Eduardo Calvo, vivo en Madrid en donde diseño y creo webs.
            </h1>
            <div className="mt-6 text-base space-y-7 text-slate-700 dark:text-slate-400">
              <p>
              Soy diseñador web y maquetador desde mi primer año de estudios de diseño gráfico en la universidad ESNE. En los últimos nueve años, he trabajado en muchos tipos de proyectos diferentes, como ecommerce, paneles de usuario y páginas de aterrizaje.
              </p>
              <p>
              Me encanta lo que hago porque me permite utilizar mi creatividad y mis habilidades en la comunicación visual, así como en la resolución de problemas. Ha sido un viaje increíble que me ha llevado a donde estoy hoy.
              </p>
              <p>
              Tengo un gran conocimiento de lo que se necesita para crear grandes interfaces de usuario y diseños que funcionen bien en cualquier dispositivo, desde ordenadores de sobremesa hasta teléfonos móviles. He trabajado con clientes de todo el mundo en proyectos que van desde pequeñas empresas hasta grandes corporaciones.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/educlopez93" icon={TwitterIcon}>
                Seguir en Twitter
              </SocialLink>
              <SocialLink href="https://instagram.com/educlopez93" icon={InstagramIcon} className="mt-4">
                Seguir en Instagram
              </SocialLink>
              <SocialLink href="https://github.com/educlopez" icon={GitHubIcon} className="mt-4">
                Seguir en GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/educlopez" icon={LinkedInIcon} className="mt-4">
                Seguir en LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:educalvolopez@gmail.com"
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100/30 dark:border-zinc-700/40"
              >
                educalvolopez@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
        <Reviews/>
      </Container>
    </>
  )
}
