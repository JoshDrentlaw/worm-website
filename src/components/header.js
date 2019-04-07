import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons"

const Nav = styled.nav`
    ${tw`bg-light-brown p-2 sticky`}
`

const Sidebar = styled.nav`
    ${tw`flex flex-col`}
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 100;
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
    <Nav id="nav">
        <Link className="font-bold text-left text-buy mb-2 no-underline" to="/">Home</Link>
        <Link className="font-bold text-left text-buy mb-4 no-underline" to="/about/">About</Link>
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
    </Nav>
    
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
