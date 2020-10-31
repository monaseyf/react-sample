import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import Typing from "react-typing-animation";

const Welcome = () => {
    return (
        <div style={{ backgroundImage: `url(require("../images/blackBackMona2.jpg"))` }}>
            <MDBAnimation type="fadeIn" duration="1s">
                <div className="overlay" />
                <section id="welcome"   className="section">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol lg="6" style={{ paddingTop: "120px" }}>
                        <div className="titleBack">
                        <Typing startDelay={1500} className="z5">
                            <h1 className="welcome-h1">Hello 
                            <span className="distinct-color">& Welcome</span>
                            </h1>
                        </Typing>
                        <Typing startDelay={2500} className="z5">
                            <h2 className="name-h2">
                                I am <span className="distinct-color">Mona</span> Seyf
                            </h2>
                            </Typing>
                            <Typing startDelay={4000} className="z5">
                            <h3 className="pro-h3">
                                An Architect & a <span className="distinct-color">UI/UX</span>{" "}
                                designer
                            </h3>
                        </Typing>
                    </div>
                        </MDBCol>
                        <MDBAnimation reveal
                type="fadeInDown"
                duration="1500ms"
                delay="5000ms"
                className="icon-scroll"
                >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                </MDBAnimation>
                    </MDBRow>
                </MDBContainer>
              
                </section>
                
            </MDBAnimation>
        </div>
    );
};

export default Welcome;