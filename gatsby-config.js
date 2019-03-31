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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/hours`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-netlify-identity-widget'
  ],
}
