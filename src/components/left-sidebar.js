import React from 'react'

import styled from "styled-components"
import tw from "tailwind.macro"

import Twitter from '../assets/svg/twitter.inline.svg'
import Instagram from '../assets/svg/instagram.inline.svg'
import Facebook from '../assets/svg/facebook.inline.svg'

const Left = styled.div`
    ${tw`flex flex-col w-lg-social p-2`}
    grid-area: left;
`

const SocialContainer = styled.div`
    ${tw`sticky`}
    top: 67px;
`

const SocialBtn = styled.button`
    ${tw`mb-2 border-0 w-sm-social xl:w-lg-social h-sm-social xl:h-lg-social`};
    background-color: #4fa132;
    border-radius: 5px;
`

const SocialLink = styled.a`
    ${`w-full h-full`};
    color: white;

    &:visited {
        color: #2d5f2d;
    }
`

const LeftSidebar = () => (
    <Left>
        <SocialContainer>
            <SocialBtn id="facebook-btn"><SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook fill="currentColor" />
            </SocialLink></SocialBtn>
            <SocialBtn id="twitter-btn"><SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter fill="currentColor" />
            </SocialLink></SocialBtn>
            <SocialBtn id="instagram-btn"><SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram fill="currentColor" />
            </SocialLink></SocialBtn>
        </SocialContainer>
    </Left>
)

export default LeftSidebar