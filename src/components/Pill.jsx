import clsx from 'clsx'

const variantStyles = {
  new: [
    {
      style: 'bg-red-600',
      name: 'nuevo',
    },
  ],
  affiliate: [
    {
      style: 'bg-orange-400 animate-none',
      name: 'afiliado',
    },
  ],
}

export function Pill({ variant = 'new', className }) {
  className = clsx(variantStyles[variant][0].style)

  return (
    <div className="inline-flex items-center px-1 py-1 text-xs font-semibold rounded-full pointer-events-auto bg-zinc-100/40 text-zinc-900 backdrop-blur dark:border dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-100">
      <div className="flex items-center justify-center w-3 h-3">
        <span
          className={`absolute inline-flex w-2 h-2 rounded-full opacity-75 animate-ping  ${className}`}
        ></span>
        <span
          className={`relative inline-flex w-2 h-2 rounded-full ${className}`}
        ></span>
      </div>
    </div>
  )
}
