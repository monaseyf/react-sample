import React, { useState } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
 MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

function Nav() {

     const [isOpen, toggleIsOpen] = useState(true);

    return ( 
        <Router>
        <MDBNavbar  dark expand="md"  className="myNavBar">
          <MDBNavbarBrand>
          <img
                src={require("../images/logo.png")}
                className="fluid logo_img"
                alt="logo"
              />
          </MDBNavbarBrand>
          <MDBNavbarToggler  onClick={() =>toggleIsOpen (!isOpen) }/>
          <MDBCollapse id="navbarCollapse3"  navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">About me</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Skills</MDBNavLink>
              </MDBNavItem>
              
            </MDBNavbarNav>
            <MDBNavbarNav right>
             
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    )
}

export default Nav