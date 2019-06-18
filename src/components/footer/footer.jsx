import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Icon } from "semantic-ui-react"

import styled from "styled-components"

import "./footer.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          social {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <p>Created by {data.site.siteMetadata.author} | © 2019</p>
      <StyledList>
        {data.site.siteMetadata.social &&
          data.site.siteMetadata.social.map(items => {
            return (
              <StyledListItem key={items.name}>
                <a href={items.link} target="_blank" rel="noopener noreferrer">
                  <Icon
                    name={items.name}
                    size="big"
                  />
                </a>
              </StyledListItem>
            )
          })}
      </StyledList>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  margin-top: 3rem;
  text-align: center;
`

const StyledList = styled.ul`
  margin: 1rem 0;
  padding: 0;
  text-align: center;
`

const StyledListItem = styled.li`
  display: inline-block;
  margin: 1rem 2rem;
  padding: 0;
  vertical-align: middle;
`

export default Footer
