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
        <meta
          property="og:image"
          content="https://educalvolopez.com/api/og?title=Recomendaciones - Eduardo Calvo"
        />
      </Head>
      <SimpleLayout
        title="El software que uso, los dispositivos que amo y otras cosas que recomiendo."
        intro="Las cosas que uso para crear webs, mantenerme productivo o comprar para engañarme y pensar que estoy siendo productivo cuando en realidad solo estoy procrastinando. Aquí hay una gran lista de todas mis cosas favoritas."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 16GB RAM (2021)" href="https://amzn.to/3hp6Dxj">
              Lo utilizo todos los dias para programar, diseñar y para uso personal. Un must have.
            </Tool>
            <Tool title="Ipad Air 4º 64gb (2020)" href="https://amzn.to/3zWYZ3B">
              Lo utilizo como pantalla secundaria del MacBook, y para usar procreate y mejorar la productividad en el trabajo.
            </Tool>
            <Tool title="LG 27UL650-W - Monitor 27 pulgadas 4K UHD" href="https://amzn.to/3zWCgER">
              Pantalla complementaria para el MacBook, muy buenos colores para trabjar igual que si estuviese diseñando solo con el portatil.
            </Tool>
            <Tool title="Logitech K380 Teclado Inalámbrico" href="https://amzn.to/3EbTrVs">
              Perfecto para el uso multidispositivo en mi espacio de trabajo. Muy buen precio.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Herramientas de desarrollo">
            <Tool title="Visual studio code" href="https://code.visualstudio.com/?wt.mc_id=DX_841432">
              Atom, sublime text, phpstorm... descansan en paz en mi recuerdo ya que llego visual studio y me cambio la vida.
            </Tool>
            <Tool title="Lando" href="https://docs.lando.dev/">
              Lando = levanta run proyecto en local en 1 min.
            </Tool>
            <Tool title="Docker" href="https://www.docker.com/">
              Llevo años usando Docker, antes para levantar Laravel rapidamente y ahora lo uso por Lando para levantar los ecommerce de la empresa.
            </Tool>
            <Tool title="Table plus" href="https://tableplus.com/">
              Gestor de Base de datos sin el que no puedo vivir.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Diseño">
            <Tool title="Figma" href="https://www.figma.com/">
              Llevo utilizando Figma unos años como sustituto de Sketch y me tiene enamorado. Muy intuitivo y sobre todo productivo.
            </Tool>
            <Tool title="Sketch" href="https://www.sketch.com/">
              Ya no uso tanto Sketch como antes pero sige siendo una herramienta super recomendable. Muy parecida a Figma.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productividad">
            <Tool title="Notion" href="https://notion.com/">
              Blog de notas para todo. Finanzas, proyectos, moodboards, etc.
            </Tool>
            <Tool title="Raycast" href="https://www.raycast.com/">
              Barra de comandos para el mac vitaminada y con plugins muy utiles.
            </Tool>
            <Tool title="Slack" href="https://slack.com/intl/es-es">
              Productividad o distración pero Slack ayuda mucho al trabajo en remoto.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
