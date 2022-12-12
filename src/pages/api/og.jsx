import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "experimental-edge"
}

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has("title")
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title"

    return new ImageResponse(
      (
        <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '-.02em',
          fontWeight: 700,
          background: 'black',
          backgroundImage: 'url(https://educalvolopez.com/gradient.svg)',
          backgroundSize: '100% 200%',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              borderRadius: '40px',
              background: 'white',
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
              color: 'white',
            }}
          >
            educalvolopez.com
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '20px 50px',
            margin: '0 42px',
            fontSize: 40,
            width: 'auto',
            maxWidth: 550,
            textAlign: 'center',
            color: 'white',
            lineHeight: 1.4,
          }}
        >
          {title}
        </div>
      </div>

      ),
      {
        width: 1200,
        height: 630
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
