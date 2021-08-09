import React from "react"

import { NavLink } from "react-router-dom"
import styled from "styled-components"

import device from "../shared/devices"

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3rem;

  background-color: ${(props) => props.theme.bg};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  @media (${device.tablet}) {
    display: flex;
  }
`

Nav.Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.bg};

  &.active {
    left: 0;
  }

  & > *:not(:last-child) {
    margin-right: 2.2rem;
  }
`

Nav.Link = styled(NavLink)`
  color: ${(props) => props.theme.text.color};
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
`

const Navbar = () => {
  return (
    <Nav>
      <Nav.Menu>
        <Nav.Link to="/">Home</Nav.Link>
        <Nav.Link to="/blog">Blog</Nav.Link>
        <Nav.Link to="/tools">Tools</Nav.Link>
        <Nav.Link to="/contact">Contact</Nav.Link>
      </Nav.Menu>
    </Nav>
  )
}

export default Navbar