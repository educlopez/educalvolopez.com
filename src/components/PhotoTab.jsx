import { Fragment } from 'react'
import Image from 'next/image'
import arenImage from '@/images/aren.jpg'
import asturiasImage from '@/images/asturias.jpg'
import portraitImage from '@/images/portrait.jpg'
import { Tab } from '@headlessui/react'
import { Dog, Map as MapIcon, User } from 'lucide-react'

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
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function Phototab() {
  return (
    <Tab.Group className="relative" as="div">
      <Tab.List className="absolute left-0 right-0 flex flex-row items-center justify-between w-40 px-3 py-2 mx-auto text-sm font-medium transition border rounded-full lef-0 bottom-2 border-zinc-900/10 bg-white/50 text-zinc-700 backdrop-blur-sm hover:text-zinc-900 dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-400 dark:backdrop-blur dark:hover:text-white">
        {tabs.map((tab, index) => (
          <Tab as={Fragment} key={index}>
            {({ selected }) => (
              <button
                className={classNames(
                  selected
                    ? ' text-zinc-900 bg-white'
                    : ' dark:text-zinc-200 text-zinc-700 ',
                  'px-2 py-1 rounded-full focus:outline-none'
                )}
              >
                {tab.icon}
                <div className="sr-only">{tab.name}</div>
              </button>
            )}
          </Tab>
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
