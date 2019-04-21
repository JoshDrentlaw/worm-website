import React, { useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import tw from "tailwind.macro"

const Container = styled.section`
    ${tw`mt-4 border border-grey-dark rounded text-center`};
    background-color: rgba(255, 255, 255, 0.3);
`

const Hours = ({ data }) => {

    const highlightToday = () => {
        let weekday = new Date().getDay();
        const weekdays = document.getElementById('weekdays').children;
        weekdays.item(weekday).classList.add('bg-buy', 'text-white');
    }

    const getScreenSize = () => {
        const isClient = typeof window !== 'undefined';
        if (isClient && window.outerWidth <= 420) {
            return (<br />);
        }
        else return null 
    }

    useEffect(() => {
        highlightToday();
    })

    return (
        <Container id="hours">
            <h2 className="border-b border-grey-dark font-hand text-9xl leading-hand p-4 pb-6">Hours for Delivery</h2>
            <ul className="list-reset text-2xl" id="weekdays">
                <li className="border-b border-grey-dark py-2" id="sunday">Sunday: {getScreenSize()} <span>{ data.allMarkdownRemark.edges[0].node.frontmatter.sunday }</span></li>
                <li className="border-b border-grey-dark py-2" id="monday">Monday: {getScreenSize()} <span className="hours">{ data.allMarkdownRemark.edges[0].node.frontmatter.monday }</span></li>
                <li className="border-b border-grey-dark py-2" id="tuesday">Tuesday: {getScreenSize()} <span className="hours">{ data.allMarkdownRemark.edges[0].node.frontmatter.tuesday }</span></li>
                <li className="border-b border-grey-dark py-2" id="wednesday">Wednesday: {getScreenSize()} <span className="hours">{ data.allMarkdownRemark.edges[0].node.frontmatter.wednesday }</span></li>
                <li className="border-b border-grey-dark py-2" id="thursday">Thursday: {getScreenSize()} <span className="hours">{ data.allMarkdownRemark.edges[0].node.frontmatter.thursday }</span></li>
                <li className="border-b border-grey-dark py-2" id="friday">Friday: {getScreenSize()} <span className="hours">{ data.allMarkdownRemark.edges[0].node.frontmatter.friday }</span></li>
                <li className="py-2" id="saturday">Saturday: {getScreenSize()} <span className="hours">{ data.allMarkdownRemark.edges[0].node.frontmatter.saturday }</span></li>
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