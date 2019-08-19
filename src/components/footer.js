import React from "react"

import styled from "styled-components";

const Container = styled.footer`
    background-color: #4fa132;
    grid-area: footer;
    text-align: center;
    margin-top: 1rem;
    padding: 1rem;

    a {
        color: white;
    }
`

const Footer = () => (
    <Container>
        C. Alcaraz © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
        {` `}
        by{` `}
        <a href="https://joshdrentlaw.com" target="_blank" rel="noopener noreferrer">Josh Drentlaw Web Design</a>
    </Container>
)

export default Footer