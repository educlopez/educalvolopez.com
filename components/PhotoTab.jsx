'use client'

import { useState } from 'react'
import Image from 'next/image'
import arenImage from '@/images/aren.jpg'
import asturiasImage from '@/images/asturias.jpg'
import portraitImage from '@/images/portrait.jpg'
import * as Tabs from '@radix-ui/react-tabs'
import { AnimatePresence, motion } from 'framer-motion'
import { Dog, Map as MapIcon, User } from 'lucide-react'
import { useDebouncedCallback } from 'use-debounce'

const tabs = [
  {
    name: 'Yo',
    image: portraitImage,
    icon: <User />,
  },
  {
    name: 'Aren',
    image: arenImage,
    icon: <Dog />,
  },
  {
    name: 'Lugar',
    image: asturiasImage,
    icon: <MapIcon />,
  },
]

export function Phototab() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <Tabs.Root
      defaultValue="Yo"
      orientation="horizontal"
      className="relative overflow-hidden group"
      as="div"
    >
      <Tabs.List
        aria-label="tabs Fotos"
        className="absolute left-0 right-0 flex flex-row items-center justify-between w-40 px-3 py-2 mx-auto text-sm font-medium transition rounded-full md:translate-y-20 md:group-hover:-translate-y-4 lef-0 bottom-2 hover:text-neutral-900 body-primary dark:hover:text-white box-gen"
      >
        {tabs.map((tab, index) => (
          <Tabs.Trigger
            value={tab.name}
            key={index}
            className="relative data-[state='active']:dark:bg-zinc-900/90 rounded-2xl data-[state='active']:bg-white/90"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 transition-colors rounded-2xl bg-zinc-50/30 dark:bg-zinc-900/30 "
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <div className="relative z-10 px-2 py-2 rounded-full focus:outline-none ">
              {tab.icon}
              <div className="sr-only">{tab.name}</div>
            </div>
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map((tab, index) => (
        <Tabs.Content value={tab.name} key={index}>
          <Image
            src={tab.image}
            alt={tab.name}
            sizes="(min-width: 1024px) 32rem, 20rem"
            placeholder="blur"
            className="object-cover aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800"
          />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
