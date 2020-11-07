import React from "react";
import Nav from "../components/Nav";
 import Welcome from '../sections/Welcome';
import ContactMe from '../sections/contactMe';
import Recommendation from '../sections/recommendation';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';
import Portfolio from '../sections/Portfolio';
import { Element } from "react-scroll";

const HomePage = props => {
    return ( < div >
        <Nav />
     
    <Element name="Welcome">
        <Welcome />
      </Element>
      <Element name="AboutMe">
        <AboutMe />
      </Element>
      <Element name="Portfolio">
        <Portfolio />
      </Element>
      <Element name="Skills">
        <Skills />
      </Element>
      <Element name="Recom">
        <Recommendation />
      </Element>
      <Element name="ContactMe">
        <ContactMe />
      </Element>
        </div>

    )
}

export default HomePage