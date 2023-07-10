import Image from 'next/image'
import Link from 'next/link'
import avatarImage from '@/images/avatar.jpg'
import avatarImageHover from '@/images/avatarhover.jpg'
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
      className={cn(avatarVariants({ size, className }), 'group-hover:hidden')}
      priority
    />
    <Image
      src={avatarImageHover}
      alt="avatar Eduardo Calvo López"
      placeholder="blur"
      className={cn(
        avatarVariants({ size, className }),
        'hidden group-hover:flex'
      )}
      priority
    />
  </Link>
)

export const Avatar = ({ className, size, ...props }) => (
  <ImgAvatar className={cn(avatarVariants({ size, className }))} {...props} />
)
