import React from "react"

import { Link } from "gatsby"
import styled from "styled-components"

import device from "../shared/devices"

const Navbar = () => {
  return (
    <Nav>
      <Nav.Menu>
        <Nav.Link to="/" activeClassName="active">
          About
        </Nav.Link>
        <Nav.Link to="/blog" activeClassName="active" partiallyActive={true}>
          Blog
        </Nav.Link>
        <Nav.Link to="/tools" activeClassName="active">
          Tools
        </Nav.Link>
        {/* <Nav.Link to="/contact">Contact</Nav.Link> */}
      </Nav.Menu>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3rem;

  background-color: ${(props) => props.theme.primary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

Nav.Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 800px;

  /* & > *:not(:last-child) {
    margin-right: 2.2rem;
  } */
`

Nav.Link = styled(Link)`
  color: ${(props) => props.theme.text.muted};

  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;

  transition: color 0.15s;

  &.active {
    color: ${(props) => props.theme.text.light};
  }

  &:hover {
    color: ${(props) => props.theme.text.light};
  }
`
