'use client'

import { useState } from 'react'

type StatusType = {
  Available: {
    name: string
    color: string
  }
  NotAvailable: {
    name: string
    color: string
  }
}

const Status: StatusType[] = [
  {
    Available: {
      name: 'Disponible para nuevos proyectos',
      color: 'lime',
    },
    NotAvailable: {
      name: 'No disponible actualmente para nuevos proyectos',
      color: 'red',
    },
  },
]

type PropsType = {
  isAvailable?: boolean
  className?: string
}

export function StatusWork({
  isAvailable = true,
  className,
}: PropsType): JSX.Element {
  const [status, setStatus] = useState(
    isAvailable ? Status[0].Available : Status[0].NotAvailable
  )
  const bgColorClass =
    status === Status[0].Available ? 'bg-lime-400' : 'bg-red-600'
  return (
    <p className={className}>
      <span className="inline-flex items-center px-2 py-0 text-xs font-semibold border rounded-md pointer-events-auto border-black/10 bg-zinc-50/50 text-neutral-900 backdrop-blur dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-100">
        <span className="mr-1.5 flex h-3 w-3 items-center">
          <span
            className={`absolute inline-flex w-2 h-2 rounded-full opacity-75 animate-ping ${bgColorClass}`}
          ></span>
          <span
            className={`relative inline-flex w-2 h-2 rounded-full ${bgColorClass}`}
          ></span>
        </span>
        {status.name}
      </span>
    </p>
  )
}
