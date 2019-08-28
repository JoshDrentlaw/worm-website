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
        display: grid;
        grid-auto-columns: 200px;
    }
`

const ItemBox = styled.figure`
    background-color: grey;
    width: 200px; height: 200px;
    margin: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            allSanityProduct {
                edges {
                    node {
                        title
                    }
                }
            }
        }
    `)

    console.log(data)

    return (
        <Layout>
            <SEO title="Home" keywords={[]} />
            <h1 style={{ textAlign: 'center' }}>Please see my selection of products</h1>
            <Section>
                {data.allSanityProduct.edges.map(({ node }) => (
                    <ItemBox>
                        <h2>{node.title}</h2>
                    </ItemBox>
                ))}
            </Section>
        </Layout>
    )
}

export default IndexPage
