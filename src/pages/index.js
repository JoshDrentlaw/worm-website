import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hours from "../components/hours"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[]} />
        <Hours />
    </Layout>
)

export default IndexPage
