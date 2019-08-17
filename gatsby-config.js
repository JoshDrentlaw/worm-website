require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Alcaraz Worms and Compost`,
    description: `Start your own compost system run by WORM POWER!`,
    author: `Josh Drentlaw`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/hours`,
        name: "hours",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/faq`,
        name: "faq",
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'kjilr0vi',
        dataset: 'products',
        token: process.env.SANITY_TOKEN
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#5e4c3e`,
        theme_color: `#5e4c3e`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-tailwindcss',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ],
}
