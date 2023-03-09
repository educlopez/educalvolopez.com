export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
}

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
}

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
}

export const FADE_IN_ANIMATION_CARD = {
  initial: { opacity: 0, y: -10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
}
export const FADE_IN_ANIMATION_CARD_HOVER = {
  initial: { opacity: 0, y: -10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  viewport: { once: true },
}
