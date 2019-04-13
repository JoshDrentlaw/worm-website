import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import Hours from "../components/hours"

const Emoji = styled.span`
    ${tw`text-3xl`}
`

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <section id="pitch-ctn" className="my-4">
            <p id="pitch" className="text-center text-6xl leading-none">
                Start your own compost system run by Worm Power!
                <br />
                <Emoji role="img" aria-label="star">✨</Emoji>
                <img src="https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/c_scale,w_150/c_crop,g_custom/v1555129916/SoCal%20Earth%20Farm/wormm.png" alt="Cute hand drawn Earth Worm" />
                <Emoji role="img" aria-label="star">✨</Emoji>
            </p>
        </section>
        <Form />
        <Hours />
    </Layout>
)

export default IndexPage
