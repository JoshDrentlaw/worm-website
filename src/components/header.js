import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"
import '../global.css'

const Head = styled.header`
    font-family: 'Naomis Hand';
    grid-area: header;
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
    ${tw`bg-light-brown px-2 py-px sticky`}
`

const Header = ({ siteTitle }) => (
    <Head>
        <Banner>
            <img src="https://res.cloudinary.com/josh-drentlaw-web-development/image/upload/v1554858410/SoCal%20Earth%20Farm/logo.png" alt="Bag of compost" className="w-32 h-32 mr-2" />
            <Company>So Cal<br />Earth Farm<Small>By C. Alcaraz</Small></Company>
        </Banner>
        <Nav id="nav">
            <Link className="font-bold text-left text-white text-5xl mr-4 no-underline" to="/">Home</Link>
            <Link className="font-bold text-left text-white text-5xl no-underline" to="/about/">About</Link>
        </Nav>
    </Head>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
