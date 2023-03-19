import { Fragment, useEffect, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { Briefcase, Home, Newspaper, Star, User } from 'lucide-react'

const projects = [
  { id: 1, name: 'Website Redesign', url: '#' },
  { id: 2, name: 'Otro', url: '#' },
  // More projects...
]
const recent = [projects[0]]
const quickActions = [
  {
    name: 'Inicio',
    icon: Home,
    shortcut: 'I',
    url: '/',
  },
  {
    name: 'Saber más sobre mi',
    icon: User,
    shortcut: 'N',
    url: '/about',
  },
  { name: 'Ir al blog', icon: Newspaper, shortcut: 'F', url: '/blog' },
  {
    name: 'Ver proyectos',
    icon: Briefcase,
    shortcut: 'H',
    url: '/proyectos',
  },
  {
    name: 'Recomendaciones',
    icon: Star,
    shortcut: 'L',
    url: '/recomendaciones',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CommandMenu() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  /* A hook that is listening for a keydown event. */
  useEffect(() => {
    function onkeydown(event) {
      if (event.key == 'k' && (event.metaKey || event.ctrlKey)) {
        setOpen(!open)
      }
    }
    window.addEventListener('keydown', onkeydown)
    return () => {
      window.removeEventListener('keydown', onkeydown)
    }
  }, [open])

  /* Filtering the projects array by the query. */
  const filteredProjects =
    query === ''
      ? []
      : projects.filter((project) => {
          return project.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery('')}
      appear
    >
      <Dialog as="div" className="relative z-[90]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 p-4 overflow-y-auto sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="max-w-2xl p-6 mx-auto overflow-hidden transition-all transform divide-y shadow-2xl divide-zinc-700 divide-opacity-10 rounded-xl border-zinc-900/10 bg-white/80 ring-1 ring-black ring-opacity-5 backdrop-blur-sm backdrop-filter dark:divide-zinc-700 dark:border-white/10 dark:bg-zinc-900/80 dark:backdrop-blur">
              <Combobox onChange={(item) => (window.location = item.url)}>
                {/*  <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-zinc-600 dark:text-white"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="w-full h-12 pr-4 bg-transparent border-0 pl-11 text-zinc-800 placeholder-zinc-600 focus:ring-0 dark:text-white dark:placeholder-white sm:text-sm"
                    placeholder="Buscar..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
  </div>*/}

                {(query === '' || filteredProjects.length > 0) && (
                  <Combobox.Options
                    static
                    className="overflow-y-auto divide-y divide-gray-100 max-h-80 scroll-py-2"
                  >
                    {/*<li className="p-2">
                      {query === '' && (
                        <h2 className="px-3 mt-4 mb-2 text-xs font-semibold text-zinc-600 dark:text-white">
                          Busquedas recientes
                        </h2>
                      )}
                      <ul className="text-sm text-zinc-600 dark:text-white">
                        {(query === '' ? recent : filteredProjects).map(
                          (project) => (
                            <Combobox.Option
                              key={project.id}
                              value={project}
                              className={({ active }) =>
                                classNames(
                                  'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                  active && 'bg-amber-600 text-white'
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <FolderIcon
                                    className={classNames(
                                      'h-6 w-6 flex-none',
                                      active
                                        ? 'text-white'
                                        : 'text-zinc-600 dark:text-white'
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="flex-auto ml-3 truncate">
                                    {project.name}
                                  </span>
                                  {active && (
                                    <span className="flex-none ml-3 text-amber-100">
                                      Ir a...
                                    </span>
                                  )}
                                </>
                              )}
                            </Combobox.Option>
                          )
                        )}
                      </ul>
                    </li>*/}
                    {query === '' && (
                      <li className="p-2">
                        <h2 className="sr-only">Quick actions</h2>
                        <ul className="text-sm text-zinc-600 dark:text-white">
                          {quickActions.map((action) => (
                            <Combobox.Option
                              key={action.shortcut}
                              value={action}
                              className={({ active }) =>
                                classNames(
                                  'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                  active && 'bg-amber-600 text-white'
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <action.icon
                                    className={classNames(
                                      'h-6 w-6 flex-none',
                                      active
                                        ? 'text-white'
                                        : 'text-zinc-600 dark:text-white'
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="flex-auto ml-3 truncate">
                                    {action.name}
                                  </span>
                                  {/* <span
                                    className={classNames(
                                      'ml-3 flex-none text-xs font-semibold',
                                      active
                                        ? 'text-indigo-100'
                                        : 'text-gray-400'
                                    )}
                                  >
                                    <kbd className="font-sans">⌘</kbd>
                                    <kbd className="font-sans">
                                      {action.shortcut}
                                    </kbd>
                                    </span>*/}
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {/* {query !== '' && filteredProjects.length === 0 && (
                  <div className="px-6 text-center py-14 sm:px-14">
                    <FolderIcon
                      className="w-6 h-6 mx-auto text-zinc-600 dark:text-white"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm text-zinc-600 dark:text-white">
                      Sin proyectos.
                    </p>
                  </div>
               )}*/}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
