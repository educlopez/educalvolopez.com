import logoAdraba from '@/images/logos/circle/adraba.svg';
import logoBdo from '@/images/logos/circle/bdo.svg';
import logoCinetic from '@/images/logos/circle/cineticdigital.svg';
import logoPapayagroup from '@/images/logos/circle/papayagroup.svg';
import logoTantra from '@/images/logos/circle/tantra.svg';





export const resume = [
  {
    index: 1,
    company: 'Cinetic Digital',
    title: 'Diseñador Web y Frontend',
    logo: logoCinetic,
    start: '2021',
    end: {
      label: 'Presente',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    index: 2,
    company: 'Ádraba',
    title: 'Diseñador Gráfico y Desarrollador Web',
    logo: logoAdraba,
    start: '2018',
    end: '2021',
  },
  {
    index: 3,
    company: 'Tantra',
    title: 'Diseñador Gráfico y Maquetador web',
    logo: logoTantra,
    start: '2015',
    end: '2019',
  },
  {
    index: 4,
    company: 'BDO',
    title: 'Diseñador en Marketing y comunicación',
    logo: logoBdo,
    start: '2016',
    end: '2017',
  },
  {
    index: 5,
    company: 'Papaya Group',
    title: 'Diseñador Gráfico',
    logo: logoPapayagroup,
    start: '2014',
    end: '2014',
  },
]