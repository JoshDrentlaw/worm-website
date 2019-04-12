import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

const Banner = styled.div`
    ${tw`p-3 flex`}
    grid-area: company;
`

const CompanyContainer = styled.h1`
    ${tw`text-left text-8xl text-bold`}
    line-height: 0.5;
    text-shadow: 0 0 1px black;
`

const Small = styled.p`
    ${tw`font-medium text-4xl`}
`

const Company = () => (
    <Banner>
        <img src="https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/c_scale,w_125/v1554858410/SoCal%20Earth%20Farm/logo.png" alt="Bag of compost" />
        <CompanyContainer>SoCal<br />Earth Farm<Small>By C. Alcaraz</Small></CompanyContainer>
    </Banner>
)

export default Company