import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import "./nav.css"

const Nav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClassName="acitve-nav-item"
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </NavList>
    </nav>
  )
}

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
`

export default Nav
