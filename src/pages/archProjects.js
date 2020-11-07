import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBAnimation,
} from "mdbreact";
import ArchProject from "../components/ArchProject";
import Typing from 'react-typing-animation';

function archProjects(props) {
    return (
        <div id="architecture">
            <MDBNavbar color="myNavBar"
            fixed="top" dark scrolling >
            <MDBNavbarBrand href = "/" >
                <img src = { require("../images/logo.png") }
                className = "fluid logo_img"
                alt = "logo" />
            </MDBNavbarBrand>
            <Typing speed= { 100 } cursor= { null }>
                <h4 className = "sectionTitle"
                style = {
                    { marginTop: "15px" } }>Arch Projects</h4>
            </Typing>
            </MDBNavbar>
            <MDBContainer style ={{paddingTop : "120px"}}>
                <MDBAnimation type ="fadeInDown" duration = "1200ms">
                    <MDBRow>
                        <MDBCol  lg = "12"
                            className = "archProjectContainer">
                                <p className = "archProjectInfo">
                                If you like to checkout my whole architectural project, you can download it here. 
                                </p>
                                <MDBBtn className = "cvBtn"
                                outline color = "white"
                                href = "http://monaseyf.ir/portfolio.pdf"
                                target = "_blank">
                                    Portfolio
                                </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBAnimation>
                    <ArchProject
                    img = { require("../images/Arch/2.jpg")}
                    title = "Residential And Cultural Complex with the approach in contextual architecture"
                    location = "Qeshm Island,Iran"
                    date = "June-2019"
                    delay = "0ms"
                    />
                    <ArchProject
                    img = { require("../images/Arch/11.jpg") }
                    title = "Iranian Art Musuem"
                    location = "Kargar St. Tehran, Iran"
                    date = "April-2018"
                    delay = "500ms"
                    />
                    <ArchProject
                     img = { require("../images/Arch/17.jpg") }
        title = "Residential complex with the approach in enhancement of social intractions in public spaces"
        location = "Golha Boulevard. Tehran "
        date = "April-2019"
        delay = "1000ms"/>
            </MDBContainer>
        </div>
    );
}

export default archProjects;