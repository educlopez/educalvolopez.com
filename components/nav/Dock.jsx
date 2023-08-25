'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { generalLinks } from '@/data/links'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'
import { Avatar } from '@/components/ui/Avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip'

export function Dock({ className }) {
  let mouseX = useMotionValue(Infinity)

  return (
    <div
      className={cn(
        'fixed z-10 flex flex-col bottom-8 left-1/2 -translate-x-1/2',
        className
      )}
    >
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end h-16 gap-4 px-4 pb-2.5 mx-auto outline-0 rounded-2xl box-gen ring-1 ring-zinc-200 dark:ring-[#1a1a1a]"
      >
        {generalLinks.map((link, i) => {
          return (
            <TooltipProvider key={i}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <AppIcon
                    href={link.href}
                    rel={link.target === '_blank' ? 'noopener noreferrer' : ''}
                    target={link.target}
                    aria-label={link.label}
                    icon={link.icon}
                    outline={link.outline}
                    mouseX={mouseX}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        })}
        <hr className=" h-10 w-[1px] bg-neutral-300 dark:bg-neutral-700 mt-2.5 border-none"></hr>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <ThemeToggleNav mouseX={mouseX} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Tema</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
    </div>
  )
}

export function AppIcon({
  icon: Icon,
  outline,
  href,
  children,
  target,
  rel,
  mouseX,
  ...props
}) {
  let ref = useRef()

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <Link href={href} rel={rel} target={target} {...props}>
      <motion.div
        ref={ref}
        style={{ width }}
        className="z-30 flex items-center justify-center w-10 rounded-full bg-neutral-200/70 dark:bg-neutral-900/70 aspect-square box-gen "
      >
        {Icon === 'Avatar' ? (
          <Avatar className="w-full" nav={true} />
        ) : (
          <Icon
            size={40}
            className="w-6/12 transition fill-white dark:fill-neutral-600 dark:stroke-neutral-300 stroke-neutral-900"
          />
        )}
      </motion.div>
    </Link>
  )
}

export function ThemeToggleNav({ className, rel, mouseX, ...props }) {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)
  let ref = useRef()

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="z-30 flex items-center justify-center w-10 rounded-full cursor-pointer bg-neutral-200/70 dark:bg-neutral-900/70 aspect-square box-gen"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      onClick={() => setTheme(otherTheme)}
    >
      <Sun
        size={40}
        className="w-6/12 transition fill-white dark:fill-neutral-600 dark:hidden dark:stroke-neutral-300 stroke-neutral-900"
      />
      <Moon
        size={40}
        className="hidden w-6/12 transition fill-white dark:fill-neutral-600 dark:block dark:stroke-neutral-300 stroke-neutral-900"
      />
    </motion.div>
  )
}
