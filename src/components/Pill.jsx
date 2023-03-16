import clsx from 'clsx'

const variantStyles = {
  new: [
    {
      style:
        'bg-emerald-100/50 text-emerald-700 ring-1 ring-inset ring-emerald-700/90 hover:text-emerald-900 hover:ring-emerald-900 dark:bg-emerald-400/10 dark:text-emerald-400  dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300',
      name: 'nuevo',
    },
  ],
  affiliate: [
    {
      style:
        'bg-amber-100/50  text-amber-700 ring-1 ring-inset ring-amber-700/90 hover:text-amber-900 hover:ring-amber-900 dark:bg-amber-400/10 dark:text-amber-400  dark:ring-amber-400/20 dark:hover:bg-amber-400/10 dark:hover:text-amber-300 dark:hover:ring-amber-300',
      name: 'afiliado',
    },
  ],
}

export function Pill({ variant = 'new', className, ...props }) {
  className = clsx(
    'transition flex-inline select-none items-center justify-center rounded-full py-1 px-3  text-[9px] font-semibold uppercase tracking-wide',
    variantStyles[variant][0].style,
    className
  )

  return (
    <span className={className} {...props}>
      {variantStyles[variant][0].name}
    </span>
  )
}
