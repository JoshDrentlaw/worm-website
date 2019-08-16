import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"
import tw from "tailwind.macro"

const NavContainer = styled.nav`
    ${tw`px-2 py-3 sticky z-10 font-bold text-left text-white text-3xl`}
    background-color: #4fa132;
    top: 0;
    grid-area: nav;

    .active {
        color: white;
    }
`

const Nav = () => (
    <NavContainer id="nav">
        <Link activeClassName="active" className="text-white mr-4 no-underline" to="/">Home</Link>
        <Link activeClassName="active" className="text-white no-underline" to="/about/">About</Link>
    </NavContainer>
)

export default Nav
