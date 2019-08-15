import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavWrapper = styled.nav`
  width: 100%;
  position: fixed;
  background-color: #2e3031;
  opacity: 0.9;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  list-style-type: none;
  padding: 0 1rem;

  @media (max-width: 900px) {
    justify-content: space-around;
  }
`;
const NavItem = styled.li`
  font-weight: 600;
  font-size: 18px;
  font-family: 'Raleway';
`;

const NavPadding = styled.div`
  display: block;
  width: 100%;
  height: 65px;
`;

const Nav = () => {
  return (
    <React.Fragment>
      <NavWrapper>
        <NavList>
          <Link to="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link to="/clients">
            <NavItem>Clients</NavItem>
          </Link>
          <Link to="/about">
            <NavItem>About</NavItem>
          </Link>
          <Link to="/contact">
            <NavItem>Contact</NavItem>
          </Link>
          <Link to="/rates">
            <NavItem>Rates</NavItem>
          </Link>
        </NavList>
      </NavWrapper>
      <NavPadding />
    </React.Fragment>
  );
};

export default Nav;
