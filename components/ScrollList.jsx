'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { resume } from '@/data/resume'
import { motion } from 'framer-motion'

const variants = {
  offscreen: {
    filter: 'blur(2px)',
    opacity: 0.4,
  },
  onscreen: {
    filter: 'blur(0px)',
    opacity: 1,
  },
}
export default function JobsList() {
  const container = useRef(null)
  const ref = useRef(null)

  return (
    <div className="relative mt-2">
      <section
        ref={container}
        className="h-40 pt-12 pb-8 space-y-3 overflow-scroll snap-y snap-proximity scroll-py-12"
      >
        {resume.map((role, roleIndex) => (
          <motion.div
            key={roleIndex}
            ref={ref}
            className="flex gap-4 snap-start work-item snap-always"
            initial="offscreen"
            whileInView="onscreen"
            variants={variants}
            viewport={{
              root: container,
              amount: 0.8,
            }}
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
        ))}
      </section>
    </div>
  )
}
