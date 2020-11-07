import React, { useState } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBNavbar,
    MDBNavbarBrand,
    MDBModal,
    MDBModalBody,
} from "mdbreact";
import Typing from "react-typing-animation";

const otherProjects = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [images, setImages] = useState ([
        {
            src: require("../images/Art/1.jpg"),
            categoryCode: 2,
        },
        {
            src: require("../images/Art/2.jpg"),
            categoryCode: 2,
        },
        {
            src: require("../images/Art/3.jpg"),
            categoryCode: 3,
        },
        {
            src: require("../images/Art/4.jpg"),
            categoryCode: 3,
        },
        {
            src: require("../images/Art/5.jpg"),
            categoryCode: 3,
        },
        {
            src: require("../images/Art/6.jpg"),
            categoryCode: 3,
        },

        {
            src: require("../images/Art/10.jpg"),
            categoryCode: 1,
        },
        {
            src: require("../images/Art/11.jpg"),
            categoryCode: 1,
        },
        {
            src: require("../images/Art/12.jpg"),
            categoryCode: 1,
        },
        {
            src: require("../images/Art/14.jpg"),
            categoryCode: 1,
        },
        {
            src: require("../images/Art/7.jpg"),
            categoryCode: 2,
        },
        {
            src: require("../images/Art/8.jpg"),
            categoryCode: 2,
        },
    ]);
    const [isModalOpen, toggleModal] = useState(false);
    const [activePhoto, setActivePhoto] = useState(null);
    return (
        <div>
             <MDBNavbar color = "myNavBar"
        fixed = "top"
        dark scrolling transparent >
        <MDBNavbarBrand href = "/" >
        <img src = { require("../images/logo.png") }
        className = "fluid logo_img"
        alt = "logo" />
        </MDBNavbarBrand> 
        <Typing speed = { 100 }
        cursor = { null } >
        <h3 className = "sectionTitle"
        style = {
            { marginTop: "15px" } } >
        Artistic Works </h3> 
        </Typing> 
        </MDBNavbar>

        <MDBContainer style = {
            { paddingTop: "120px" } }>
                <div>
                    {
                        activeCategory === 0 ? (
                            <p className = "otherProjectsParagraph">
                                Doing artistic work gives me a great deal of pleasure.
                            </p>
                        ): activeCategory === 1 ? (
                            <p className = "otherProjectsParagraph" >
                            These are some of my handmade posters which demonstrate a special meaning. </p> 
                        ): activeCategory === 2 ? (
                            <p className = "otherProjectsParagraph" >
                            I love to express my imagination in sketches and drawings. </p>
                        ): (
                            <p className = "otherProjectsParagraph" >
                            It was a group project to design an intractive space.A performance was also design
                            to disoriented the meaning of human body </p>
                        )
                    }

                    <MDBRow>
                        <mdbCol lg="3" md ="3" sm ="12">
                            {
                                activeCategory === 0 ? (
                                    <div className="otherProjectsCategory" 
                                    onClick = { () =>{
                                        setActiveCategory(0);
                                    }}>
                                        <p className = "otherProjectsCategoryTitle activeOtherProjectsCategoryTitle"> 
                                         All</p>
                                    </div>
                                ): <div onClick ={
                                    () => {
                                        setActiveCategory(0);
                                    }
                                }>
                                    <p className = "otherProjectsCategoryTitle" > All </p>
                                </div>
                            }
                        </mdbCol>
                        <mdbCol lg="3" md ="3" sm ="12">
                            {
                                activeCategory === 1 ? (
                                    <div className="otherProjectsCategory" 
                                    onClick = { () =>{
                                        setActiveCategory(1);
                                    }}>
                                        <p className = "otherProjectsCategoryTitle activeOtherProjectsCategoryTitle"> 
                                        Posters</p>
                                    </div>
                                ): <div onClick ={
                                    () => {
                                        setActiveCategory(1);
                                    }
                                }>
                                    <p className = "otherProjectsCategoryTitle" > Posters </p>
                                </div>
                            }
                        </mdbCol>
                        <mdbCol lg="3" md ="3" sm ="12">
                            {
                                activeCategory === 2 ? (
                                    <div className="otherProjectsCategory" 
                                    onClick = { () =>{
                                        setActiveCategory(2);
                                    }}>
                                        <p className = "otherProjectsCategoryTitle activeOtherProjectsCategoryTitle"> 
                                        Drawings</p>
                                    </div>
                                ): <div onClick ={
                                    () => {
                                        setActiveCategory(2);
                                    }
                                }>
                                    <p className = "otherProjectsCategoryTitle" > Drawings </p>
                                </div>
                               
                            }
                        </mdbCol>
                        <mdbCol lg="3" md ="3" sm ="12">
                            activeCategory === 3 ? (
                                <div className="otherProjectsCategory" 
                                    onClick = { () =>{
                                        setActiveCategory(3);
                                    }}>
                                        <p className = "otherProjectsCategoryTitle activeOtherProjectsCategoryTitle"> 
                                        Installation Art</p>
                                    </div>
                                ): <div onClick ={
                                    () => {
                                        setActiveCategory(3);
                                    }
                                }>
                                    <p className = "otherProjectsCategoryTitle" > Installation Art </p>
                                </div>
                            )
                        </mdbCol>
                    </MDBRow>
                </div>
                <MDBRow style = {
                    { paddingTop: "30px", paddingBottom: "30px" } }>{
                        images.map((img) => 
                        activeCategory === 0 || img.ategoryCode === activeCategory ? (
                            < MDBCol lg = "4" md = "4" sm = "12" >
                                <div className = "otherProjectsImageContainer"
                                 onClick = {
                                    () => {
                                        setActivePhoto(img);
                                        toggleModal(true);
                                    }
                                } >
                                    <img className="otherProjectImage" src = {img.src}  alt = "/" />
                                </div>
                                </ MDBCol>
                        ): null
                        )
                    }
                    </MDBRow>
        </MDBContainer>
       
        </div>
    );
}

export default otherProjects;