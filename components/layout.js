import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export const name = 'Eduardo Calvo'

export const siteTitle = 'Eduardo Calvo - Portfolio'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">

          {home ? (
            <>
              <div className="d-flex align-items-center text-white text-decoration-none">
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={44}
                  width={44}
                  alt={name}
                />
                <Image
                  priority
                  src="/images/logonegro.svg"
                  height={44}
                  width={44}
                  alt={name}
                />
              </div>
            </>
          ) : (
            <>
            <div className="d-flex align-items-center text-white text-decoration-none">
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={44}
                    width={44}
                    alt={name}
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/logonegro.svg"
                    height={44}
                    width={44}
                    alt={name}
                  />
                </a>
              </Link>
              </div>
            </>
          )}
            <div className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              <a className="me-3 py-2 text-white text-decoration-none" href="#">Servicios</a>
              <a className="me-3 py-2 text-white text-decoration-none" href="#">Proyectos</a>
              <a className="me-3 py-2 text-white text-decoration-none" href="#">Recomendaciones</a>
              <a className="py-2 text-white text-decoration-none" href="#">Blog</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="container">{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a className="btn btn-primary">← Volver</a>
          </Link>
        </div>
      )}
     <script src="/js/custom.js"></script>
    </div>

  )
}