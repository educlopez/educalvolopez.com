import Head from 'next/head';
import { useState } from 'react';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';
import Link from 'next/link';
import Image from 'next/image';
import { Switch } from '@headlessui/react';

//Images
//Workstation
import imgMacbook from '@/images/icons/macbook-pro.png';
import imgIpadair from '@/images/icons/ipad-air.png';
import imgLgmonitor from '@/images/icons/lg-monitor.png';
import imgLogitechteclado from '@/images/icons/logitech-teclado.png';
//Dev
import imgVscode from '@/images/icons/vscode.png';
import imgNextjs from '@/images/icons/nextjs.png';
import imgVercel from '@/images/icons/vercel.png';
import imgTailwind from '@/images/icons/tailwind.png';
import imgLando from '@/images/icons/lando.png';
import imgBootstrap from '@/images/icons/bootstrap.png';
import imgDocker from '@/images/icons/docker.png';
import imgTableplus from '@/images/icons/tableplus.png';
//Design
import imgFigma from '@/images/icons/figma.png';
import imgSketch from '@/images/icons/sketch.png';
//Productivity
import imgArc from '@/images/icons/arc.png';
import imgNotion from '@/images/icons/notion.png';
import imgRaycast from '@/images/icons/raycast.png';
import imgSlack from '@/images/icons/slack.png';
import img1Password from '@/images/icons/1password.png';
import imgSetapp from '@/images/icons/setapp.png';
import imgTransmit from '@/images/icons/transmit.png';

