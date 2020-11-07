import React, { useState } from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Element } from "react-scroll";
import { elastic as Menu } from "react-burger-menu";

function Nav() {

    const [isOpen, toggleIsOpen] = useState(false);

    return ( <div>
        <header>
          <Router id="outer-container">
            <MDBNavbar
              className="myNavBar"
              fixed="top"
              dark
              scrolling
              transparent
            >
              <MDBNavbarBrand href="/">
                <img
                  src={require("../images/logo.png")}
                  className="fluid logo_img"
                  alt="logo"
                />
              </MDBNavbarBrand>
              <Menu
                right
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
                isOpen={isOpen}
              >
                {/* <main id="page-wrap"> */}
                <Link
                  to="Welcome"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    toggleIsOpen(true);
                    toggleIsOpen(false);
                  }}
                >
                  <a id="home" className="aTag" href="/">
                    Home
                  </a>
                </Link>
                <Link
                  to="AboutMe"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    toggleIsOpen(true);
                    toggleIsOpen(false);
                  }}
                >
                  <a id="about" className="aTag" href="/">
                    About Me
                  </a>
                </Link>
                <Link
                  to="Portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    toggleIsOpen(true);
                    toggleIsOpen(false);
                  }}
                >
                  <a id="Portfolio" className="aTag" href="/">
                  Portfolio
                  </a>
                </Link>
                <Link
                  to="Skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    toggleIsOpen(true);
                    toggleIsOpen(false);
                  }}
                >
                  <a id="Skills" className="aTag" href="/">
                    Skills
                  </a>
                </Link>
                <Link
                  to="Recom"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    toggleIsOpen(true);
                    toggleIsOpen(false);
                  }}
                >
                  <a id="Recom" className="aTag" href="/">
                  recommendation
                  </a>
                </Link>
                <Link
                  to="ContactMe"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    toggleIsOpen(true);
                    toggleIsOpen(false);
                  }}
                >
                  <a id="contact" className="aTag" href="/">
                    Contact Me
                  </a>
                </Link>
  
                {/* </main> */}
              </Menu>
            </MDBNavbar>
          </Router>
        </header>
      </div>
    )
}

export default Nav