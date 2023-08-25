import { cn } from '@/lib/utils'

export function Prose({ children, className }) {
  return (
    <div className={cn(className, 'prose dark:prose-invert body-primary')}>
      {children}
    </div>
  )
}
