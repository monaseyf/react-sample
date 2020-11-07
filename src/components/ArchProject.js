import React from 'react';
import { MDBAnimation } from "mdbreact";
import { Link } from "react-router-dom";

const ArchProject =({title, location, date, img, linkTo, delay}) => {
    return (
        <MDBAnimation className = "archProject"
        type ="fadeInDown" duration ="1200ms"
        delay ={delay}>
            <Link to ={ linkTo }>
                <div className = "archProjectContainer"
                style ={
                    {backgroundImage: `url(${img})`}
                }>
                <img src ={ img }className = "archPhoto"
                alt = "/"></img>
                <div className = "dataContainer">
                    <h4 className = "archProjectLabel">Title:</h4>
                    <p className = "archProjectInfo"> { title }</p>
                    <h4 className = "archProjectLabel" > Location: </h4> 
                    <p className = "archProjectInfo" > { location } </p> 
                    <h4 className = "archProjectLabel" > Date: </h4> 
                    <p className = "archProjectInfo" > { date } </p> 
                </div>
                </div>
            </Link>
        </MDBAnimation>
    );
}

export default ArchProject;