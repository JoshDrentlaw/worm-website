import React from "react"
import PropTypes from "prop-types"

import styled, { css } from "styled-components"

import Company from './company'
import Nav from './nav'
import LeftSidebar from './left-sidebar'
import Footer from "./footer"
import "../global.css"

const sizes = {
    desktop: 992,
    tablet: 768,
    landscape: 576,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc
}, {})

const Body = styled.div`
  background-color: var(--bg);
  color: #403c32;
  display: grid;
  font-family: cafe;
  grid-template-columns: minmax(calc(1rem + 40px), calc(1rem + 50px)) minmax(0, auto) minmax(calc(1rem + 40px), calc(1rem + 50px));
  grid-template-rows: auto auto minmax(calc(100vh - 269px), auto) auto;
  grid-template-areas:
    "company company company"
    "nav nav nav"
    "left content ."
    "footer footer footer";
  position: relative;
`

const Container = styled.main`
  display: flex;
  flex-direction: column;
  grid-area: content;
  position: relative;
  z-index: 0;

  @media(min-width: 768px) {
    margin: 0 auto;
  }

  @media(min-width: 1024px) {
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
