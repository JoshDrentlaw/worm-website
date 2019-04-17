import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styled, { css } from "styled-components"
import tw from "tailwind.macro"

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
  ${tw`bg-bg relative`}
  font-family: 'Naomis Hand';
  display: grid;
  grid-template-columns: minmax(calc(1rem + 40px), calc(1rem + 50px)) auto minmax(calc(1rem + 40px), calc(1rem + 50px));
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "company company company"
    "nav nav nav"
    "left content ."
    "footer footer footer";
`

const Container = styled.main`
  ${tw`flex flex-col mx-auto relative text-primary z-0 lg:w-3/5`};
  grid-area: content;
  font-size: 4rem;
  line-height: 0.75;

  & i {
    ${media.desktop(tw`text-lg-i`)}
  }

  & .navlink {
    ${media.desktop(tw`text-2xl`)}
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Body>
        <Company />
        <Nav />
        <LeftSidebar />
        <Container>{children}</Container>
        <Footer />
      </Body>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
