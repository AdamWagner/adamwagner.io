
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-stylus`,
    `gatsby-plugin-catch-links`, // prevents hard refresh on route changes
    `gatsby-plugin-offline`, // creates service worker so site works offline
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-60714007-1',
      },
    },
  ],
}



/* TODO
Add manifest plugin that lets Android users add to home page:
https://www.npmjs.com/package/gatsby-plugin-manifest


*/
