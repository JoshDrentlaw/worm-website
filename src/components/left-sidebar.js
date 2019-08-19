import React from 'react'

import styled from "styled-components"

import Twitter from '../assets/svg/twitter.inline.svg'
import Instagram from '../assets/svg/instagram.inline.svg'
import Facebook from '../assets/svg/facebook.inline.svg'

const Left = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: left;
    padding: 0.5rem;
    width: auto;
`

const SocialContainer = styled.div`
    position: sticky;
    top: 67px;
`

const SocialBtn = styled.button`
    background-color: #00000000;
    border: 5px solid #9a7f60;
    border-radius: 5px;
    margin-bottom: 0.5rem;
    padding: 0;
    width: 40px; height: 40px;

    @media(min-width: 1024px) {
        width: 50px; height: 50px;
    }
`

const SocialLink = styled.a`
    color: #4d3c28;
    width: 100%; height: 100%;

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