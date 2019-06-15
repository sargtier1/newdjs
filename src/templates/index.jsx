import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from 'gatsby-image'

const IndexTemplate = () => {
  
  const data = useStaticQuery(graphql`
    query {
      contentfulLandingPage {
        title
        image {
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        body {
          json
        }
      }
    }
  `)

  return (
    <div>
      <h1>{data.contentfulLandingPage.title}</h1>
      <Img fluid={data.contentfulLandingPage.image.fluid}/>
      <div>
        {documentToReactComponents(
          data.contentfulLandingPage.body.json
        )}
      </div>
    </div>
  )
}

export default IndexTemplate



