import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

function usePlayerState(path) {
  const { data, error, isLoading } = useSWR(`/api/spotify/${path}`, fetcher)

  return {
    song: data,
    isLoading,
    isError: error,
  }
}

function Song({
  as: Component = 'div',
  artist,
  title,
  songUrl,
  album,
  albumImageUrl,
  isPlaying,
}) {
  return (
    <Component className="flex items-center space-x-4  max-w-[14rem]">
      {isPlaying}
      <Song.Album album={album} albumImageUrl={albumImageUrl} />
      <div className="inline-flex flex-col w-full max-w-full truncate">
        <Song.Title title={title} songUrl={songUrl} />
        <Song.Artist artist={artist} />
      </div>
    </Component>
  )
}

Song.Album = function SongAlbum({ album, albumImageUrl }) {
  return (
    <Image
      width="64"
      height="64"
      alt={album}
      src={albumImageUrl}
      className="object-cover rounded-md aspect-square"
    />
  )
}

Song.Title = function SongTitle({ title, songUrl, className }) {
  return (
    <Link
      href={songUrl}
      className="font-medium text-gray-800 truncate capsize max-w-max dark:text-gray-200"
    >
      {title}
    </Link>
  )
}

Song.Artist = function SongArtist({ as: Component = 'p', artist }) {
  return (
    <Component className="truncate capsize max-w-max text-zinc-500 dark:text-zinc-300">
      {artist}
    </Component>
  )
}

Song.Skeleton = function SongSkeleton() {
  return (
    <div className="flex items-center space-x-4 animate-pulse">
      <div className="w-[64px] h-[64px] bg-zinc-100 rounded-2xl dark:bg-zinc-900" />
      <div>
        <p className="w-[128px] h-3 bg-zinc-100 rounded-2xl dark:bg-zinc-900" />
        <p className="mt-3 w-[128px] h-3 bg-zinc-100 rounded-2xl dark:bg-zinc-900" />
      </div>
    </div>
  )
}

export function SpotifyPlayer() {
  const currentlyPlaying = usePlayerState('currently-playing')
  const lastPlayed = usePlayerState('last-played')

  if (currentlyPlaying.isError || lastPlayed.isError) return null

  return (
    <div className="grid">
      {currentlyPlaying.isLoading ? (
        <Song.Skeleton />
      ) : currentlyPlaying.song?.isPlaying ? (
        <Song {...currentlyPlaying.song} />
      ) : lastPlayed.isLoading ? (
        <Song.Skeleton />
      ) : (
        <Song {...lastPlayed.song} />
      )}
    </div>
  )
}
