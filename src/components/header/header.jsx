import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"
import Nav from "../nav/nav"

import "./header.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <h1>
        <Link className='title' to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <Nav />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  margin: 1rem 0 1rem 0;
  padding: 1rem;
  text-align: center;
`
export default Header
