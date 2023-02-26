import Image from 'next/image';
import { motion } from 'framer-motion';
import { FADE_IN_ANIMATION_CARD } from '@/lib/constants';

import logoTantra from '@/images/logos/logo-tantra.svg';
import logoUam from '@/images/logos/logo-uam.svg';
import logoBancsabadell from '@/images/logos/logo-bancsabadell.svg';
import logoRingsouth from '@/images/logos/logo-ringsouth.svg';
import logoNet2phone from '@/images/logos/logo-net2phone.svg';
import logoOtro from '@/images/logos/logo-net2phone.svg';

const clients = [
  {
    name: 'Net2phone',
    darklogo: logoNet2phone,
    lightlogo: logoNet2phone
  },
  {
    name: 'Tantra',
    darklogo: logoTantra,
    lightlogo: logoTantra
  },
  {
    name: 'Universidad Autonoma de Madrid',
    darklogo: logoUam,
    lightlogo: logoUam
  },
  {
    name: 'Banco Sabadell',
    darklogo: logoBancsabadell,
    lightlogo: logoBancsabadell
  },
  {
    name: 'Ringsouth',
    darklogo: logoRingsouth,
    lightlogo: logoRingsouth
  },
  {
    name: 'otro',
    darklogo: logoOtro,
    lightlogo: logoOtro
  }
];
export default function Clients() {
  return (
    <motion.div
      className="rounded-2xl border-zinc-900/10 bg-white/10 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20 dark:backdrop-blur"
      {...FADE_IN_ANIMATION_CARD}
    >
      <div className="mx-auto my-16 max-w-7xl px-5">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-2xl">
              ¿Quieres saber con quién he trabajado?
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400">
              He tenido la oportunidad de trabajar con grandes marcas como Banco
              Sabadell, Janè y Aneto, pero también he colaborado con negocios
              más pequeños como tiendas de ropa o talleres de coches.
              <br></br>
              Me encanta poder ayudar a todos mis clientes, sin importar el
              tamaño de su negocio, y siempre me esfuerzo por entregar un
              trabajo de calidad y de acuerdo a sus necesidades.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {clients.map((client) => (
              <div
                className="col-span-1 flex justify-center px-8 py-8"
                key={client.name}
              >
                <Image
                  className="lightness max-h-12"
                  src={client.lightlogo}
                  alt={client.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
