import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoTantra from '@/images/logos/logo-tantra.svg'
import logoUam from '@/images/logos/logo-uam.svg'
import logoBancsabadell from '@/images/logos/logo-bancsabadell.svg'
import logoRingsouth from '@/images/logos/logo-ringsouth.svg'
import logoNet2phone from '@/images/logos/logo-net2phone.svg'
import logoOtro from '@/images/logos/logo-net2phone.svg'

const clients = [
  {
    name: 'Net2phone',
    darklogo: logoNet2phone,
    lightlogo: logoNet2phone,
  },
  {
    name: 'Tantra',
    darklogo: logoTantra,
    lightlogo: logoTantra,
  },
  {
    name: 'Universidad Autonoma de Madrid',
    darklogo: logoUam,
    lightlogo: logoUam,
  },
  {
    name: 'Banco Sabadell',
    darklogo: logoBancsabadell,
    lightlogo: logoBancsabadell,
  },
  {
    name: 'Ringsouth',
    darklogo: logoRingsouth,
    lightlogo: logoRingsouth,
  },
  {
    name: 'otro',
    darklogo: logoOtro,
    lightlogo: logoOtro,
  },
]
export default function Clients() {
    return (

        <div className="bg-white/20 dark:bg-slate-900/50 rounded-2xl border-zinc-100 dark:border-zinc-700/40 backdrop-blur">
      <div className="px-5 mx-auto my-16 max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-2xl">
              ¿Quieres saber con quién he trabajado?
            </h2>
            <p className="max-w-3xl mt-3 text-sm text-slate-800 dark:text-slate-400">
              He tenido la oportunidad de trabajar con grandes marcas como Banco Sabadell, Janè y Aneto, pero también he colaborado con negocios más pequeños como tiendas de ropa o talleres de coches.
              <br></br>
              Me encanta poder ayudar a todos mis clientes, sin importar el tamaño de su negocio, y siempre me esfuerzo por entregar un trabajo de calidad y de acuerdo a sus necesidades.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
          {clients.map((client) => (
            <div className="flex justify-center col-span-1 px-8 py-8" key={client.name}>

              <Image
              className="max-h-12 lightness"
              src={client.lightlogo}
              alt={client.name}
            />
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
}
