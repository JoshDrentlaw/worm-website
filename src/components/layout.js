/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styled, { css } from "styled-components"
import tw from "tailwind.macro"

import Header from "./header"
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
  ${tw`bg-bg`}
  display: grid;
  grid-template-columns: 1fr 2fr minmax(calc(0.5rem + 40px), 1fr);
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "header header header"
    "left content ."
    "left content ."
    "footer footer footer"
`

const Container = styled.main`
  ${tw`flex flex-col mx-auto relative text-primary`};
  font-family: 'Naomis Hand';
  font-size: 4rem;
  line-height: 0.75;
  grid-area: content;

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
        <Header className="header" siteTitle={data.site.siteMetadata.title} />
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
