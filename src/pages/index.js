import React from "react"

//import styled from "styled-components"
//import tw from "tailwind.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import Hours from "../components/hours"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <section id="pitch-ctn" className="my-4">
            <p id="pitch" className="text-center text-6xl leading-none">
                Start your own compost system run by<br /><span className="text-xl lg:text-3xl" role="img">✨🐛</span>WORM POWER<span className="text-xl lg:text-3xl" role="img">🐛✨</span>
            </p>
        </section>
        <Form />
        <Hours />
    </Layout>
)

export default IndexPage
