import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

export default function useMouse() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    function handleMouseMove(event) {
      event.preventDefault()
      mouseX.set(event.pageX)
      mouseY.set(event.pageY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return { mouseX, mouseY }
}
