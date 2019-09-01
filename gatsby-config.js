require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Global Shapers Helsinki Official Website`,
    description: `This is the official website of Global Shaper Helsinki Hub.`,
    authors: `@tjtechi, @MirelaViitanen, Kunjan Ghimire`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: '@import "variables.scss";',
        includePaths: ['src/components'],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `shapershel`,
      },
    },
  ],
}
