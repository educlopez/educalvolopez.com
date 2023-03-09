import clsx from 'clsx'

export function Prose({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        'prose text-zinc-900 dark:prose-invert dark:text-white'
      )}
    >
      {children}
    </div>
  )
}
