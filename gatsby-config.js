require('dotenv').config({})

module.exports = {
  siteMetadata: {
    title: 'Daniel JS',
    subheading: 'catchy title here',
    author: 'Salvatore Argentieri',
    social: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/salvatore-argentieri-39a363146/'
      },
      {
        name: 'github',
        link: 'https://github.com/sargtier1'
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/sammyargentieri/?hl=en'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
