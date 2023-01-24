# Next.js Portfolio with Tailwind and Frame Motion
This is a portfolio website built with Next.js and Tailwind CSS. It features a Spotify integration that displays the user's recently played tracks and a weather section that displays the current weather for a specified location.

## Getting Started
1. Clone the repository: git clone https://github.com/educlopez/nextjs-portfolio-tailwind.git
2. Install dependencies: `npm install`
3. Create an `.env` file in the root of the project and add the following variables:

```env
SITE_URL=
NEXT_PUBLIC_SITE_URL=
# Spotify
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
# Weather
NEXT_PUBLIC_WEATHER_API=
```

4. The `SITE_URL` variable is used to specify the base URL of the website.
5. The `NEXT_PUBLIC_SITE_URL` variable is used to specify the public URL of the website.
6. The `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, and `SPOTIFY_REFRESH_TOKEN` variables are used to authenticate with the Spotify API. You will need to create a Spotify developer account and create an app to obtain these values.
7. The `NEXT_PUBLIC_WEATHER_API` variable is used to specify the API key for the weather API used in the project.
9. Run the development server: npm run dev
10. Visit `http://localhost:3000` in your browser to see the website.
