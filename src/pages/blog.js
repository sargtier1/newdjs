import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import Head from "../components/head"

import styled from "styled-components"

import BlogPost from "../components/blogPost/blogPost"

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
      <Head title="test" />
      <h1>Blog</h1>
      <BlogList>
        {posts.map(post => {
          return (
            <>
              <BlogPost
                key={post.node.sluge}
                title={post.node.title}
                description={post.node.description}
                publishedDate={post.node.publishedDate}
                image={post.node.cardImage.fluid}
              />
            </>
          )
        })}
      </BlogList>
    </Layout>
  )
}

const BlogList = styled.div`
  padding: 0;
  margin-bottom: 1rem;
  display: flex;

  @media only screen and (max-width: 600px) {
    display: inline-block;
  }
`

export default BlogTest
