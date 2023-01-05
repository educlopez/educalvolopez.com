import useSWR from 'swr';
import Image from 'next/image';
import { SignalSlashIcon } from '@heroicons/react/24/outline';
export default function NowPlaying() {

  const { data } = useSWR('/api/now-playing', async (input, init) => {
    const res = await fetch(input, init);
    return res.json();
    });

  return (
    <div className="flex gap-2 text-sm font-medium max-w-[14rem] text-zinc-600 dark:text-zinc-400">
      {data?.songUrl ? (
        <Image src={data.albumImageUrl} width={50} height={50} alt={data.title} className="rounded-md"/>
      ) : (
        <SignalSlashIcon className='h-6 stroke-zinc-700 dark:stroke-zinc-300' />
      )}
      <div className="inline-flex flex-col w-full max-w-full truncate">
        {data?.songUrl ? (
          <a
            className="font-medium text-gray-800 truncate capsize dark:text-gray-200 max-w-max"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        ) : (
          <p className="font-medium text-zinc-800 capsize dark:text-zinc-200">
            Sin reproducir
          </p>
        )}
        <p className="truncate text-zinc-500 capsize dark:text-zinc-300 max-w-max">
          {data?.artist ?? 'Spotify'}
        </p>
      </div>
    </div>
  );
}
