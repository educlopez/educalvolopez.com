import { ArrowUpRight } from 'lucide-react'

export default function LinkArrow({}) {
  return (
    <div className="absolute z-20 flex items-center justify-center w-6 h-6 transition-colors rounded-full right-1 top-1 ring-1 ring-black/10 group-hover:ring-0 group-hover:drop-shadow-md group-hover:bg-neutral-100 group-hover:text-neutral-900 text-black/60 dark:ring-white/30 dark:text-white/30">
      <ArrowUpRight size={16} />
    </div>
  )
}
