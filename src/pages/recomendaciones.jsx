import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { stacks } from '@/data/stacks'
import { Switch } from '@headlessui/react'
import { motion } from 'framer-motion'

import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_IN_ANIMATION_CARD_HOVER,
} from '@/lib/constants'
import { Card } from '@/components/Card'
import { Pill } from '@/components/Pill'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function filterStacks(stacks, type) {
  return stacks.filter((stack) => stack.type === type)
}

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}
function ToolsSectionGrid({ children, title }) {
  return (
    <section className="md:border-l md:border-zinc-900/10 md:pl-6 md:dark:border-white/10">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
        {title}
      </h2>
      <ul
        role="list"
        className="grid grid-cols-3 mt-5 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8"
      >
        {children}
      </ul>
    </section>
  )
}

function Toollist({ title, href, children, pills }) {
  return (
    <Card as="li" className="relative z-10">
      <Card.Title
        as="div"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {title}{' '}
        {pills && (
          <div className="inline-flex flex-wrap gap-2 ml-1">
            {pills.map((pill) => (
              <Pill key={pill.name} variant={pill.name} />
            ))}
          </div>
        )}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}
function Toolgrid({ title, href, img, children, pills }) {
  return (
    <li className="relative z-10">
      <motion.div
        className="block w-full p-3 overflow-hidden border rounded-lg aspect-w-10 aspect-h-7 group border-zinc-900/10 bg-white/10 backdrop-blur-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 dark:border-white/10 dark:bg-zinc-900/20 dark:backdrop-blur"
        {...FADE_IN_ANIMATION_CARD_HOVER}
      >
        <Image
          src={img}
          alt={title}
          placeholder="blur"
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
        {pills && (
          <div className="absolute inline-flex items-center justify-between gap-2 inset-x-1 top-1 ">
            {pills.map((pill) => (
              <Pill key={pill.name} variant={pill.name} />
            ))}
          </div>
        )}
      </motion.div>
    </li>
  )
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Uses() {
  const development = filterStacks(stacks, 'development')
  const workstation = filterStacks(stacks, 'workstation')
  const design = filterStacks(stacks, 'design')
  const productivity = filterStacks(stacks, 'productivity')

  const [view, setView] = useState('list')
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <Head>
        <title>Recomendaciones - Edu Calvo</title>
        <meta
          name="description"
          content="El software que uso, los dispositivos que amo y otras cosas que recomiendo."
        />
        <meta
          name="keywords"
          content="software recomendado, dispositivos tecnológicos, productividad, herramientas de creación de sitios web, procrastinación"
        />
        <meta
          property="og:url"
          content="https://educalvolopez.com/recomendaciones"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Recomendaciones - Edu Calvo" />
        <meta
          property="og:description"
          content="El software que uso, los dispositivos que amo y otras cosas que recomiendo."
        />
        <meta
          property="og:image"
          content="https://educalvolopez.com/api/og?title=Recomendaciones"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="educalvolopez.com" />
        <meta
          property="twitter:url"
          content="https://educalvolopez.com/recomendaciones"
        />
        <meta name="twitter:title" content="Recomendaciones - Edu Calvo" />
        <meta
          name="twitter:description"
          content="El software que uso, los dispositivos que amo y otras cosas que recomiendo."
        />
        <meta
          name="twitter:image"
          content="https://educalvolopez.com/api/og?title=Recomendaciones"
        />
      </Head>
      <SimpleLayout
        title="El software que uso, los dispositivos que amo y otras cosas que recomiendo."
        intro="Las cosas que uso para crear webs, mantenerme productivo o comprar para engañarme y pensar que estoy siendo productivo cuando en realidad solo estoy procrastinando. Aquí hay una gran lista de todas mis cosas favoritas.  Algunas recomendaciones pueden contener enlaces de afilidados."
      >
        <motion.div
          className="relative z-20 flex items-center justify-start gap-4 px-4 py-2 my-16 border dark:backdrop-blurbackdrop-blur w-fit rounded-3xl border-zinc-900/10 bg-white/10 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          layout
        >
          <span>Vista</span>
          <Switch
            checked={enabled}
            onChange={() => {
              setView(view === 'list' ? 'grid' : 'list')
              setEnabled(!enabled)
            }}
            className={classNames(
              enabled ? 'bg-amber-600' : 'bg-zinc-400/60 dark:bg-zinc-700',
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
                  className="w-3 h-3 text-gray-400 dark:text-zinc-700"
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
        </motion.div>
        {view === 'list' ? (
          <div className="space-y-20">
            <ToolsSection title="Workstation">
              {workstation.map((stack) => (
                <Toollist
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  pills={stack.pills}
                >
                  {stack.info}
                </Toollist>
              ))}
            </ToolsSection>
            <ToolsSection title="Desarrollo">
              {development.map((stack) => (
                <Toollist
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  pills={stack.pills}
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
                  pills={stack.pills}
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
                  pills={stack.pills}
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
                  pills={stack.pills}
                >
                  {stack.title}
                </Toolgrid>
              ))}
            </ToolsSectionGrid>
            <ToolsSectionGrid title="Desarrollo">
              {development.map((stack) => (
                <Toolgrid
                  title={stack.title}
                  href={stack.link}
                  key={stack.title}
                  img={stack.img}
                  pills={stack.pills}
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
                  pills={stack.pills}
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
                  pills={stack.pills}
                >
                  {stack.title}
                </Toolgrid>
              ))}
            </ToolsSectionGrid>
          </div>
        )}
      </SimpleLayout>
    </>
  )
}
