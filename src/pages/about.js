import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import Head from "../components/head"

import Hero from '../components/hero/hero'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAboutPage {
        title
        backgroundImage {
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        text
        image {
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  const hero = data.contentfulAboutPage

  return (
    <Layout>
      <Head title="About" />
      <Hero
        image={hero.image.fluid.src}
        title={hero.title}
      />
    </Layout>
  )
}

export default AboutPage
