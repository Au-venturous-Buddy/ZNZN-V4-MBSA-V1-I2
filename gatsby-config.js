/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Zene 'N Zeanne Au-Some Blogs: The \"Au-Some\" Ice Breaker",
    author: "Au-venturous Buddy"
  },
  pathPrefix: "/ZNZN-V4-MBSA-V1-I2",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zene 'N Zeanne Au-Some Blogs: The \"Au-Some\" Ice Breaker`,
        short_name: `ZNZN-V4-MBSA-V1-I2`,
        start_url: `/`,
        background_color: `#017BFF`,
        theme_color: `#017BFF`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/Au-Some Blogs.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
}
