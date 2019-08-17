import React from "react"

import styled from "styled-components"

const Banner = styled.div`
    display: flex;
    grid-area: company;
    padding: 0.75rem;

    img {
        margin-right: 0.5rem;
    }
`

const CompanyContainer = styled.h1`
    font-family: hand;
    font-size: 6rem;
    font-weight: 700;
    line-height: 0.5;
    text-align: left;
    text-shadow: 0 0 1px black;
`

const Small = styled.p`
    font-size: 2.25rem;
    font-weight: 500;
`

const Company = () => (
    <Banner>
        <img src="https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/c_scale,w_125/c_crop,g_custom/v1554858410/SoCal%20Earth%20Farm/logo.png" alt="Bag of compost" />
        <CompanyContainer>
            SoCal{` `}
            <img id="worm" src="https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/c_scale,h_115/c_crop,g_custom/v1555129916/SoCal%20Earth%20Farm/wormm.png" alt="Cute hand drawn Earth Worm" />
            <br />Earth Farm
            <Small>By C. Alcaraz</Small>
        </CompanyContainer>
    </Banner>
)

export default Company
