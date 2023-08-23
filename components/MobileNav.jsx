import Link from 'next/link'
import { generalLinks } from '@/data/links'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'

export default function MobileNavigation(props) {
  return (
    <div {...props}>
      <DropdownMenu.Root {...props}>
        <DropdownMenu.Trigger asChild>
          <button className="inline-flex px-3 py-3 transition rounded-full md:px-2 md:py-2 group text-neutral-700 dark:text-white box-gen">
            <Menu className="w-4 h-4 stroke-zinc-900 dark:stroke-white" />
            <span className="sr-only">Menu movil</span>
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={5}
            className="z-50 min-w-[8rem] overflow-hidden rounded-md border box-gen p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          >
            <DropdownMenu.Item className="flex items-center px-4 py-2 text-sm cursor-pointer body-primary group focus:bg-neutral-200/40 dark:focus:bg-black/30 focus:outline-indigo-700/50">
              <Link href="/">
                <span className="dark:drop-shadow ">Inicio</span>
              </Link>
            </DropdownMenu.Item>
            {generalLinks.map((link, index) => {
              if (index !== 5) {
                return (
                  <DropdownMenu.Item
                    key={index}
                    className="flex items-center px-4 py-2 text-sm cursor-pointer body-primary group focus:bg-neutral-200/40 dark:focus:bg-black/30 focus:outline-indigo-700/50"
                  >
                    <Link
                      href={link.href}
                      target={link.target}
                      rel={
                        link.target === '_blank' ? 'noopener noreferrer' : ''
                      }
                    >
                      <span className="dark:drop-shadow ">{link.label}</span>
                    </Link>
                  </DropdownMenu.Item>
                )
              }
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
