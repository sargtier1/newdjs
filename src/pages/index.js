import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import IndexTemplate from '../templates/index'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <IndexTemplate />
    </Layout>
  )
}

export default IndexPage
