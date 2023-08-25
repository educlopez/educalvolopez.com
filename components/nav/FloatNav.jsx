'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { generalLinks } from '@/data/links'
import { AnimatePresence, motion } from 'framer-motion'

import { FADE_IN_ANIMATION_CARD } from '@/lib/constants'
import { cn } from '@/lib/utils'
import MobileNavigation from '@/components/nav/MobileNav'
import ThemeToggle from '@/components/nav/ThemeToggle'
import { Avatar } from '@/components/ui/Avatar'
import { Container } from '@/components/ui/Container'
import { Dock } from './Dock'

function NavItem({ href, children, target, rel, onMouseEnter, onMouseLeave }) {
  let isActive = useRouter().pathname === href
  return (
    <li className="flex items-center">
      <Link
        target={target}
        rel={rel}
        href={href}
        className={cn(
          'relative block px-3  transition',
          isActive
            ? 'text-indigo-600 dark:text-indigo-400'
            : 'hover:text-indigo-600 dark:hover:text-indigo-400'
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
        {isActive && (
          <span className="absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 dark:from-indigo-400/0 dark:via-indigo-400/40 dark:to-indigo-400/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <nav {...props}>
      <ul className="flex gap-2 px-3 py-2 text-sm font-semibold transition rounded-xl text-neutral-900 hover:text-neutral-900 dark:text-white/90 dark:hover:text-white box-gen">
        <Avatar />
        {generalLinks.map((link, index) => {
          if (index !== 5) {
            return (
              <NavItem
                key={index}
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : ''}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.label}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute inset-0 transition-colors rounded-md -z-10 bg-indigo-100/70 dark:bg-zinc-700/50"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
              </NavItem>
            )
          }
        })}
        <div className="flex items-center pointer-events-auto">
          <ThemeToggle />
        </div>
      </ul>
    </nav>
  )
}

export function FloatNav() {
  return (
    <>
      <Dock className="hidden pointer-events-auto md:flex" />
      <motion.header
        className="fixed z-10 flex flex-col w-full bottom-8 md:hidden"
        {...FADE_IN_ANIMATION_CARD}
      >
        <div className="h-16">
          <Container className="w-full">
            <div className="relative flex gap-4">
              <div className="flex justify-end flex-1 md:justify-center">
                <MobileNavigation className="pointer-events-auto" />
                <ThemeToggle className="ml-2" />
              </div>
            </div>
          </Container>
        </div>
      </motion.header>
    </>
  )
}
