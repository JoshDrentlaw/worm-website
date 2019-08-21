import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

import Company from './company'
import Nav from './nav'
import LeftSidebar from './left-sidebar'
import Footer from "./footer"
import "../global.css"

const Body = styled.div`
  background-color: var(--bg);
  color: #403c32;
  display: grid;
  font-family: cafe;
  grid-template-columns: minmax(calc(1rem + 40px), calc(1rem + 50px)) minmax(0, auto) minmax(calc(1rem + 40px), calc(1rem + 50px));
  grid-template-rows: auto auto minmax(calc(100vh - 295px), auto) auto;
  grid-template-areas:
    "company company company"
    "nav nav nav"
    "left content ."
    "footer footer footer";
  position: relative;

  @media(min-width: 1024px) {
    grid-template-rows: auto auto minmax(calc(100vh - 276px), auto) auto;
  }
`

const Container = styled.main`
  display: flex;
  flex-direction: column;
  grid-area: content;
  position: relative;
  z-index: 0;

  @media(min-width: 1024px) {
    margin: 0 auto;
    width: 60%;
  }
`

const Layout = ({ children }) => (
  <Body>
    <Company />
    <Nav />
    <LeftSidebar />
    <Container>{children}</Container>
    <Footer />
  </Body>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
