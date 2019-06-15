import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Head from "../components/head"

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
      <Img  fluid={data.contentfulAboutPage.image.fluid}/>
      <br/>
      <p>
        Want to work with me? <Link to="/contact">Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
