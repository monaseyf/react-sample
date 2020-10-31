import React from "react";
import Nav from "../components/Nav";
import Welcome from '../sections/Welcome';
import ContactMe from '../sections/contactMe';
import Recommendation from '../sections/recommendation';


const HomePage = props => {
    return ( <div className = "section">
        <Nav/>
        
        <Welcome/>
        <ContactMe />
        <Recommendation />
        
        </div>

    )
}

export default HomePage