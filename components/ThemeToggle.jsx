import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ThemeToggle() {
  const { setTheme } = useTheme()
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex px-3 py-3 transition rounded-full md:px-2 md:py-2 group text-neutral-700 dark:text-white box-gen"
        >
          <Sun className="w-4 h-4 stroke-zinc-900 dark:hidden" />
          <Moon className="hidden w-4 h-4 stroke-white dark:block" />
          <span className="sr-only">Cambiar tema</span>
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
        <Menu.Items className="absolute right-0 z-10 w-auto mt-2 font-semibold origin-top-right divide-y divide-gray-100 rounded-md shadow-lg body-primary box-gen ">
          <div className="py-1">
            <Menu.Item onClick={() => setTheme('light')}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? ' body-primary'
                      : 'text-zinc-700 dark:text-white/90',
                    'group flex items-center px-4 py-2 text-sm '
                  )}
                >
                  <Sun
                    className="w-5 h-5 mr-3 body-primary group-hover:text-indigo-600 dark:group-hover:text-indigo-500"
                    aria-hidden="true"
                  />
                  <span className="dark:drop-shadow">Claro</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item onClick={() => setTheme('dark')}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? ' body-primary'
                      : 'text-zinc-700 dark:text-white/90',
                    'group flex items-center px-4 py-2 text-sm'
                  )}
                >
                  <Moon
                    className="w-5 h-5 mr-3 body-primary group-hover:text-indigo-600 dark:group-hover:text-indigo-500"
                    aria-hidden="true"
                  />
                  <span className="dark:drop-shadow">Oscuro</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item onClick={() => setTheme('system')}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? ' body-primary'
                      : 'text-zinc-700 dark:text-white/90',
                    'group flex items-center px-4 py-2 text-sm'
                  )}
                >
                  <Laptop
                    className="w-5 h-5 mr-3 body-primary group-hover:text-indigo-600 dark:group-hover:text-indigo-500"
                    aria-hidden="true"
                  />
                  <span className="dark:drop-shadow">Sistema</span>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
