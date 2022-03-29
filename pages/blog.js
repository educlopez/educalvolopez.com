import PostPge from "../components/blog-post-page";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Blog({ allPosts }) {
    const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Edu {CMS_NAME}</title>
        </Head>

        <div className="relative mx-auto max-w-7xl">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
                Blog
              </h2>
              <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                <p className="text-xl text-black dark:text-white">
                  Get weekly articles in your inbox on how to grow your
                  business.
                </p>
              </div>
            </div>
            <div className="grid gap-16 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
              {morePosts.length > 0 && <PostPge posts={morePosts} />}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  return {
    props: { allPosts },
  }
}
