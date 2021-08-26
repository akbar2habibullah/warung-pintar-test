module.exports = {
  siteMetadata: {
    title: `Odigo`,
    description: `Odigo Landing Page`,
    author: `@ChavyvAkvar`,
    siteUrl: `https://odigo.vercel.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0E1D28`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/odigo-logo-images.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Odigo`,
        fieldName: `odigo`,
        url: `https://api.apito.io/secured/graphql`,
        headers: {
          Authorization: `Bearer 38UKCzzIe7CzBAGLrp9xQEdXLhAbmjuc0jz4k9M2uCM0HnVdMCqNGQB7zFXXFGvkaqMOYOm9JVUx2C66NR6wcPGZSB2RWqbkcnrk2AOCUQ9tquY8gvF53mwm6BeVeKcLfntepotpNS95ZlA6aqfVX4u9d7cDg7ppDFpjNArrIyiYC1Qi7W`,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
