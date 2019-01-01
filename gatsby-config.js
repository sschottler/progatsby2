module.exports = {
  siteMetadata: {
    title: `Level Up Blog`,
    description: `A new blog!`,
    siteUrl: 'https://clever-joliot-9f7771.netlify.com',
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
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
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Level Up Blog`,
        short_name: `LUTBlog`,
        start_url: `/`,
        background_color: `#524763`,
        theme_color: `#524763`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cms',
    // make sure this is at the end of the plugins!
    'gatsby-plugin-netlify',
  ],
}
