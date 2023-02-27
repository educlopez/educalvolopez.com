import Image from 'next/image';
import { BriefcaseIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/Button';
import { ReadcvIcon } from '@/components/SocialIcons';
import logoTantra from '@/images/logos/tantra.svg';
import logoBdo from '@/images/logos/bdo.svg';
import logoAdraba from '@/images/logos/adraba.svg';
import logoCinetic from '@/images/logos/cineticdigital.svg';
import logoPapayagroup from '@/images/logos/papayagroup.svg';

export default function Resume() {
  let resume = [
    {
      company: 'Cinetic Digital',
      title: 'Diseñador Gráfico y Maquetador Web',
      logo: logoCinetic,
      start: '2021',
      end: {
        label: 'Presente',
        dateTime: new Date().getFullYear()
      }
    },
    {
      company: 'Ádraba',
      title: 'Diseñador Gráfico y Desarrollador Web',
      logo: logoAdraba,
      start: '2018',
      end: '2021'
    },
    {
      company: 'Tantra',
      title: 'Diseñador Gráfico y maquetador web',
      logo: logoTantra,
      start: '2015',
      end: '2019'
    },
    {
      company: 'BDO',
      title: 'Diseñador en Marketing y comunicación',
      logo: logoBdo,
      start: '2016',
      end: '2017'
    },
    {
      company: 'Papaya Group',
      title: 'Diseñador Gráfico',
      logo: logoPapayagroup,
      start: '2014',
      end: '2014'
    }
  ];

  return (
    <div className="rounded-2xl border border-zinc-900/10 bg-white/10 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20 dark:backdrop-blur">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Trabajo</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-white">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-600 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-600 dark:text-zinc-400"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <div className="flex gap-4">
        <Button
          href="https://read.cv/educlopez"
          variant="secondary"
          className="group mt-6 w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReadcvIcon className="h-6 w-6 fill-zinc-400 transition group-active:fill-zinc-600 dark:group-hover:fill-zinc-50 dark:group-active:fill-zinc-50" />
          Cv online
        </Button>
        <Button
          href="eduardo_calvo_lopez_curriculum_vitae.pdf"
          variant="secondary"
          className="group mt-6 w-full"
          target="_blank"
        >
          Descargar Cv
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  );
}
