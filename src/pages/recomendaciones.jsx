import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Recomendaciones - Eduardo Calvo</title>
        <meta
          name="description"
          content="El software que uso, los dispositivos que amo y otras cosas que recomiendo."
        />
        <meta property="og:url" content="https://educalvolopez.com/recomendaciones"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Recomendaciones - Eduardo Calvo"/>
        <meta property="og:description" content="El software que uso, los dispositivos que amo y otras cosas que recomiendo."/>
        <meta property="og:image" content="https://educalvolopez.com/api/og?title=Recomendaciones - Eduardo Calvo"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="educalvolopez.com"/>
        <meta property="twitter:url" content="https://educalvolopez.com/recomendaciones"/>
        <meta name="twitter:title" content="Recomendaciones - Eduardo Calvo"/>
        <meta name="twitter:description" content="El software que uso, los dispositivos que amo y otras cosas que recomiendo."/>
        <meta name="twitter:image" content="https://educalvolopez.com/api/og?title=Recomendaciones - Eduardo Calvo"/>
      </Head>
      <SimpleLayout
        title="El software que uso, los dispositivos que amo y otras cosas que recomiendo."
        intro="Las cosas que uso para crear webs, mantenerme productivo o comprar para engañarme y pensar que estoy siendo productivo cuando en realidad solo estoy procrastinando. Aquí hay una gran lista de todas mis cosas favoritas."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 16GB RAM (2021)" href="https://amzn.to/3hp6Dxj">
            Utilizo este ordenador todos los días para programar, diseñar y para uso personal. Su diseño es bonito y funcional. La duración de la batería es excelente y me encantan los teclados retroiluminados.
            </Tool>
            <Tool title="Ipad Air 4º 64gb (2020)" href="https://amzn.to/3zWYZ3B">
            Lo uso como pantalla secundaria para el MacBook y para usar procreate y mejorar la productividad en el trabajo. El iPad Air 4th es extremadamente fácil de usar y disfruto viendo películas en él o escuchando música.
            </Tool>
            <Tool title="LG 27UL650-W - Monitor 27 pulgadas 4K UHD" href="https://amzn.to/3zWCgER">
            El LG 27UL650-W es un gran monitor, con una resolución 4K UHD y una excelente reproducción del color. La pantalla es compatible con el MacBook Pro (modelo de 15 pulgadas), pero se verá muy bien en cualquier otro lugar.
            </Tool>
            <Tool title="Logitech K380 Teclado Inalámbrico" href="https://amzn.to/3EbTrVs">
            Gran teclado para trabajar en casa, de viaje o en cualquier lugar de trabajo. Funciona con una gran variedad de dispositivos y ordenadores, lo que lo hace muy flexible.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Desarrollo">
            <Tool title="Visual studio code" href="https://code.visualstudio.com/?wt.mc_id=DX_841432">
              Atom, sublime text, phpstorm... descansan en paz en mi recuerdo ya que llego visual studio y me cambio la vida.
            </Tool>
            <Tool title="Lando" href="https://docs.lando.dev/">
              Lando = levantar un proyecto en local en 1 min.
            </Tool>
            <Tool title="Docker" href="https://www.docker.com/">
              Llevo años usando Docker, antes para levantar Laravel rapidamente y ahora lo uso por Lando para levantar los ecommerce de la empresa.
            </Tool>
            <Tool title="Table plus" href="https://tableplus.com/">
            El gestor de bases de datos es muy útil, y lo uso desde hace mucho tiempo porque es cómodo y fácil de usar.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Diseño">
            <Tool title="Figma" href="https://www.figma.com/">
            Para mí, Figma no sólo está en lo más alto de la lista. Es la mejor herramienta con la que me he topado en mi carrera libre y profesional.  Su flujo de trabajo intuitivo, su interfaz sencilla y sus bellos gráficos son lo que hacen que sea un placer utilizarla.
            </Tool>
            <Tool title="Sketch" href="https://www.sketch.com/">
              Ya no uso tanto Sketch como antes pero sigue siendo una herramienta super recomendable. Muy parecida a Figma.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productividad">
            <Tool title="Notion" href="https://notion.com/">
            Sea lo que sea en lo que estés trabajando, la aplicación Notion es tu amiga. Organiza tus pensamientos e ideas con nuestra plataforma basada en plantillas, que te permite reunir rápidamente ideas para publicaciones de blog, crear tableros de estado de ánimo y hacer una lluvia de ideas creativas. Creada para los creativos.
            </Tool>
            <Tool title="Raycast" href="https://www.raycast.com/">
            Se trata de una barra de comandos que puede utilizar para lanzar cualquier comando en su entorno de escritorio. Proporciona acceso a una serie de útiles complementos y accesos directos para realizar operaciones comunes
            </Tool>
            <Tool title="Slack" href="https://slack.com/intl/es-es">
              Productividad o distración pero Slack ayuda mucho al trabajo en remoto permitiendote comunicarte con tus compañeros de proyecto.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
