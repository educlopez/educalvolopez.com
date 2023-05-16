import logoAneto from '@/images/logos/circle/aneto.svg'
import logoDentaid from '@/images/logos/circle/dentaid.svg'
import logoJane from '@/images/logos/circle/jane.svg'
import logoNet2phone from '@/images/logos/circle/net2phone.svg'
import logoTantra from '@/images/logos/circle/tantra.svg'

export const projects = [
  {
    name: 'Sms Net2phone',
    description:
      'Dashboard en Laravel para el envío y gestión de sms para la empresa Net2phone',
    link: { href: 'https://sms.net2phone.es/login', label: 'sms.net2phone.es' },
    logo: logoNet2phone,
  },
  {
    name: 'Tantra Spain',
    description:
      'Website en Laravel con catálogo auto gestionable por el cliente',
    link: { href: 'https://tantraspain.com/', label: 'tantraspain.com' },
    logo: logoTantra,
  },
  {
    name: 'Aneto',
    description:
      'Tienda online de caldos realizada en Prestashop para la empresa Aneto ',
    link: { href: 'https://tiendaneto.com/es/', label: 'tiendaneto.com' },
    logo: logoAneto,
  },
  {
    name: 'Janeworld',
    description:
      'Multitienda online de productos de bebés realizada en Prestashop',
    link: { href: 'https://janeworld.com/', label: 'janeworld.com' },
    logo: logoJane,
  },
  {
    name: 'Dentaid & Waterpike',
    description: 'Tiendas online de productos para el cuidado dental ',
    link: {
      href: 'https://www.dentaidcomprasonline.pe/',
      label: 'dentaidcomprasonline.pe',
    },
    logo: logoDentaid,
  },
]
