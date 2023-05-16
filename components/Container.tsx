import { HTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

interface OuterContainerProps extends HTMLAttributes<HTMLDivElement> {}

const OuterContainer = forwardRef<HTMLDivElement, OuterContainerProps>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    )
  }
)

interface InnerContainerProps extends HTMLAttributes<HTMLDivElement> {}

const InnerContainer = forwardRef<HTMLDivElement, InnerContainerProps>(
  function InnerContainer({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="max-w-full mx-auto">{children}</div>
      </div>
    )
  }
)

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ children, ...props }, ref) {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    )
  }
)

Container.Outer = OuterContainer
Container.Inner = InnerContainer
