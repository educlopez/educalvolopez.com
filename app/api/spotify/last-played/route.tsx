import { NextResponse } from 'next/server'

import { getRecentlyPlayed } from '@/lib/spotify'

export async function GET() {
  const response = await getRecentlyPlayed()

  if (response.status > 400) {
    return NextResponse.json({}, { status: 200 })
  }

  const tracks = await response.json()

  if (tracks === null) {
    return NextResponse.json({}, { status: 200 })
  }

  const { track } = tracks.items.reduce((r, a) =>
    r.played_at > a.played_at ? r : a
  )

  const title = track.name
  const artist = track.artists.map((artist) => artist.name).join(', ')
  const songUrl = track.external_urls.spotify
  const album = track.album.name
  const albumImageUrl = track.album.images[0].url

  return NextResponse.json(
    {
      artist,
      title,
      songUrl,
      album,
      albumImageUrl,
    },
    { status: 200 }
  )
}
export const revalidate = 180
