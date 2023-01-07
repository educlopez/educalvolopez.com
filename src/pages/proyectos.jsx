import Image from 'next/image';
import Head from 'next/head';
import Clients from '@/components/Clients';
import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import logoTantra from '@/images/logos/tantra.svg';
import logoJane from '@/images/logos/jane.svg';
import logoAneto from '@/images/logos/aneto.svg';
import logoDentaid from '@/images/logos/dentaid.svg';
import logoNet2phone from '@/images/logos/net2phone.svg';
import { LinkIcon } from '@heroicons/react/24/outline';
const projects = [
  {
    name: 'Sms Net2phone',
    description:
      'Panel de usuario para el envio y gestión de sms para la empresa Net2phone',
    link: { href: 'https://sms.net2phone.es/login', label: 'sms.net2phone.es' },
    logo: logoNet2phone
  },
  {
    name: 'Tantra Spain',
    description: 'Website con catalogo aunto gestionable por el cliente',
    link: { href: 'https://tantraspain.com/', label: 'tantraspain.com' },
    logo: logoTantra
  },
  {
    name: 'Aneto',
    description: 'Tienda online de caldos',
    link: { href: '', label: 'próximamente' },
    logo: logoAneto
  },
  {
    name: 'Janeworld',
    description: 'Tienda online de productos de bebes',
    link: { href: 'https://janeworld.com/', label: 'janeworld.com' },
    logo: logoJane
  },
  {
    name: 'Dentaid',
    description: 'Tienda online de productos para el cuidado dental',
    link: {
      href: 'https://www.dentaidcomprasonline.pe/',
      label: 'dentaidcomprasonline.pe'
    },
    logo: logoDentaid
  }
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Proyectos - Edu Calvo</title>
        <meta
          name="description"
          content="Proyectos que he realizado durante mi carrera."
        />
        <meta
          name="keywords"
          content="proyectos de carrera, colaboración con grandes marcas, ayuda a pequeños negocios, calidad en trabajo"
        />
        <meta property="og:url" content="https://educalvolopez.com/proyectos" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Proyectos - Edu Calvo" />
        <meta
          property="og:description"
          content="Proyectos que he realizado durante mi carrera."
        />
        <meta
          property="og:image"
          content="https://educalvolopez.com/api/og?title=Proyectos"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="educalvolopez.com" />
        <meta
          property="twitter:url"
          content="https://educalvolopez.com/proyectos"
        />
        <meta name="twitter:title" content="Proyectos - Edu Calvo" />
        <meta
          name="twitter:description"
          content="Proyectos que he realizado durante mi carrera."
        />
        <meta
          name="twitter:image"
          content="https://educalvolopez.com/api/og?title=Proyectos"
        />
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
              <h2 className="mt-6 text-base font-semibold text-zinc-900 dark:text-white">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 flex items-center mt-6 text-sm font-medium transition text-zinc-900 group-hover:text-amber-500 dark:text-zinc-200">
                <LinkIcon className="flex-none w-4 h-4" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
        <Clients />
      </SimpleLayout>
    </>
  );
}
