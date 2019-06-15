import React from "react"

import Header from "../header/header"
import Footer from "../footer/footer"

import styled from "styled-components"
import "./layout.css"

const Layout = props => {
  return (
    <StyledContainer>
      <Header />
      <StyledMain> {props.children} </StyledMain>
      <Footer />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledMain = styled.main`
  flex-grow: 1;
`

export default Layout
