import Head from 'next/head'
import Layout, { siteTitle, name } from '../components/layout'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {getCurrentTime} from '../components/currentTime'
//console.log(getCurrentTime())



export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div id="header-background"></div>
      <div className="container col-xxl-12 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <p className="text-white text-md-end text-sm-start">
              Madrid, España
              <br></br>
               {getCurrentTime()} UTC+2
              <br></br>
              (en la oficina hasta las 6pm)
            </p>
          </div>
          <div className="col-lg-6 text-white">
            <h1 className="display-5 fw-bold lh-1 mb-3">{name}</h1>
            <p className="lead"> <b>Diseñador Gráfico y Maquetador web</b>.<br></br> Especializado en diseño web, UI, UX y Maquetación.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-warning btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className="text-white mb-4">Blog</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {allPostsData.map(({ id, date, title, img, fragment }) => (
            <Link href={`/posts/${id}`}  key={id}>
              <a>
              <div className="col">
                <div className="card bg-dark text-white">
                  <Image
                      priority
                      src={img}
                      className="card-img"
                      height={200}
                      width={200}
                      alt={title}
                    />
                    <div className="card-img-overlay overlay-white-text">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{fragment}</p>
                      <p className="card-text"> <Date dateString={date} /></p>
                    </div>
                  </div>
              </div>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  )
}
