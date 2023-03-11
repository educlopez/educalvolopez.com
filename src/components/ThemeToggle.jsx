import { Fragment, forwardRef } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  ComputerDesktopIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  MoonIcon,
  SunIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ThemeToggle() {
  const { setTheme } = useTheme()
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex px-3 py-3 transition border rounded-full md:px-2 md:py-2 group border-zinc-900/10 bg-white/10 text-zinc-600 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-400 dark:backdrop-blur">
          <SunIcon className="w-4 h-4 stroke-zinc-900 dark:hidden" />
          <MoonIcon className="hidden w-4 h-4 stroke-white dark:block" />
          <span className="sr-only">Toggle theme</span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-auto mt-2 origin-top-right border divide-y divide-gray-100 rounded-md shadow-lg border-zinc-900/10 bg-white/10 text-zinc-600 ring-1 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-400 dark:backdrop-blur ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item onClick={() => setTheme('light')}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? ' text-zinc-900 dark:text-white'
                      : 'text-zinc-600 dark:text-zinc-300',
                    'group flex items-center px-4 py-2 text-sm '
                  )}
                >
                  <SunIcon
                    className="w-5 h-5 mr-3 text-zinc-400 group-hover:text-amber-500"
                    aria-hidden="true"
                  />
                  Day
                </a>
              )}
            </Menu.Item>
            <Menu.Item onClick={() => setTheme('dark')}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? ' text-zinc-900 dark:text-white'
                      : 'text-zinc-600 dark:text-zinc-300',
                    'group flex items-center px-4 py-2 text-sm'
                  )}
                >
                  <MoonIcon
                    className="w-5 h-5 mr-3 text-zinc-400 group-hover:text-amber-500"
                    aria-hidden="true"
                  />
                  Night
                </a>
              )}
            </Menu.Item>
            <Menu.Item onClick={() => setTheme('system')}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? ' text-zinc-900 dark:text-white'
                      : 'text-zinc-600 dark:text-zinc-300',
                    'group flex items-center px-4 py-2 text-sm'
                  )}
                >
                  <ComputerDesktopIcon
                    className="w-5 h-5 mr-3 text-zinc-400 group-hover:text-amber-500"
                    aria-hidden="true"
                  />
                  System
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
