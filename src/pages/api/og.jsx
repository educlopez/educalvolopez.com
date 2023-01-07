import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge'
};

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';

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
            backgroundPosition: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              padding: '20px 20px 20px 80px',
              margin: '0 42px',
              width: '50%',
              textAlign: 'left',
              color: 'white'
            }}
          >
            <img
              src="https://educalvolopez.com/avatar.png"
              style={{
                height: '60px',
                width: '60px',
                objectFit: 'cover',
                borderRadius: '100%',
                marginBottom: '20px'
              }}
            />

            <span
              style={{
                fontSize: 38,
                lineHeight: 1.2
              }}
            >
              {title}
            </span>
            <span
              style={{
                fontSize: '20px',
                marginTop: '20px'
              }}
            >
              educalvolopez.com
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              height: '100%',
              width: '50%'
            }}
          >
            <img
              src="https://educalvolopez.com/img-og.jpg"
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      ),

      {
        width: 1200,
        height: 600
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500
    });
  }
}
