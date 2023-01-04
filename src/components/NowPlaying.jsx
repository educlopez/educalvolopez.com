import useSWR from 'swr';
import Image from 'next/image';

export default function NowPlaying() {

  const { data } = useSWR('/api/now-playing', async (input, init) => {
    const res = await fetch(input, init);
    return res.json();
    });

  return (
    <div className="flex gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
      {data?.songUrl ? (
        <Image src={data.albumImageUrl} width={50} height={50} alt={data.title} className="rounded-md"/>
      ) : (
        <svg className='h-6 stroke-zinc-700 dark:stroke-zinc-300' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l8.735 8.735m0 0a.374.374 0 11.53.53m-.53-.53l.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 010 5.304m2.121-7.425a6.75 6.75 0 010 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 01-1.06-2.122m-1.061 4.243a6.75 6.75 0 01-1.625-6.929m-.496 9.05c-3.068-3.067-3.664-7.67-1.79-11.334M12 12h.008v.008H12V12z" />
        </svg>
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
