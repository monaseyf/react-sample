import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <section id = "portfolioSection" className = "section">
            <h1 className="sectionTitle">Portfolio</h1>
            <MDBRow style = {{ marginRight: "0px", marginLeft: "0px" } }>
                <MDBCol lg="3" md="6" sm="12" style = {{ padding: "0px" } }>
                    <Link to="/arch">
                        <div className="categoryContainer"
                            style={{
                                backgroundImage: `url(${require("../images/porfolio/5.jpg")})`,
                                backgroundPosition: `Right Center`}}>
                                <h3 className = "categoryTitle">Architectural Projects</h3> 
                        </div>
                    </Link>
                </MDBCol>
            </MDBRow>
        </section>
    )
}

export default Portfolio
