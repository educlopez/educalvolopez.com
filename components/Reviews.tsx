'use client'

import { useRef } from 'react'
import { reviews } from '@/data/reviews'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { FADE_IN_ANIMATION_CARD } from '@/lib/constants'

function Review({ title, body, author, className, ...props }) {
  return (
    <motion.figure
      className={clsx(
        'rounded-3xl border border-black/10 bg-zinc-50/70 shadow p-6 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20 dark:backdrop-blur',
        className
      )}
      {...props}
      {...FADE_IN_ANIMATION_CARD}
    >
      <blockquote className="text-neutral-900 dark:text-zinc-100">
        <p className="text-sm font-semibold leading-6 before:content-['“'] after:content-['”']">
          {body}
        </p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-neutral-700 dark:text-zinc-400">
        {author} - {title}
      </figcaption>
    </motion.figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  return (
    <div className={clsx('space-y-8 py-4', className)}>
      {reviews.map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative grid items-start grid-cols-1 gap-8 overflow-hidden sm:mt-5 md:grid-cols-2 lg:grid-cols-3"
    >
      <ReviewColumn
        reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
        reviewClassName={(reviewIndex) =>
          clsx(
            reviewIndex >= columns[0].length + columns[2][0].length &&
              'md:hidden',
            reviewIndex >= columns[0].length && 'lg:hidden'
          )
        }
        msPerPixel={10}
      />
      <ReviewColumn
        reviews={[...columns[1], ...columns[2][1]]}
        className="hidden md:block"
        reviewClassName={(reviewIndex) =>
          reviewIndex >= columns[1].length && 'lg:hidden'
        }
        msPerPixel={15}
      />
      <ReviewColumn
        reviews={columns[2].flat()}
        className="hidden lg:block"
        msPerPixel={10}
      />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <h2
        id="reviews-title"
        className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white"
      >
        Testimonios
      </h2>
      <ReviewGrid />
    </section>
  )
}
