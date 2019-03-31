import React, { useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import tw from "tailwind.macro"

const Container = styled.section`
    ${tw`mt-4 border border-grey-dark rounded text-center`};
    background-color: rgba(255, 255, 255, 0.3);
`

const Hours = ({ data }) => {
    console.log(data)
    useEffect(() => {
        let weekday = new Date().getDay();
        const weekdays = document.getElementById('weekdays').children;
        weekdays.item(weekday).classList.add('bg-buy', 'text-white');
    }) 

    return (
        <Container id="hours">
            <h2 className="border-b border-grey-dark py-2">Hours for Delivery</h2>
            <ul className="list-reset" id="weekdays">
                <li className="border-b border-grey-dark py-2" id="sunday">Sunday: <span className="hours">{ data.allMarkdownRemark.edges[0].node.frontmatter.sunday }</span></li>
                <li className="border-b border-grey-dark py-2" id="monday">Monday: <span className="hours">{ data.allMarkdownRemark.edges[0].node.frontmatter.monday }</span></li>
                <li className="border-b border-grey-dark py-2" id="tuesday">Tuesday: <span className="hours">{ data.allMarkdownRemark.edges[0].node.frontmatter.tuesday }</span></li>
                <li className="border-b border-grey-dark py-2" id="wednesday">Wednesday: <span className="hours">{ data.allMarkdownRemark.edges[0].node.frontmatter.wednesday }</span></li>
                <li className="border-b border-grey-dark py-2" id="thursday">Thursday: <span className="hours">{ data.allMarkdownRemark.edges[0].node.frontmatter.thursday }</span></li>
                <li className="border-b border-grey-dark py-2" id="friday">Friday: <span className="hours">{ data.allMarkdownRemark.edges[0].node.frontmatter.friday }</span></li>
                <li className="py-2" id="saturday">Saturday: <span className="hours"></span>{ data.allMarkdownRemark.edges[0].node.frontmatter.saturday }</li>
            </ul>
        </Container>
    )
}

export default props => (
    <StaticQuery
        query={
            graphql`
                {
                    allMarkdownRemark {
                        edges {
                            node {
                                frontmatter {
                                sunday
                                monday
                                tuesday
                                wednesday
                                thursday
                                friday
                                saturday
                                }
                            }
                        }
                    }
                }
            `
        }
        render={data => <Hours data={ data } { ...props } />}
    />
)