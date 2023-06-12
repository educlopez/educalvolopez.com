'use client';

import { useState } from 'react';
import { stacks } from '@/data/stacks';
import { Switch } from '@headlessui/react';
import useSound from 'use-sound';



import { Toolgrid, Toollist } from '@/components/ToolItem';
import { ToolsSection, ToolsSectionGrid } from '@/components/ToolsSections';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function filterStacks(stacks, type) {
  return stacks.filter((stack) => stack.type === type)
}

export function SwitchTool() {
  const development = filterStacks(stacks, 'development')
  const workstation = filterStacks(stacks, 'workstation')
  const design = filterStacks(stacks, 'design')
  const productivity = filterStacks(stacks, 'productivity')
  const [view, setView] = useState('list')
  const [enabled, setEnabled] = useState(false)
  const [click] = useSound('sounds/switch.mp3', { volume: 0.25 })
  return (
    <>
      <div className="relative z-20 flex items-center justify-start gap-4 px-4 py-2 my-16 border dark:backdrop-blurbackdrop-blur w-fit rounded-3xl border-black/10 bg-white/10 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20">
        <span>Vista</span>
        <Switch
          checked={enabled}
          onClick={click}
          onChange={() => {
            setView(view === 'list' ? 'grid' : 'list')
            setEnabled(!enabled)
          }}
          className={classNames(
            enabled ? 'bg-indigo-600' : 'bg-zinc-400/60 dark:bg-zinc-700',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
          >
            <span
              className={classNames(
                enabled
                  ? 'opacity-0 duration-100 ease-out'
                  : 'opacity-100 duration-200 ease-in',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
              )}
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-gray-400 dark:text-zinc-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </span>
            <span
              className={classNames(
                enabled
                  ? 'opacity-100 duration-200 ease-in'
                  : 'opacity-0 duration-100 ease-out',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
              )}
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-indigo-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </span>
          </span>
        </Switch>
      </div>
      {view === 'list' ? (
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            {workstation.map((stack) => (
              <Toollist
                title={stack.title}
                href={stack.link}
                key={stack.title}
                pills={stack.pills}
              >
                {stack.info}
              </Toollist>
            ))}
          </ToolsSection>
          <ToolsSection title="Desarrollo">
            {development.map((stack) => (
              <Toollist
                title={stack.title}
                href={stack.link}
                key={stack.title}
                pills={stack.pills}
              >
                {stack.info}
              </Toollist>
            ))}
          </ToolsSection>
          <ToolsSection title="Diseño">
            {design.map((stack) => (
              <Toollist
                title={stack.title}
                href={stack.link}
                key={stack.title}
                pills={stack.pills}
              >
                {stack.info}
              </Toollist>
            ))}
          </ToolsSection>
          <ToolsSection title="Productividad">
            {productivity.map((stack) => (
              <Toollist
                title={stack.title}
                href={stack.link}
                key={stack.title}
                pills={stack.pills}
              >
                {stack.info}
              </Toollist>
            ))}
          </ToolsSection>
        </div>
      ) : (
        <div className="space-y-20">
          <ToolsSectionGrid title="Workstation">
            {workstation.map((stack) => (
              <Toolgrid
                title={stack.title}
                href={stack.link}
                key={stack.title}
                img={stack.img}
                pills={stack.pills}
              >
                {stack.title}
              </Toolgrid>
            ))}
          </ToolsSectionGrid>
          <ToolsSectionGrid title="Desarrollo">
            {development.map((stack) => (
              <Toolgrid
                title={stack.title}
                href={stack.link}
                key={stack.title}
                img={stack.img}
                pills={stack.pills}
              >
                {stack.title}
              </Toolgrid>
            ))}
          </ToolsSectionGrid>
          <ToolsSectionGrid title="Diseño">
            {design.map((stack) => (
              <Toolgrid
                title={stack.title}
                href={stack.link}
                key={stack.title}
                img={stack.img}
                pills={stack.pills}
              >
                {stack.title}
              </Toolgrid>
            ))}
          </ToolsSectionGrid>
          <ToolsSectionGrid title="Productividad">
            {productivity.map((stack) => (
              <Toolgrid
                title={stack.title}
                href={stack.link}
                key={stack.title}
                img={stack.img}
                pills={stack.pills}
              >
                {stack.title}
              </Toolgrid>
            ))}
          </ToolsSectionGrid>
        </div>
      )}
    </>
  )
}