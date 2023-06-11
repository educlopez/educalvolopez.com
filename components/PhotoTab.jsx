'use client'

import { useState } from 'react'
import Image from 'next/image'
import arenImage from '@/images/aren.jpg'
import asturiasImage from '@/images/asturias.jpg'
import portraitImage from '@/images/portrait.jpg'
import { Tab } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Dog, Map as MapIcon, User } from 'lucide-react'
import { useDebouncedCallback } from 'use-debounce'
import useSound from 'use-sound'

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
  const [click] = useSound('sounds/click.mp3')
  let [selectedIndex, setSelectedIndex] = useState(0)
  let [hoveredIndex, setHoveredIndex] = useState(null)
  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
    },
    100,
    { leading: true }
  )
  return (
    <Tab.Group
      className="relative overflow-hidden group"
      as="div"
      selectedIndex={selectedIndex}
      onChange={onChange}
    >
      <Tab.List className="absolute left-0 right-0 flex flex-row items-center justify-between w-40 px-3 py-2 mx-auto text-sm font-medium transition border rounded-full md:translate-y-20 md:group-hover:-translate-y-4 lef-0 bottom-2 border-black/10 bg-white/50 text-zinc-900 backdrop-blur-sm hover:text-neutral-900 dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-400 dark:backdrop-blur dark:hover:text-white ring-1 ring-zinc-100/70 dark:ring-zinc-900/70">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="relative "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 transition-colors bg-zinc-50/50 dark:bg-zinc-900/30 rounded-2xl "
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
            {index === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-zinc-100 ring-zinc-300 dark:bg-zinc-900/90 dark:ring-zinc-800 ring-1"
                initial={{ borderRadius: 16 }}
              />
            )}
            <Tab
              className="relative z-10 p-8 px-2 py-1 rounded-full focus:outline-none"
              onClick={click}
            >
              {tab.icon}
              <div className="sr-only">{tab.name}</div>
            </Tab>
          </div>
        ))}
      </Tab.List>

      <Tab.Panels>
        {tabs.map((tab, index) => (
          <Tab.Panel key={index}>
            <Image
              src={tab.image}
              alt={tab.name}
              sizes="(min-width: 1024px) 32rem, 20rem"
              placeholder="blur"
              className="object-cover aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
