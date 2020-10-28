import React from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            commnts: ''.
            topic: 'choose one'
        }
        handleUser = (event) => {
            this.setState({
                username: event.target.value
            })
        }
        handleCommnt = (event) => {
            this.setState({
                commnts: event.target.value
            })
        }
        handleTopic = (event) => {
            this.setState({
                topic: event.target.value
            })
        }

        handleSubmit = event => {
            alert(`${this.state.username}${this.state.commnts}${this.state.topic}`)
            event.preventDefault()
        }
    }
    render() {
        return ( <
            form onSubmit = { this.handleSubmit } >
            <
            div >
            <
            label > Username < /label> <
            input type = "text"
            value = { this.state.username }
            onChange = { this.handleUser }
            />  <
            div >
            <
            label > Comments < /label> <
            textarea value = { this.state.commnts }
            onChange = { this.handleCommnt }
            />  < /
            div >

            <
            label > Topic < /label> <
            select value = { topic }
            onChange = { this.handleTopic } >
            <
            option value = { React } > React < /option> <
            option value = { Vue } > Vue < /option> <
            option value = { Angular } > Angular < /option> < /
            select > <
            button type = { submit } > Submit < /button> < /
            div >

            <
            /
            form >
        );
    }
}