import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : 'hello'
        }
    }

    // clickHandler(){
    //     this.setState({
    //         message:'goodbye'
    //     })
    // }

    clickHandler = () =>{
        this.setState({
            message: 'Goooooodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={ ()=> this.clickHandler()}>then click</button> */}
                <button onClick={this.clickHandler}>then Click</button>
            </div>
        )
    }
}
