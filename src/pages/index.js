import React from "react"
// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    flex-direction: ${props => props.flexDirM || 'column'};
    justify-content: center;
    align-items: center;

    @media(min-width: 1024px) {
        flex-direction: ${props => props.flexDirD || 'column'};
    }
`

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[]} />
        <Section>
            
        </Section>
    </Layout>
)

export default IndexPage
