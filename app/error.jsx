'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <p>Oh no, Algo salió mal ... ¿tal vez deberías recargar la página</p>
    </div>
  )
}
