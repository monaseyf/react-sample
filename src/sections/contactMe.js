import React, { Component } from 'react'
import { MDBInput, MDBContainer, MDBBtn, MDBRow, MDBCol } from 'mdbreact'
import ContactModal from '../components/contactModal'

export default class ContactMe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal2: false,
            name: null,
            email: null,
        }
    }

    toggleModal = () => {
        // if (this.state.modal2 == true) {
        //     this.setState({modal2 : false})
        // } else{
        //     this.setState({modal2 : true})
        // }
        this.setState({ modal2: !this.state.modal2 })
    }



    render() {
        return ( <
            div className = "section" >
            <
            MDBContainer >
            <
            MDBRow >
            <
            MDBCol lg = "12" >
            <
            MDBRow >
            <
            MDBCol >
            <
            p className = " sectionTitle h1-responsive font-weight-bold mb-4" > Contact Me < /p> < /
            MDBCol > <
            /MDBRow> <
            form >
            <
            MDBRow >
            <
            MDBCol lg = "6"
            md = "6"
            sm = "12" >
            <
            MDBInput label = "Your Name"
            id = "name"
            group type = "text"
            validate error = "wrong"
            success = "right"
            onChange = {
                (e) => { this.setState({ name: e.target.value }) }
            }
            /> < /
            MDBCol > <
            MDBCol lg = "6"
            md = "6"
            sm = "12" >
            <
            MDBInput label = "Your Email"
            id = "email"
            group type = "email"
            validate onChange = {
                (e) => { this.setState({ email: e.target.value }) }
            }
            /> < /
            MDBCol > <
            /MDBRow> <
            MDBRow >
            <
            MDBCol lg = "6"
            md = "6"
            sm = "12" >
            <
            MDBInput label = "Your Company"
            group type = "text"
            validate error = "wrong"
            success = "right" / >
            <
            /MDBCol> <
            MDBCol lg = "6"
            md = "6"
            sm = "12" >
            <
            MDBInput label = "Your Phone"
            group type = "text"
            validate / >

            <
            /MDBCol> < /
            MDBRow > <
            MDBRow >
            <
            MDBCol lg = "12" >
            <
            MDBInput label = "Message"
            group type = "text" > < /MDBInput> < /
            MDBCol > <
            MDBCol >
            <
            MDBBtn onClick = { this.toggleModal }
            onChange = { this.handdleChange } > Login < /MDBBtn> < /
            MDBCol > <
            /MDBRow> < /
            form > <
            /MDBCol> < /
            MDBRow >

            <
            ContactModal isOpen = { this.state.modal2 }
            toggleModal = { this.toggleModal }
            name = { this.state.name }
            email = { this.state.email }
            /> < /
            MDBContainer > <
            /div>
        )
    }
}