import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

const NavContainer = styled.nav`
    ${tw`bg-light-brown px-2 py-px sticky z-10 font-bold text-left text-white text-3xl`}
    top: 0;
    grid-area: nav;

    .active {
        ${tw`text-buy`}
    }
`

const Nav = () => (
    <NavContainer id="nav">
        <Link activeClassName="active" className="text-white mr-4 no-underline" to="/">Home</Link>
        <Link activeClassName="active" className="text-white no-underline" to="/about/">About</Link>
    </NavContainer>
)

export default Nav
