import Image from 'next/image'
import Link from 'next/link'
import avatarImage from '@/images/avatar.png'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const avatarVariants = cva(
  'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 ',
  {
    variants: {
      size: {
        default: 'w-10',
        sm: 'w-6',
        lg: 'w-16',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)
export const ImgAvatar = ({ className, size, ...props }) => (
  <Link
    href="/"
    aria-label="Home"
    className={cn(
      avatarVariants({ size, className }),
      'block pointer-events-auto group rounded-full p-0.5 box-gen'
    )}
    {...props}
  >
    <Image
      src={avatarImage}
      alt="avatar Eduardo Calvo López"
      placeholder="blur"
      className={cn(avatarVariants({ size, className }), '')}
      priority
    />
  </Link>
)
export const ImgAvatarNav = ({ className, size, ...props }) => (
  <div className="group">
    <Image
      src={avatarImage}
      alt="avatar Eduardo Calvo López"
      placeholder="blur"
      className={cn(avatarVariants({ size, className }), '')}
      priority
    />
  </div>
)

export const Avatar = ({ mouseX, className, size, nav, ...props }) => (
  <>
    {nav ? (
      <ImgAvatarNav
        className={cn(avatarVariants({ size, className }))}
        {...props}
      />
    ) : (
      <ImgAvatar
        className={cn(avatarVariants({ size, className }))}
        {...props}
      />
    )}
  </>
)
