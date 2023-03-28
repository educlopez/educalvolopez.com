# Next.js Portfolio with Tailwind and Frame Motion
This is a portfolio website built with Next.js and Tailwind CSS. It features a Spotify integration that displays the user's recently played tracks and a weather section that displays the current weather for a specified location.

## Getting Started
1. Clone the repository: git clone https://github.com/educlopez/educalvolopez.com
2. Install dependencies: `npm install`
3. Create an `.env` file in the root of the project and add the following variables:

```env
SITE_URL=
NEXT_PUBLIC_SITE_URL=
# Spotify
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
#GITHUB
GITHUB_ACCESS_TOKEN=
GITHUB_USERNAME=
```

4. The `SITE_URL` variable is used to specify the base URL of the website.
5. The `NEXT_PUBLIC_SITE_URL` variable is used to specify the public URL of the website.
6. The `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, and `SPOTIFY_REFRESH_TOKEN` variables are used to authenticate with the Spotify API. You will need to create a Spotify developer account and create an app to obtain these values.
7. The `GITHUB_ACCESS_TOKEN` variable is used to authenticate with the GitHub API. You will need to create a GitHub developer account and create an app to obtain this value.
8. The `GITHUB_USERNAME` variable is used to specify the github username
9. Run the development server: npm run dev
10. Visit `http://localhost:3000` in your browser to see the website.