const stacks = [
  {
    type: 'workstation',
    title: '16” MacBook Pro, M1 Max, 16GB RAM (2021)',
    link: 'https://amzn.to/3hp6Dxj',
    info: 'Utilizo este ordenador todos los días para programar, diseñar y para uso personal. Su diseño es bonito y funcional. La duración de la batería es excelente y me encantan los teclados retroiluminados.',
    img: imgMacbook
  },
  {
    type: 'workstation',
    title: 'Ipad Air 4º 64gb (2020)',
    link: 'https://amzn.to/3zWYZ3B',
    info: 'Lo uso como pantalla secundaria para el MacBook y para usar procreate y mejorar la productividad en el trabajo. El iPad Air 4th es extremadamente fácil de usar y disfruto viendo películas en él o escuchando música.',
    img: imgIpadair
  },
  {
    type: 'workstation',
    title: 'LG 27UL650-W - Monitor 27 pulgadas 4K UHD',
    link: 'https://amzn.to/3zWCgER',
    info: 'El LG 27UL650-W es un gran monitor, con una resolución 4K UHD y una excelente reproducción del color. La pantalla es compatible con el MacBook Pro (modelo de 15 pulgadas), pero se verá muy bien en cualquier otro lugar.',
    img: imgLgmonitor
  },
  {
    type: 'workstation',
    title: 'Logitech K380 Teclado Inalámbrico',
    link: 'https://amzn.to/3EbTrVs',
    info: 'Gran teclado para trabajar en casa, de viaje o en cualquier lugar de trabajo. Funciona con una gran variedad de dispositivos y ordenadores, lo que lo hace muy flexible.',
    img: imgLogitechteclado
  },
  {
    type: 'developer',
    title: 'Visual studio code',
    link: 'https://code.visualstudio.com/?wt.mc_id=DX_841432',
    info: 'Atom, sublime text, phpstorm... descansan en paz en mi recuerdo ya que llego visual studio y me cambio la vida.',
    img: imgVscode
  },
  {
    type: 'developer',
    title: 'Nextjs',
    link: 'https://nextjs.org/',
    info: 'Utilizo Next.js como framework de React porque me permite crear aplicaciones y sitios web de alto rendimiento y con una experiencia de usuario fluida. Además, me ofrece una serie de características útiles como renderizado en el lado del servidor, soporte para SEO y enrutamiento automático. También me gusta la opción de utilizar getInitialProps para obtener datos en el lado del servidor y la posibilidad de crear páginas estáticas para mejorar el rendimiento. En resumen, Next.js es un framework muy completo y potente que me permite crear aplicaciones y sitios web de alta calidad de manera rápida y sencilla.',
    img: imgNextjs
  },
  {
    type: 'developer',
    title: 'Vercel',
    link: 'https://vercel.com',
    info: 'Utilizo Vercel como hosting porque es rápido, seguro y fácil de usar. Además, me permite realizar actualizaciones y despliegues con un solo clic y ofrece soporte para diferentes frameworks y lenguajes de programación, como React, Next.js, Gatsby y muchos más. También me gusta la opción de integración con GitHub y la posibilidad de programar despliegues automáticos cuando se realizan cambios en el repositorio. En resumen, Vercel es un hosting muy completo y versátil que me permite administrar y desplegar mis proyectos de manera rápida y sencilla.',
    img: imgVercel
  },
  {
    type: 'developer',
    title: 'Tailwind',
    link: 'https://tailwindcss.com/',
    info: 'Utilizo Tailwind como framework de CSS para crear sitios web porque me permite crear diseños únicos y personalizados sin tener que escribir tanto código CSS. Además, es muy fácil de usar y integrar en proyectos realizados en React, lo que me permite ahorrar tiempo y esfuerzo en la creación de interfaces de usuario atractivas y funcionales. Aunque también utilizo Bootstrap, encuentro que Tailwind es más adecuado para proyectos en los que necesito un mayor control y personalización del diseño.',
    img: imgTailwind
  },
  {
    type: 'developer',
    title: 'Lando',
    link: 'https://docs.lando.dev/',
    info: 'Utilizo Lando para crear entornos locales para PrestaShop porque es muy fácil de usar y me permite levantar un servidor Docker en cuestión de segundos. Esto me permite comenzar a desarrollar mis proyectos de manera rápida y sencilla, sin tener que preocuparme por la configuración del servidor. Lando también me permite realizar pruebas en diferentes versiones de PHP y bases de datos, lo que me da la flexibilidad necesaria para probar y depurar mi código de manera eficiente. En resumen, Lando es una herramienta muy útil para crear entornos de desarrollo locales para PrestaShop de manera rápida y sencilla.',
    img: imgLando
  },
  {
    type: 'developer',
    title: 'Bootstrap',
    link: 'https://getbootstrap.com/',
    info: 'Utilizo Bootstrap como framework de CSS para crear sitios web porque es fácil de usar, tiene una amplia gama de componentes y diseños predefinidos y es altamente personalizable. Además, es compatible con dispositivos móviles y responsive design, lo que me permite crear sitios web atractivos y fácilmente accesibles desde cualquier dispositivo.',
    img: imgBootstrap
  },
  {
    type: 'developer',
    title: 'Docker',
    link: 'https://www.docker.com/',
    info: 'Llevo años usando Docker, antes para levantar Laravel rapidamente y ahora lo uso por Lando para levantar los ecommerce de la empresa.',
    img: imgDocker
  },
  {
    type: 'developer',
    title: 'Table plus',
    link: 'https://tableplus.com/',
    info: 'El gestor de bases de datos es muy útil, y lo uso desde hace mucho tiempo porque es cómodo y fácil de usar.',
    img: imgTableplus
  },
  {
    type: 'design',
    title: 'Figma',
    link: 'https://www.figma.com/',
    info: 'Utilizo Figma para diseñar porque es una herramienta en línea y colaborativa que ofrece una amplia gama de herramientas y una interfaz intuitiva. Permite integración con otras herramientas y acceso a diseños desde cualquier lugar y dispositivo.',
    img: imgFigma
  },
  {
    type: 'design',
    title: 'Sketch',
    link: 'https://www.sketch.com/',
    info: 'Utilizo Sketch para diseñar porque es intuitivo, potente y fácil de usar. Ofrece una amplia gama de herramientas de diseño y una interfaz clara y sencilla. También permite integración con otras herramientas y colaboración con otros diseñadores.Utilizo Figma para diseñar porque es una herramienta en línea y colaborativa que ofrece una amplia gama de herramientas y una interfaz intuitiva. Permite integración con otras herramientas y acceso a diseños desde cualquier lugar y dispositivo.',
    img: imgSketch
  },
  {
    type: 'productivity',
    title: 'Arc',
    link: 'https://arc.net/',
    info: 'Utilizo el navegador Arc porque me gusta su interfaz y las opciones adicionales que ofrece. También me gusta la gran cantidad de opciones de personalización disponibles, como el editor de temas y los espacios de trabajo. Además, Arc tiene opciones útiles para la reproducción de video y la navegación en websites. Es un navegador rápido, seguro y altamente personalizable que me facilita la navegación en línea.',
    img: imgArc
  },
  {
    type: 'productivity',
    title: 'Notion',
    link: 'https://notion.com/',
    info: 'Sea lo que sea en lo que estés trabajando, la aplicación Notion es tu amiga. Organiza tus pensamientos e ideas con nuestra plataforma basada en plantillas, que te permite reunir rápidamente ideas para publicaciones de blog, crear tableros de estado de ánimo y hacer una lluvia de ideas creativas. Creada para los creativos.',
    img: imgNotion
  },
  {
    type: 'productivity',
    title: 'Raycast',
    link: 'https://www.raycast.com/',
    info: 'Se trata de una barra de comandos que puede utilizar para lanzar cualquier comando en su entorno de escritorio. Proporciona acceso a una serie de útiles complementos y accesos directos para realizar operaciones comunes',
    img: imgRaycast
  },
  {
    type: 'productivity',
    title: 'Slack',
    link: 'https://slack.com/intl/es-es',
    info: 'Productividad o distración pero Slack ayuda mucho al trabajo en remoto permitiendote comunicarte con tus compañeros de proyecto.',
    img: imgSlack
  },
  {
    type: 'productivity',
    title: '1Password',
    link: 'https://1password.com/es/',
    info: 'Utilizo 1Password para gestionar mis contraseñas y datos personales de manera segura y accesible. Ofrece autenticación en dos pasos y alertas de seguridad para proteger mis cuentas. Es esencial para proteger mis datos personales y mantener seguras mis cuentas en línea.',
    img: img1Password
  },
  {
    type: 'productivity',
    title: 'Setapp',
    link: 'https://go.setapp.com/invite/vti9ximz',
    info: 'Utilizo Setapp porque es una plataforma de suscripción que me permite acceder a una amplia variedad de aplicaciones de productividad y creatividad de forma fácil y conveniente. No tengo que preocuparme por comprar y descargar cada aplicación individualmente ni por pagar licencias separadas.',
    img: imgSetapp
  },
  {
    type: 'developer',
    title: 'Transmit',
    link: 'https://panic.com/transmit/',
    info: 'Utilizo Transmit como gestor FTP porque es una aplicación fácil de usar y potente que me permite transferir archivos de forma rápida y segura entre mi ordenador y servidores web. También me ofrece una amplia variedad de opciones de configuración y personalización, lo que me permite adaptarlo a mis necesidades específicas de transferencia de archivos. Además, Transmit es compatible con una gran variedad de protocolos de transferencia de archivos, lo que me permite conectarme a una amplia variedad de servidores.',
    img: imgTransmit
  }
];

