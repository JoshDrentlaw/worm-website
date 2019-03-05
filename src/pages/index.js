import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Alcaraz<br />Worms and Compost</h1>

        <section id="pitch-ctn" className="my-4">
            <p id="pitch" className="text-center">Start your own compost system run by<br />WORM POWER</p>
        </section>
        
        <Form />

        <section id="hours" className="mt-4">
            <h2>Hours for Delivery</h2>
            <ul className="list-group mt-3" id="weekdays">
                <li className="list-group-item" id="sunday">Sunday: <span className="hours">Closed</span></li>
                <li className="list-group-item" id="monday">Monday: <span className="hours">9:00am-12:00pm</span></li>
                <li className="list-group-item" id="tuesday">Tuesday: <span className="hours">9:00am-12:00pm</span></li>
                <li className="list-group-item" id="wednesday">Wednesday: <span className="hours">9:00am-12:00pm</span></li>
                <li className="list-group-item" id="thursday">Thursday: <span className="hours">9:00am-12:00pm</span></li>
                <li className="list-group-item" id="friday">Friday: <span className="hours">9:00am-12:00pm</span></li>
                <li className="list-group-item" id="saturday">Saturday: <span className="hours">Closed</span></li>
            </ul>
        </section>
    </Layout>
)

export default IndexPage
