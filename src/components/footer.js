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

    .lineBreak {
        display: inline;

        @media(min-width: 1024px) {
            display: none;
        }
    }
`

const Footer = () => (
    <Container>
        C. Alcaraz © {new Date().getFullYear()},
        {` `}
        <br className="lineBreak" />Built by
        {` `}
        <a href="https://joshdrentlaw.com" target="_blank" rel="noopener noreferrer">Josh Drentlaw Web Design</a>
    </Container>
)

export default Footer