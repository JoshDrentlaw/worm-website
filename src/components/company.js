import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

const Banner = styled.div`
    ${tw`p-3 flex`}
    grid-area: company;
`

const CompanyContainer = styled.h1`
    ${tw`text-left text-8xl text-bold font-hand`}
    line-height: 0.5;
    text-shadow: 0 0 1px black;
`

const Small = styled.p`
    ${tw`font-medium text-4xl`}
`

const Company = () => (
    <Banner>
        <img className="mr-2" src="https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/c_scale,w_125/c_crop,g_custom/v1554858410/SoCal%20Earth%20Farm/logo.png" alt="Bag of compost" />
        <CompanyContainer>
            SoCal{` `}
            <img id="worm" src="https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/c_scale,h_115/c_crop,g_custom/v1555129916/SoCal%20Earth%20Farm/wormm.png" alt="Cute hand drawn Earth Worm" />
            <br />Earth Farm
            <Small>By C. Alcaraz</Small>
        </CompanyContainer>
    </Banner>
)

export default Company
