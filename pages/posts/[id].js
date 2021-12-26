import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'

export async function getStaticProps ({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths () {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
export default function Post ({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="relative p-16 overflow-hidden bg-white rounded-lg z-1 bg-opacity-70 dark:bg-opacity-70 dark:bg-gray-900">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg max-w-prose">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-center uppercase text-primary-600">
                info extra
              </span>
              <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 dark:text-white sm:text-4xl">
                {postData.title}
              </span>
              <div className="text-base text-center text-gray-500 dark:text-white">
                <Date dateString={postData.date} />
              </div>
            </h1>
          </div>
          <div className="mx-auto mt-6 text-gray-500 dark:text-white prose-primary">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
