import clsx from 'clsx'

export function Prose({ children, className }) {
  return (
    <div className={clsx(className, 'prose text-slate-900 dark:text-white dark:prose-invert')}>{children}</div>
  )
}
