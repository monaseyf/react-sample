import React, { Component } from 'react'



export default class Message extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: ' Welcome everyone',
            count: 0
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    increment() {
        this.setState({
                count: this.state.count + 1
            },
            () => {
                console.log('Callback Value', this.state.count)
            }
        )
    }

    render() {
        return (
        <div>

            < h1 > { this.state.message } </h1> 
            <button onClick = {
                () => this.changeMessage()
            } > Subscribe </button>

            <h2> increment { this.state.count } </h2> <button onClick = {
                () => this.increment()
            } > increment </button> </div >
        )
    }
}