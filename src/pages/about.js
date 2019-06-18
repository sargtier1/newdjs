import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import Head from "../components/head"

import styled from "styled-components"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAboutPage {
        title
        image {
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="About" />
      <h1>{data.contentfulAboutPage.title}</h1>
      <ImageContainer>
        <Img fluid={data.contentfulAboutPage.image.fluid} />
      </ImageContainer>
      <p>
        Want to work with me? <Link to="/contact">Reach out.</Link>
      </p>
    </Layout>
  )
}

const ImageContainer = styled.div`
  position: fixed;
  width: 750px
`

export default AboutPage
