import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Hero from "../components/hero/hero"

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

  const hero = data.contentfulLandingPage 

  return (
    <>
      <Hero 
        image={hero.image.fluid.src}
        title={hero.title}
      />
    </>
  )
}

export default IndexTemplate
