import { ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils'

const variantStyles = {
  list: 'right-2 top-2 ',
  grid: 'top-2 right-2',
}
export default function LinkArrow({ variant = 'list', className, ...props }) {
  className = cn(
    'absolute z-20 flex items-center justify-center w-6 h-6 transition-colors rounded-full ring-1 ring-black/10 group-hover:ring-0 group-hover:drop-shadow-md group-hover:bg-neutral-100 group-hover:text-neutral-900 text-black/60 dark:ring-white/30 dark:text-white/30',
    variantStyles[variant],
    className
  )
  return (
    <div className={className} {...props}>
      <ArrowUpRight size={16} />
    </div>
  )
}
