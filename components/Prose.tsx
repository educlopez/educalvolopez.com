import clsx from 'clsx'

type ProseProps = {
  children: React.ReactNode
  className?: string
}

export function Prose({ children, className }: ProseProps): JSX.Element {
  return (
    <div
      className={clsx(
        className,
        'prose text-neutral-900 dark:prose-invert dark:text-white'
      )}
    >
      {children}
    </div>
  )
}
