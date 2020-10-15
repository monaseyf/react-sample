import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
export default class ContactModal extends Component {
    render() {
        return ( <
            div >
            <
            MDBContainer >
            fgfg { /* <MDBBtn color="primary" onClick={this.props.toggleModal}>Medium modal</MDBBtn> */ } <
            MDBModal isOpen = { this.props.isOpen }
            toggle = { this.props.toggleModal } >
            <
            MDBModalHeader toggle = { this.props.toggleModal } > MDBModal title < /MDBModalHeader> <
            MDBModalBody >
            dear { " " + this.props.name }
            thanks
            for contacting me <
            /MDBModalBody> <
            MDBModalFooter >
            <
            MDBBtn color = "secondary"
            onClick = { this.props.toggleModal } > Close < /MDBBtn> <
            MDBBtn color = "primary" > Save changes < /MDBBtn> <
            /MDBModalFooter> <
            /MDBModal> <
            /MDBContainer> <
            /div>
        )
    }
}