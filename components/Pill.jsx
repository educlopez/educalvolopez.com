import { cn } from '@/lib/utils'

export function Pill({ className, children, icon }) {
  const IconComponent = icon
  return (
    <h2 className="inline-flex items-center px-2 py-1 mb-3 text-xs font-semibold body-primary box-gen rounded-2xl">
      <IconComponent className="flex-none w-4 h-4 " />
      <span className="ml-1">{children}</span>
    </h2>
  )
}
