'use client'
import { useState } from 'react'
import Link from 'next/link'
import { generalLinks } from '@/data/links'
import { AnimatePresence, motion } from 'framer-motion'

import { FADE_IN_ANIMATION_CARD } from '@/lib/constants'
import { Container } from '@/components/Container'
import { SpotifyPlayer } from '@/components/NowPlaying'

function NavLink({ href, children, target, rel, onMouseEnter, onMouseLeave }) {
  return (
    <Link
      href={href}
      className="relative transition hover:text-indigo-600 dark:hover:text-indigo-500"
      target={target}
      rel={rel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Link>
  )
}

export function Footer() {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <motion.footer className="mt-32" {...FADE_IN_ANIMATION_CARD}>
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-black/10 dark:border-white/10">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-zinc-900 dark:text-zinc-300 md:justify-start ">
                {generalLinks.map((link, index) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    target={link.target}
                    rel={link.target === '_blank' ? 'noopener noreferrer' : ''}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span className="px-2">{link.label}</span>
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
                  </NavLink>
                ))}
              </div>
              <SpotifyPlayer />
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </motion.footer>
  )
}
