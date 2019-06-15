import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      cardImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <BlogPost>
        <BlogImage>
          <Img
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              overFlow: 'hidden'
            }}
            fluid={props.data.contentfulBlogPost.cardImage.fluid}
          />
        </BlogImage>
        <BlogContent>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
          <Link to='/blog'>Back to Blog</Link>
        </BlogContent>
      </BlogPost>
    </Layout>
  )
}

const BlogPost = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const BlogImage = styled.div`
  margin: auto;
`

const BlogContent = styled.div`
  back-ground-color: white;
`

export default Blog
