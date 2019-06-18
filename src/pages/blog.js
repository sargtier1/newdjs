import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import Head from "../components/head"
import styled from "styled-components"

import "./sytles/blogStyles.css"

import BlogPost from "../components/blogPost/blogPost"

import { GridList } from "@material-ui/core"

const BlogTest = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            description
            cardImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <Head title="blog" />
      <h1>Blog</h1>
      <BlogList>
        <GridList>
          {posts.map(edge => {
            return (
              <BlogPost
                key={edge.node.slug}
                slug={edge.node.slug}
                title={edge.node.title}
                description={edge.node.description}
                publishedDate={edge.node.publishedDate}
                image={edge.node.cardImage.fluid}
              />
            )
          })}
        </GridList>
      </BlogList>
    </Layout>
  )
}

const BlogList = styled.div`
  padding: 0;
  margin-bottom: 1rem;
  display: flex;
  overflow: auto;

  @media only screen and (max-width: 600px) {
    display: inline-block;
  }

  @media only screen and (min-width: 400px) and (max-width: 800px) {
    justify-content: center;
  }
`

export default BlogTest
