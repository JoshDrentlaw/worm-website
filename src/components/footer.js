import React from "react"

import styled from "styled-components";
import tw from "tailwind.macro";

const Container = styled.footer`
    ${tw`mt-4 p-4 text-center`}
    background-color: #4fa132;
    grid-area: footer;
`

const Footer = () => (
    <Container>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
        {` `}
        by{` `}
        <a href="https://joshdrentlaw.com" target="_blank" rel="noopener noreferrer">&lt;jdwd&gt;</a>
    </Container>
)

export default Footer