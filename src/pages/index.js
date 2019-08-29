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
    position: relative;
`

const ItemBox = styled.figure`
    background-color: grey;
    width: 200px; height: 200px;
    margin: 0.5em auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    user-select: none;
    position: relative;

    .overlay {
        background-color: black;
        color: white;
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        opacity: 0;
        transition: .5s ease;
    }

    &:hover .overlay {
        opacity: 1;
    }
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
                        <div className="overlay">
                            <h2>Overlay!</h2>
                            <button><a href="/">View Item</a></button>
                        </div>
                    </ItemBox>
                ))}
            </Section>
        </Layout>
    )
}

export default IndexPage
