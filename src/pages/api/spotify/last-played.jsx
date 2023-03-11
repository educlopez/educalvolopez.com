import { getRecentlyPlayed } from '@/lib/spotify'

export default async function handler(req, res) {
  const response = await getRecentlyPlayed()

  if (response.status > 400) {
    return res.status(200).json({})
  }

  const tracks = await response.json()

  if (tracks === null) {
    return res.status(200).json({})
  }

  const { track } = tracks.items.reduce((r, a) =>
    r.played_at > a.played_at ? r : a
  )

  const title = track.name
  const artist = track.artists.map((artist) => artist.name).join(', ')
  const songUrl = track.external_urls.spotify
  const album = track.album.name
  const albumImageUrl = track.album.images[0].url

  return res.status(200).json({
    artist,
    title,
    songUrl,
    album,
    albumImageUrl,
  })
}
