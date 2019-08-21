import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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

const HeroContainer = styled.figure`
    width: 100%; height: auto;
    max-height: 300px;
    margin: 1em;

    .gatsby-image-wrapper {
        max-height: 300px;
    }
`

const Notice = styled.h3`
    font-family: hand;
    font-size: 60px;
    text-align: center;
    margin: 1em auto;

    @media(min-width: 1024px) {
        margin: 0.5em 1em 0.5em 0;
        transform: rotate(-25deg);
    }
`

const Placeholder = styled.div`
    color: white;
    background-color: #808080;
    width: 300px; height: 300px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeroImg = () => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "images/garden.jpg"}) {
                childImageSharp {
                    fluid(maxHeight: 300, quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <HeroContainer>
            <Img fluid={data.file.childImageSharp.fluid} alt="Man garndeing in a greenhouse." />
        </HeroContainer>
    )
}

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[]} />
        <Section>
            <HeroImg />
            <h2>Getting a garden started right helps it grow into the beautiful wonderland of your dreams. The right soil makes all the difference.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum, dignissimos voluptatem laborum unde laboriosam adipisci quasi illo error fuga animi voluptas enim ratione similique neque quia ullam repudiandae fugiat eius, quos libero necessitatibus quam? Incidunt perferendis saepe temporibus itaque natus sed quisquam, rem aspernatur cumque magnam. Atque aperiam cum blanditiis dolores. Aliquam assumenda placeat odio laborum sit temporibus accusantium! Fugiat minima autem quos omnis maiores quod reprehenderit dolor iure optio, ut explicabo, numquam natus. Necessitatibus est facilis repudiandae deserunt commodi debitis veritatis! Illo fuga enim non cum necessitatibus nihil repellat quaerat rem sed. Eum porro nostrum corporis minus autem.</p>
        </Section>
        <Section flexDirD="row">
            <Notice>Local delivery<br />available!</Notice>
            <Placeholder>ESRI map</Placeholder>
        </Section>
    </Layout>
)

export default IndexPage
