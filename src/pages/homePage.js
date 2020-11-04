import React from "react";
import Nav from "../components/Nav";
 import Welcome from '../sections/Welcome';
import ContactMe from '../sections/contactMe';
import Recommendation from '../sections/recommendation';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';
import Portfolio from '../sections/Portfolio';


const HomePage = props => {
    return ( < div >
        <Nav />
        <Welcome />
        <AboutMe />
        <Portfolio/>
        <ContactMe />
        <Recommendation />
        <Skills/>

        </div>

    )
}

export default HomePage