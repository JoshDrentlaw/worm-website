import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import Hours from "../components/hours"

const Company = styled.h1`
    ${tw`text-center text-5xl text-bold`}
    text-shadow: 0 0 1px black;
`

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Company>Alcaraz<br />Worms and Compost</Company>
        <section id="pitch-ctn" className="my-4">
            <p id="pitch" className="text-center">Start your own compost system run by<br />WORM POWER</p>
        </section>
        <Form />
        <Hours />
    </Layout>
)

export default IndexPage
