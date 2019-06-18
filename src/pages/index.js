import React from "react"

import Layout from "../components/layout/layout"
import Head from "../components/head"

import IndexTemplate from "../templates/index"

import "semantic-ui-css/semantic.min.css"

const IndexPage = () => {


  return (
    <Layout>
      <Head title="Home" />
      <IndexTemplate />
      
    </Layout>
  )
}

export default IndexPage
