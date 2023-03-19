import { useEffect, useState } from 'react'
import Image from 'next/image'
import arenImage from '@/images/aren.jpg'
import asturiasImage from '@/images/asturias.jpg'
import portraitImage from '@/images/portrait.jpg'
import { Tab } from '@headlessui/react'
import { motion } from 'framer-motion'
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
  let [selectedIndex, setSelectedIndex] = useState(0)

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
    },
    100,
    { leading: true }
  )
  return (
    <Tab.Group
      className="relative"
      as="div"
      selectedIndex={selectedIndex}
      onChange={onChange}
    >
      <Tab.List className="absolute left-0 right-0 flex flex-row items-center justify-between w-40 px-3 py-2 mx-auto text-sm font-medium transition border rounded-full lef-0 bottom-2 border-zinc-900/10 bg-white/50 text-zinc-700 backdrop-blur-sm hover:text-zinc-900 dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-400 dark:backdrop-blur dark:hover:text-white">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="relative transition-colors rounded-2xl hover:bg-zinc-700/30"
          >
            {index === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-zinc-100"
                initial={{ borderRadius: 16 }}
              />
            )}
            <Tab className="relative z-10 p-8 px-2 py-1 rounded-full focus:outline-none">
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
