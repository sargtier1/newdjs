import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import Head from "../components/head"
import styled from "styled-components"

import "./sytles/blogStyles.css"

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
      <Head title="blog" />
      <h1>Blog</h1>
      <BlogList>
        {posts.map(edge => {
          return (
            <Link to={`/blog/${edge.node.slug}`} className="post-style">
              <BlogPost
                key={edge.node.slug}
                slug={edge.node.slug}
                title={edge.node.title}
                description={edge.node.description}
                publishedDate={edge.node.publishedDate}
                image={edge.node.cardImage.fluid}
              />
            </Link>
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