function filterStacks(stacks, type) {
  return stacks.filter((stack) => stack.type === type);
}

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}
function ToolsSectionGrid({ children, title }) {
  return (
    <section className="md:border-l md:border-zinc-900/10 md:pl-6 md:dark:border-white/10">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
        {title}
      </h2>
      <ul
        role="list"
        className="grid grid-cols-3 mt-5 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-8 xl:gap-x-8"
      >
        {children}
      </ul>
    </section>
  );
}

function Toollist({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href} rel="noopener noreferrer" target="_blank">
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}
function Toolgrid({ title, href, img, children }) {
  return (
    <li className="relative">
      <div className="block w-full p-3 overflow-hidden border rounded-lg aspect-w-10 aspect-h-7 group border-zinc-900/10 bg-white/10 backdrop-blur-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 dark:border-white/10 dark:bg-zinc-900/20 dark:backdrop-blur">
        <Image
          src={img}
          alt={title}
          width={70}
          height={70}
          className="object-cover mx-auto pointer-events-none group-hover:opacity-75"
        />
        <Link
          href={href}
          type="button"
          className="absolute inset-0 focus:outline-none"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="sr-only">Ver {title}</span>
        </Link>
        <p className="block my-2 text-sm font-medium text-center truncate pointer-events-none text-zinc-900 dark:text-white">
          {children}
        </p>
      </div>
    </li>
  );
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Uses() {
  const developer = filterStacks(stacks, 'developer');
  const workstation = filterStacks(stacks, 'workstation');
  const design = filterStacks(stacks, 'design');
  const productivity = filterStacks(stacks, 'productivity');

  const [view, setView] = useState('list');
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <Head>
        <title>Recomendaciones - Eduardo Calvo</title>
        <meta
          name="description"
          content="El software que uso, los dispositivos que amo y otras cosas que recomiendo."
        />
        <meta
          property="og:url"
          content="https://educalvolopez.com/recomendaciones"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Recomendaciones - Eduardo Calvo" />
        <meta
          property="og:description"
          content="El software que uso, los dispositivos que amo y otras cosas que recomiendo."
        />
        <meta
          property="og:image"
          content="https://educalvolopez.com/api/og?title=Recomendaciones - Eduardo Calvo"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="educalvolopez.com" />
        <meta
          property="twitter:url"
          content="https://educalvolopez.com/recomendaciones"
        />
        <meta name="twitter:title" content="Recomendaciones - Eduardo Calvo" />
        <meta
          name="twitter:description"
          content="El software que uso, los dispositivos que amo y otras cosas que recomiendo."
        />
        <meta
          name="twitter:image"
          content="https://educalvolopez.com/api/og?title=Recomendaciones - Eduardo Calvo"
        />
      </Head>
      <SimpleLayout
        title="El software que uso, los dispositivos que amo y otras cosas que recomiendo."
        intro="Las cosas que uso para crear webs, mantenerme productivo o comprar para engañarme y pensar que estoy siendo productivo cuando en realidad solo estoy procrastinando. Aquí hay una gran lista de todas mis cosas favoritas."
      >
        <div className="flex items-center justify-center gap-4 px-4 py-2 my-16 border dark:backdrop-blurbackdrop-blur w-fit rounded-3xl border-zinc-900/10 bg-white/10 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20">
          <Switch
            onClick={() => {
              setView('list');
              setEnabled(false);
            }}
            className={classNames(
              !enabled ? 'text-amber-600' : 'text-zinc-600 dark:text-zinc-400',
              'text-base'
            )}
          >
            Listado
          </Switch>
          <Switch
            checked={enabled}
            onChange={() => {
              setView(view === 'list' ? 'grid' : 'list');
              setEnabled(!enabled);
            }}
            className={classNames(
              enabled ? 'bg-amber-600' : 'bg-gray-200',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              className={classNames(
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
              )}
            >
              <span
                className={classNames(
                  enabled
                    ? 'opacity-0 duration-100 ease-out'
                    : 'opacity-100 duration-200 ease-in',
                  'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                )}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <span
                className={classNames(
                  enabled
                    ? 'opacity-100 duration-200 ease-in'
                    : 'opacity-0 duration-100 ease-out',
                  'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                )}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 text-amber-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </span>
            </span>
          </Switch>
          <Switch
            onClick={() => {
              setView('grid');
              setEnabled(true);
            }}
            className={classNames(
              enabled ? 'text-amber-600' : 'text-zinc-600 dark:text-zinc-400',
              'text-base'
            )}
          >
            Cuadricula
          </Switch>
        </div>
        {view === 'list' ? (
          <div className="space-y-20">
            <ToolsSection title="Workstation">
              {workstation.map((stack) => (
                <Toollist
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                >
                  {stack.info}
                </Toollist>
              ))}
            </ToolsSection>
            <ToolsSection title="Desarrollo">
              {developer.map((stack) => (
                <Toollist
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                >
                  {stack.info}
                </Toollist>
              ))}
            </ToolsSection>
            <ToolsSection title="Diseño">
              {design.map((stack) => (
                <Toollist
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                >
                  {stack.info}
                </Toollist>
              ))}
            </ToolsSection>
            <ToolsSection title="Productividad">
              {productivity.map((stack) => (
                <Toollist
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                >
                  {stack.info}
                </Toollist>
              ))}
            </ToolsSection>
          </div>
        ) : (
          <div className="space-y-20">
            <ToolsSectionGrid title="Workstation">
              {workstation.map((stack) => (
                <Toolgrid
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  img={stack.img}
                >
                  {stack.title}
                </Toolgrid>
              ))}
            </ToolsSectionGrid>
            <ToolsSectionGrid title="Desarrollo">
              {developer.map((stack) => (
                <Toolgrid
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  img={stack.img}
                >
                  {stack.title}
                </Toolgrid>
              ))}
            </ToolsSectionGrid>
            <ToolsSectionGrid title="Diseño">
              {design.map((stack) => (
                <Toolgrid
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  img={stack.img}
                >
                  {stack.title}
                </Toolgrid>
              ))}
            </ToolsSectionGrid>
            <ToolsSectionGrid title="Productividad">
              {productivity.map((stack) => (
                <Toolgrid
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  img={stack.img}
                >
                  {stack.title}
                </Toolgrid>
              ))}
            </ToolsSectionGrid>
          </div>
        )}
      </SimpleLayout>
    </>
  );
}
