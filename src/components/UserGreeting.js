import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return this.state.isLoggedIn && <div>welcome mona</div>
        // return this.state.isLoggedIn ? (
        //     <div>welcome mona</div>
        // ) : (
        //     <div>i miss you amir reza</div>
        // )
//     let message 
//     if (this.state.isLoggedIn){
//         message = <div>Welcome Mona</div>
//     } else {
//         message = <div>i miss you my</div>
//     }

// return <div>{message}</div>

        // if (this.state.isLoggedIn){
        //     return <div>Welcome mona</div>
        // } else {
        //     return <div>i miss you my dear amirreza </div>
        // }
        // return (
        //     <div>
        //         <div>Welcome mona</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // );
    }
}

export default UserGreeting;