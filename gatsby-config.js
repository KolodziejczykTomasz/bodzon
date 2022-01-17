module.exports = {
  siteMetadata: {
    title: `Kamil Bodzon`,
    description: `Usługi Remontowo-Budowlane Kamil Bodzon.`,
    author: `@nettom24`,
    siteUrl: `http://nettom24.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,    
  ],
}
