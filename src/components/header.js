import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
//import tw from "tailwind.macro"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons"

const SocialBtn = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    margin-bottom: 0.5em;
    background-color: white;
`

const SocialLink = styled.a`
    width: 100%;
    height: 100%;
`

const FaIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 30px;
`

const Header = ({ siteTitle }) => (
    <nav id="nav">
        <Link className="font-bold text-left mb-2" to="/">Home</Link>
        <Link className="font-bold text-left mb-4" to="/about/">About</Link>
        <SocialBtn id="twitter-btn"><SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaIcon icon={faTwitter}></FaIcon>
        </SocialLink></SocialBtn>
        <SocialBtn id="instagram-btn"><SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaIcon icon={faInstagram}></FaIcon>
        </SocialLink></SocialBtn>
        <SocialBtn id="facebook-btn"><SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaIcon icon={faFacebookF} id="facebook-i"></FaIcon>
        </SocialLink></SocialBtn>
    </nav>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
