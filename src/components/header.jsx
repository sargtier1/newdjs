import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Nav from './nav'

import headerStyles from './header.module.scss'

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
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to='/'>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <Nav />
    </header>
  )
}


export default Header
