'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function JobItem({ role, scrollPosition, heightItem, roleIndex }) {
  const ref = useRef(null)

  const distance = role.index * heightItem
  const offset = scrollPosition - distance

  const blurtwo = offset >= -heightItem - 1 && offset <= 0 ? 0 : 2
  const opacity = offset >= -heightItem - 1 && offset <= 0 ? 1 : 0.3

  const marginBoxTop = 'last:mb-[128px]'
  return (
    <motion.div
      className={`flex gap-4 pb-4 snap-start work-item ${marginBoxTop}`}
      style={{
        filter: `blur(${blurtwo}px)`,
        opacity: opacity,
      }}
      ref={ref}
    >
      <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt={role.title}
          className="w-10 h-10"
          priority={roleIndex <= 1}
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
