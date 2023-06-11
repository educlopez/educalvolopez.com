import { Section } from '@/components/Section'

export function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}
export function ToolsSectionGrid({ children, title }) {
  return (
    <section className="md:border-l md:border-black/10 md:pl-6 md:dark:border-white/10">
      <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">
        {title}
      </h2>
      <ul
        role="list"
        className="grid grid-cols-3 mt-5 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8"
      >
        {children}
      </ul>
    </section>
  )
}
