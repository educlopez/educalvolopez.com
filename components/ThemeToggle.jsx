import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeToggle({ ...props }) {
  const { setTheme } = useTheme()
  return (
    <div {...props}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="inline-flex px-3 py-3 transition rounded-full md:px-2 md:py-2 group text-neutral-700 dark:text-white box-gen">
            <Sun className="w-4 h-4 stroke-zinc-900 dark:hidden" />
            <Moon className="hidden w-4 h-4 stroke-white dark:block" />
            <span className="sr-only">Cambiar tema</span>
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={5}
            className="z-50 min-w-[8rem] overflow-hidden rounded-md border box-gen p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          >
            <DropdownMenu.Item
              onClick={() => setTheme('light')}
              className="flex items-center px-4 py-2 text-sm cursor-pointer body-primary group focus:bg-neutral-200/40 dark:focus:bg-black/30 focus:outline-indigo-700/50"
            >
              <Sun
                className="w-5 h-5 mr-3 body-primary group-hover:text-indigo-600 dark:group-hover:text-indigo-500"
                aria-hidden="true"
              />
              <span className="dark:drop-shadow ">Claro</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item
              onClick={() => setTheme('dark')}
              className="flex items-center px-4 py-2 text-sm cursor-pointer body-primary group focus:bg-neutral-200/40 dark:focus:bg-black/30 focus:outline-indigo-700/50"
            >
              <Moon
                className="w-5 h-5 mr-3 body-primary group-hover:text-indigo-600 dark:group-hover:text-indigo-500"
                aria-hidden="true"
              />
              <span className="dark:drop-shadow">Oscuro</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item
              onClick={() => setTheme('system')}
              className="flex items-center px-4 py-2 text-sm cursor-pointer body-primary group focus:bg-neutral-200/40 dark:focus:bg-black/30 focus:outline-indigo-700/50"
            >
              <Laptop
                className="w-5 h-5 mr-3 body-primary group-hover:text-indigo-600 dark:group-hover:text-indigo-500"
                aria-hidden="true"
              />
              <span className="dark:drop-shadow">Sistema</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
