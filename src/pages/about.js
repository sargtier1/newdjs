import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import Head from "../components/head"

import Panel from "../components/panels/panel"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAboutPage {
        title
        blurbTitle1
        blurb1
        blurbTitle2
        blurb2
        blurbTitle3
        blurb3
      }
    }
  `)

  const hero = data.contentfulAboutPage

  return (
    <Layout>
      <Head title="About" />
      <br />
      <Panel
        title1={hero.blurbTitle1}
        title2={hero.blurbTitle2}
        title3={hero.blurbTitle3}
        blurb1={hero.blurb1}
        blurb2={hero.blurb2}
        blurb3={hero.blurb3}
      />
    </Layout>
  )
}

export default AboutPage
