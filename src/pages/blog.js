import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout/layout'
import Head from '../components/head'

import Img from 'gatsby-image'
import styled from 'styled-components'

// Component
const BlogPage = () => {
  //  graph ql query
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

  // jsx
  return (
    <Layout>
      <Head title='Blog' />
      <h1>Blog</h1>
      <PostList>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <Post key={edge.node.slug}>
              <Link to={`/blog/${edge.node.slug}`}>
                <PostImage>
                  <Img
                    style={{ height: '100%', width: '100%', objectFit: 'cover', overFlow: 'hidden', borderBottomLeftRadius:'0.28571429rem', borderTopLeftRadius:'0.28571429rem'
                  }}
                    fluid={edge.node.cardImage.fluid}
                  />
                </PostImage>
                <PostBody>

                  <PostTitle> 
                  <h4>{edge.node.title}</h4>
                  </PostTitle>
                  <PostText>
                  <p>{edge.node.description}</p>
                  </PostText>
                  <Date>
                  {edge.node.publishedDate}
                  </Date>
                </PostBody>
              </Link>
            </Post>
          )
        })}
      </PostList>
    </Layout>
  )
}

// styled components
const PostList = styled.ol`
  list-style-type: none;
  padding: 0;
  display: flex;

  @media only screen and (max-width: 600px) {
    display: inline-block
   
  }
`

const Post = styled.div`
  border-style: line;
  border-color: black;

  a {
    display: flex;
    margin: 1rem;
    background: #f4f4f4;
    color: #000000;
    text-decoration: none;
    border-radius: 0.28571429rem;
  }

  a:hover {
    background: #e4e4e4;
  }

  h2 {
    margin-bottom: 0;
  }
`

const PostImage = styled.div`
  flex: 45%;
  margin-right: 1rem;
  height: 175px;
  width: 175px;

  @media only screen and (min-width: 600px) {
   flex: 45%;
   
  }
`

const PostText = styled.div`
  text-size: .75 rem;
`

const PostBody = styled.div`
flex: 60%;
padding: 1rem;
height: 80px;

@media only screen and (min-width: 500px) {
  flex: 40%;
}
`

const PostTitle = styled.div`
`

const Date = styled.div`
  color: #777777;
  font-size: 0.6rem;
  font-style: italic;
`

export default BlogPage
