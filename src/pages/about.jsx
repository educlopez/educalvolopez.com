import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { Reviews } from '@/components/Reviews';

import { Container } from '@/components/Container';
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon
} from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.png';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className="flex text-sm font-medium transition group text-zinc-600 dark:text-zinc-400 "
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-700 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        <span className="ml-4 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
          {children}
        </span>
      </Link>
    </li>
  );
}


export default function About() {
  return (
    <>
      <Head>
        <title>About - Edu Calvo</title>
        <meta
          name="description"
          content="Soy Edu Calvo, vivo en Madrid en donde diseño y creo webs."
        />
        <meta name="keywords" content="Diseñador web, maquetador, creatividad, habilidades de comunicación visual, resolución de problemas, interfaces de usuario, diseños responsive, clientes globales, empresas pequeñas y grandes corporaciones" />
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
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Soy Edu Calvo, vivo en Madrid en donde diseño y creo webs.
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
                Soy diseñador web y maquetador desde mi primer año de estudios
                de diseño gráfico en la universidad ESNE. En los últimos nueve
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
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/educlopez93"
                icon={TwitterIcon}
              >
                Seguir en Twitter
              </SocialLink>
              <SocialLink
                href="https://instagram.com/educlopez93"
                icon={InstagramIcon}
                className="mt-4"
              >
                Seguir en Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/educlopez"
                icon={GitHubIcon}
                className="mt-4"
              >
                Seguir en GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/educlopez"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Seguir en LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:educalvolopez@gmail.com"
                icon={EnvelopeIcon}
                className="pt-8 mt-8 border-t border-zinc-900/10 dark:border-white/10"
              >
                educalvolopez@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
        <Reviews />
      </Container>
    </>
  );
}
