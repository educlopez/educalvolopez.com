/* This example requires Tailwind CSS v2.0+ */
import { Component, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

import DarkSwitch from './darkSwitch.js';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
];
/*const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];*/

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MyNav({ home }) {
  return (
    <Popover className="relative bg-transparent">
      <div className="max-w-full">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Edu Calvo</span>
            <div className="w-auto h-8 sm:h-10">
              {home ? (
                <Image
                  priority
                  className="rounded-full"
                  src="/images/profile.jpg"
                  height={44}
                  width={44}
                  alt="foto Edu"
                />
              ) : (
                <Link href="/">
                  <a>
                    <Image
                      priority
                      src="/images/logo_edu.svg"
                      height={44}
                      width={44}
                      alt="logo Edu"
                    />
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md dark:text-white dark:bg-black dark:bg-dark hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open
                        ? 'text-black dark:text-white'
                        : 'text-black dark:text-white',
                      'group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-primary-500 focus:outline-none'
                    )}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open
                          ? 'text-black dark:text-white'
                          : 'text-black dark:text-white',
                        'ml-2 h-5 w-5 group-hover:text-white'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black dark:ring-gray-600 ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white dark:bg-gray-900 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-black"
                            >
                              <item.icon
                                className="flex-shrink-0 w-6 h-6 text-primary-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        {/*<div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                              >
                                <item.icon
                                  className="flex-shrink-0 w-6 h-6 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                          </div>*/}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="/blog"
              className="text-base font-medium text-black dark:text-white hover:text-primary-500"
            >
              Blog
            </a>
          </Popover.Group>

          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <DarkSwitch />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    priority
                    className="w-auto h-8 rounded-full"
                    src="/images/profile.jpg"
                    height={44}
                    width={44}
                    alt="foto Edu"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md dark:text-white dark:bg-gray-900 ">
                    <span className="sr-only">Cerrar menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-3 -m-3 border-gray-900 rounded-md hover:bg-gray-700"
                    >
                      <item.icon
                        className="flex-shrink-0 w-6 h-6 text-primary-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/blog"
                  className="text-base font-medium text-gray-900 dark:text-white hover:text-gray-700"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
