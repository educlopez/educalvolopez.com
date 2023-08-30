import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Section } from '@/components/ui/Section'

const gridVariants = cva(
  'grid grid-cols-3 mt-5 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 xl:gap-x-8',
  {
    variants: {
      size: {
        default: 'lg:grid-cols-5 grid-cols-2',
        two: 'lg:grid-cols-2 grid-cols-2',
        three: 'lg:grid-cols-3 grid-cols-2',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)
export function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}
export function ToolsSectionGrid({ children, title, size, className }) {
  return (
    <section className="md:border-l md:border-zinc-400/40 md:pl-6 md:dark:border-white/10">
      <h2 className="text-sm font-semibold body-primary">{title}</h2>
      <ul role="list" className={cn(gridVariants({ size, className }))}>
        {children}
      </ul>
    </section>
  )
}
