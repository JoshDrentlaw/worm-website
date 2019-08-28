import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
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

const ItemBox = styled.figure`
    background-color: grey;
    width: 200px; height: 200px;
    margin: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        allSanityProduct {
            edges {
                node {
                    title
                }
            }
        }
    `)

    const items = data.allSanityProducts.edges.map(({ node }) => {
        return (
            <ItemBox>
                <h2>{node.title}</h2>
            </ItemBox>
        )
    })

    return (
        <Layout>
            <SEO title="Home" keywords={[]} />
            <Section>
                <h1>Please see my selection of products</h1>
                {items}
            </Section>
        </Layout>
    )
}

export default IndexPage
