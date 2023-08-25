import { cn } from '@/lib/utils'

export function Pill({ className, children, icon }) {
  const IconComponent = icon
  return (
    <div
      className={cn(
        'inline-flex items-center h-8 gap-1 px-4 text-sm leading-5 body-primary box-gen rounded-2xl line-clamp-2',
        className
      )}
    >
      <IconComponent className="flex-none w-4 h-4" />
      <span>{children}</span>
    </div>
  )
}
