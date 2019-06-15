import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

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
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author} | © 2019</p>
      <ul className={footerStyles.links}>
        {data.site.siteMetadata.social &&
          data.site.siteMetadata.social.map(items => {
            return (
              <li className={footerStyles.link} key={items.name}>
                <a href={items.link} target='_blank' rel='noopener noreferrer'>
                  <Link>{items.name}</Link>
                </a>
              </li>
            )
          })}
      </ul>
    </footer>
  )
}

export default Footer
