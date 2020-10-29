import React, { Component } from 'react'

function ChildComponent (props){
    return(
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    )
}
export default ChildComponent  