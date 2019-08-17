import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

const Container = styled.section`
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid #8795a1;
    border-radius: 0.25rem;
    text-align: center;
    margin-top: 1rem;
`

const H2 = styled.h2`
    border-bottom: 1px solid #8795a1;
    font-family: hand;
    font-size: 7rem;
    line-height: 60px;
    padding: 1rem 1rem 1.5rem;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    font-size: 1.5rem;

    .today {
        color: white;
        background-color: #5f8b53;
    }
`

const ListItem = styled.li`
    border-bottom: 1px solid #8795a1;
    padding: 0.5rem 0;

    &:last-child {
        border-bottom: none;
    }
`

const Hours = () => {
    const data = useStaticQuery(graphql`
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
    `)

    const hours = data.allMarkdownRemark.edges[0].node.frontmatter;

    const highlightToday = () => {
        let weekday = new Date().getDay();
        const weekdays = document.getElementById('weekdays').children;
        weekdays.item(weekday).classList.add('today');
    }

    const addBreak = () => {
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
            <H2>Hours for Delivery</H2>
            <List id="weekdays">
                <ListItem id="sunday">Sunday: {addBreak()} <span>{ hours.sunday }</span></ListItem>
                <ListItem id="monday">Monday: {addBreak()} <span>{ hours.monday }</span></ListItem>
                <ListItem id="tuesday">Tuesday: {addBreak()} <span>{ hours.tuesday }</span></ListItem>
                <ListItem id="wednesday">Wednesday: {addBreak()} <span>{ hours.wednesday }</span></ListItem>
                <ListItem id="thursday">Thursday: {addBreak()} <span>{ hours.thursday }</span></ListItem>
                <ListItem id="friday">Friday: {addBreak()} <span>{ hours.friday }</span></ListItem>
                <ListItem id="saturday">Saturday: {addBreak()} <span>{ hours.saturday }</span></ListItem>
            </List>
        </Container>
    )
}

export default Hours