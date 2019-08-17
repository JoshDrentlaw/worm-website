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
            allSanityHours(sort: {fields: dayOrder, order: ASC}) {
                edges {
                    node {
                        day
                        close
                        open
                        id
                    }
                }
            }
        }
    `)

    const hours = data.allSanityHours.edges

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

    const days = hours.map(({ node }) => (
        <ListItem id={node.day} key={node.id}>{`${node.day}:`} {addBreak()} {`${node.open} - ${node.close}`}</ListItem>
    ))

    return (
        <Container id="hours">
            <H2>Hours for Delivery</H2>
            <List id="weekdays">
                {days}
            </List>
        </Container>
    )
}

export default Hours