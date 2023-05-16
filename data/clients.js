import bancosabadellLogo from '@/images/logos/color/bancosabadell-logo.svg';
import net2phoneLogo from '@/images/logos/color/net2phone-logo.svg';
import tantraLogo from '@/images/logos/color/tantra-logo.svg';
import uamLogo from '@/images/logos/color/uam-logo.svg';
import bancosabadellWhiteLogo from '@/images/logos/white/bancosabadell-logo.svg';
import net2phoneWhiteLogo from '@/images/logos/white/net2phone-logo.svg';
import tantraWhiteLogo from '@/images/logos/white/tantra-logo.svg';
import uamWhiteLogo from '@/images/logos/white/uam-logo.svg';

export const clients = [
  {
    name: 'Net2phone',
    imagecolor: net2phoneLogo,
    imagewhite: net2phoneWhiteLogo,
    url: 'https://www.net2phone.es/',
    urlname: 'net2phone.es',
    style: {
      width: 206,
    },
  },
  {
    name: 'Tantra Spain',
    imagecolor: tantraLogo,
    imagewhite: tantraWhiteLogo,
    url: 'https://tantraspain.com/',
    urlname: 'tantraspain.com',
    style: {
      height: 77,
    },
  },
  {
    name: 'Universidad Autonoma de Madrid',
    imagecolor: uamLogo,
    imagewhite: uamWhiteLogo,
    url: 'https://www.uam.es/',
    urlname: 'uam.es',
    style: {
      width: 288,
    },
  },
  {
    name: 'Banco Sabadell',
    imagecolor: bancosabadellLogo,
    imagewhite: bancosabadellWhiteLogo,
    url: 'https://www.bancsabadell.com/',
    urlname: 'bancsabadell.com',
    style: {
      width: 230,
    },
  },
]
export const DEFAULT_SIZE = {
  width: 180,
  height: 75,
}