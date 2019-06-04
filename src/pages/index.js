import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import Hours from "../components/hours"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <section id="pitch-ctn" className="my-4">
            <p id="pitch" className="text-center text-6xl leading-none font-hand">
                Start your own compost system run by Worm Power!
            </p>
        </section>
        <Form />
        <Hours />
    </Layout>
)

export default IndexPage
