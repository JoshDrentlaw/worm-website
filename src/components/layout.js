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

const Container = styled.main`
  ${tw`flex flex-col mx-auto relative w-portrait text-primary`};

  ${media.landscape(tw`w-landscape`)}

  ${media.tablet(tw`w-tablet`)}

  ${media.desktop(tw`w-desktop`)}

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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="bg-bg">
          <Container>{children}</Container>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
