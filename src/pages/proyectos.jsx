import Image from 'next/image'
import Head from 'next/head'
import Clients from '@/components/Clients'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoTantra from '@/images/logos/tantra.svg'
import logoJane from '@/images/logos/jane.svg'
import logoAneto from '@/images/logos/aneto.svg'
import logoDentaid from '@/images/logos/dentaid.svg'
import logoNet2phone from '@/images/logos/net2phone.svg'

const projects = [
  {
    name: 'Sms Net2phone',
    description:
      'Panel de usuario para el envio y gestión de sms para la empresa Net2phone',
    link: { href: 'https://sms.net2phone.es/login', label: 'sms.net2phone.es' },
    logo: logoNet2phone,
  },
  {
    name: 'Tantra Spain',
    description:
      'Website con catalogo aunto gestionable por el cliente',
    link: { href: 'https://tantraspain.com/', label: 'tantraspain.com' },
    logo: logoTantra,
  },
  {
    name: 'Aneto',
    description:
      'Tienda online de caldos',
    link: { href: '', label: 'proximamente' },
    logo: logoAneto,
  },
  {
    name: 'Janeworld',
    description:
      'Tienda online de productos de bebes',
    link: { href: 'https://janeworld.com/', label: 'janeworld.com' },
    logo: logoJane,
  },
  {
    name: 'Dentaid',
    description:
      'Tienda online de productos para el cuidado dental',
    link: { href: 'https://www.dentaidcomprasonline.pe/', label: 'dentaidcomprasonline.pe' },
    logo: logoDentaid,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Proyectos - Eduardo Calvo</title>
        <meta
          name="description"
          content="Proyectos que he realizado durante mi carrera."
        />
        <meta
          property="og:image"
          content="https://educalvolopez.com/api/og?title=Proyectos - Eduardo Calvo"
        />
        <meta property="og:title" content="Proyectos - Eduardo Calvo" />
        <meta
          property="og:description"
          content="Proyectos que he realizado durante mi carrera."
        />
        <meta property="og:URL" content="https://educalvolopez.com/proyectos" />
        <meta property="og:type" content="website" />
      </Head>
      <SimpleLayout
        title="Proyectos que he realizado durante mi carrera."
        intro="¿No sabes por dónde empezar? He trabajado en montones de pequeños proyectos a lo largo de los años, pero estos son los que más me enorgullecen. Muchos de ellos son privados y no podré publicarlos a continuación."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="w-8 h-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-slate-800 dark:text-slate-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-slate-900 group-hover:text-amber-500 dark:text-slate-200">
                <LinkIcon className="flex-none w-6 h-6" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
        <Clients />
      </SimpleLayout>
    </>
  )
}
