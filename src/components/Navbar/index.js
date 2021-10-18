import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import Logo from '../../images/logo.svg'

const Navbar = () => {
  return (
    <>
      <Nav >
        <NavLink to='/'>
          <img src={Logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            FAQS
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Pricing
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Testimonials
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          <NavBtnLink to='/signin' Style={'border: 4px solid #BA55D3;'}>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
