import fetcher from '@/lib/fetcher'

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN
const GITHUB_USERNAME = process.env.GITHUB_USERNAME
const GITHUB_GRAPHQL = 'https://api.github.com/graphql'

export async function getPinnedRepos() {
  const response = await fetcher(GITHUB_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
              user(login: "${GITHUB_USERNAME}") {
                pinnedItems(first: 6, types: REPOSITORY) {
                  nodes {
                    ... on Repository {
                      name
                      description
                      url
                      openGraphImageUrl
                      homepageUrl
                    }
                  }
                }
              }
            }`,
    }),
  })
  return response.data.user.pinnedItems.nodes
}

export async function getTopRepo() {
  const response = await fetcher(GITHUB_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
              user(login: "${GITHUB_USERNAME}") {
                repositories(first: 1, orderBy: {field: STARGAZERS, direction: DESC}) {
                  nodes {
                    name
                    url
                  }
                }
              }
            }`,
    }),
  })

  const { name, url } = response.data.user.repositories.nodes[0]

  return {
    name,
    url,
  }
}
