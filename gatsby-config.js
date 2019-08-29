require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Global Shapers Helsinki Official Website`,
    description: `This is the official website of Global Shaper Helsinki Hub.`,
    authors: `@tjtechi, @MirelaViitanen, Kunjan Ghimire`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `shapershel`,
      },
    },
  ],
}
