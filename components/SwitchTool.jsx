'use client'

import { useState } from 'react'
import { stacks } from '@/data/stacks'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Tool } from '@/components/ToolItem'
import { ToolsSection, ToolsSectionGrid } from '@/components/ToolsSections'

function filterStacks(stacks, type) {
  return stacks.filter((stack) => stack.type === type)
}
const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:box-gen data-[state=on]:text-accent-foreground',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'p-3',
        sm: 'p-2.5',
        lg: 'p-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
const Toggle = ({ className, variant, size, ...props }) => (
  <ToggleGroup.Item
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
)
export function SwitchTool() {
  const development = filterStacks(stacks, 'development')
  const workstation = filterStacks(stacks, 'workstation')
  const design = filterStacks(stacks, 'design')
  const productivity = filterStacks(stacks, 'productivity')
  const [view, setView] = useState('list')

  return (
    <>
      <div className="relative z-20 flex items-center justify-start gap-4 px-4 py-2 my-16 rounded-full w-fit box-gen">
        <ToggleGroup.Root
          type="single"
          defaultValue="list"
          aria-label="Modo List Grid"
        >
          <Toggle
            variant={view === 'list' ? 'outline' : 'default'}
            size="sm"
            value="list"
            aria-label="modo list"
            onClick={() => {
              setView('list')
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Toggle>
          <Toggle
            variant={view === 'grid' ? 'outline' : 'default'}
            size="sm"
            value="grid"
            aria-label="modo grid"
            onClick={() => {
              setView('grid')
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
          </Toggle>
        </ToggleGroup.Root>
      </div>
      {view === 'list' ? (
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            {workstation.map((stack) => (
              <Tool
                grid={false}
                title={stack.title}
                href={stack.link}
                key={stack.title}
              >
                {stack.info}
              </Tool>
            ))}
          </ToolsSection>
          <ToolsSection title="Desarrollo">
            {development.map((stack) => (
              <Tool
                grid={false}
                title={stack.title}
                href={stack.link}
                key={stack.title}
              >
                {stack.info}
              </Tool>
            ))}
          </ToolsSection>
          <ToolsSection title="Diseño">
            {design.map((stack) => (
              <Tool
                grid={false}
                title={stack.title}
                href={stack.link}
                key={stack.title}
              >
                {stack.info}
              </Tool>
            ))}
          </ToolsSection>
          <ToolsSection title="Productividad">
            {productivity.map((stack) => (
              <Tool
                grid={false}
                title={stack.title}
                href={stack.link}
                key={stack.title}
              >
                {stack.info}
              </Tool>
            ))}
          </ToolsSection>
        </div>
      ) : (
        <div className="space-y-20">
          <ToolsSectionGrid title="Workstation">
            {workstation.map((stack) => (
              <Tool
                grid={true}
                title={stack.title}
                href={stack.link}
                key={stack.title}
                img={stack.img}
              >
                {stack.title}
              </Tool>
            ))}
          </ToolsSectionGrid>
          <ToolsSectionGrid title="Desarrollo">
            {development.map((stack) => (
              <Tool
                grid={true}
                title={stack.title}
                href={stack.link}
                key={stack.title}
                img={stack.img}
              >
                {stack.title}
              </Tool>
            ))}
          </ToolsSectionGrid>
          <ToolsSectionGrid title="Diseño">
            {design.map((stack) => (
              <Tool
                grid={true}
                title={stack.title}
                href={stack.link}
                key={stack.title}
                img={stack.img}
              >
                {stack.title}
              </Tool>
            ))}
          </ToolsSectionGrid>
          <ToolsSectionGrid title="Productividad">
            {productivity.map((stack) => (
              <Tool
                grid={true}
                title={stack.title}
                href={stack.link}
                key={stack.title}
                img={stack.img}
              >
                {stack.title}
              </Tool>
            ))}
          </ToolsSectionGrid>
        </div>
      )}
    </>
  )
}
