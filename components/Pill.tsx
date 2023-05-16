import clsx from 'clsx'

interface VariantStyle {
  style: string
  name: string
}

interface VariantStyles {
  [key: string]: VariantStyle[]
}

const variantStyles: VariantStyles = {
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

interface PillProps {
  variant?: keyof VariantStyles
  className?: string
}

export function Pill({ variant = 'new', className }: PillProps): JSX.Element {
  className = clsx(variantStyles[variant][0].style)

  return (
    <div className="inline-flex items-center px-1 py-1 text-xs font-semibold rounded-full pointer-events-auto bg-zinc-100/40 text-neutral-900 backdrop-blur dark:border dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-100">
      <div className="flex items-center justify-center w-3 h-3">
        <span
          className={`absolute inline-flex w-2 h-2 rounded-full opacity-75 animate-ping ${className}`}
        ></span>
        <span
          className={`relative inline-flex w-2 h-2 rounded-full ${className}`}
        ></span>
      </div>
    </div>
  )
}
