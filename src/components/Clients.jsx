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
    logo: logoNet2phone,
  },
  {
    name: 'Tantra',
    logo: logoTantra,
  },
  {
    name: 'Universidad Autonoma de Madrid',
    logo: logoUam,
  },
  {
    name: 'Banco Sabadell',
    logo: logoBancsabadell,
  },
  {
    name: 'Ringsouth',
    logo: logoRingsouth,
  },
  {
    name: 'otro',
    logo: logoOtro,
  },
]
export default function Clients() {
    return (
        <div className="py-16 mx-auto max-w-7xl sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Clientes
            </h2>
            <div className="flow-root mt-8 lg:mt-10">
                <div className="flex flex-wrap justify-between -mt-4 -ml-8 lg:-ml-4">
                {clients.map((client) => (
                    <div className="flex flex-grow flex-shrink-0 py-10 mt-4 ml-8 text-center shadow-xl rounded-2xl lg:ml-4 lg:flex-grow-0 bg-white/30 dark:bg-zinc-800/50 shadow-blue-900/5 backdrop-blur" key={client.name}>
                        <Image className="h-12 fill-white" src={client.logo} alt={client.name} unoptimized/>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}
