import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export function JobItem({ role, containerref }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [0, 0.5, 1, 1]
  )

  return (
    <motion.div
      className="flex gap-4 mt-4 snap-start work-item last:mb-36 first:mt-0"
      style={{
        opacity: opacity,
        height: '48px',
      }}
      ref={ref}
    >
      <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt={role.title}
          className="w-10 h-10"
          unoptimized
        />
      </div>
      <dl className="flex flex-wrap flex-auto gap-x-2">
        <dt className="sr-only">Empresa</dt>
        <dd className="flex-none w-full text-sm font-medium body-primary">
          {role.company}
        </dd>
        <dt className="sr-only">Rol</dt>
        <dd className="text-xs body-secondary">{role.title}</dd>
        <dt className="sr-only">Fecha</dt>
        <dd
          className="ml-auto text-xs body-secondary"
          aria-label={`${role.start.label ?? role.start} until ${
            role.end.label ?? role.end
          }`}
        >
          <time dateTime={role.start.dateTime ?? role.start}>
            {role.start.label ?? role.start}
          </time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={role.end.dateTime ?? role.end}>
            {role.end.label ?? role.end}
          </time>
        </dd>
      </dl>
    </motion.div>
  )
}
