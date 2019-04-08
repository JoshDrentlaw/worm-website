import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"
import '../global.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons"

const Head = styled.header`
    ${tw`bg-bg`}
    font-family: 'Naomis Hand';
`

const Banner = styled.div`
    ${tw`p-3 flex`}
`

const Company = styled.h1`
    ${tw`text-left text-8xl text-bold`}
    line-height: 0.5;
    text-shadow: 0 0 1px black;
`

const Small = styled.p`
    ${tw`font-medium text-4xl`}
`

const Nav = styled.nav`
    ${tw`bg-light-brown px-2 py-px`}
`

const Sidebar = styled.div`
    ${tw`flex flex-col relative w-lg-social`}
    top: 10px;
    left: 10px;
`

const SocialBtn = styled.button`
    ${tw`mb-2 border-0 w-sm-social xl:w-lg-social h-sm-social xl:h-lg-social`};

    &#facebook-btn {
        ${tw`bg-fb-blue`}

        & #facebook-i {
            position: relative;
            left: 5px;
            top: 5px;
        }
    }

    &#twitter-btn {
        ${tw`bg-twitter-blue`}
    }

    &#instagram-btn {
        background-image: linear-gradient(45deg, orange, red, purple)
    }
`

const SocialLink = styled.a`
    ${`w-full h-full`};

    &:visited {
        color: #2d5f2d;
    }
`

const FaIcon = styled(FontAwesomeIcon)`
    ${tw`text-white text-sm-i xl:text-lg-i`}
`

const Header = ({ siteTitle }) => (
    <Head>
        <Banner>
            <img className="w-32 h-32 mr-2 bg-white" />
            <Company>SoCal<br />Dirt Farm<Small>By Citlalli Jasmin Alcaraz Pina</Small></Company>
        </Banner>
        <Nav id="nav">
            <Link className="font-bold text-left text-white text-5xl mr-4 no-underline" to="/">Home</Link>
            <Link className="font-bold text-left text-white text-5xl no-underline" to="/about/">About</Link>
        </Nav>
        <Sidebar>
            <SocialBtn id="facebook-btn"><SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaIcon icon={faFacebookF} id="facebook-i"></FaIcon>
            </SocialLink></SocialBtn>
            <SocialBtn id="twitter-btn"><SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaIcon icon={faTwitter}></FaIcon>
            </SocialLink></SocialBtn>
            <SocialBtn id="instagram-btn"><SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaIcon icon={faInstagram}></FaIcon>
            </SocialLink></SocialBtn>
        </Sidebar>
    </Head>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
