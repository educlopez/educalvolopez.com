import { useId } from 'react'

export function Section({ title, children }) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="md:border-l md:border-zinc-900/10 md:pl-6 md:dark:border-white/10"
    >
      <div className="grid items-baseline max-w-3xl grid-cols-1 gap-y-8 md:grid-cols-4">
        <h2
          id={id}
          className="text-sm font-semibold text-zinc-900 dark:text-white"
        >
          {title}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
