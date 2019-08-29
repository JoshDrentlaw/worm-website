import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(200px + 1em), 1fr));
    grid-template-rows: calc(200px + 1em);
    grid-gap: 1em;
`

const ItemBox = styled.figure`
    background-color: grey;
    width: 200px; height: 200px;
    margin: 0.5em auto;
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
            <h1 style={{ textAlign: 'center' }}>Please check out my products. I have everything you need to get the perfect compost system started.</h1>
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
