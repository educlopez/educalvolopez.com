
# Next.js 13 Portfolio with AppDir and Tailwind CSS

Welcome to the repository of my Next.js portfolio! This project utilizes Next.js version 13 and is configured to leverage AppDir and Tailwind CSS. It also integrates with ReSend for email sending functionality. Below, you'll find instructions on how to set up the project and obtain the necessary values for the `.env` file to ensure proper functionality.

## Environment Configuration

Before running the project, make sure to have the following environment variables configured in a `.env` file at the root of the project:

```env
SITE_URL=
NEXT_PUBLIC_SITE_URL=
# Spotify
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
#AMAZON AFFILIATE
NEXT_PUBLIC_ID_AMAZON=
#RESEND API
RESEND_API_KEY=
MAIL_FROM=
```

Now, let's explain how to obtain each of these values:

- `SITE_URL` and `NEXT_PUBLIC_SITE_URL`: These values should be the base URL of your website.
- `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, and `SPOTIFY_REFRESH_TOKEN`: These values are obtained by registering an application on the Spotify Developer platform. Follow Spotify's official documentation for more information on how to create an application and obtain these values.
- `NEXT_PUBLIC_ID_AMAZON`: This value corresponds to your Amazon affiliate ID. If you don't have one, sign up for the Amazon Affiliate Program to obtain it.
- `RESEND_API_KEY`: This value is the API key for ReSend, a service used for sending emails from the application. To obtain this key, create an account on ReSend and follow their documentation to generate the API key.
- `MAIL_FROM`: This value should be the email address from which the application will send generated emails.

## Running the Project

To run the project on your local environment, follow these steps:

Clone this repository to your local machine: git clone `https://github.com/educlopez/educalvolopez.com`.

Navigate to the project folder: `cd educalvolopez.com`.

Install project dependencies: `npm install`.

Set up the environment variables in the `.env` file as mentioned above.

Start the development server: `npm run dev`.

Open your browser and visit `http://localhost:3000` to see the portfolio in action.

Great! You should now have the project up and running with all the mentioned functionalities.

If you have any questions or issues, feel free to open an issue in this repository. Thanks for visiting my portfolio!
