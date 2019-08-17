import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"

const NavContainer = styled.nav`
    background-color: #4fa132;
    color: white;
    font-size: 1.875rem;
    font-weight: 700;
    text-align: left;
    grid-area: nav;
    padding: 0.75rem 0.5rem;
    position: sticky;
    top: 0;
    z-index: 10;

    .active {
        color: white;
    }
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-right: 1rem;

    &:last-child {
        margin-right: 0;
    }
`

const Nav = () => (
    <NavContainer id="nav">
        <StyledLink activeClassName="active" to="/">Home</StyledLink>
        <StyledLink activeClassName="active" to="/faq/">FAQ</StyledLink>
    </NavContainer>
)

export default Nav
