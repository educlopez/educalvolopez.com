import { useState } from 'react'

const Status = [
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

export function StatusWork({ isAvailable }) {
  const [status, setStatus] = useState(
    isAvailable ? Status[0].Available : Status[0].NotAvailable
  )
  const bgColorClass =
    status === Status[0].Available ? 'bg-lime-400' : 'bg-red-600'
  return (
    <p>
      <span className="inline-flex items-center px-2 py-0 text-xs font-semibold border rounded-md pointer-events-auto border-zinc-200 bg-white/10 text-zinc-900 backdrop-blur dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-100">
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
