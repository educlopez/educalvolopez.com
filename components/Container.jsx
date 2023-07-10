import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={cn('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="max-w-full mx-auto">{children}</div>
    </div>
  )
})

export const Container = forwardRef(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

Container.Outer = OuterContainer
Container.Inner = InnerContainer
