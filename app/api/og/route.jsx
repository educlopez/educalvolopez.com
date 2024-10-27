import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

const font = fetch(
  new URL('/public/fonts/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(req) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get('title')
  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(https://educalvolopez-com.vercel.app/og-bg.jpg)',
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            marginBottom: 140,
            display: 'flex',
            fontSize: 130,
            fontFamily: 'Inter',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '130px',
            whiteSpace: 'pre-wrap',
            fontFamily: 'Inter',
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
