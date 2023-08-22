'use client'

import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { cn } from '@/lib/utils'

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
    <Component className="flex items-center max-w-full space-x-4">
      {isPlaying}
      <Song.Album album={album} albumImageUrl={albumImageUrl} />
      <div className="inline-flex flex-col w-full max-w-full ">
        <Song.Title title={title} songUrl={songUrl} />
        <Song.Artist artist={artist} />
      </div>
    </Component>
  )
}

Song.Album = function SongAlbum({ album, albumImageUrl }) {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-20 w-8 h-8 m-auto bg-transparent border rounded-full border-white/20 dark:border-white/10 outline outline-1 outline-offset-4 dark:outline-white/10 outline-white/20"></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-20 w-1 h-1 m-auto bg-white rounded-full dark:bg-neutral-900"></div>
      <Image
        width="64"
        height="64"
        alt={album}
        src={albumImageUrl}
        className="absolute top-0 bottom-0 left-0 right-0 z-10 object-cover w-8 h-8 m-auto rounded-full aspect-square animate-[spin_3s_linear_infinite] "
      />
      <div className="bg-black border border-white rounded-full shadow-md h-14 w-14 dark:border-white/10 ring-1 ring-white/10 outline outline-1 outline-offset-0 outline-zinc-200 dark:outline-[#1a1a1a]"></div>
    </div>
  )
}

Song.Title = function SongTitle({ title, songUrl, className }) {
  return (
    <Link
      href={songUrl}
      className="font-semibold capsize max-w-max body-primary line-clamp-1"
    >
      {title}
    </Link>
  )
}

Song.Artist = function SongArtist({ as: Component = 'p', artist }) {
  return (
    <Component className=" capsize max-w-max body-secondary line-clamp-1">
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

export function SpotifyPlayer({ className }) {
  const currentlyPlaying = usePlayerState('currently-playing')
  const lastPlayed = usePlayerState('last-played')

  if (currentlyPlaying.isError || lastPlayed.isError) return null

  return (
    <div className={cn(className, 'rounded-2xl box-gen flex p-4')}>
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
