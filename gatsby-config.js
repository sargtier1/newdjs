require("dotenv").config({})

module.exports = {
  siteMetadata: {
    title: "Daniel JS",
    subheading: "Follow My Developer Journey Here",
    author: "Salvatore Argentieri",
    social: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/daniel-j-scott/",
      },
      {
        name: "github",
        link: "https://github.com/myDeveloperJourney",
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/danieljs.dev/?hl=en",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
