import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const font = fetch(
  new URL('/public/fonts/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req) {
  const fontData = await font
  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'

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
            backgroundImage: 'url(https://educalvolopez.com/og-bg.jpg)',
          }}
        >
          <div
            style={{
              marginLeft: 190,
              marginRight: 190,
              display: 'flex',
              fontSize: 130,
              fontFamily: 'Inter',
              letterSpacing: '-0.05em',
              fontStyle: 'normal',
              color: 'white',
              lineHeight: '120px',
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
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
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
