import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBAnimation } from "mdbreact";

function AboutMe() {

    const [activeSegment, setActiveSegment] = useState("1");
    const toggleSegment = (segment) => {
        if (segment !== activeSegment) {
            setActiveSegment(segment);
        }
    };

    return (
        
             <section id="aboutMeSection" className="section"
            style={
                { backgroundImage: `url(${require("../images/aboutMe/" +
                activeSegment +
                ".jpg")})`,}
            }
        >
            <div className = "aboutMeOverlay" />
            <h1 className="sectionTitle"
            style = {
                    { position: "absolute", width: "100%" }}>
                About Me</h1>
            <div className = "marginTop"/>
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg = "4" md = "4" sm = "12">
                        {
                        activeSegment === "1" ? (
                            <h4 className = "segmentTitle activeSegmentTitle"
                            onMouseOver = {
                                () => {
                                    toggleSegment("1");
                                }
                            } >
                            B.Sc.In Architecture </h4>
                        ) : (
                                <h4 className = "segmentTitle"
                            onMouseOver = {
                                () => {
                                    toggleSegment("1");
                                }
                            } >
                            B.Sc.In Architecture </h4>
                        )
                        }
                        {
                            activeSegment === "2" ? (
                                <h4 className = "segmentTitle activeSegmentTitle"
                                onMouseOver = {
                                    () => {
                                        toggleSegment("2");
                                    }
                                }
                                >Ui/Ux Design</h4>
                            ) : (
                                    <h4 className = "segmentTitle"
                                    onMouseOver = {
                                        () => {
                                            toggleSegment("2");
                                        }
                                    }
                                    >Ui/Ux Design</h4>
                            )
                        }
                        {
                            activeSegment === "3" ? (
                                <h4 className="segmentTitle activeSegmentTitle"
                                onMouseOver = {
                                    () => {
                                        toggleSegment("3");
                                    }
                                }> 
                                    Other Expriences
                                </h4>
                            ) : (
                                <h4 className="segmentTitle "
                                onMouseOver = {
                                    () => {
                                        toggleSegment("3");
                                    }
                                }> 
                                    Other Expriences
                                </h4> 
                           )
                        }
                    </MDBCol>
                    <MDBCol lg="8" md="8" sm="12">
                        {
                            activeSegment === "1" ? (
                                <p className = "descriptionP">
                                Managed to graduate from University of Science and Culture with < b > GPA of 17.94 / 20 </b> in 4 years. <br/>
                                Within the top 10 % of the architecture department. < br />
                                Awarded from the head of Architecture Department as being a member of Architecture Students Union Committee 
                                </p>
                            ) : activeSegment === "2" ? (
                                    <p className="descriptionP">
                                        Working in Rayan Pajouh Salamat company as a Ui / Ux designer and software tester.I have learned many things
                                        here especially how to communicate with client and be patient in my way 
                                    </p>
                                ) : activeSegment === "3" ? (
                                        <p className="descriptionP">
                                            Was coach of student organizations for their summer camps in
                                            Ramsar, Iran.(From secondary schools in district five,
                                                Tehran.) < br />
                                            Taught English in two institutes in Tehran.
                                       </p> 
                            ) : (
                                < MDBAnimation reveal type = "fadeInUp"
                                    duration = "1000ms"
                                    className = "descriptionContainer" >
                                    <div className = "marginTop" /> 
                                    <p className="descriptionP">
                                    </p>
                                </MDBAnimation>
                            )
                        }
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    
       
    )
}

export default AboutMe
