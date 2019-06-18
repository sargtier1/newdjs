import React from "react"

import Header from "../header/header"
import Hero from "../hero/hero"
import Footer from "../footer/footer"

import { useStaticQuery, graphql } from 'gatsby'

import styled from "styled-components"

import "typeface-roboto"
import "./layout.css"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          subheading
        }
      }
      contentfulLandingPage {
        title
        image {
          fixed {
            src
          }
        }
      }
    }
  `)



  const hero = data.contentfulLandingPage
  const heading = data.site.siteMetadata

  return (
    <StyledContainer>
      <Header />
      <Hero image={hero.image.fixed.src} heading={heading.subheading}/>
      <StyledMain> {props.children} </StyledMain>
      <Footer />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledMain = styled.main`
  flex-grow: 1;
`

export default Layout
