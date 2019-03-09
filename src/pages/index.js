import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import Hours from "../components/hours"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Alcaraz<br />Worms and Compost</h1>
        <section id="pitch-ctn" className="my-4">
            <p id="pitch" className="text-center">Start your own compost system run by<br />WORM POWER</p>
        </section>
        <Form />
        <Hours />
    </Layout>
)

export default IndexPage
